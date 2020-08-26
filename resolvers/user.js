const { User } = require("../models");
const createTokens = require('../auth/createTokens')

module.exports = {
  Query: {
    users: async () => await User.find(),
    user: async (_, __, { req }) => {
      if (!req.user) return null
      return await User.findById(req.user.userId)
    }
  },
  Mutation: {
    createUser: async (_, { email, password }) => {
      const emailExists = await User.findOne({ email: email });
      if (emailExists) {
        throw Error("Username already exists");
      }
      const user = await User.create({ email, password });
      return user;
    },
    login: async (_, { email, password }, { res }) => {
      const user = await User.findOne({ email: email });
      if (!user || !(await user.matchesPassword(password))) {
        throw Error("Invalid username or password");
      }

      const tokens = createTokens(user)

      res.cookie("access-token", tokens.accessToken, { maxAge: 1000 });
      res.cookie("refresh-token", tokens.refreshToken, { maxAge: 10000 });

      return user
    }
  },
};

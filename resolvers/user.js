const { User } = require('../models')
const createTokens = require('../auth/createTokens')

module.exports = {
  Query: {
    users: async () => {
      const users = await User.find().populate({
        path: 'conversations',
        populate: {
          path: 'messages',
          model: 'Message'
        }
      })
      return users
    },
    user: async (_, __, { req }) => {
      if (!req.user) return null
      console.log(req.user.userId)
      return await User.findById(req.user.userId).populate({
        path: 'conversations',
        populate: {
          path: 'messages',
          model: 'Message'
        }
      })
    }
  },
  Mutation: {
    createUser: async (_, { email, password }) => {
      const emailExists = await User.findOne({ email: email })
      if (emailExists) {
        throw Error('Username already exists')
      }
      const user = await User.create({ email, password })
      const tokens = createTokens(user)
      res.cookie('access-token', tokens.accessToken, { maxAge: 1000 })
      res.cookie('refresh-token', tokens.refreshToken, { maxAge: 10000 })

      return user
    },
    login: async (_, { email, password }, { res }) => {
      const user = await User.findOne({ email: email })
      if (!user || !(await user.matchesPassword(password))) {
        throw Error('Invalid username or password')
      }

      const tokens = createTokens(user)

      res.cookie('access-token', tokens.accessToken, { maxAge: 1000 })
      res.cookie('refresh-token', tokens.refreshToken, { maxAge: 10000 })

      return user
    }
  }
}

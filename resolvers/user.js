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
    createUser: async (_, { email, password }, { res }) => {
      const emailExists = await User.findOne({ email: email })
      if (emailExists) {
        throw Error('Username already exists')
      }
      const user = await User.create({ email, password })
      const tokens = createTokens(user)

      res.cookie('access-token', tokens.accessToken, { maxAge: 1000 * 60 * 30 })
      res.cookie('refresh-token', tokens.refreshToken, {
        maxAge: 1000 * 60 * 60 * 24
      })

      return user
    },
    login: async (_, { email, password }, { res }) => {
      const user = await User.findOne({ email: email })
      if (!user || !(await user.matchesPassword(password))) {
        throw Error('Invalid username or password')
      }

      const tokens = createTokens(user)

      res.cookie('access-token', tokens.accessToken, { maxAge: 1000 * 60 * 30 })
      res.cookie('refresh-token', tokens.refreshToken, {
        maxAge: 1000 * 60 * 60 * 24
      })

      return user
    },
    logout: async (_, __, { res }) => {
      res.clearCookie('access-token')
      res.clearCookie('refresh-token')
      return true
    }
  }
}

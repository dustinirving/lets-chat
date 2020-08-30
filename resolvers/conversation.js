const { Conversation, User } = require('../models')
const { withFilter } = require('apollo-server-express')
const NEW_CONVERSATION = 'NEW_CONVERSATION'

module.exports = {
  Query: {
    conversations: async (_, __, { req }) => {
      return await Conversation.find({ users: req.user.userId }).populate(
        'messages'
      )
    },
    conversation: async (_, { conversationId }) =>
      await Conversation.findById(conversationId).populate('messages')
  },
  Mutation: {
    createConversation: async (_, { recipientId }, { req, pubsub }) => {
      const conversation = await Conversation.create({
        users: [req.user.userId, recipientId]
      })

      await User.findOneAndUpdate(
        {
          _id: req.user.userId
        },
        { $push: { conversations: conversation._id } },
        {
          new: true
        }
      )

      await User.findOneAndUpdate(
        {
          _id: recipientId
        },
        { $push: { conversations: conversation._id } },
        {
          new: true
        }
      )

      pubsub.publish(NEW_CONVERSATION, {
        newConversation: conversation,
        recipientId
      })

      return conversation
    }
  },
  Subscription: {
    newConversation: {
      subscribe: withFilter(
        (_, __, { pubsub }) => pubsub.asyncIterator(NEW_CONVERSATION),
        (payload, args) => {
          return payload.recipientId === args.userId
        }
      )
    }
  }
}

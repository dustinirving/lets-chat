const { Conversation, User } = require('../models')
const { withFilter } = require('apollo-server-express')
const NEW_CONVERSATION = 'NEW_CONVERSATION'

module.exports = {
  Query: {
    conversations: async (_, { userId }) =>
      await Conversation.find({ creator: userId }).populate('messages'),
    conversation: async (_, { conversationId }) =>
      await Conversation.findById(conversationId).populate('messages')
  },
  Mutation: {
    createConversation: async (_, { creatorId, recipientId }, { pubsub }) => {
      const conversation = await Conversation.create({
        users: [creatorId, recipientId]
      })

      await User.findOneAndUpdate(
        {
          _id: creatorId
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
          console.log(args.userId)
          console.log(payload.recipientId)
          return payload.recipientId === args.userId
        }
      )
    }
  }
}

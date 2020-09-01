const { Message, Conversation } = require('../models')
const { withFilter } = require('apollo-server-express')
const NEW_MESSAGE = 'NEW_MESSAGE'

module.exports = {
  Query: {
    messages: async () => await Message.find()
  },
  Mutation: {
    createMessage: async (_, { conversationId, content }, { pubsub, req }) => {
      const message = await Message.create({
        user: req.user.userId,
        conversation: conversationId,
        content
      })

      await Conversation.findOneAndUpdate(
        {
          _id: conversationId
        },
        { $push: { messages: message._id } },
        {
          new: true
        }
      )

      pubsub.publish(NEW_MESSAGE, { newMessage: message, conversationId })

      return message
    }
  },
  Subscription: {
    newMessage: {
      subscribe: withFilter(
        (_, __, { pubsub, req }) => pubsub.asyncIterator(NEW_MESSAGE),
        (payload, args) => {
          return payload.conversationId === args.conversationId
        }
      )
    }
  }
}

// Subscription: {
//   conversation: {
//     subscribe: (_, __, { pubsub }) => pubsub.asyncIterator(NEW_MESSAGE), (pa)
//   }
// }

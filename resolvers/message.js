const { Message, Conversation } = require('../models')
const { withFilter } = require('apollo-server-express')
const NEW_MESSAGE = 'NEW_MESSAGE'

module.exports = {
  Query: {
    messages: async () => await Message.find()
  },
  Mutation: {
    createMessage: async (_, { conversationId, content }, { pubsub, req }) => {
      const createMessage = await Message.create({
        user: req.user.userId,
        conversation: conversationId,
        content
      })

      await Conversation.findOneAndUpdate(
        {
          _id: conversationId
        },
        { $push: { messages: createMessage._id } },
        {
          new: true
        }
      )

      const message = await Message.findById(createMessage._id).populate('user')

      pubsub.publish(NEW_MESSAGE, {
        newMessage: message,
        conversationId,
        userId: req.user.userId
      })

      return message
    }
  },
  Subscription: {
    newMessage: {
      subscribe: withFilter(
        (_, __, { pubsub }) => pubsub.asyncIterator(NEW_MESSAGE),
        (payload, args) => {
          return (
            payload.conversationId === args.conversationId &&
            payload.userId !== args.userId
          )
        }
      )
    }
  }
}

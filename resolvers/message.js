const { Message, Conversation } = require('../models')
const conversation = require('./conversation')

const NEW_MESSAGE = 'NEW_MESSAGE'

module.exports = {
  Query: {
    messages: async () => await Message.find()
  },
  Mutation: {
    postMessage: async (_, { userId, conversationId, content }, { pubsub }) => {
      const message = await Message.create({
        user: userId,
        conversation: conversationId,
        content
      })
      pubsub.publish(NEW_MESSAGE, { newMessage: message.content })
      await Conversation.findOneAndUpdate(
        {
          _id: conversationId
        },
        { $push: { messages: message._id } },
        {
          new: true
        }
      )
      return message
    }
  },
  Subscription: {
    newMessage: {
      subscribe: (_, __, { pubsub }) => pubsub.asyncIterator(NEW_MESSAGE)
    }
  }
}

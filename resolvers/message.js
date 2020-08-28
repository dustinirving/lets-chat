const { Message, Conversation } = require('../models')
const conversation = require('./conversation')

const CONVERSATION = 'CONVERSATION'

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

      await Conversation.findOneAndUpdate(
        {
          _id: conversationId
        },
        { $push: { messages: message._id } },
        {
          new: true
        }
      )

      const conversation = await Conversation.findById(conversationId).populate(
        'messages'
      )

      console.log(conversation)
      pubsub.publish(CONVERSATION, { conversation })

      return message
    }
  },
  Subscription: {
    conversation: {
      subscribe: (_, __, { pubsub }) => pubsub.asyncIterator(CONVERSATION)
    }
  }
}

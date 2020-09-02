const { Conversation, User, Message } = require('../models')
const { withFilter } = require('apollo-server-express')
const { connection } = require('mongoose')
const NEW_CONVERSATION = 'NEW_CONVERSATION'

module.exports = {
  Query: {
    conversations: async (_, __, { req }) => {
      return await Conversation.find({ users: req.user.userId })
        .populate('users')
        .populate('messages')
    },
    conversation: async (_, { conversationId }) =>
      await Conversation.findById(conversationId).populate({
        path: 'messages',
        populate: {
          path: 'user',
          model: 'User'
        }
      })
  },
  Mutation: {
    createConversation: async (
      _,
      { recipientId, message },
      { req, pubsub }
    ) => {
      const conversation = await Conversation.create({
        users: [req.user.userId, recipientId]
      })

      const newMessage = await Message.create({
        user: req.user.userId,
        conversation: conversation._id,
        content: message
      })

      await Conversation.findOneAndUpdate(
        {
          _id: conversation._id
        },
        { $push: { messages: newMessage._id } },
        {
          new: true
        }
      )
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

      return await Conversation.findById(conversation._id)
        .populate('users')
        .populate('messages')
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

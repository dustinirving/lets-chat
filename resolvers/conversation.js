const { Conversation, User } = require('../models')

module.exports = {
  Query: {
    conversations: async (_, { userId }) =>
      await Conversation.find({ creator: userId }).populate('messages'),
    conversation: async (_, { conversationId }) =>
      await Conversation.findById(conversationId).populate('messages')
  },
  Mutation: {
    newConversation: async (_, { creatorId, recipientId }) => {
      const conversation = await Conversation.create({
        creator: creatorId,
        recipient: recipientId
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
      return conversation
    }
  }
}

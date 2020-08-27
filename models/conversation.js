const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ConversationSchema = new Schema(
  {
    creator: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    recipient: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    messages: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Message'
      }
    ]
  },
  {
    timestamps: true
  }
)

const Conversation = mongoose.model('Conversation', ConversationSchema)

module.exports = Conversation

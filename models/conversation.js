const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ConversationSchema = new Schema(
  {
    users: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
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

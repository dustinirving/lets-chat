const mongoose = require('mongoose')

const Schema = mongoose.Schema

const MessageSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    conversation: { type: Schema.Types.ObjectId, ref: 'Conversation' },
    content: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

const Message = mongoose.model('Message', MessageSchema)

module.exports = Message

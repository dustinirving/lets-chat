const { gql } = require('apollo-server-express')

const conversation = gql`
  extend type Query {
    conversations(userId: ID!): [Conversation!]
    conversation(conversationId: ID!): Conversation
  }

  extend type Mutation {
    newConversation(creatorId: ID!, recipientId: ID!): Conversation!
  }

  type Conversation {
    _id: ID!
    creator: User!
    recipient: User!
    messages: [Message!]
  }
`

module.exports = conversation

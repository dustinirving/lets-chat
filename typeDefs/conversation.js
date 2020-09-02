const { gql } = require('apollo-server-express')

const conversation = gql`
  extend type Query {
    conversations: [Conversation!]
    conversation(conversationId: ID!): Conversation
  }

  extend type Mutation {
    createConversation(recipientId: ID!, message: String!): Conversation!
  }

  extend type Subscription {
    newConversation(userId: ID!): Conversation
  }

  type Conversation {
    _id: ID!
    users: [User!]!
    messages: [Message!]
  }
`

module.exports = conversation

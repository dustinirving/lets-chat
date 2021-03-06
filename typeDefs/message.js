const { gql } = require('apollo-server-express')

const message = gql`
  extend type Query {
    messages: [Message!]!
  }

  extend type Mutation {
    createMessage(conversationId: ID!, content: String!): Message!
  }

  extend type Subscription {
    newMessage(conversationId: ID!, userId: ID!): Message!
  }

  type Message {
    _id: ID!
    user: User!
    content: String
    conversation: Conversation!
  }
`

module.exports = message

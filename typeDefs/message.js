const { gql } = require('apollo-server-express')

const message = gql`
  extend type Query {
    messages: [Message!]!
  }

  extend type Mutation {
    postMessage(userId: ID!, conversationId: ID!, content: String!): Message!
  }

  extend type Subscription {
    newMessage: [Message!]!
  }

  type Message {
    _id: ID!
    user: User!
    content: String
    conversation: Conversation!
  }
`

module.exports = message

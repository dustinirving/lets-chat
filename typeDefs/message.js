const { gql } = require('apollo-server-express')

const message = gql`
  extend type Query {
    messages: [Message!]!
  }

  extend type Mutation {
    postMessage(user: String!, content: String!): Message!
  }

  type Message {
    _id: ID!
    user: String!
    content: String!
  }
`

module.exports = message

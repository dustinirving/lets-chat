const { gql } = require('apollo-server-express')

const user = gql`
  extend type Query {
    users: [User!]!
    user: User
  }

  extend type Mutation {
    createUser(email: String!, password: String!): User!
    login(email: String!, password: String!): User!
    logout: Boolean
  }

  type User {
    _id: ID!
    email: String!
    avatar: String!
    conversations: [Conversation!]!
  }
`

module.exports = user

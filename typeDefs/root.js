const { gql } = require('apollo-server-express')

const root = gql`
  type Query {
    root: String
  }

  type Mutation {
    root: String
  }

  type Subscription {
    root: String
  }
`
module.exports = root

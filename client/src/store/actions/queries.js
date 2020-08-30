import { gql } from 'graphql-request'

export const getUsersQuery = gql`
  query users {
    users {
      _id
    }
  }
`
export const getUserQuery = gql`
  query user {
    user {
      _id
      email
    }
  }
`

export const createUserMutation = gql`
  mutation createUser($email: String!, $password: String!) {
    createUser(email: $email, password: $password) {
      _id
    }
  }
`
export const loginUserMutation = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      _id
    }
  }
`

export const getConversationsQuery = gql`
  query conversations {
    conversations {
      _id
    }
  }
`
export const getConversationQuery = gql`
  query conversation($conversationId: String!) {
    conversation(conversationId: $conversationId) {
      _id
    }
  }
`
export const createConversationMutation = gql`
  mutation createConversation($recipientId: String!) {
    createConversation(recipientId: $recipientId) {
      _id
    }
  }
`
export const getMessagesQuery = gql`
  query messages {
    messages {
      _id
    }
  }
`
export const createMessageMutation = gql`
  mutation createMessage(
    $userId: String!
    $conversationId: String!
    $content: String!
  ) {
    createMessage(
      userId: $userId
      conversationId: $conversationId
      content: $content
    ) {
      _id
    }
  }
`

import { gql } from 'graphql-request'

export const getUsersQuery = gql`
  query users {
    users {
      _id
      email
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
      email
    }
  }
`

export const getConversationsQuery = gql`
  query conversations {
    conversations {
      _id
      users {
        _id
        email
      }
      messages {
        _id
        content
      }
    }
  }
`
export const getConversationQuery = gql`
  query conversation($conversationId: ID!) {
    conversation(conversationId: $conversationId) {
      _id
      messages {
        _id
        content
        user {
          _id
          email
        }
      }
    }
  }
`
export const createConversationMutation = gql`
  mutation createConversation($recipientId: ID!, $message: String!) {
    createConversation(recipientId: $recipientId, message: $message) {
      _id
      users {
        _id
        email
      }
      messages {
        _id
        content
        user {
          _id
        }
      }
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
  mutation createMessage($conversationId: ID!, $content: String!) {
    createMessage(conversationId: $conversationId, content: $content) {
      _id
      content
      user {
        _id
        email
      }
    }
  }
`

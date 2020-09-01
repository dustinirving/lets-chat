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
    }
  }
`

export const getConversationsQuery = gql`
  query conversations {
    conversations {
      _id
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
      }
    }
  }
`
export const createConversationMutation = gql`
  mutation createConversation($recipientId: ID!) {
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
  mutation createMessage($conversationId: ID!, $content: String!) {
    createMessage(conversationId: $conversationId, content: $content) {
      _id
      content
    }
  }
`

export const newConversationSubscription = gql`
  subscription newConversation($userId: ID!) {
    newConversation(userId: $userId) {
      _id
    }
  }
`

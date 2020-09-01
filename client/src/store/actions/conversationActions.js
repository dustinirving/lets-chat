import {
  GET_CONVERSATION,
  GET_CONVERSATIONS,
  CREATE_CONVERSATION,
  CREATE_MESSAGE,
  NEW_CONVERSATION,
  NEW_MESSAGE
} from './types'
import {
  getConversationQuery,
  getConversationsQuery,
  createConversationMutation,
  createMessageMutation
} from './queries'
import { request } from 'graphql-request'

export const getConversation = ({ conversationId }) => dispatch => {
  request('/', getConversationQuery, { conversationId })
    .then(data => {
      dispatch({
        type: GET_CONVERSATION,
        payload: data.conversation
      })
    })
    .catch(err => {
      console.log(err)
    })
}
export const getConversations = () => dispatch => {
  request('/', getConversationsQuery)
    .then(data => {
      if (data.conversations) {
        dispatch({
          type: GET_CONVERSATIONS,
          payload: data.conversations
        })
      }
    })
    .catch(err => {
      console.log(err)
    })
}
export const createConversation = ({ recipientId }) => dispatch => {
  request('/', createConversationMutation, { recipientId })
    .then(data => {
      dispatch({
        type: CREATE_CONVERSATION,
        payload: data.createConversation
      })
    })
    .catch(err => {
      console.log(err)
    })
}

export const createMessage = ({ conversationId, content }) => dispatch => {
  request('/', createMessageMutation, { conversationId, content })
    .then(data => {
      dispatch({
        type: CREATE_MESSAGE,
        payload: data.createMessage
      })
    })
    .catch(err => {
      console.log(err)
    })
}
export const newConversation = ({ _id }) => dispatch => {
  dispatch({
    type: NEW_CONVERSATION,
    payload: { _id }
  })
}
export const newMessage = ({ _id, content }) => dispatch => {
  dispatch({
    type: NEW_MESSAGE,
    payload: { _id, content }
  })
}

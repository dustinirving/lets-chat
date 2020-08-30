import {
  GET_CONVERSATION,
  GET_CONVERSATIONS,
  CREATE_CONVERSATION
} from './types'
import {
  getConversationQuery,
  getConversationsQuery,
  createConversationMutation
} from './queries'
import { request } from 'graphql-request'

export const getConversation = ({ conversationId }) => dispatch => {
  request('/', getConversationQuery, { conversationId })
    .then(data => {
      dispatch({
        type: GET_CONVERSATION,
        payload: data
      })
    })
    .catch(err => {
      console.log(err)
    })
}
export const getConversations = () => dispatch => {
  request('/', getConversationsQuery)
    .then(data => {
      dispatch({
        type: GET_CONVERSATIONS,
        payload: data.conversations
      })
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
        payload: data
      })
    })
    .catch(err => {
      console.log(err)
    })
}

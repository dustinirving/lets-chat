import { GET_MESSAGES, CREATE_MESSAGE } from './types'
import { getMessagesQuery, createMessageMutation } from './queries'
import { request } from 'graphql-request'

export const getMessages = () => dispatch => {
  request('/', getMessagesQuery)
    .then(data => {
      dispatch({
        type: GET_MESSAGES,
        payload: data
      })
    })
    .catch(err => {
      console.log(err)
    })
}

export const createMessage = ({
  userId,
  conversationId,
  content
}) => dispatch => {
  request('/', createMessageMutation, { userId, conversationId, content })
    .then(data => {
      dispatch({
        type: CREATE_MESSAGE,
        payload: data
      })
    })
    .catch(err => {
      console.log(err)
    })
}

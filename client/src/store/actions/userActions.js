import { GET_USER, GET_USERS, SIGNUP, LOGIN, LOGOUT } from './types'
import {
  getUserQuery,
  getUsersQuery,
  createUserMutation,
  loginUserMutation,
  logoutUserMutation
} from './queries'
import { request } from 'graphql-request'

export const getUser = () => dispatch => {
  request('/graphql', getUserQuery)
    .then(data => {
      dispatch({
        type: GET_USER,
        payload: data.user
      })
    })
    .catch(err => {
      console.log(err)
    })
}
export const getUsers = () => dispatch => {
  request('/graphql', getUsersQuery)
    .then(data => {
      dispatch({
        type: GET_USERS,
        payload: data.users
      })
    })
    .catch(err => {
      console.log(err)
    })
}
export const createUser = ({ email, password }) => dispatch => {
  request('/graphql', createUserMutation, { email, password })
    .then(data => {
      dispatch({
        type: SIGNUP,
        payload: data.createUser
      })
    })
    .catch(err => {
      console.log(err)
    })
}
export const login = ({ email, password }) => dispatch => {
  request('/graphql', loginUserMutation, { email, password })
    .then(data => {
      dispatch({
        type: LOGIN,
        payload: data.login
      })
    })
    .catch(err => {
      console.log(err)
    })
}
export const logout = () => dispatch => {
  request('/graphql', logoutUserMutation)
    .then(() => {
      dispatch({
        type: LOGOUT
      })
    })
    .catch(err => {
      console.log(err)
    })
}

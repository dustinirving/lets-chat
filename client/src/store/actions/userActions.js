import { GET_USER, GET_USERS, SIGNUP, LOGIN } from './types'
import {
  getUserQuery,
  getUsersQuery,
  createUserMutation,
  loginUserMutation
} from './queries'
import { request } from 'graphql-request'

export const getUser = () => dispatch => {
  request('/', getUserQuery)
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
  request('/', getUsersQuery)
    .then(data => {
      dispatch({
        type: GET_USERS,
        payload: data
      })
    })
    .catch(err => {
      console.log(err)
    })
}
export const createUser = ({ email, password }) => dispatch => {
  request('/', createUserMutation, { email, password })
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
  request('/', loginUserMutation, { email, password })
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

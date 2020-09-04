import { GET_USERS, GET_USER, SIGNUP, LOGIN, LOGOUT } from '../actions/types'

const initState = {
  users: [],
  waitingForData: true
}
export default (state = initState, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload }
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        waitingForData: false
      }
    case SIGNUP:
      return {
        ...state,
        users: [...state.users, action.payload],
        user: action.payload
      }
    case LOGIN:
      return { ...state, user: action.payload }
    case LOGOUT:
      return { ...state, user: null }
    default:
      return { ...state }
  }
}

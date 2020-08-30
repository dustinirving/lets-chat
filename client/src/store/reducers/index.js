import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import conversationsReducer from './conversationsReducer'
import messagesReducer from './messagesReducer'

export default combineReducers({
  users: usersReducer,
  conversations: conversationsReducer,
  messages: messagesReducer
})

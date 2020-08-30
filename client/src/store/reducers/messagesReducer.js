import { GET_MESSAGES, CREATE_MESSAGE } from '../actions/types'

const initState = {
  messages: []
}
export default (state = initState, action) => {
  switch (action.type) {
    case GET_MESSAGES:
      return { ...state, messages: action.payload }
    case CREATE_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload]
      }
    default:
      return { ...state }
  }
}

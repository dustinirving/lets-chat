import {
  GET_CONVERSATIONS,
  GET_CONVERSATION,
  CREATE_CONVERSATION,
  CREATE_MESSAGE,
  NEW_CONVERSATION
} from '../actions/types'

const initState = {
  conversations: [],
  conversation: { messages: [] }
}
export default (state = initState, action) => {
  switch (action.type) {
    case GET_CONVERSATIONS:
      return { ...state, conversations: action.payload }
    case GET_CONVERSATION:
      return { ...state, conversation: action.payload }
    case CREATE_CONVERSATION:
      return {
        ...state,
        conversations: [...state.conversations, action.payload]
      }
    case CREATE_MESSAGE:
      return {
        ...state,
        conversation: {
          ...state.conversation,
          messages: [...state.conversation.messages, action.payload]
        }
      }
    case NEW_CONVERSATION:
      return {
        ...state,
        conversations: [...state.conversations, action.payload]
      }
    default:
      return { ...state }
  }
}

import React, { useState, useEffect } from 'react'
import Message from '../Message'
import { connect } from 'react-redux'
import {
  createMessage,
  newMessage
} from '../../store/actions/conversationActions'
import { useSubscription, gql } from '@apollo/client'

const newMessageSubscription = gql`
  subscription newMessage($conversationId: ID!, $userId: ID!) {
    newMessage(conversationId: $conversationId, userId: $userId) {
      _id
      content
      user {
        _id
        email
      }
    }
  }
`

const MessageColumn = ({
  messages,
  conversation,
  createMessage,
  user,
  newMessage
}) => {
  const [form, setForm] = useState({ content: '' })

  const handleChange = e => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    createMessage({ content: form.content, conversationId: conversation._id })
    setForm({ content: '' })
  }

  const { data, error, loading } = useSubscription(newMessageSubscription, {
    variables: { conversationId: conversation._id, userId: user._id }
  })

  useEffect(() => {
    console.log(data)
    if (data) newMessage(data.newMessage)
  }, [data])

  return (
    <div className='col-md-6 col-xl-8 pl-md-3 px-lg-auto px-0' >
      {
        conversation.messages.length !== 0
        ?
        <>
          <div className='chat-message' style={{ overflowY: "scroll", height: "60vh"}}>
            <ul className='list-unstyled chat-1 scrollbar-light-blue'>
              {conversation.messages.map(msg => (
                <Message msg={msg} />
              ))}
            </ul>

          </div>
          <form onSubmit={handleSubmit}>
            <div className='white'>
              <div className='form-group basic-textarea'>
                <textarea
                  name='content'
                  value={form.content}
                  onChange={handleChange}
                  className='form-control pl-2 my-0'
                  id='exampleFormControlTextarea2'
                  rows='3'
                  placeholder='Type your message here...'
                ></textarea>
              </div>
            </div>
            <button
              type='submit'
              className='btn btn-outline-green btn-rounded btn-sm waves-effect waves-dark float-right'
            >
              Send
            </button>
          </form>
        </>
        :
        <div>Open a conversation to chat here!</div>     

      }

    </div>
  )
}

const mapStateToProps = state => {
  return {
    conversation: state.conversations.conversation,
    user: state.users.user
  }
}

export default connect(mapStateToProps, { createMessage, newMessage })(
  MessageColumn
)

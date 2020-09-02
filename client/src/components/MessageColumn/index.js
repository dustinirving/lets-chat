import React, { useState } from 'react'
import Message from '../Message'
import { connect } from 'react-redux'
import { createMessage } from '../../store/actions/conversationActions'

// simulate conversation with messages
// const messages = [
//   {
//     email: 'diegolehyt@gmail.com',
//     img:
//       'https://avatars3.githubusercontent.com/u/59458188?s=460&u=6a9312004c86a260b27601dbf306e7cf0b167e9e&v=4',
//     content: 'Hola! , como estas?',
//     bool: true
//   },
//   {
//     email: 'dustinirving@gmail.com',
//     img:
//       'https://avatars2.githubusercontent.com/u/53638843?s=400&u=acd763e9615d8a0f1de970908169e8d5aa045bf7&v=4',
//     content: 'Hey good and you?',
//     bool: false
//   },
//   {
//     email: 'diegolehyt@gmail.com',
//     img:
//       'https://avatars3.githubusercontent.com/u/59458188?s=460&u=6a9312004c86a260b27601dbf306e7cf0b167e9e&v=4',
//     content:
//       'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
//     bool: true
//   },
//   {
//     email: 'dustinirving@gmail.com',
//     img:
//       'https://avatars2.githubusercontent.com/u/53638843?s=400&u=acd763e9615d8a0f1de970908169e8d5aa045bf7&v=4',
//     content:
//       'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
//     bool: false
//   }
// ]

const MessageColumn = ({ messages, conversation, createMessage }) => {
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
  return (
    <div className='col-md-6 col-xl-8 pl-md-3 px-lg-auto px-0'>
      <div className='chat-message'>
        <ul className='list-unstyled chat-1 scrollbar-light-blue'>
          {conversation.messages.map(msg => (
            <Message msg={msg} />
          ))}
        </ul>
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
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    conversation: state.conversations.conversation
  }
}

export default connect(mapStateToProps, { createMessage })(MessageColumn)

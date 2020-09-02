import React, { useState } from 'react'
import { connect } from 'react-redux'
import DropDown from '../DropDown'
import { createConversation } from '../../store/actions/conversationActions'

const Modal = ({ users, createConversation }) => {
  const [recipient, setRecipient] = useState({ email: '', id: '' })
  const [form, setForm] = useState({ message: '' })

  const handleClick = user => {
    setRecipient({ email: user.email, id: user._id })
  }

  const handleChange = e => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    createConversation({ recipientId: recipient.id, message: form.message })
  }

  return (
    <>
      <div
        class='modal fade'
        id='modalLoginForm'
        tabindex='-1'
        role='dialog'
        aria-labelledby='myModalLabel'
        aria-hidden='true'
      >
        <div class='modal-dialog modal-dialog-centered' role='document'>
          <div class='modal-content'>
            <div class='modal-header text-center'>
              <h4 class='modal-title w-100 font-weight-bold'>New Messsage</h4>
              <button
                type='button'
                class='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div class='modal-body mx-3 pt-0'>
                <div class='md-form mb-4'>
                  <div className='form-group'>
                    <button
                      className='btn btn-success dropdown-toggle mr-4'
                      type='button'
                      data-toggle='dropdown'
                      aria-haspopup='true'
                      aria-expanded='false'
                    >
                      To
                    </button>
                    <div className='dropdown-menu'>
                      {users.map(user => (
                        <DropDown user={user} handleClick={handleClick} />
                      ))}
                    </div>
                    <input
                      placeholder='recipient'
                      value={recipient.email}
                      style={{ width: '70%' }}
                    />
                  </div>
                  <textarea
                    name='message'
                    value={form.message}
                    onChange={handleChange}
                    className='form-control pl-2 my-0'
                    id='exampleFormControlTextarea2'
                    rows='3'
                    placeholder='Type your message here...'
                  />
                </div>
              </div>
              <div class='modal-footer d-flex justify-content-center'>
                <button className='btn btn-success' type='submit' id='button'>
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class='text-center'>
        <a
          href=''
          className='btn btn-success btn-rounded mb-4'
          data-toggle='modal'
          data-target='#modalLoginForm'
        >
          New Message
        </a>
      </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    users: state.users.users
  }
}

export default connect(mapStateToProps, { createConversation })(Modal)

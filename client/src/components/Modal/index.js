import React, { useState } from 'react'
import { connect } from 'react-redux'
import DropDown from '../DropDown'
const Modal = ({ users }) => {
  const [recipient, setRecipient] = useState({ email: '', id: '' })

  const handleClick = user => {
    setRecipient({ email: user.email, id: user.id })
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
                  name='content'
                  className='form-control pl-2 my-0'
                  id='exampleFormControlTextarea2'
                  rows='3'
                  placeholder='Type your message here...'
                ></textarea>
              </div>
            </div>
            <div class='modal-footer d-flex justify-content-center'>
              <button className='btn btn-success'>Send</button>
            </div>
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

export default connect(mapStateToProps)(Modal)

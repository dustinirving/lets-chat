import React, { useState } from 'react'
import { connect } from 'react-redux'
import DropDown from '../DropDown'
import { createConversation } from '../../store/actions/conversationActions'
import avatars from '../Modal/friends.json'

const styles = {
  miniNav: {
    heigth: '40px',
    width: '100%'
  },
  avatars: {
    heigth: '20px',
    width: '20px'
  }
}

const Modal = ({ user, users, createConversation }) => {
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
    <a href='#' className='d-flex justify-content-between'>
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

      {/* <div class='text-center'>
        <a className="nav-link p-0 dropdown-toggle" id="navbarDropdownMenuLink-55" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          <img src="https://avatars3.githubusercontent.com/u/59458188?s=460&u=6a9312004c86a260b27601dbf306e7cf0b167e9e&v=4" className="rounded-circle z-depth-0"
            alt="avatar image" height="35"/>
        </a>
        <a
          href=''
          className='waves-effect waves-light'
          data-toggle='modal'
          data-target='#modalLoginForm'
        >
          <i className="fas fa-envelope"></i>
        </a>
      </div> */}
      <nav className="mb-1 navbar navbar-expand-lg navbar-dark success-color lighten-1" style={styles.miniNav}>

        <div className="collapse navbar-collapse" id="navbarSupportedContent-555">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link waves-effect waves-light"
                  data-toggle='modal'
                  data-target='#modalLoginForm'
              >
                <i className="fas fa-comment"></i>
              </a>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto nav-flex-icons">
            <li className="nav-item">
              <a className="nav-link" href="#">
                {user.email}
              </a>
            </li>
            <li className="nav-item avatar dropdown">
              <a className="nav-link p-0 dropdown-toggle" id="navbarDropdownMenuLink-55" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                <img src="https://avatars3.githubusercontent.com/u/59458188?s=460&u=6a9312004c86a260b27601dbf306e7cf0b167e9e&v=4" className="rounded-circle z-depth-0"
                  alt="avatar image" height="35"/>
              </a>
              <div className="dropdown-menu dropdown-menu-lg-right dropdown-secondary"
                aria-labelledby="navbarDropdownMenuLink-55">
                {avatars.map(avatar => (
                  <div className="dropdown-item" >
                    <img src={avatar.image} style={styles.avatars}/>
                    {' '}{avatar.name}
                  </div>
                ))}
              </div>
            </li>
 
          </ul>
        </div>
      </nav>
    </a>
  )
}

const mapStateToProps = state => {
  return {
    users: state.users.users,
    user: state.users.user
  }
}

export default connect(mapStateToProps, { createConversation })(Modal)

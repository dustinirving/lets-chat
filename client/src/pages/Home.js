import React, { useState, useEffect } from 'react'
import Conversation from '../components/Conversation'
import Message from '../components/Message'
import DropDown from '../components/DropDown'
import { useHistory, Redirect } from 'react-router-dom'
import { getConversations, createConversation } from '../store/actions/conversationActions'
import { getUsers } from '../store/actions/userActions'
import { connect } from 'react-redux'

const styles = {
  avatar: {
    width: '100px'
  }
}

// simulate conversation with messages
const messages = [
  {
    email: 'diegolehyt@gmail.com',
    img:
      'https://avatars3.githubusercontent.com/u/59458188?s=460&u=6a9312004c86a260b27601dbf306e7cf0b167e9e&v=4',
    content: 'Hola! , como estas?',
    bool: true
  },
  {
    email: 'dustinirving@gmail.com',
    img:
      'https://avatars2.githubusercontent.com/u/53638843?s=400&u=acd763e9615d8a0f1de970908169e8d5aa045bf7&v=4',
    content: 'Hey good and you?',
    bool: false
  },
  {
    email: 'diegolehyt@gmail.com',
    img:
      'https://avatars3.githubusercontent.com/u/59458188?s=460&u=6a9312004c86a260b27601dbf306e7cf0b167e9e&v=4',
    content:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
    bool: true
  },
  {
    email: 'dustinirving@gmail.com',
    img:
      'https://avatars2.githubusercontent.com/u/53638843?s=400&u=acd763e9615d8a0f1de970908169e8d5aa045bf7&v=4',
    content:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
    bool: false
  }
]

function Home ({ getConversations, getUsers, users, conversations, createConversation }) {
  useEffect(() => {
    getConversations()
    getUsers()
    // createConversation("5f4c29c160315b3680b887db")
    console.log(users)
  }, [])

  return (
    <>
      <div className='card dusty-grass-gradient chat-room animated fadeInRight'>
        <div className='card-body'>
          <div className='row px-lg-2 px-2'>
            <div className='col-md-6 col-xl-4 px-0'>
              <h6 className='font-weight-bold mb-3 text-center text-lg-left'>
                <i className='fas fa-user-alt light-green-text-2'></i> Diego
                Lehyt
              </h6>
              <button
                className='btn btn-success dropdown-toggle mr-4'
                type='button'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                Users
              </button>

              <div className='dropdown-menu'>
                {users.map(user => (
                  <DropDown  _id={user._id}/>
                ))}
              </div>
              <div className='white z-depth-1 px-2 pt-3 pb-0 members-panel-1 scrollbar-light-blue'>
                <ul className='list-unstyled friend-list'>
                  {messages.map(msg => (
                    <Conversation msg={msg} />
                  ))}
                </ul>
              </div>
            </div>

            <div className='col-md-6 col-xl-8 pl-md-3 px-lg-auto px-0'>
              <div className='chat-message'>
                <ul className='list-unstyled chat-1 scrollbar-light-blue'>
                  {messages.map(msg => (
                    <Message msg={msg} />
                  ))}
                </ul>
                <div className='white'>
                  <div className='form-group basic-textarea'>
                    <textarea
                      className='form-control pl-2 my-0'
                      id='exampleFormControlTextarea2'
                      rows='3'
                      placeholder='Type your message here...'
                    ></textarea>
                  </div>
                </div>
                <button
                  type='button'
                  className='btn btn-outline-green btn-rounded btn-sm waves-effect waves-dark float-right'
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    conversations: state.conversations.conversations,
    users: state.users.users
  }
}

export default connect(mapStateToProps, { getConversations, createConversation, getUsers })(Home)

// <li className="p-2">
//     <a href="#" className="d-flex justify-content-between">
//       <img style={styles.avatar} src="https://avatars2.githubusercontent.com/u/53638843?s=400&u=acd763e9615d8a0f1de970908169e8d5aa045bf7&v=4" alt="avatar" className="avatar rounded-circle d-flex align-self-center mr-2 z-depth-1"/>
//       <div className="text-small">
//         <strong>Dustin Irving</strong>
//         <p className="last-message text-muted">Lorem ipsum dolor sit.</p>
//       </div>
//       <div className="chat-footer">
//         <p className="text-smaller text-muted mb-0">Yesterday</p>
//         <span className="text-muted float-right"><i className="fas fa-mail-reply" aria-hidden="true"></i></span>
//       </div>
//     </a>
//   </li>
//   <li className="p-2">
//     <a href="#" className="d-flex justify-content-between">
//       <img style={styles.avatar} src="https://avatars3.githubusercontent.com/u/59458188?s=460&u=6a9312004c86a260b27601dbf306e7cf0b167e9e&v=4" alt="avatar" className="avatar rounded-circle d-flex align-self-center mr-2 z-depth-1"/>
//       <div className="text-small">
//         <strong>Diego Lehyt</strong>
//         <p className="last-message text-muted">Lorem ipsum dolor sit.</p>
//       </div>
//       <div className="chat-footer">
//         <p className="text-smaller text-muted mb-0">5 min ago</p>
//         <span className="text-muted float-right"><i className="fas fa-check" aria-hidden="true"></i></span>
//       </div>
//     </a>
//   </li>
//   <li className="active grey lighten-3 p-2">
//     <a href="#" className="d-flex justify-content-between">
//       <img style={styles.avatar} src="https://mdbootstrap.com/img/Photos/Avatars/avatar-8.jpg" alt="avatar" className="avatar rounded-circle d-flex align-self-center mr-2 z-depth-1"/>
//       <div className="text-small">
//         <strong>John Doe</strong>
//         <p className="last-message text-muted">Hello, Are you there?</p>
//       </div>
//       <div className="chat-footer">
//         <p className="text-smaller text-muted mb-0">Just now</p>
//         <span className="badge badge-danger float-right">1</span>
//       </div>
//     </a>
//   </li>
//   <li className="p-2">
//     <a href="#" className="d-flex justify-content-between">
//       <img style={styles.avatar} src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg" alt="avatar" className="avatar rounded-circle d-flex align-self-center mr-2 z-depth-1"/>
//       <div className="text-small">
//         <strong>Danny Smith</strong>
//         <p className="last-message text-muted">Lorem ipsum dolor sit.</p>
//       </div>
//       <div className="chat-footer">
//         <p className="text-smaller text-muted mb-0">5 min ago</p>
//         <span className="text-muted float-right"><i className="fas fa-mail-reply" aria-hidden="true"></i></span>
//       </div>
//     </a>
//   </li>
//   <li className="p-2">
//     <a href="#" className="d-flex justify-content-between">
//       <img style={styles.avatar} src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" alt="avatar" className="avatar rounded-circle d-flex align-self-center mr-2 z-depth-1"/>
//       <div className="text-small">
//         <strong>Alex Steward</strong>
//         <p className="last-message text-muted">Lorem ipsum dolor sit.</p>
//       </div>
//       <div className="chat-footer">
//         <p className="text-smaller text-muted mb-0">Yesterday</p>
//         <span className="text-muted float-right"><i className="fas fa-mail-reply" aria-hidden="true"></i></span>
//       </div>
//     </a>
//   </li>
//   <li className="p-2">
//     <a href="#" className="d-flex justify-content-between">
//       <img style={styles.avatar} src="https://mdbootstrap.com/img/Photos/Avatars/avatar-3.jpg" alt="avatar" className="avatar rounded-circle d-flex align-self-center mr-2 z-depth-1"/>
//       <div className="text-small">
//         <strong>Ashley Olsen</strong>
//         <p className="last-message text-muted">Lorem ipsum dolor sit.</p>
//       </div>
//       <div className="chat-footer">
//         <p className="text-smaller text-muted mb-0">Yesterday</p>
//         <span className="text-muted float-right"><i className="fas fa-mail-reply" aria-hidden="true"></i></span>
//       </div>
//     </a>
//   </li>
//   <li className="p-2">
//     <a href="#" className="d-flex justify-content-between">
//       <img style={styles.avatar} src="https://mdbootstrap.com/img/Photos/Avatars/avatar-4.jpg" alt="avatar" className="avatar rounded-circle d-flex align-self-center mr-2 z-depth-1"/>
//       <div className="text-small">
//         <strong>Kate Moss</strong>
//         <p className="last-message text-muted">Lorem ipsum dolor sit.</p>
//       </div>
//       <div className="chat-footer">
//         <p className="text-smaller text-muted mb-0">Yesterday</p>
//         <span className="text-muted float-right"><i className="fas fa-mail-reply" aria-hidden="true"></i></span>
//       </div>
//     </a>
// </li>

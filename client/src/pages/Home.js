import React, { useState, useEffect } from 'react'
import HomeLayout from '../layouts/HomeLayout'
import Modal from '../components/Modal'
import { useHistory, Redirect } from 'react-router-dom'
import {
  getConversations,
  getConversation,
  createConversation,
  createMessage,
  newConversation,
  newMessage
} from '../store/actions/conversationActions'
import { useSubscription, gql } from '@apollo/client'
import { getUsers } from '../store/actions/userActions'
import { connect } from 'react-redux'

const newConversationSubscription = gql`
  subscription newConversation($userId: ID!) {
    newConversation(userId: $userId) {
      _id
    }
  }
`

function Home ({
  users,
  conversations,
  conversation,
  getConversations,
  getConversation,
  getUsers,
  createConversation,
  createMessage,
  newConversation,
  newMessage
}) {
  // const { data, error, loading } = useSubscription(
  //   newConversationSubscription,
  //   {
  //     variables: { userId: '5f4d377b3eaafe1d70404b5b' }
  //   }
  // )

  // const { data, error, loading } = useSubscription(newMessageSubscription, {
  //   variables: { conversationId: '5f4c5b1941dcc80286abde19' }
  // })

  // useEffect(() => {
  //   if (data) newConversation(data.newConversation)
  //   if (data) newMessage(data.newMessage)
  // }, [data])

  useEffect(() => {
    getConversations()
    getUsers()
  }, [])

  return (
    <>
      <HomeLayout />
    </>
  )
}

const mapStateToProps = state => {
  return {
    conversations: state.conversations.conversations,
    users: state.users.users
  }
}

export default connect(mapStateToProps, {
  getConversations,
  getConversation,
  getUsers,
  createConversation,
  createMessage,
  newConversation,
  newMessage
})(Home)

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

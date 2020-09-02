import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import { connect } from 'react-redux'
import { getConversation } from '../../store/actions/conversationActions'

const styles = {
  navB: {
    fontFamily: "'Londrina Solid', cursive",
    fontWeight: 'bold'
  },
  avatar: {
    width: '100px'
  }
}

function Conversation ({ lastMsg, recipient, getConversation, id }) {
  return (
    <li className='p-2'>
      <a href='#' className='d-flex justify-content-between'>
        <img
          style={styles.avatar}
          src='https://avatars3.githubusercontent.com/u/59458188?s=460&u=6a9312004c86a260b27601dbf306e7cf0b167e9e&v=4'
          alt='avatar'
          className='avatar rounded-circle d-flex align-self-center mr-2 z-depth-1'
        />
        <div className='text-small'>
          <strong onClick={() => getConversation({ conversationId: id })}>
            {recipient[0].email}
          </strong>
          <p className='last-message text-muted'>{lastMsg.content}</p>
        </div>
        <div className='chat-footer'>
          <p className='text-smaller text-muted mb-0'>Yesterday</p>
          <span className='text-muted float-right'>
            <i className='fas fa-mail-reply' aria-hidden='true'></i>
          </span>
        </div>
      </a>
    </li>
  )
}

const mapStateToProps = state => {
  return {
    conversation: state.conversations.conversation
  }
}

export default connect(mapStateToProps, { getConversation })(Conversation)

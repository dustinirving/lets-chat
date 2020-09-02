import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import { connect } from 'react-redux'

const styles = {
  navB: {
    fontFamily: "'Londrina Solid', cursive",
    fontWeight: 'bold'
  },
  avatar: {
    width: '100px'
  }
}

function Message ({ msg, user }) {
  // change bool for current user and compare between the two people inside the conversation
  // "onlineUser.email === props.msg.email"

  // {msg.user._id === user._id }

  return (
    <>
      {false ? (
        <li className='d-flex justify-content-between mb-4'>
          <img
            style={styles.avatar}
            src='https://avatars2.githubusercontent.com/u/53638843?s=400&u=acd763e9615d8a0f1de970908169e8d5aa045bf7&v=4'
            alt='avatar'
            className='avatar rounded-circle d-flex align-self-center mr-2 z-depth-1'
          />
          <div className='chat-body white p-3 ml-2 z-depth-1'>
            <div className='header'>
              <strong className='primary-font'>
                {msg.user ? msg.user.email : ''}
              </strong>
              <small className='pull-right text-muted'>
                <i className='far fa-clock'></i> 12 mins ago
              </small>
            </div>
            <hr className='w-100' />
            <p className='mb-0'>{msg.content}</p>
          </div>
        </li>
      ) : (
        <li className='d-flex justify-content-between mb-4'>
          <div className='chat-body white p-3 z-depth-1'>
            <div className='header'>
              <strong className='primary-font'>
                {msg.user ? msg.user.email : ''}
              </strong>
              <small className='pull-right text-muted'>
                <i className='far fa-clock'></i> 13 mins ago
              </small>
            </div>
            <hr className='w-100' />
            <p className='mb-0'>{msg.content}</p>
          </div>
          <img
            style={styles.avatar}
            src='https://avatars3.githubusercontent.com/u/59458188?s=460&u=6a9312004c86a260b27601dbf306e7cf0b167e9e&v=4'
            alt='avatar'
            className='avatar rounded-circle d-flex align-self-center mr-2 z-depth-1'
          />
        </li>
      )}
    </>
  )
}

const mapStateToProps = state => {
  return {
    user: state.users.user
  }
}

export default connect(mapStateToProps)(Message)

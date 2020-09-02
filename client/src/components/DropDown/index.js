import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const styles = {
  navB: {
    fontFamily: "'Londrina Solid', cursive",
    fontWeight: 'bold'
  },
  avatar: {
    width: '100px'
  }
}

function DropDown ({ user, handleClick }) {
  return (
    <>
      {console.log(user)}
      <a className='dropdown-item' href='#' onClick={() => handleClick(user)}>
        {user.email}
      </a>
      <div className='dropdown-divider'></div>
    </>
  )
}

export default DropDown

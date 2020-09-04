import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import { connect } from 'react-redux'
import { logout } from '../../store/actions/userActions'

const styles = {
  navB: {
    fontFamily: "'Londrina Solid', cursive"
  },
  imgB: {
    marginRight: '10px'
  },
  margintop: {
    marginTop: '20%'
  },
  buttonS: {
    marginLeft: '20px',
    marginTop: '0px',
    fontWeight: 'bold',
    width: '10px'
  },
  searchS: {
    color: 'gold',
    fontWeight: 'bold',
    fontSize: '20px'
  },
  formS: {
    // marginLeft: '80px',
    marginTop: '10%'
  }
}

// Depending on the current path, this component sets the "active" classNameName on the appropriate navigation link item
function Navbar ({ logout }) {
  return (
    <nav className='mb-1 navbar navbar-expand-lg navbar-dark success-color lighten-1'>
      <Link className='navbar-brand' to='/' style={styles.navB}>
        <img
          src='https://raw.githubusercontent.com/dustinirving/lets-chat/master/client/public/reunion.png'
          width='40px'
          height='40px'
          tabindex='-1'
          style={styles.imgB}
          alt='logo'
        />
        Lets Chat!
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent-555'
        aria-controls='navbarSupportedContent-555'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarSupportedContent-555'>
        <ul className='navbar-nav mr-auto'></ul>

        <ul className='navbar-nav ml-auto nav-flex-icons'>
          <li className='nav-item'>
            <a className='nav-link waves-effect waves-light'>
              <i className='fas fa-user-alt light-green-text-2'></i>
            </a>
          </li>
          <li>
            <button onClick={() => logout()}>Logout</button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

const mapStateToProps = state => {
  return {
    user: state.users.user
  }
}

export default connect(mapStateToProps, { logout })(Navbar)

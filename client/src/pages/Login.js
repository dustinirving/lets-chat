import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../store/actions/userActions'

const styles = {
  forma: {
    width: '400px',
    marginTop: '5%'
  },
  conta: {
    width: 'auto',
    height: 'auto'
  }
}

const Login = ({ login, user, getConversations }) => {
  // const [passwordP, setPasswordP] = useState('')
  // const [emailP, setEmailP] = useState('')
  // const [userP, setUserP] = useState('')

  // const handlePasswordChange = e => {
  //   // e.preventDefault();
  //   setPasswordP(e.target.value)
  //   console.log(passwordP)
  // }

  // const handleEmailChange = e => {
  //   // e.preventDefault();
  //   setEmailP(e.target.value)
  //   console.log(emailP)
  // }

  // const handleUser = e => {
  //   // e.preventDefault();
  //   setUserP(e.target.value)
  //   console.log(userP)
  // }

  // const handleSubmit = e => {
  //   e.preventDefault()

  //   handleEmailChange(e)
  //   handlePasswordChange(e)

  //   handleUser()
  // }

  const [form, setForm] = useState({ email: '', password: '' })

  const handleChange = e => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    login(form)
  }

  return (
    <div className='container' style={styles.conta}>
      {user ? <Redirect to='/home' /> : null}
      <div className='row'>
        <div className='col-12 d-flex justify-content-center animated fadeInRight'>
          <div className='card cloudy-knoxville-gradient' style={styles.forma}>
            <h5 className='card-header success-color white-text text-center py-4'>
              <strong>Login</strong>
            </h5>

            <div className='card-body px-lg-5 pt-0'>
              <form className='text-center' action='#!' onSubmit={handleSubmit}>
                <div className='md-form'>
                  <input
                    type='email'
                    onChange={handleChange}
                    value={form.email}
                    id='email'
                    name='email'
                    className='form-control'
                  />
                  <label for='email'>E-mail</label>
                </div>

                <div className='md-form'>
                  <input
                    type='password'
                    onChange={handleChange}
                    value={form.password}
                    id='password'
                    name='password'
                    className='form-control'
                  />
                  <label for='password'>Password</label>
                </div>

                <div className='d-flex justify-content-around'>
                  <div>
                    <div className='form-check'>
                      <input
                        type='checkbox'
                        className='form-check-input'
                        id='materialLoginFormRemember'
                      />
                      <label
                        className='form-check-label'
                        for='materialLoginFormRemember'
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <div>
                    <a href=''>Forgot password?</a>
                  </div>
                </div>

                <button
                  className='btn btn-outline-success btn-rounded btn-block my-4 waves-effect z-depth-0'
                  type='submit'
                >
                  Sign in
                </button>

                <p>
                  Not a member?
                  <a href='/register'>Register</a>
                </p>

                <p>or sign in with:</p>
                <a type='button' className='btn-floating btn-fb btn-sm'>
                  <i className='fab fa-facebook-f'></i>
                </a>
                <a type='button' className='btn-floating btn-tw btn-sm'>
                  <i className='fab fa-twitter'></i>
                </a>
                <a type='button' className='btn-floating btn-li btn-sm'>
                  <i className='fab fa-linkedin-in'></i>
                </a>
                <a type='button' className='btn-floating btn-git btn-sm'>
                  <i className='fab fa-github'></i>
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.users.user
  }
}

export default connect(mapStateToProps, { login })(Login)

import React, { useState, useEffect } from 'react'
// import Navbar from '../components/Navbar'
import { useHistory, Redirect } from 'react-router-dom'

const styles = {
  avatar: {
    width: "100px"
  }
}

function Home () {



  return (
    <>
      <div className="card dusty-grass-gradient chat-room animated fadeInRight">
        <div className="card-body">


          <div className="row px-lg-2 px-2">

            <div className="col-md-6 col-xl-4 px-0">

              <h6 className="font-weight-bold mb-3 text-center text-lg-left"><i className="fas fa-user-alt light-green-text-2"></i>{" "}Diego Lehyt</h6>
              <div className="white z-depth-1 px-2 pt-3 pb-0 members-panel-1 scrollbar-light-blue">
                <ul className="list-unstyled friend-list">
                  <li className="p-2">
                    <a href="#" className="d-flex justify-content-between">
                      <img style={styles.avatar} src="https://avatars2.githubusercontent.com/u/53638843?s=400&u=acd763e9615d8a0f1de970908169e8d5aa045bf7&v=4" alt="avatar" className="avatar rounded-circle d-flex align-self-center mr-2 z-depth-1"/>
                      <div className="text-small">
                        <strong>Dustin Irving</strong>
                        <p className="last-message text-muted">Lorem ipsum dolor sit.</p>
                      </div>
                      <div className="chat-footer">
                        <p className="text-smaller text-muted mb-0">Yesterday</p>
                        <span className="text-muted float-right"><i className="fas fa-mail-reply" aria-hidden="true"></i></span>
                      </div>
                    </a>
                  </li>
                  <li className="p-2">
                    <a href="#" className="d-flex justify-content-between">
                      <img style={styles.avatar} src="https://avatars3.githubusercontent.com/u/59458188?s=460&u=6a9312004c86a260b27601dbf306e7cf0b167e9e&v=4" alt="avatar" className="avatar rounded-circle d-flex align-self-center mr-2 z-depth-1"/>
                      <div className="text-small">
                        <strong>Diego Lehyt</strong>
                        <p className="last-message text-muted">Lorem ipsum dolor sit.</p>
                      </div>
                      <div className="chat-footer">
                        <p className="text-smaller text-muted mb-0">5 min ago</p>
                        <span className="text-muted float-right"><i className="fas fa-check" aria-hidden="true"></i></span>
                      </div>
                    </a>
                  </li>
                  <li className="active grey lighten-3 p-2">
                    <a href="#" className="d-flex justify-content-between">
                      <img style={styles.avatar} src="https://mdbootstrap.com/img/Photos/Avatars/avatar-8.jpg" alt="avatar" className="avatar rounded-circle d-flex align-self-center mr-2 z-depth-1"/>
                      <div className="text-small">
                        <strong>John Doe</strong>
                        <p className="last-message text-muted">Hello, Are you there?</p>
                      </div>
                      <div className="chat-footer">
                        <p className="text-smaller text-muted mb-0">Just now</p>
                        <span className="badge badge-danger float-right">1</span>
                      </div>
                    </a>
                  </li>
                  <li className="p-2">
                    <a href="#" className="d-flex justify-content-between">
                      <img style={styles.avatar} src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg" alt="avatar" className="avatar rounded-circle d-flex align-self-center mr-2 z-depth-1"/>
                      <div className="text-small">
                        <strong>Danny Smith</strong>
                        <p className="last-message text-muted">Lorem ipsum dolor sit.</p>
                      </div>
                      <div className="chat-footer">
                        <p className="text-smaller text-muted mb-0">5 min ago</p>
                        <span className="text-muted float-right"><i className="fas fa-mail-reply" aria-hidden="true"></i></span>
                      </div>
                    </a>
                  </li>
                  <li className="p-2">
                    <a href="#" className="d-flex justify-content-between">
                      <img style={styles.avatar} src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" alt="avatar" className="avatar rounded-circle d-flex align-self-center mr-2 z-depth-1"/>
                      <div className="text-small">
                        <strong>Alex Steward</strong>
                        <p className="last-message text-muted">Lorem ipsum dolor sit.</p>
                      </div>
                      <div className="chat-footer">
                        <p className="text-smaller text-muted mb-0">Yesterday</p>
                        <span className="text-muted float-right"><i className="fas fa-mail-reply" aria-hidden="true"></i></span>
                      </div>
                    </a>
                  </li>
                  <li className="p-2">
                    <a href="#" className="d-flex justify-content-between">
                      <img style={styles.avatar} src="https://mdbootstrap.com/img/Photos/Avatars/avatar-3.jpg" alt="avatar" className="avatar rounded-circle d-flex align-self-center mr-2 z-depth-1"/>
                      <div className="text-small">
                        <strong>Ashley Olsen</strong>
                        <p className="last-message text-muted">Lorem ipsum dolor sit.</p>
                      </div>
                      <div className="chat-footer">
                        <p className="text-smaller text-muted mb-0">Yesterday</p>
                        <span className="text-muted float-right"><i className="fas fa-mail-reply" aria-hidden="true"></i></span>
                      </div>
                    </a>
                  </li>
                  <li className="p-2">
                    <a href="#" className="d-flex justify-content-between">
                      <img style={styles.avatar} src="https://mdbootstrap.com/img/Photos/Avatars/avatar-4.jpg" alt="avatar" className="avatar rounded-circle d-flex align-self-center mr-2 z-depth-1"/>
                      <div className="text-small">
                        <strong>Kate Moss</strong>
                        <p className="last-message text-muted">Lorem ipsum dolor sit.</p>
                      </div>
                      <div className="chat-footer">
                        <p className="text-smaller text-muted mb-0">Yesterday</p>
                        <span className="text-muted float-right"><i className="fas fa-mail-reply" aria-hidden="true"></i></span>
                      </div>
                    </a>
                  </li>

                </ul>
              </div>

            </div>
  
            <div className="col-md-6 col-xl-8 pl-md-3 px-lg-auto px-0">

              <div className="chat-message">

                <ul className="list-unstyled chat-1 scrollbar-light-blue">
                  <li className="d-flex justify-content-between mb-4">
                    <img style={styles.avatar} src="https://avatars3.githubusercontent.com/u/59458188?s=460&u=6a9312004c86a260b27601dbf306e7cf0b167e9e&v=4" alt="avatar" className="avatar rounded-circle d-flex align-self-center mr-2 z-depth-1"/>
                    <div className="chat-body white p-3 ml-2 z-depth-1">
                      <div className="header">
                        <strong className="primary-font">Diego Lehyt</strong>
                        <small className="pull-right text-muted"><i className="far fa-clock"></i> 12 mins ago</small>
                      </div>
                      <hr className="w-100"/>
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                      </p>
                    </div>
                  </li>
                  <li className="d-flex justify-content-between mb-4">
                    <div className="chat-body white p-3 z-depth-1">
                      <div className="header">
                        <strong className="primary-font">Dustin Irving</strong>
                        <small className="pull-right text-muted"><i className="far fa-clock"></i> 13 mins ago</small>
                      </div>
                      <hr className="w-100"/>
                      <p className="mb-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                        laudantium.
                      </p>
                    </div>
                    <img style={styles.avatar} src="https://avatars2.githubusercontent.com/u/53638843?s=400&u=acd763e9615d8a0f1de970908169e8d5aa045bf7&v=4" alt="avatar" className="avatar rounded-circle d-flex align-self-center mr-2 z-depth-1"/>
                  </li>
                  <li className="d-flex justify-content-between mb-4">
                    <img style={styles.avatar} src="https://avatars3.githubusercontent.com/u/59458188?s=460&u=6a9312004c86a260b27601dbf306e7cf0b167e9e&v=4" alt="avatar" className="avatar rounded-circle d-flex align-self-center mr-2 z-depth-1"/>
                    <div className="chat-body white p-3 ml-2 z-depth-1">
                      <div className="header">
                        <strong className="primary-font">Diego Lehyt</strong>
                        <small className="pull-right text-muted"><i className="far fa-clock"></i> 12 mins ago</small>
                      </div>
                      <hr className="w-100"/>
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                      </p>
                    </div>
                  </li>
                  <li className="d-flex justify-content-between mb-4">
                    <div className="chat-body white p-3 z-depth-1">
                      <div className="header">
                        <strong className="primary-font">Dustin Irving</strong>
                        <small className="pull-right text-muted"><i className="far fa-clock"></i> 13 mins ago</small>
                      </div>
                      <hr className="w-100"/>
                      <p className="mb-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                        laudantium.
                      </p>
                    </div>
                    <img style={styles.avatar} src="https://avatars2.githubusercontent.com/u/53638843?s=400&u=acd763e9615d8a0f1de970908169e8d5aa045bf7&v=4" alt="avatar" className="avatar rounded-circle d-flex align-self-center mr-2 z-depth-1"/>
                  </li>
                  <li className="d-flex justify-content-between mb-4 pb-3">
                    <img style={styles.avatar} src="https://avatars3.githubusercontent.com/u/59458188?s=460&u=6a9312004c86a260b27601dbf306e7cf0b167e9e&v=4" alt="avatar" className="avatar rounded-circle d-flex align-self-center mr-2 z-depth-1"/>
                    <div className="chat-body white p-3 ml-2 z-depth-1">
                      <div className="header">
                        <strong className="primary-font">Diego Lehyt</strong>
                        <small className="pull-right text-muted"><i className="far fa-clock"></i> 12 mins ago</small>
                      </div>
                      <hr className="w-100"/>
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="white">
                  <div className="form-group basic-textarea">
                    <textarea className="form-control pl-2 my-0" id="exampleFormControlTextarea2" rows="3" placeholder="Type your message here..."></textarea>
                  </div>
                </div>
                <button type="button" className="btn btn-outline-green btn-rounded btn-sm waves-effect waves-dark float-right">Send</button>

              </div>

            </div>


          </div>
    

        </div>
      </div>

    </>
  )
}



export default Home

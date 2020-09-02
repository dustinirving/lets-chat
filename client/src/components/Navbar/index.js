import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import "./style.css";

const styles = {
  navB: {
    fontFamily: "'Londrina Solid', cursive"
  },
  imgB: {
    marginRight: "10px"
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
function Navbar() {


  
  return (
      <nav className="mb-1 navbar navbar-expand-lg navbar-dark success-color lighten-1">
        <Link className="navbar-brand" to="/" style={styles.navB}><img src="https://raw.githubusercontent.com/dustinirving/lets-chat/master/client/public/reunion.png" width="40px" height="40px" tabindex="-1" style={styles.imgB} alt="logo"/>Lets Chat!</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-555"
          aria-controls="navbarSupportedContent-555" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent-555">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/home">Home
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Profile</a>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto nav-flex-icons">
            <li className="nav-item">
              <a className="nav-link waves-effect waves-light">1
                <i className="fas fa-envelope"></i>
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
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>

  );
}

export default Navbar;

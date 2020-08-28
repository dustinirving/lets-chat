import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import "./style.css";

const styles = {
  navB: {
    fontFamily: "'Londrina Solid', cursive",
    fontWeight: 'bold'

  },
  avatar: {
    width: "100px"
  }
}

// Depending on the current path, this component sets the "active" classNameName on the appropriate navigation link item
function Conversation() {


  
  return (
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
  );
}

export default Conversation;

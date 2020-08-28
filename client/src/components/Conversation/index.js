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

function Conversation(props) {


  
  return (
      <li className="p-2">
        <a href="#" className="d-flex justify-content-between">
          <img style={styles.avatar} src={props.msg.img} alt="avatar" className="avatar rounded-circle d-flex align-self-center mr-2 z-depth-1"/>
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

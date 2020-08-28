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


function Message(props) {

  // change bool for current user and compare between the two people inside the conversation
  // "onlineUser.email === props.msg.email"
  
  return (
    <>
      {
        props.msg.bool
        ?
          <li className="d-flex justify-content-between mb-4">
            <img style={styles.avatar} src={props.msg.img} alt="avatar" className="avatar rounded-circle d-flex align-self-center mr-2 z-depth-1"/>
            <div className="chat-body white p-3 ml-2 z-depth-1">
              <div className="header">
                <strong className="primary-font">{props.msg.email}</strong>
                <small className="pull-right text-muted"><i className="far fa-clock"></i> 12 mins ago</small>
              </div>
              <hr className="w-100"/>
              <p className="mb-0">
                {props.msg.content}
              </p>
            </div>
          </li>
        :
          <li className="d-flex justify-content-between mb-4">
            <div className="chat-body white p-3 z-depth-1">
              <div className="header">
                <strong className="primary-font">{props.msg.email}</strong>
                <small className="pull-right text-muted"><i className="far fa-clock"></i> 13 mins ago</small>
              </div>
              <hr className="w-100"/>
              <p className="mb-0">
                {props.msg.content}
              </p>
            </div>
            <img style={styles.avatar} src={props.msg.img} alt="avatar" className="avatar rounded-circle d-flex align-self-center mr-2 z-depth-1"/>
          </li>
      }
    </>

  );
}

export default Message;

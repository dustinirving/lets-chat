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


function DropDown(props) {
  
  return (
    <>
      <a className="dropdown-item" href="#">{props._id}</a>
      <div className="dropdown-divider"></div> 
    </>
  );
}

export default DropDown;

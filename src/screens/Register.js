import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/commercelogo.png';
import RequestHandler from '../components/RequestHandler.js';
import gitIcon from '../images/25231.png'
import '../styles/Register.css'

function Register(){
  return(
    <div className="register-page">
      <nav className = "navbar">
        <img src={logo} className="brand-logo" alt="logo" />
        <a href="https://github.com/Kirknasty54" >
          <img src ={gitIcon} className="git-icon" alt="git" />
        </a>
      </nav>
    </div>
  );
}
export default Register;

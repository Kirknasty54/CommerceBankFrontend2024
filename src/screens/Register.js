import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/commercelogo.png';
import RequestHandler from '../components/RequestHandler.js';
import gitIcon from '../images/25231.png'
import '../styles/Register.css'
import { eventWrapper } from '@testing-library/user-event/dist/utils';


function Register() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [confirmEmail, setConfirmEmail] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.')
      return
    }
    const response = await RequestHandler('registerSendRequest', { username: username })
    console.log(response)

    if (!response.exists) {
      console.log("USERNAME DOESNT EXIST YOU FUCKING MORON")
      navigate('/register')
    } else {
      console.log("USERNAME ALREADY EXISTS YOU FUCKING DUMBASS");
      setError('Looks like you are already a user');
    }
  }

  return (
    <div className="register-page">
      <nav className="navbar">
        <img src={logo} className="brand-logo" alt="logo" />
        <a href="https://github.com/Kirknasty54" >
          <img src={gitIcon} className="git-icon" alt="git" />
        </a>
      </nav>
      <div className="register-container">
        <form onSubmit={handleSubmit}>
          <h2 className="register-text">Register</h2>
          {error && <div className='error-message'>{error}</div>}
          <div className='input-group'>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e => setUsername(e.target.value))}
              required
            />
          </div>
          <div className='input-group'>
            <input
              type="email"
              placeholder='Email'
              value={email}
              onChange={(e => setEmail(e.target.value))}
              required
            />
          </div>
          <div className='input-group'>
            <input
              type="email"
              placeholder='Confirm Email'
              value={confirmEmail}
              onChange={(e => setConfirmEmail(e.target.value))}
              required
            />
          </div>
          <button type="submit" className="register-button">Register</button>
        </form>
      </div>
    </div>
  );
}
export default Register;

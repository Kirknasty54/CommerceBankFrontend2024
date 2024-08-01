// Verify login information then create a session (probably through local storage)
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import logo from '../images/commercelogo.png';
import gitIcon from '../images/25231.png'
import RequestHandler from '../components/RequestHandler';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const session = localStorage.getItem('session');
    if (session) {
      navigate('/');
    }
  }, [navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const action = event.nativeEvent.submitter.name;

    if (action === 'login') {
      const response = await RequestHandler('auth', { username: username, password: password })
      console.log(response.authenticated)

      if (response.authenticated) {
        localStorage.setItem('session', `${response.uid}`);
        localStorage.setItem('apps', JSON.stringify(response.applications));
        localStorage.setItem('admin', response.admin);
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        navigate('/');
      } else {
        setError('Incorrect username or password.');
      }
    } else if (action === 'register') {
      const response = await RequestHandler('check', { username: username })
      console.log(response)
      console.log("REGISTER WAS CLICKED FUCK FACE");

      if (!response.exists) {
        console.log("USERNAME DOESNT EXIST YOU FUCKING MORON")
        navigate('/register')
      } else {
        console.log("USERNAME ALREADY EXISTS YOU FUCKING DUMBASS");
        setError('Looks like you are already a user');
      }
    }

  };

  //const handleRegisterClick = () => {
  //  navigate('/register');
  //};

  return (
    <div className="login-page">
      <nav className="navbar">
        <img src={logo} className="brand-logo" alt="logo" />
        <a href="https://github.com/Kirknasty54" target="_blank" rel="noreferrer">
          <img src={gitIcon} className="git-icon" alt="git" />
        </a>
      </nav>
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <h2 className="signin-text">Login</h2>
          {error && <div className="error-message">{error}</div>}
          <div className="input-group">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" name="login" className="login-button">Login</button>
          <button type="submit" name="register" className="register-button">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Login;

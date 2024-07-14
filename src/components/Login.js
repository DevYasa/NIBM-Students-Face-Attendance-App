// src/components/Login.js
import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const validUsername = "admin"; // replace with your username
    const validPassword = "admin123"; // replace with your password

    if (username === validUsername && password === validPassword) {
      console.log("Login successful");
      setErrorMessage(''); // Clear any previous error message
      navigate('/dashboard'); // Redirect to dashboard
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleBack = () => {
    navigate('/attendance');
  };

  return (
    <div className="login-container">
      
      <div className="login-box">
      <button className="back-button" onClick={handleBack}>
        <FaArrowLeft />
      </button>
        <img src="/nibm-logo.png" alt="NIBM Logo" className="logo" />
        <form onSubmit={handleLogin}>
          <label>Username</label>
          <div className="input-container">
            <input
              type="text"
              placeholder="Insert Your Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <label>Password</label>
          <div className="input-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Insert Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span onClick={togglePasswordVisibility} className="password-toggle">
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button className="login-button" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

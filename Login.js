
import React, { useState } from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

import './Login.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((u) => u.username === username && u.password === password);

    if (user) {
      alert('Login successful');
      onLogin(user);
    } else {
      alert('Invalid username or password');
    }
  };

  const handleGoogleLogin = () => {
    // Implement Google login functionality
    alert('Login with Google');
  };

  const handleFacebookLogin = () => {
    // Implement Facebook login functionality
    alert('Login with Facebook');
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          className="username"
          placeholder="Enter your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          className="password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <button type="button" onClick={handleLogin}>
          Login
        </button>
        <p>
          Forget password?<a href=''>send</a>
        </p>

        {/* Google Login Button */}
        <button type="button" className="google-login-btn" onClick={handleGoogleLogin}>
          <FaGoogle /> Login with Google
        </button>
        <br />

        {/* Facebook Login Button */}
        <button type="button" className="facebook-login-btn" onClick={handleFacebookLogin}>
          <FaFacebook /> Login with Facebook
        </button>
      </form>
    </div>
  );
};

export default Login;


import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    if (!firstName || !lastName || !email || !username || !password || !confirmPassword) {
      alert('Please fill in all the fields');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check if the username or email already exists//
    const existingUser = users.find((user) => user.username === username || user.email === email);
    if (existingUser) {
      alert('User with the same username or email already exists');
      return;
    }

    const newUser = {
      firstName,
      lastName,
      email,
      username,
      password,
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    alert('User registered successfully');
  };
  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form>
       

        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter your first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          placeholder="Enter your last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
         <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="confirmpassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
<br/>
        <button type="button" onClick={handleSignup}>
          Signup
        </button>
        <br></br>
        <label htmlFor="username">Already have an account?
  <Button component={Link} to="/Login">login</Button>
</label>


      </form>
    </div>
  );
};

export default Signup;

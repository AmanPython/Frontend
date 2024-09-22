import React, { useState } from 'react';
import axios from 'axios';
import BASE_URL from '../config';

function UserLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}api/token/`, {
        username,
        password,
      });
      const { access, refresh } = response.data;
      localStorage.setItem('accessToken', access);
      localStorage.setItem('refreshToken', refresh);
      setMessage('Logged in successfully!');
    } catch (error) {
      setMessage('Login failed. Invalid credentials.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default UserLogin;

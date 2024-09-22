import React, { useState } from 'react';
import axios from 'axios';
import BASE_URL from '../config';
import { TextField, Button, Typography, Paper, Container } from '@mui/material';

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
    <Container maxWidth="xs">
      <Paper style={{ padding: 20, marginTop: 50 }}>
        <Typography variant="h5">Login</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            type="text"
            placeholder="Username"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            placeholder="Password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" color="primary" variant="contained" style={{ marginTop: 20 }}>Login</Button>
        </form>
        <Typography style={{ marginTop: 20 }}>{message}</Typography>
      </Paper>
    </Container>
  );
}

export default UserLogin;

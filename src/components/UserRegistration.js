import React, { useState } from 'react';
import axios from 'axios';
import BASE_URL from '../config';
import { TextField, Button, Typography, Paper, Container } from '@mui/material';

function UserRegistration() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/api/accounts/register/`, {
        username,
        email,
        password,
      });
      setMessage('User created successfully!');
    } catch (error) {
      setMessage('Failed to create user.');
    }
  };

  return (
    <Container maxWidth="xs">
      <Paper style={{ padding: 20, marginTop: 50 }}>
        <Typography variant="h5">Register</Typography>
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
            label="Email"
            type="email"
            placeholder="Email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          <Button type="submit" color="primary" variant="contained" style={{ marginTop: 20 }}>Register</Button>
        </form>
        <Typography style={{ marginTop: 20 }}>{message}</Typography>
      </Paper>
    </Container>
  );
}

export default UserRegistration;

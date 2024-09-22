import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import Dashboard from './components/Dashboard';
import UserRegistration from './components/UserRegistration';
import UserLogin from './components/UserLogin';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkAuth = () => {
    const token = localStorage.getItem('accessToken');
    console.log("Token found:", token);  // For debugging
    setIsAuthenticated(!!token);
  };

  // This useEffect will now correctly re-run whenever `isAuthenticated` changes
  useEffect(() => {
    window.addEventListener("storage", checkAuth);  // Listen to storage changes
    checkAuth();  // Initial check on mount
    return () => {
      window.removeEventListener("storage", checkAuth);
    };
  }, []);

  const handleLogin = (token) => {
    console.log("Setting token and updating auth status"); // Debugging line
    localStorage.setItem('accessToken', token);
    setIsAuthenticated(true);  // Directly set authenticated to true
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    setIsAuthenticated(false);  // Directly set authenticated to false
  };

  return (
    <Container>
      {!isAuthenticated ? (
        <React.Fragment>
          <UserRegistration />
          <UserLogin onLoginSuccess={handleLogin} />
        </React.Fragment>
      ) : (
        <Dashboard onLogout={handleLogout} />
      )}
    </Container>
  );
}

export default App;

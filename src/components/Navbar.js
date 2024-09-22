import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function Navbar({ onLogout }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Video Management Dashboard
        </Typography>
        <Button color="inherit" onClick={onLogout}>Logout</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

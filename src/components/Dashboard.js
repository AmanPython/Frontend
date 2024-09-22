import React, { useState } from 'react';
import { Container, Tab, Tabs, Typography, Box, Grid } from '@mui/material';
import VideoUpload from './VideoUpload';
import VideoList from './VideoList';
import VideoTrim from './VideoTrim';
import VideoMerge from './VideoMerge';
import ShareVideo from './ShareVideo';
import Navbar from './Navbar'; 

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function Dashboard() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    window.location.reload();
  };

  return (
    <Container maxWidth="lg">
      <Navbar onLogout={handleLogout} />
      <Typography variant="h4" gutterBottom>Welcome to Your Dashboard!</Typography>
      <Tabs value={tabIndex} onChange={handleTabChange} aria-label="video operations tabs">
        <Tab label="Upload Video" />
        <Tab label="Merge Video" />
        <Tab label="Trim Video" />
        <Tab label="Share Video" />
        <Tab label="View Videos" />
      </Tabs>
      <TabPanel value={tabIndex} index={0}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <VideoUpload />
          </Grid>
          <Grid item xs={12}>
            <VideoList />
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={tabIndex} index={1}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <VideoMerge />
          </Grid>
          <Grid item xs={12}>
            <VideoList />
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={tabIndex} index={2}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <VideoTrim />
          </Grid>
          <Grid item xs={12}>
            <VideoList />
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={tabIndex} index={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <ShareVideo />
          </Grid>
          <Grid item xs={12}>
            <VideoList />
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={tabIndex} index={4}>
        <VideoList />
      </TabPanel>
    </Container>
  );
}

export default Dashboard;

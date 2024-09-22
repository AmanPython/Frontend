import React, { useState } from 'react';
import VideoUpload from './components/VideoUpload';
import VideoList from './components/VideoList';
import VideoTrim from './components/VideoTrim';
import VideoMerge from './components/VideoMerge';
import ShareVideo from './components/ShareVideo';
import UserRegistration from './components/UserRegistration';
import UserLogin from './components/UserLogin';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkAuth = () => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      setIsAuthenticated(true);
    }
  };

  React.useEffect(() => {
    checkAuth();
  }, []);

  return (
    <div>
      {!isAuthenticated ? (
        <div>
          <UserRegistration />
          <UserLogin />
        </div>
      ) : (
        <div>
          <h2>Welcome! You are logged in.</h2>
          <VideoList />
          <VideoUpload />
          <VideoTrim />
          <VideoMerge />
          <ShareVideo />
        </div>
      )}
    </div>
  );
}

export default App;

import React from 'react';
import VideoUpload from './components/VideoUpload';
import VideoList from './components/VideoList';
import VideoTrim from './components/VideoTrim';
import VideoMerge from './components/VideoMerge';
import ShareVideo from './components/ShareVideo';

function App() {
  return (
    <div>
      <VideoList />
      <VideoUpload />
      <VideoTrim />
      <VideoMerge />
      <ShareVideo />
    </div>
  );
}

export default App;

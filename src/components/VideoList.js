import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BASE_URL from '../config';
import VideoPlayerPopup from './VideoPlayerPopup';

function VideoList() {
  const [videos, setVideos] = useState([]);
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);
  const [streamUrl, setStreamUrl] = useState('');

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = () => {
    axios
      .get(`${BASE_URL}/api/videos/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      .then((response) => {
        setVideos(response.data);
      })
      .catch((error) => {
        console.error('Error fetching videos:', error);
      });
  };

  const streamVideo = (id) => {
    axios
      .get(`${BASE_URL}/api/share/${id}/`, {  // Correct endpoint with trailing slash
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      .then((response) => {
        setStreamUrl(response.data.link);  // Directly set the stream URL from the first API response
        setShowVideoPlayer(true);
      })
      .catch((error) => {
        console.error('Error streaming video:', error);
      });
  };
  

  const deleteVideo = (id) => {
    axios
      .delete(`${BASE_URL}/api/videos/${id}/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      .then(() => {
        fetchVideos(); // Refresh the video list after deletion
      })
      .catch((error) => {
        console.error('Error deleting video:', error);
      });
  };

  return (
    <div>
      <h2>Video List</h2>
      {videos.map((video) => (
        <div key={video.id}>
          <p>ID: {video.id}</p>
          <p>Title: {video.title}</p>
          <button onClick={() => streamVideo(video.id)}>Stream</button>
          <button onClick={() => deleteVideo(video.id)}>Delete</button>
        </div>
      ))}
      {showVideoPlayer && (
        <VideoPlayerPopup
          isOpen={showVideoPlayer}
          onClose={() => setShowVideoPlayer(false)}
          streamUrl={streamUrl}
        />
      )}
    </div>
  );
}

export default VideoList;

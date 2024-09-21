import React, { useEffect, useState } from 'react';
import axios from 'axios';

function VideoList() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchVideos();
    }, []);

    const fetchVideos = () => {
        axios.get("http://localhost:8000/api/videos/")
        .then(response => {
            setVideos(response.data);
        })
        .catch(error => {
            console.error("Error fetching videos:", error);
        });
    };

    const deleteVideo = (id) => {
        axios.delete(`http://localhost:8000/api/videos/${id}/`)
        .then(response => {
            fetchVideos(); // Refresh list after deletion
        })
        .catch(error => {
            console.error("Error deleting video:", error);
        });
    };

    const updateVideo = (video) => {
        // Placeholder function for update
    };

    return (
        <div>
            <h2>Video List</h2>
            {videos.map(video => (
                <div key={video.id}>
                    <p>Title: {video.title}</p>
                    <p>Size: {video.file_size} bytes</p>
                    <button onClick={() => deleteVideo(video.id)}>Delete</button>
                    <button onClick={() => updateVideo(video)}>Update</button>
                </div>
            ))}
        </div>
    );
}

export default VideoList;

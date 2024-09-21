import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DownloadPopup from './DownloadPopup';

function VideoList() {
    const [videos, setVideos] = useState([]);
    const [showDownloadPopup, setShowDownloadPopup] = useState(false);
    const [downloadUrl, setDownloadUrl] = useState('');

    useEffect(() => {
        fetchVideos();
    }, []);

    const fetchVideos = () => {
        axios.get("http://192.168.29.170:8000/api/videos/")
        .then(response => {
            setVideos(response.data);
        })
        .catch(error => {
            console.error("Error fetching videos:", error);
        });
    };

    const downloadVideo = (id) => {
        // This will directly trigger browser to download the video
        window.location.href = `http://192.168.29.170:8000/api/videos/download/${id}/`;
    };

    const deleteVideo = (id) => {
        axios.delete(`http://192.168.29.170:8000/api/videos/${id}/`)
        .then(response => {
            fetchVideos(); // Refresh list after deletion
        })
        .catch(error => {
            console.error("Error deleting video:", error);
        });
    };

    return (
        <div>
            <h2>Video List</h2>
            {videos.map(video => (
                <div key={video.id}>
                    <p>ID: {video.id}</p>
                    <p>Title: {video.title}</p>
                    <button onClick={() => downloadVideo(video.id)}>Download</button>
                    <button onClick={() => deleteVideo(video.id)}>Delete</button>
                    {/* Remove handleVideoOperation if not needed, or adjust per below note */}
                </div>
            ))}
            <DownloadPopup
                isOpen={showDownloadPopup}
                onClose={() => setShowDownloadPopup(false)}
                downloadUrl={downloadUrl}
            />
        </div>
    );
}

export default VideoList;

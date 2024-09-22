// src/components/VideoMerge.js
import React, { useState } from 'react';
import axiosInstance from './axiosInstance';

function VideoMerge() {
    const [videoIds, setVideoIds] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        const ids = videoIds.split(',').map(id => id.trim());
        axiosInstance.post('/api/merge/', { video_ids: ids })
            .then(response => alert('Videos merged successfully'))
            .catch(error => alert('Error merging videos'));
    };

    return (
        <div>
            <h2>Merge Videos</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Video IDs (comma separated)" value={videoIds} onChange={e => setVideoIds(e.target.value)} />
                <button type="submit">Merge Videos</button>
            </form>
        </div>
    );
}

export default VideoMerge;

// src/components/VideoTrim.js
import React, { useState } from 'react';
import axios from 'axios';

function VideoTrim() {
    const [videoId, setVideoId] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        axios.post(`http://192.168.29.170:8000/api/trim/${videoId}/`, { start, end })
            .then(response => alert('Video trimmed successfully'))
            .catch(error => alert('Error trimming video'));
    };

    return (
        <div>
            <h2>Trim Video</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Video ID" value={videoId} onChange={e => setVideoId(e.target.value)} />
                <input type="text" placeholder="Start Time (seconds)" value={start} onChange={e => setStart(e.target.value)} />
                <input type="text" placeholder="End Time (seconds)" value={end} onChange={e => setEnd(e.target.value)} />
                <button type="submit">Trim Video</button>
            </form>
        </div>
    );
}

export default VideoTrim;

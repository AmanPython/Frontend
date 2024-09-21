// src/components/ShareVideo.js
import React, { useState } from 'react';
import axios from 'axios';

function ShareVideo() {
    const [videoId, setVideoId] = useState('');
    const [link, setLink] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        axios.get(`http://localhost:8000/api/share/${videoId}/`)
            .then(response => {
                setLink(response.data.link);
            })
            .catch(error => alert('Error generating link'));
    };

    return (
        <div>
            <h2>Share Video</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Video ID" value={videoId} onChange={e => setVideoId(e.target.value)} />
                <button type="submit">Generate Link</button>
            </form>
            {link && <div><h3>Shareable Link:</h3><a href={link}>{link}</a></div>}
        </div>
    );
}

export default ShareVideo;

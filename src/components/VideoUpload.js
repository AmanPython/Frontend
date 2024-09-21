// src/components/VideoUpload.js
import React, { useState } from 'react';
import axios from 'axios';

function VideoUpload() {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');

    const onFileChange = event => {
        setFile(event.target.files[0]);
    };

    const onTitleChange = event => {
        setTitle(event.target.value);
    };

    const onFileUpload = () => {
        const formData = new FormData();
        formData.append("title", title); // Append title to the form data
        formData.append("video_file", file);

        axios.post("http://localhost:8000/api/upload/", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            alert('File uploaded successfully');
            setTitle(''); // Reset title after successful upload
            setFile(null); // Optionally reset file input
        })
        .catch(error => {
            alert('Error uploading file');
            console.error('Upload error:', error?.response?.data?.detail);
        });
    };

    return (
        <div>
            <h2>Upload Video</h2>
            <input
                type="text"
                value={title}
                onChange={onTitleChange}
                placeholder="Enter video title"
                style={{ display: 'block', marginBottom: '10px' }}
            />
            <input
                type="file"
                onChange={onFileChange}
                style={{ display: 'block', marginBottom: '10px' }}
            />
            <button onClick={onFileUpload}>Upload!</button>
        </div>
    );
}

export default VideoUpload;

import React from 'react';

function DownloadPopup({ isOpen, onClose, downloadUrl }) {
    if (!isOpen) return null;

    return (
        <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1000, background: 'white', padding: '20px', border: '1px solid black' }}>
            <h4>Download Ready</h4>
            <p>Click below to download your video:</p>
            <a href={downloadUrl} download onClick={onClose}>Download Video</a>
            <button onClick={onClose} style={{ display: 'block', marginTop: '20px' }}>Close</button>
        </div>
    );
}

export default DownloadPopup;
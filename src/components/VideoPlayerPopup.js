import React from 'react';

function VideoPlayerPopup({ isOpen, onClose, streamUrl }) {
  if (!isOpen) return null;

  const videoType = determineVideoType(streamUrl); // Function to determine the MIME type

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <button onClick={onClose} style={{ position: 'fixed', top: 20, right: 20 }}>Close</button>
      <video width="80%" height="auto" controls autoPlay style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <source src={streamUrl} type={videoType} />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

function determineVideoType(url) {
  if (url.includes('.m3u8')) {
    return 'application/x-mpegURL'; // for HLS streams
  } else if (url.includes('.mpd')) {
    return 'application/dash+xml'; // for MPEG-DASH
  } else {
    return 'video/mp4'; // default to MP4 if the type is not determined
  }
}

export default VideoPlayerPopup;

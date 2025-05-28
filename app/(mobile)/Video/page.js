'use client';
import React, { useState } from 'react';

function VideoPage() {
  const [previewUrl, setPreviewUrl] = useState(null);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('video/')) {
      setError('กรุณาเลือกเฉพาะไฟล์วิดีโอเท่านั้น');
      setPreviewUrl(null);
      return;
    }

    setError('');
    const videoUrl = URL.createObjectURL(file);
    setPreviewUrl(videoUrl);
  };

  return (
    <div style={{ padding: 20, color: 'white' }}>
      <h1>อัปโหลดวิดีโอ</h1>
      <input type="file" accept="video/*" onChange={handleFileChange} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {previewUrl && (
        <div style={{ marginTop: 20 }}>
          <video src={previewUrl} controls width="100%" />
        </div>
      )}
    </div>
  );
}

export default VideoPage;

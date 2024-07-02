// src/pages/Services.jsx
import React, { useRef } from 'react';

const Services = () => {
  const videoRefs = [useRef(null), useRef(null), useRef(null)];

  const openFullscreen = (videoRef) => {
    const videoElement = videoRef.current;
    if (videoElement.requestFullscreen) {
      videoElement.requestFullscreen();
    } else if (videoElement.mozRequestFullScreen) { // Firefox
      videoElement.mozRequestFullScreen();
    } else if (videoElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
      videoElement.webkitRequestFullscreen();
    } else if (videoElement.msRequestFullscreen) { // IE/Edge
      videoElement.msRequestFullscreen();
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 bg-gray-400-200">Services Page</h1>
      <p>We will Upadate Web Series .</p>
      
      <div className="mt-8 bg">
        <h2 className="text-xl font-semibold mb-4">Prison Break  S01 </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="relative video-container">
            <h1>S01 E01</h1>
            <video ref={videoRefs[0]} controls className="w-full h-auto" poster="./poster1.jpg">
              <source src="/video1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button
              onClick={() => openFullscreen(videoRefs[0])}
              // className="absolute top-2 right-2  text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none"
            >
              {/* Fullscreen */}
            </button>
          </div>
          <div className="relative video-container">
            <h1>S01 E02</h1>
            <video ref={videoRefs[1]} controls className="w-full h-auto" poster="path/to/your/poster2.jpg">
              <source src="https://www.youtube.com/watch?v=vzd0HJFINws" type="video/mp4" />
              <link rel="stylesheet" href="https://www.youtube.com/watch?v=vzd0HJFINws" />
              Your browser does not support the video tag.
            </video>
            <button
              onClick={() => openFullscreen(videoRefs[1])}
              // className="absolute top-2 right-2 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none"
            >
              Fullscreen
            </button>
          </div>
          <div className="relative video-container">
            <h1>S01 E03</h1>
            <video ref={videoRefs[2]} controls className="w-full h-auto" poster="path/to/your/poster3.jpg">
              <source src="/video3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button
              onClick={() => openFullscreen(videoRefs[2])}
              // className="absolute top-2 right-2  text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none"
            >
              Fullscreen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

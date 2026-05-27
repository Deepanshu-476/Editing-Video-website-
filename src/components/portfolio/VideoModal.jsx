// src/components/portfolio/VideoModal.jsx
import React, { useEffect, useState } from 'react';
import { FaTimes, FaYoutube, FaVideo } from 'react-icons/fa';

const VideoModal = ({ project, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Extract video ID from YouTube URL
  const getYouTubeEmbedUrl = (url) => {
    if (!url) return null;
    
    // Handle different YouTube URL formats
    let videoId = null;
    
    if (url.includes('youtube.com/embed/')) {
      videoId = url.split('/embed/')[1]?.split('?')[0];
    } else if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1]?.split('?')[0];
    } else if (url.includes('youtube.com/watch')) {
      const params = new URLSearchParams(url.split('?')[1]);
      videoId = params.get('v');
    } else {
      return url; // Return as-is if not YouTube URL
    }
    
    return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : null;
  };

  const embedUrl = getYouTubeEmbedUrl(project.videoUrl);
  const isYouTube = embedUrl && embedUrl.includes('youtube.com');

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
      onClick={onClose}
    >
      <div 
        className="relative max-w-5xl w-full bg-darker rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors flex items-center justify-center"
        >
          <FaTimes size={20} />
        </button>

        {/* Video Container */}
        <div className="relative bg-black">
          {isYouTube ? (
            <div className="aspect-video">
              <iframe
                src={embedUrl}
                title={project.title}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onLoad={() => setIsLoading(false)}
              ></iframe>
            </div>
          ) : (
            <div className="aspect-video bg-gradient-to-br from-purple-900 to-pink-900 flex items-center justify-center">
              {project.videoUrl ? (
                <video
                  src={project.videoUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                  onLoadedData={() => setIsLoading(false)}
                />
              ) : (
                <div className="text-center">
                  <FaVideo className="text-white text-6xl mb-4 opacity-50" />
                  <p className="text-gray-300">Video preview not available</p>
                </div>
              )}
            </div>
          )}
          
          {/* Loading Spinner */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/80">
              <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
        </div>

        {/* Video Info */}
        <div className="p-6 bg-darker">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs capitalize">
              {project.category}
            </span>
            {project.duration && (
              <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs">
                {project.duration}
              </span>
            )}
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
          
          {project.client && (
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Client:</span>
              <span className="text-gray-300">{project.client}</span>
            </div>
          )}
          
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag, index) => (
                <span key={index} className="px-2 py-1 bg-gray-800 text-gray-400 rounded text-xs">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
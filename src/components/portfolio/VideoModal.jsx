// src/components/portfolio/VideoModal.jsx
import React, { useEffect, useState } from 'react';
import { FaTimes, FaVideo } from 'react-icons/fa';
import { IMAGE_URL } from '../../services/api';

const VideoModal = ({ project, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);

  const resolveMediaUrl = (url) => {
    if (!url || url === '#') return null;
    if (/^https?:\/\//i.test(url)) return url;
    return `${IMAGE_URL}${url.startsWith('/') ? url : `/${url}`}`;
  };

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

  const sourceVideoUrl =
    project.videoUrl ||
    project.video ||
    project.videoFile ||
    project.fileUrl ||
    project.url;
  const embedUrl = getYouTubeEmbedUrl(sourceVideoUrl);
  const isYouTube = embedUrl && embedUrl.includes('youtube.com');
  const videoUrl = resolveMediaUrl(sourceVideoUrl);
  const tags = Array.isArray(project.tags)
    ? project.tags
    : String(project.tags || '')
        .split(',')
        .map((tag) => tag.trim())
        .filter(Boolean);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
      onClick={onClose}
    >
      <div 
        className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
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
            <div className="aspect-video bg-gradient-to-br from-slate-900 via-teal-900 to-indigo-900 flex items-center justify-center">
              {videoUrl ? (
                <video
                  src={videoUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                  onLoadedData={() => setIsLoading(false)}
                />
              ) : (
                <div className="text-center">
                  <FaVideo className="text-white text-6xl mb-4 opacity-50" />
                  <p className="text-white/80">Video preview not available</p>
                </div>
              )}
            </div>
          )}
          
          {/* Loading Spinner */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/80">
              <div className="w-12 h-12 border-4 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
        </div>

        {/* Video Info */}
        <div className="p-6 bg-white">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-xs capitalize">
              {project.category}
            </span>
            {project.duration && (
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs">
                {project.duration}
              </span>
            )}
          </div>
          
          <h3 className="text-2xl font-bold text-slate-950 mb-2">{project.title}</h3>
          <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
          
          {project.client && (
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span>Client:</span>
              <span className="text-slate-700">{project.client}</span>
            </div>
          )}
          
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {tags.map((tag, index) => (
                <span key={index} className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs">
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

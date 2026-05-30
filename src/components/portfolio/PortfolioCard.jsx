// src/components/portfolio/PortfolioCard.jsx
import React from 'react';
import { FaPlay, FaVideo } from 'react-icons/fa';
import { IMAGE_URL } from '../../services/api';

const PortfolioCard = ({ project, onClick }) => {
  const resolveMediaUrl = (url) => {
    if (!url || url === '#') return null;
    if (/^https?:\/\//i.test(url)) return url;
    return `${IMAGE_URL}${url.startsWith('/') ? url : `/${url}`}`;
  };

  // Get YouTube video ID from URL
  const getYouTubeThumbnail = (url) => {
    if (!url) return null;
    const match = url.match(/(?:youtube\.com\/embed\/|youtu\.be\/|youtube\.com\/watch\?v=)([^&?#]+)/);
    return match ? `https://img.youtube.com/vi/${match[1]}/mqdefault.jpg` : null;
  };

  const videoUrl =
    project.videoUrl ||
    project.video ||
    project.videoFile ||
    project.fileUrl ||
    project.url;
  const thumbnail = resolveMediaUrl(project.thumbnail) || getYouTubeThumbnail(videoUrl);
  const uploadedVideoUrl = resolveMediaUrl(videoUrl);

  return (
    <div className="group cursor-pointer" onClick={onClick}>
      <div className="relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
        {/* Thumbnail */}
        <div className="aspect-video relative">
          {thumbnail ? (
            <img 
              src={thumbnail} 
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : uploadedVideoUrl ? (
            <video
              src={uploadedVideoUrl}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              muted
              playsInline
              preload="metadata"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-slate-900 via-teal-900 to-indigo-900 flex items-center justify-center">
              <FaVideo className="text-white text-5xl opacity-50" />
            </div>
          )}
          
          {/* Overlay with play button */}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform backdrop-blur-sm">
              <FaPlay className="text-white text-2xl ml-1" />
            </div>
          </div>
          
          {/* Duration Badge */}
          {project.duration && (
            <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
              {project.duration}
            </div>
          )}
        </div>
        
        {/* Card Info */}
        <div className="p-4">
          <h3 className="text-slate-950 font-semibold text-lg mb-1 line-clamp-1">{project.title}</h3>
          <p className="text-slate-600 text-sm mb-2 line-clamp-2">{project.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-teal-700 font-medium capitalize">{project.category}</span>
            {project.client && (
              <span className="text-xs text-slate-500">{project.client}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;

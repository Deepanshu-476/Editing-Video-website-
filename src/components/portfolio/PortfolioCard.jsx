// src/components/portfolio/PortfolioCard.jsx
import React from 'react';
import { FaPlay, FaYoutube, FaVideo } from 'react-icons/fa';

const PortfolioCard = ({ project, onClick }) => {
  // Get YouTube video ID from URL
  const getYouTubeThumbnail = (url) => {
    if (!url) return null;
    const match = url.match(/(?:youtube\.com\/embed\/|youtu\.be\/|youtube\.com\/watch\?v=)([^&?#]+)/);
    return match ? `https://img.youtube.com/vi/${match[1]}/mqdefault.jpg` : null;
  };

  const thumbnail = project.thumbnail || getYouTubeThumbnail(project.videoUrl);

  return (
    <div className="group cursor-pointer" onClick={onClick}>
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900">
        {/* Thumbnail */}
        <div className="aspect-video relative">
          {thumbnail ? (
            <img 
              src={thumbnail} 
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-purple-900 to-pink-900 flex items-center justify-center">
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
          <h3 className="text-white font-semibold text-lg mb-1 line-clamp-1">{project.title}</h3>
          <p className="text-gray-400 text-sm mb-2 line-clamp-2">{project.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-purple-400 capitalize">{project.category}</span>
            {project.client && (
              <span className="text-xs text-gray-500">{project.client}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
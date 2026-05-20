// src/components/portfolio/VideoModal.jsx
import React, { useEffect } from 'react'
import { FaTimes } from 'react-icons/fa'

const VideoModal = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm" onClick={onClose}>
      <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
        >
          <FaTimes size={24} />
        </button>
        <div className="bg-darker rounded-2xl overflow-hidden">
          <div className="aspect-video bg-gradient-to-br from-purple-900 to-pink-900 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto">
                <FaPlay className="text-white text-3xl ml-1" />
              </div>
              <p className="text-white mt-4">Video Preview</p>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-400">{project.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoModal
// src/components/portfolio/PortfolioCard.jsx
import React from 'react'
import { FaPlay } from 'react-icons/fa'

const PortfolioCard = ({ project, onClick }) => {
  return (
    <div className="group cursor-pointer" onClick={onClick}>
      <div className="relative overflow-hidden rounded-2xl">
        <div className="aspect-video bg-gradient-to-br from-purple-700 to-pink-700 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
              <FaPlay className="text-white text-2xl ml-1" />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-white font-semibold text-lg">{project.title}</h3>
            <p className="text-gray-300 text-sm">{project.category}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioCard
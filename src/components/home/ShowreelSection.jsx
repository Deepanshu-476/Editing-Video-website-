// src/components/home/ShowreelSection.jsx
import React, { useState } from 'react'
import { FaPlay, FaPause } from 'react-icons/fa'

const ShowreelSection = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="py-20 bg-darker">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Showreel</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Watch our best work come to life in this curated collection of our finest projects
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl group">
          <div className="aspect-video bg-gradient-to-br from-purple-900 to-pink-900 flex items-center justify-center">
            {/* Video thumbnail placeholder */}
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-white/30 transition-all group-hover:scale-110">
                <FaPlay className="text-white text-3xl ml-1" />
              </div>
              <p className="text-gray-300">Click to watch showreel</p>
            </div>
          </div>
          
          {/* Play button overlay */}
          <button className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center hover:scale-110 transition-transform">
              <FaPlay className="text-white text-2xl ml-1" />
            </div>
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-5xl mx-auto">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="aspect-video bg-gray-800 rounded-lg overflow-hidden group cursor-pointer">
              <div className="w-full h-full bg-gradient-to-br from-purple-700 to-pink-700 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                <FaPlay className="text-white text-xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ShowreelSection
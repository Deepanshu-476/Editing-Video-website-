// src/components/common/Loader.jsx
import React from 'react'

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-[400px]">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-teal-500/20 rounded-full"></div>
        <div className="absolute top-0 left-0 w-16 h-16 border-4 border-teal-600 rounded-full animate-spin border-t-transparent"></div>
      </div>
    </div>
  )
}

export default Loader

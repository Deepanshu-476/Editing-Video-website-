// src/components/layout/PageBanner.jsx
import React from 'react'

const PageBanner = ({ title, subtitle }) => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20"></div>
      <div className="container-custom relative text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
          {title}
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in animation-delay-200">
          {subtitle}
        </p>
      </div>
    </section>
  )
}

export default PageBanner
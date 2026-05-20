// src/components/common/SectionTitle.jsx
import React from 'react'

const SectionTitle = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        {title.split(' ').map((word, index) => 
          word.toLowerCase() === 'our' || word.toLowerCase() === 'your' || word.toLowerCase() === 'the' ? (
            <span key={index}>{word} </span>
          ) : (
            <span key={index} className="gradient-text">{word} </span>
          )
        )}
      </h2>
      {subtitle && <p className="text-gray-400 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  )
}

export default SectionTitle
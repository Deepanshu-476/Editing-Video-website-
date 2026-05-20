// src/components/portfolio/PortfolioFilter.jsx
import React from 'react'

const PortfolioFilter = ({ categories, filter, setFilter }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setFilter(category)}
          className={`px-6 py-2 rounded-full capitalize transition-all duration-300 ${
            filter === category
              ? 'gradient-bg text-white shadow-lg'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default PortfolioFilter
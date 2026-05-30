// src/components/portfolio/PortfolioFilter.jsx
import React from 'react'

const PortfolioFilter = ({ categories, filter, setFilter }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setFilter(category)}
          className={`px-6 py-2 rounded-full border capitalize transition-all duration-300 ${
            filter === category
              ? 'gradient-bg text-white border-transparent shadow-lg'
              : 'bg-white text-slate-600 border-slate-200 hover:border-teal-400 hover:text-teal-700 hover:bg-teal-50'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default PortfolioFilter

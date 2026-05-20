// src/components/portfolio/PortfolioGrid.jsx
import React, { useState } from 'react'
import PortfolioCard from './PortfolioCard'
import PortfolioFilter from './PortfolioFilter'

const PortfolioGrid = ({ projects }) => {
  const [filter, setFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const categories = ['all', ...new Set(projects.map(p => p.category))]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <>
      <PortfolioFilter categories={categories} filter={filter} setFilter={setFilter} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <PortfolioCard 
            key={project.id} 
            project={project} 
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <VideoModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </>
  )
}

export default PortfolioGrid
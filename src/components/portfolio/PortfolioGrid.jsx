// src/components/portfolio/PortfolioGrid.jsx
import React, { useState } from 'react';
import PortfolioCard from './PortfolioCard';
import PortfolioFilter from './PortfolioFilter';
import VideoModal from './VideoModal';

const PortfolioGrid = ({ projects }) => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  // Get unique categories from projects
  const categories = ['all', ...new Set(projects.map(p => p.category))];

  // Filter projects based on selected category
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <>
      <PortfolioFilter categories={categories} filter={filter} setFilter={setFilter} />
      
      {filteredProjects.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-400">No projects found in this category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <PortfolioCard 
              key={project.id} 
              project={project} 
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      )}

      {selectedProject && (
        <VideoModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </>
  );
};

export default PortfolioGrid;
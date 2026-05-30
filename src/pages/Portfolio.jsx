// src/pages/Portfolio.jsx
import React, { useEffect, useState } from 'react';
import { getAllProjects } from '../services/portfolioService';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageBanner from '../components/layout/PageBanner';
import PortfolioGrid from '../components/portfolio/PortfolioGrid';
import WhatsAppButton from '../components/common/WhatsAppButton';
import Loader from '../components/common/Loader';

const normalizeProjects = (response) => {
  if (Array.isArray(response?.data)) return response.data;
  if (Array.isArray(response?.data?.projects)) return response.data.projects;
  if (Array.isArray(response?.projects)) return response.projects;
  return [];
};

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await getAllProjects(1, 50);

      if (response.success) {
        setProjects(normalizeProjects(response));
      } else {
        setError(response.message || 'Failed to load projects');
      }
    } catch (err) {
      console.error('Error loading projects:', err);
      setError(err.message || err || 'Failed to load projects. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <PageBanner
          title="Our Portfolio"
          subtitle="Explore our best work and see what we can create for you"
        />
        <Loader />
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <PageBanner
          title="Our Portfolio"
          subtitle="Explore our best work and see what we can create for you"
        />
        <div className="container-custom py-20 text-center">
          <p className="text-red-500">{error}</p>
          <button
            onClick={loadProjects}
            className="mt-4 px-6 py-2 gradient-bg rounded-lg text-white"
          >
            Try Again
          </button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <PageBanner
        title="Our Portfolio"
        subtitle="Explore our best work and see what we can create for you"
      />
      <section className="py-20">
        <div className="container-custom">
          {projects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-600">No projects found. Upload some videos from admin panel.</p>
            </div>
          ) : (
            <PortfolioGrid projects={projects} />
          )}
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Portfolio;

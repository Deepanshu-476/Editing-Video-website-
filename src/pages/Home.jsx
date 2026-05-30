// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import { getAllProjects } from '../services/portfolioService';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/home/HeroSection';
import ShowreelSection from '../components/home/ShowreelSection';
import HowItWorks from '../components/home/HowItWorks';
import TrustSection from '../components/home/TrustSection';
import Testimonials from '../components/home/Testimonials';
import CTASection from '../components/home/CTASection';
import WhatsAppButton from '../components/common/WhatsAppButton';
import Loader from '../components/common/Loader';

const Home = () => {
  const [showreelProjects, setShowreelProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadShowreelProjects();
  }, []);

  const normalizeProjects = (response) => {
    const projects = Array.isArray(response?.data)
      ? response.data
      : response.data?.projects || response.projects || [];

    return [...projects].sort((a, b) => {
      const firstDate = new Date(b.createdAt || b.updatedAt || 0).getTime();
      const secondDate = new Date(a.createdAt || a.updatedAt || 0).getTime();
      return firstDate - secondDate;
    });
  };

  const loadShowreelProjects = async () => {
    try {
      const response = await getAllProjects(1, 8);
      if (response.success) {
        setShowreelProjects(normalizeProjects(response));
      }
    } catch (error) {
      console.error('Error loading showreel projects:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <Loader />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <HeroSection />
      <ShowreelSection projects={showreelProjects} />
      <HowItWorks />
      <TrustSection />
      <Testimonials />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Home;

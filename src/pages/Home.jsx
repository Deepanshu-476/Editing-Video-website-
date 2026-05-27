// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import { getFeaturedProjects } from '../services/portfolioService';
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
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadFeaturedProjects();
  }, []);

  const loadFeaturedProjects = async () => {
    try {
      const response = await getFeaturedProjects();
      if (response.success) {
        setFeaturedProjects(response.data);
      }
    } catch (error) {
      console.error('Error loading featured projects:', error);
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
      <ShowreelSection />
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
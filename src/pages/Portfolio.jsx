// src/pages/Portfolio.jsx
import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import PageBanner from '../components/layout/PageBanner'
import PortfolioGrid from '../components/portfolio/PortfolioGrid'
import WhatsAppButton from '../components/common/WhatsAppButton'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Corporate Brand Video',
      category: 'corporate',
      description: 'Professional corporate branding video with motion graphics'
    },
    {
      id: 2,
      title: 'YouTube Vlog Edit',
      category: 'youtube',
      description: 'Dynamic vlog editing with engaging transitions'
    },
    {
      id: 3,
      title: 'Commercial Ad',
      category: 'commercial',
      description: 'High-energy commercial advertisement'
    },
    {
      id: 4,
      title: 'Wedding Highlights',
      category: 'wedding',
      description: 'Romantic wedding highlight video'
    },
    {
      id: 5,
      title: 'Music Video',
      category: 'music',
      description: 'Creative music video with visual effects'
    },
    {
      id: 6,
      title: 'Social Media Ads',
      category: 'social',
      description: 'Short-form content for social platforms'
    }
  ]

  return (
    <>
      <Navbar />
      <PageBanner 
        title="Our Portfolio"
        subtitle="Explore our best work and see what we can create for you"
      />
      <section className="py-20">
        <div className="container-custom">
          <PortfolioGrid projects={projects} />
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default Portfolio
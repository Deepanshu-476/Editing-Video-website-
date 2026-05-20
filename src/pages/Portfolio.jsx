// src/pages/Portfolio.jsx
import React, { useEffect, useState } from 'react'
import { fetchProjects } from '../services/portfolioService'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import PageBanner from '../components/layout/PageBanner'
import PortfolioGrid from '../components/portfolio/PortfolioGrid'
import WhatsAppButton from '../components/common/WhatsAppButton'

const Portfolio = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const res = await fetchProjects()
        setProjects(res?.data || [])
      } catch {
        setProjects([])
      }
    }

    loadProjects()
  }, [])

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
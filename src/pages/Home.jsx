// src/pages/Home.jsx
import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import HeroSection from '../components/home/HeroSection'
import ShowreelSection from '../components/home/ShowreelSection'
import HowItWorks from '../components/home/HowItWorks'
import TrustSection from '../components/home/TrustSection'
import Testimonials from '../components/home/Testimonials'
import CTASection from '../components/home/CTASection'
import WhatsAppButton from '../components/common/WhatsAppButton'

const Home = () => {
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
  )
}

export default Home
// src/components/home/CTASection.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-indigo-600 opacity-10 blur-3xl"></div>
      <div className="container-custom relative">
        <div className="gradient-bg rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Ready to Transform Your Videos?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Let's create something amazing together. Get a free quote today!
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-teal-700 px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 group"
            >
              Get Started Now
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection

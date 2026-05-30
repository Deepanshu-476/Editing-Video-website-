// src/pages/NotFound.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { FaHome } from 'react-icons/fa'

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center pt-32 pb-20">
        <div className="text-center">
          <h1 className="text-8xl font-bold gradient-text mb-4">404</h1>
          <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-slate-600 mb-8">The page you're looking for doesn't exist or has been moved.</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 gradient-bg px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            <FaHome />
            Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default NotFound

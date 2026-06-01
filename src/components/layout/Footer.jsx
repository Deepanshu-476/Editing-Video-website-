// src/components/layout/Footer.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-slate-200">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img
                src="/logo.png"
                alt="EditFlow logo"
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-slate-600 mb-4">
              Professional video editing services that bring your vision to life with creativity and precision.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-500 hover:text-teal-700 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-slate-500 hover:text-teal-700 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-slate-500 hover:text-teal-700 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-slate-500 hover:text-teal-700 transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-slate-500 hover:text-teal-700 transition-colors">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-slate-600 hover:text-teal-700 transition-colors">Home</Link></li>
              <li><Link to="/portfolio" className="text-slate-600 hover:text-teal-700 transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="text-slate-600 hover:text-teal-700 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-600 hover:text-teal-700 transition-colors">Video Editing</a></li>
              <li><a href="#" className="text-slate-600 hover:text-teal-700 transition-colors">Color Grading</a></li>
              <li><a href="#" className="text-slate-600 hover:text-teal-700 transition-colors">Motion Graphics</a></li>
              <li><a href="#" className="text-slate-600 hover:text-teal-700 transition-colors">Sound Design</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-slate-600">
              <li>123 Creative Street</li>
              <li>Los Angeles, CA 90001</li>
              <li>Email: hello@editflow.com</li>
              <li>Phone: (555) 123-4567</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 text-center text-slate-500">
          <p>&copy; 2024 EditFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

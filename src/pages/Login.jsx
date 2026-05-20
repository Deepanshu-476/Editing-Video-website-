// src/pages/Login.jsx
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaEnvelope, FaLock, FaSignInAlt } from 'react-icons/fa'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const Login = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simple demo authentication
    if (formData.email === 'admin@editflow.com' && formData.password === 'admin123') {
      localStorage.setItem('isAuthenticated', 'true')
      navigate('/admin')
    } else {
      setError('Invalid credentials')
    }
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center pt-32 pb-20">
        <div className="container-custom max-w-md">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold gradient-text mb-2">Admin Login</h2>
              <p className="text-gray-400">Access the admin dashboard</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email"
                  className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                />
              </div>

              <div className="relative">
                <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Password"
                  className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                />
              </div>

              {error && (
                <div className="bg-red-500/20 border border-red-500 rounded-lg p-3 text-center text-red-500">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="w-full gradient-bg py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                Login
                <FaSignInAlt />
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-500">
              <p>Demo credentials:</p>
              <p>Email: admin@editflow.com</p>
              <p>Password: admin123</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Login
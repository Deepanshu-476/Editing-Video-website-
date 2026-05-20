// src/components/home/HowItWorks.jsx
import React from 'react'
import { FaUpload, FaVideo, FaRocket, FaCheckCircle } from 'react-icons/fa'

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaUpload className="text-4xl" />,
      title: 'Upload Your Footage',
      description: 'Share your raw footage with us through our secure platform',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <FaVideo className="text-4xl" />,
      title: 'Professional Editing',
      description: 'Our expert editors craft your vision into a masterpiece',
      color: 'from-pink-500 to-red-500'
    },
    {
      icon: <FaCheckCircle className="text-4xl" />,
      title: 'Review & Revise',
      description: 'Get unlimited revisions until you\'re completely satisfied',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: <FaRocket className="text-4xl" />,
      title: 'Receive Final Video',
      description: 'Get your polished video delivered in stunning quality',
      color: 'from-orange-500 to-yellow-500'
    }
  ]

  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Simple 4-step process to get your professional video
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className={`w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-dark border-2 border-pink-500 flex items-center justify-center font-bold">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-pink-500 to-purple-500"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
// src/components/home/TrustSection.jsx
import React from 'react'
import { FaStar, FaUsers, FaTrophy, FaClock } from 'react-icons/fa'

const TrustSection = () => {
  const features = [
    {
      icon: <FaStar className="text-3xl" />,
      title: '5-Star Rated',
      description: 'Consistently rated 5 stars by our satisfied clients'
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: 'Expert Team',
      description: 'Professional editors with years of experience'
    },
    {
      icon: <FaTrophy className="text-3xl" />,
      title: 'Award Winning',
      description: 'Recognized for excellence in video production'
    },
    {
      icon: <FaClock className="text-3xl" />,
      title: 'Fast Turnaround',
      description: 'Quick delivery without compromising quality'
    }
  ]

  return (
    <section className="py-20 bg-darker">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why <span className="gradient-text">Trust Us</span> With Your Vision
            </h2>
            <p className="text-gray-400 mb-8">
              With over 500+ successful projects and a team of passionate editors, 
              we've helped countless content creators, businesses, and agencies 
              elevate their video content to new heights.
            </p>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white/5 transition-colors">
                  <div className="gradient-text">{feature.icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-3xl opacity-20"></div>
            <div className="relative bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl p-8 backdrop-blur-sm">
              <div className="text-center mb-6">
                <div className="text-6xl font-bold gradient-text mb-2">98%</div>
                <p className="text-gray-300">Client Retention Rate</p>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Quality</span>
                    <span className="gradient-text">99%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="gradient-bg h-2 rounded-full w-[99%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Speed</span>
                    <span className="gradient-text">95%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="gradient-bg h-2 rounded-full w-[95%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Satisfaction</span>
                    <span className="gradient-text">98%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="gradient-bg h-2 rounded-full w-[98%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustSection
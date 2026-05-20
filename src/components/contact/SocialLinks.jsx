// src/components/contact/SocialLinks.jsx
import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaGithub } from 'react-icons/fa'

const SocialLinks = () => {
  const socials = [
    { icon: <FaFacebook />, url: '#', color: 'hover:text-blue-500' },
    { icon: <FaTwitter />, url: '#', color: 'hover:text-blue-400' },
    { icon: <FaInstagram />, url: '#', color: 'hover:text-pink-500' },
    { icon: <FaLinkedin />, url: '#', color: 'hover:text-blue-600' },
    { icon: <FaYoutube />, url: '#', color: 'hover:text-red-600' },
  ]

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
      <div className="flex space-x-4">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 ${social.color} hover:bg-gray-700 transition-all duration-300 hover:scale-110`}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  )
}

export default SocialLinks
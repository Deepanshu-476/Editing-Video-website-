// src/components/common/WhatsAppButton.jsx
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const WhatsAppButton = () => {
  const phoneNumber = '+1234567890' // Replace with actual number
  const message = encodeURIComponent('Hello! I\'m interested in your video editing services.')

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 group"
    >
      <FaWhatsapp size={28} />
    </a>
  )
}

export default WhatsAppButton
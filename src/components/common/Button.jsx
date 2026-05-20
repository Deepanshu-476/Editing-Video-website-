// src/components/common/Button.jsx
import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ children, to, onClick, variant = 'primary', className = '', disabled = false, type = 'button' }) => {
  const variants = {
    primary: 'gradient-bg text-white hover:shadow-lg',
    secondary: 'border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white',
    outline: 'border-2 border-white/30 text-white hover:bg-white/10',
  }

  const classes = `px-6 py-2 rounded-full font-semibold transition-all duration-300 ${variants[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}

export default Button
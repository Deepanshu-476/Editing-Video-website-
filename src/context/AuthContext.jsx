// src/context/AuthContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const auth = localStorage.getItem('isAuthenticated')
    setIsAuthenticated(auth === 'true')
  }, [])

  const login = (email, password) => {
    if (email === 'admin@editflow.com' && password === 'admin123') {
      localStorage.setItem('isAuthenticated', 'true')
      setIsAuthenticated(true)
      setUser({ email })
      return true
    }
    return false
  }

  const logout = () => {
    localStorage.removeItem('isAuthenticated')
    setIsAuthenticated(false)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
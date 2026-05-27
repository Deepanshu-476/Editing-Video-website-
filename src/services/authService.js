// src/services/authService.js
import api from './api'

// Named exports (keep these)
export const loginAdmin = async (payload) => {
  const { data } = await api.post('/auth/login', payload)
  return data
}

export const getMe = async (token) => {
  const { data } = await api.get('/auth/me', { 
    headers: { Authorization: `Bearer ${token}` } 
  })
  return data
}

export const updateProfile = async (userData) => {
  const { data } = await api.put('/auth/me', userData)
  return data
}

export const changePassword = async (currentPassword, newPassword) => {
  const { data } = await api.put('/auth/change-password', { currentPassword, newPassword })
  return data
}

export const logout = async () => {
  const { data } = await api.post('/auth/logout')
  return data
}

// Also add a default export for backward compatibility
const authService = {
  loginAdmin,
  getMe,
  updateProfile,
  changePassword,
  logout
}

export default authService

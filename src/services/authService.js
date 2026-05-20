import api from './api'

export const loginAdmin = async (payload) => {
  const { data } = await api.post('/auth/login', payload)
  return data
}

export const getMe = async (token) => {
  const { data } = await api.get('/auth/me', { headers: { Authorization: `Bearer ${token}` } })
  return data
}

import api from './api'

export const submitContactForm = async (payload) => {
  const { data } = await api.post('/contact/submit', payload)
  return data
}

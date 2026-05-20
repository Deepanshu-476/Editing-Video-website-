import api from './api'

export const fetchProjects = async () => {
  const { data } = await api.get('/portfolio')
  return data
}

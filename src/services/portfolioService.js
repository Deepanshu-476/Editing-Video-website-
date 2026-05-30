// src/services/portfolioService.js
import api from './api';

// Get all projects with pagination and filtering
export const getAllProjects = async (page = 1, limit = 12, category = 'all') => {
  try {
    const response = await api.get('/portfolio', {
      params: { page, limit, category: category !== 'all' ? category : undefined }
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Get single project by ID
export const getProjectById = async (id) => {
  try {
    const response = await api.get(`/portfolio/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Get featured projects
export const getFeaturedProjects = async () => {
  try {
    const response = await api.get('/portfolio/featured');
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Get all categories
export const getCategories = async () => {
  try {
    const response = await api.get('/portfolio/categories');
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Create new project (admin)
export const createProject = async (projectData) => {
  try {
    const response = await api.post('/portfolio', projectData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Update project (admin)
export const updateProject = async (id, projectData) => {
  try {
    const response = await api.put(`/portfolio/${id}`, projectData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Delete project (admin)
export const deleteProject = async (id) => {
  try {
    const response = await api.delete(`/portfolio/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Bulk delete projects (admin)
export const bulkDeleteProjects = async (ids) => {
  try {
    const response = await api.post('/portfolio/bulk-delete', { ids });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// ✅ Yeh function bhi add karo (fetchProjects alias)
export const fetchProjects = getAllProjects;

// Default export
const portfolioService = {
  getAllProjects,
  getProjectById,
  getFeaturedProjects,
  getCategories,
  createProject,
  updateProject,
  deleteProject,
  bulkDeleteProjects,
  fetchProjects
};

export default portfolioService;

import api from './api';

const portfolioService = {
  // Get all projects with pagination and filtering
  getAllProjects: async (page = 1, limit = 12, category = 'all') => {
    try {
      const response = await api.get('/portfolio', {
        params: { page, limit, category: category !== 'all' ? category : undefined }
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Get single project by ID
  getProjectById: async (id) => {
    try {
      const response = await api.get(`/portfolio/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Get featured projects
  getFeaturedProjects: async () => {
    try {
      const response = await api.get('/portfolio/featured');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Get all categories
  getCategories: async () => {
    try {
      const response = await api.get('/portfolio/categories');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Create new project (admin)
  createProject: async (projectData) => {
    try {
      const response = await api.post('/portfolio', projectData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Update project (admin)
  updateProject: async (id, projectData) => {
    try {
      const response = await api.put(`/portfolio/${id}`, projectData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Delete project (admin)
  deleteProject: async (id) => {
    try {
      const response = await api.delete(`/portfolio/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Bulk delete projects (admin)
  bulkDeleteProjects: async (ids) => {
    try {
      const response = await api.post('/portfolio/bulk-delete', { ids });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }
};

export default portfolioService; 
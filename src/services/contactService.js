import api from './api';

const contactService = {
  // Submit contact form
  submitContact: async (formData) => {
    try {
      const response = await api.post('/contact/submit', formData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Get all contacts (admin)
  getAllContacts: async (page = 1, limit = 20, status = null, isRead = null) => {
    try {
      const params = { page, limit };
      if (status) params.status = status;
      if (isRead !== null) params.isRead = isRead;
      
      const response = await api.get('/contact/all', { params });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Get single contact (admin)
  getContactById: async (id) => {
    try {
      const response = await api.get(`/contact/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Update contact status (admin)
  updateContactStatus: async (id, status, notes = '') => {
    try {
      const response = await api.put(`/contact/${id}/status`, { status, notes });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Delete contact (admin)
  deleteContact: async (id) => {
    try {
      const response = await api.delete(`/contact/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Get contact statistics (admin)
  getContactStats: async () => {
    try {
      const response = await api.get('/contact/stats');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }
};

export default contactService;
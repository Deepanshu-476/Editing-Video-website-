// src/services/contactService.js
import api from './api';

// Submit contact form (this is the function needed for ContactForm)
export const submitContactForm = async (formData) => {
  try {
    const response = await api.post('/contact/submit', formData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Get all contacts (admin)
export const getAllContacts = async (page = 1, limit = 20, status = null, isRead = null) => {
  try {
    const params = { page, limit };
    if (status) params.status = status;
    if (isRead !== null) params.isRead = isRead;
    
    const response = await api.get('/contact/all', { params });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Get single contact by ID (admin)
export const getContactById = async (id) => {
  try {
    const response = await api.get(`/contact/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Update contact status (admin)
export const updateContactStatus = async (id, status, notes = '') => {
  try {
    const response = await api.put(`/contact/${id}/status`, { status, notes });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Delete contact (admin)
export const deleteContact = async (id) => {
  try {
    const response = await api.delete(`/contact/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Get contact statistics (admin)
export const getContactStats = async () => {
  try {
    const response = await api.get('/contact/stats');
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Default export for backward compatibility
const contactService = {
  submitContactForm,
  getAllContacts,
  getContactById,
  updateContactStatus,
  deleteContact,
  getContactStats
};

export default contactService;
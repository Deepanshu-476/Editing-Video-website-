// src/context/AuthContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import {
  loginAdmin,
  getMe,
  logout as logoutService,
  updateProfile,
  changePassword
} from '../services/authService';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const response = await getMe(token);
        if (response.success) {
          setIsAuthenticated(true);
          setUser(response.data);
        } else {
          logout();
        }
      } catch (error) {
        console.error('Auth check error:', error);
        logout();
      }
    }
    setLoading(false);
  };

  const login = async (email, password) => {
    try {
      const response = await loginAdmin({ email, password });
      const token = response.data?.token || response.token;
      const loggedInUser = response.data?.user || response.user || null;

      if (response.success && token) {
        localStorage.setItem('token', token);
        localStorage.setItem('isAuthenticated', 'true');

        if (loggedInUser) {
          localStorage.setItem('user', JSON.stringify(loggedInUser));
        }

        setIsAuthenticated(true);
        setUser(loggedInUser);
        return { success: true };
      }
      return { success: false, message: response.message };
    } catch (error) {
      console.error('Login error:', error);
      const message =
        error.response?.data?.message ||
        error.response?.data?.error ||
        error.message ||
        'Login failed';

      return { success: false, message };
    }
  };

  const logout = async () => {
    try {
      await logoutService();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      localStorage.removeItem('isAuthenticated');
      setIsAuthenticated(false);
      setUser(null);
    }
  };

  const updateUserProfile = async (userData) => {
    try {
      const response = await updateProfile(userData);
      if (response.success) {
        setUser(response.data);
        localStorage.setItem('user', JSON.stringify(response.data));
        return { success: true };
      }
      return { success: false, message: response.message };
    } catch (error) {
      return { success: false, message: error.response?.data?.message || 'Update failed' };
    }
  };

  const changeUserPassword = async (currentPassword, newPassword) => {
    try {
      const response = await changePassword(currentPassword, newPassword);
      return { success: response.success, message: response.message };
    } catch (error) {
      return { success: false, message: error.response?.data?.message || 'Password change failed' };
    }
  };

  return (
    <AuthContext.Provider value={{
      isAuthenticated,
      user,
      loading,
      login,
      logout,
      updateUserProfile,
      changeUserPassword
    }}>
      {children}
    </AuthContext.Provider>
  );
};

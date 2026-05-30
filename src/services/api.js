import axios from "axios";

export const API_URL =
  import.meta.env.VITE_API_URL ||
  import.meta.env.VITE_API_BASE_URL ||
  "https://editing-video-backend.onrender.com/api";

export const IMAGE_URL =
  import.meta.env.VITE_IMAGE_URL ||
  "https://editing-video-backend.onrender.com";

const api = axios.create({
  baseURL: API_URL,
  timeout: 180000,
  headers: {
    "Content-Type": "application/json",
  },
});

const logoutUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  localStorage.removeItem("isAuthenticated");

  if (window.location.pathname !== "/login") {
    window.location.href = "/login";
  }
};

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    if (config.data instanceof FormData) {
      delete config.headers["Content-Type"];
    }

    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => {
    console.info(
      `[API] ${response.config.method?.toUpperCase()} ${response.config.url}`,
      response.status
    );

    return response;
  },
  (error) => {
    if (error.response) {
      console.error(
        `[API Error] ${error.config?.method?.toUpperCase()} ${error.config?.url}`,
        error.response.status,
        error.response.data
      );

      if (Array.isArray(error.response.data?.errors)) {
        console.table(error.response.data.errors);
      }

      if (error.response.status === 401) {
        logoutUser();
      }
    } else if (error.request) {
      console.error("[Network Error] Unable to reach API server", error.message);
    } else {
      console.error("[API Error] Request setup failed", error.message);
    }

    return Promise.reject(error);
  }
);

export default api;


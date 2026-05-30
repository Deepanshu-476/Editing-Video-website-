const config = {
  apiBaseUrl:
    import.meta.env.VITE_API_URL ||
    import.meta.env.VITE_API_BASE_URL ||
    "https://editing-video-backend.onrender.com/api",
  imageBaseUrl:
    import.meta.env.VITE_IMAGE_URL ||
    "https://editing-video-backend.onrender.com",
};

export default config;

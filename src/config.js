const config = {
  // Change VITE_API_BASE_URL in .env for production/staging backends.
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api',
}

export default config

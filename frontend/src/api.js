import axios from 'axios';

const api = axios.create({
  baseUrl: 'http://localhost:3001/api'
  //baseURL: 'http://localhost:8000/api', 
});

// Add JWT token if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;

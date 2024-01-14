// services/api.js
import axios from 'axios';
import useStore from '../store/store';

const api = axios.create({
  baseURL: 'http://localhost:8000/',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = useStore.getState().token; // Ottenere l'ultimo token
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`; // Aggiungere il token all'header
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;

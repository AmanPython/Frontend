// axiosInstance.js
import axios from 'axios';
import BASE_URL from '../config';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

// Add a request interceptor to include the access token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;

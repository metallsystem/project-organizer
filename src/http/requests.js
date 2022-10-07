import axios from 'axios';
import { API_URL } from '../utils/consts';

const api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
  timeout: 10000
});

api.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${ localStorage.getItem('token') }`;
  return config;
});

api.interceptors.response.use((config) => {
  return config;
}, async (error) => {

  const originRequest = error.config;

  if (error.response.status === 401 && error.config && !error.config._isRetry) {
    originRequest._isRetry = true;
      try {
        const response = await axios.get(`${API_URL}/refresh`, { withCredentials: true });
      localStorage.setItem('token', response.data.accessToken);
      return api.request(originRequest);
    } catch (error) {
      console.log();
    }
  }
  throw error;
})

export default api;

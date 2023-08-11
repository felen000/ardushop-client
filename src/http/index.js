import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.token}`;
  return config;
});

api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    let originalRequest = error.config;
    try {
      if (error.response.status == 401 && originalRequest && !originalRequest._isRetry) {
        originalRequest._isRetry = true;
        let res = await axios.get(`${import.meta.env.VITE_API_URL}/auth/refresh`, {
          withCredentials: true,
        });
        localStorage.setItem('token', res.data.accessToken);
        return api.request(originalRequest);
      }
    } catch (error) {
      console.log('Пользователь не авторизован');
    }

    throw error;
  },
);

export default api;

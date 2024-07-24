import axios from 'axios';
import { API_URL } from '@common/utils/constants';

const instance = axios.create({
    baseURL: API_URL,
});

instance.interceptors.response.use(
    response => response,
    async error => {
        const originalRequest = error.config;
        if (error.response) {
            // Handle known error responses
            if (error.response.status === 401 && !originalRequest._retry) {
                console.log('Refreshing token...')
                originalRequest._retry = true;
                try {
                    const refreshToken = localStorage.getItem('refresh_token');
                    const { data } = await instance.post('/refresh', {}, { headers: { Authorization: `Bearer ${refreshToken}` } });
                    console.log('Token refreshed', data.access_token);
                    localStorage.setItem('access_token', data.access_token);
                    instance.defaults.headers.Authorization = `Bearer ${data.access_token}`;
                    originalRequest.headers.Authorization = `Bearer ${data.access_token}`;
                    return instance(originalRequest);
                } catch (refreshError) {
                    console.error('Refresh token failed', refreshError);
                    localStorage.removeItem('access_token');
                    localStorage.removeItem('refresh_token');
                    // Optionally redirect to login page
                    return Promise.reject(refreshError);
                }
            }
        } else {
            // Handle errors without a response (e.g., network errors)
            console.error('Network or server error', error);
            // Optionally display a user-friendly error message or take other actions
        }
        return Promise.reject(error);
    }
);

export default instance;

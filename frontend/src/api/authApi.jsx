// frontend/src/api/authApi.js
import axios from 'axios';

const API_URL = import.meta.env.VITE_BACKEND_URL;
 
export const registerUser = async (userData) => {
    return await axios.post(`${API_URL}/api/auth/register`, userData, {
        withCredentials: true
    });
};

export const loginUser = async (credentials) => {
    return await axios.post(`${API_URL}/api/auth/login`, credentials, {
        withCredentials: true
    });
};


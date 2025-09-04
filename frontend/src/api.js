import axios from 'axios';

let baseURL = null;
baseURL = process.env.REACT_APP_API_BASE_URL || import.meta.env.VITE_API_BASE_URL || '';

const api = axios.create({
    baseURL: baseURL,
});


export default api;


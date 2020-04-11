import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4223/api/v1',
});

export default api;

import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

function getBaseUrl() {
  if (process.env.NODE_ENV === 'production') {
    return process.env.REACT_APP_API_URL;
  }
  return 'http://localhost:4223/api/v1';
}

const api = axios.create({
  baseURL: getBaseUrl(),
  responseType: 'json',
});

export default api;

import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

function getBaseUrl() {
  if (process.env.NODE_ENV === 'production') {
    return process.env.REACT_APP_API_URL;
  }
  return 'https://be-the-hero-be-api.herokuapp.com/api/v1';
}

const api = axios.create({
  baseURL: getBaseUrl(),
  responseType: 'json',
});

export default api;

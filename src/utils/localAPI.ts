import axios from 'axios';

export const baseURL = 'http://localhost:4000';

export const localAPI = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

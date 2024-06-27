import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
  headers: {
    'X-Auth-Token': process.env.NEXT_PUBLIC_API_TOKEN,
    'Content-Type': 'application/json',
    // Outros headers, se necessário
  },
});

export default api;

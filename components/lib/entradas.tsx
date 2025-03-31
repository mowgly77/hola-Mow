// lib/strapi.ts
import axios from 'axios';

const API_URL = 'http://localhost:1337/api';

export const getEntradas = async () => {
  const res = await axios.get(`${API_URL}/entradas?populate=*`);
  return res.data.data;
};

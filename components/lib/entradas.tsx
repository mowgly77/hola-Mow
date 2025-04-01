// lib/strapi.ts
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getEntradas = async () => {
  const res = await axios.get(`${API_URL}/entradas?populate=*`);
  return res.data.data;
};

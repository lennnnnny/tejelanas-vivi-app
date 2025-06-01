// src/services/api.js
import axios from 'axios';

const BASE_URL = 'https://www.clinicatecnologica.cl/ipss/tejelanasVivi/api/v1/';
const AUTH_TOKEN = 'ipss.get'; // Tu token de autorización

// Configura una instancia de Axios con la URL base y el header de autorización
// Esto es una buena práctica para no repetir el header en cada solicitud
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Authorization': `Bearer ${AUTH_TOKEN}`,
    'Content-Type': 'application/json', // Asegura que el tipo de contenido sea JSON
  },
});

export const getProductsServices = async () => {
  try {
    const response = await api.get('products-services/');
    // La respuesta real viene anidada bajo 'data' y luego 'productos' y 'servicios'
    return response.data.data; // Retorna el objeto { productos: [...], servicios: [...] }
  } catch (error) {
    console.error('Error fetching products and services:', error);
    throw error;
  }
};

export const getAboutUs = async () => {
  try {
    const response = await api.get('about-us/');
    // La respuesta real viene anidada bajo 'data' y es un string
    return response.data.data; // Retorna el string con la descripción
  } catch (error) {
    console.error('Error fetching about us data:', error);
    throw error;
  }
};

export const getFaq = async () => {
  try {
    const response = await api.get('faq/');
    // La respuesta real viene anidada bajo 'data' y es un array de objetos
    return response.data.data; // Retorna el array de FAQs
  } catch (error) {
    console.error('Error fetching FAQ data:', error);
    throw error;
  }
};
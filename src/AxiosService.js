// src/AxiosService.js
import axios from 'axios';

// Creează o instanță axios cu configurațiile implicite
const axiosService = axios.create({
  baseURL: 'http://localhost:3001/api', // URL de bază pentru cereri
  timeout: 1000, // Timeout pentru cereri (opțional)
  headers: {'Content-Type': 'application/json'} // Setează header-ele implicite
});

// Metodă pentru obținerea datelor
export const fetchData = async (endpoint) => {
  try {
    const response = await axiosService.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Rethrow error pentru a fi gestionat acolo unde este apelată funcția
  }
};

// Metodă pentru trimiterea datelor (POST)
export const postData = async (endpoint, data) => {
  try {
    const response = await axiosService.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};

// Poți adăuga alte metode aici (PUT, DELETE etc.)

export default axiosService;

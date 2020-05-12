import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dados-da-nasa-backend.herokuapp.com/'
});

export default api;

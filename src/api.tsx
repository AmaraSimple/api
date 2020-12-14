import axios from 'axios';

const api = axios.create({ baseURL: 'https://api-vintage.herokuapp.com' });

export default api;

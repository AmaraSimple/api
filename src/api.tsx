import axios from 'axios';

//https://api-vintage.herokuapp.com
const api = axios.create({ baseURL: 'https://api-vintage.herokuapp.com/' });

export default api;

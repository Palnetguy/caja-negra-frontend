import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ceja-negra-backend.up.railway.app/',
});

export default api;
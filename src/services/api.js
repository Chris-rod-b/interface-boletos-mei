import axios from 'axios';

const api = axios.create({
  baseURL: 'http://dev.entrevista.dicasmei.com.br',
});

export default api;

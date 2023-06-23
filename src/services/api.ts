import axios from 'axios';

const BASEURL = 'https://alguma.api.com/'

const api = axios.create({
  baseURL: `${BASEURL}`,
});


export default api;

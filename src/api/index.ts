import axios from 'axios';

const api = axios.create({
    baseURL: 'https://ahkbrasil.my.salesforce.com/services/data/v55.0/sobjects/Contact',
})

export default api;
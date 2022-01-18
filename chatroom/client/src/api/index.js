import axios from 'axios';

const API = axios.create({baseURL: "http://localhost:5000"})

export const testGet = () => API.get('/test/get');

export const testPost = () => API.post('/test/post');

export const axios_getChat = () => API.get('/chat/get');

export const axios_addChat = (chat) => API.post('/chat/post');

export const axios_getUsers = () => API.get('/users/get');

export const axios_addUsers = (users) => API.post('/users/post');
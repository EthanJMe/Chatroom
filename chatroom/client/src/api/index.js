import axios from 'axios';

const API = axios.create({baseURL: "http://localhost:5000"})

export const testGet = () => API.get('/test/get');

export const testPost = () => API.post('/test/post');

export const getChats = () => API.get('/chat/get');

export const addChat = (chat) => API.post('/chat/post');
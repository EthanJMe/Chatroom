import express from 'express';

import { getChats, addChat } from '../controllers/chats.js';

const router = express.Router();

router.get('/get', getChats);

router.post('/post', addChat);

export default router;
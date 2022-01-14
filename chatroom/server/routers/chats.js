import express from 'express';

import { getChats, addChat } from '../controllers/chats.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/get', getChats);

router.post('/post', auth, addChat);

export default router;
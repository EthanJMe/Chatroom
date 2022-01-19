import express from 'express';

import { getUsers, addUsers } from '../controllers/users.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/get', getUsers);

router.post('/post', auth, addUsers);

export default router;
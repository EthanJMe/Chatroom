import express from 'express';
import { getTest, postTest } from '../controllers/test.js';

const router = routerexpress.Router()

router.get('/get', getTest)
router.post('/post', postTest)

export default router
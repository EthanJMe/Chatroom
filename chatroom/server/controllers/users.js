import mongoose from 'mongoose';
import Users from '../models/chats.js';

export const getUsers = async (req, res) => {
    try {
        const userInfo = await Users.find();

        res.status(200).json(chatInfo);
    } catch (e) {
        res.status(404).json({message: e})
    }
}

export const addUsers = async (req, res) => {
    const user = req.body;

    const newUserInfo = new Users({ ...user, createdAt: new Date().toISOString() })

    try {
        await newUserInfo.save();

        res.status(201).json(newUserInfo);
    } catch (e) {
        res.status(409).json({message: e});
    }
}
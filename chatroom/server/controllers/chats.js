import mongoose from 'mongoose';
import Chats from '../models/chats.js';

export const getChats = async (req, res) => {
    try {
        const chatInfo = await Chats.find();

        res.status(200).json(chatInfo);
    } catch (e) {
        res.status(404).json({message: e})
    }
}

export const addChat = async (req, res) => {
    const chat = req.body;

    const newChatInfo = new Chats({ ...chat, createdAt: new Date().toISOString() })

    try {
        await newChatInfo.save();

        res.status(201).json(newChatInfo);
    } catch (e) {
        res.status(409).json({message: e});
    }
}
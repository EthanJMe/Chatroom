import mongoose from 'mongoose';

const chatSchema = mongoose.Schema({
    title: String,
    author: String,
    content: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

const Chats = mongoose.model('Chats', chatSchema);

export default Chats;
import mongoose from 'mongoose';

const chatSchema = mongoose.Schema({
    // users: String,
    room: String,
    message: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

const Chats = mongoose.model('Chats', chatSchema);

export default Chats;
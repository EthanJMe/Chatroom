import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    userName: String,
    password: String,
    recentMessage: String,
    recentRoom: String,
    favoriteRoom: String,
    favoriteColor: String,
    avatar: {
        data: Buffer,
        contentType: String
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

const Users = mongoose.model('Users', userSchema);

export default Users;
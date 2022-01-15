import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import ChatRoutes from './routers/chats.js';

const app = express();
const PORT = 5000;
const CONNECTION_URL = "mongodb://localhost:27071/chats";

app.use(express.json({ limit: "30mb", extendedd: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/chats', ChatRoutes)

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
    .catch((e) => console.log(e));
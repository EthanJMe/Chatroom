import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import ChatRoutes from './routers/chats.js';
import TestRoutes from './routers/test.js';
import UserRoutes from './routers/users.js';
// socket
import { createServer } from "http"
import { Server } from "socket.io";
// heroku
import path from 'path';
import {fileURLToPath} from 'url';

const app = express();

// for heroku
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, '../client/build')));

app.get("/", (req, res) =>  {
  res.sendFile(path.join(__dirname, "../client.build", "index.html"));
})

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ['GET', 'POST']
  }
});

io.on('connection', (socket) => {
  console.log("New Connection..." + socket.id);
  socket.emit("greeting", "Welcome")
  io.emit("greeting", "look who showed up, everyone!")
  socket.broadcast.emit("greeting", "pretend you like them")

  socket.on("userJoin", (room) => {
    socket.join(room)
  });

  //send a message to everyone but the original sender
  socket.on("message", (data) => {
    //broadcast from the original sender socket
    socket.broadcast.emit("serverMessage", data, socket.id);

  });

  socket.on("usermessage", (room, data) => {
    socket.leave("public")
    socket.join(room);
    console.log(data);
    socket.to(room).emit("serverMessage", data); 
  })

  

  // Here is where we handle the disconnect of a socket.
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  
});


const SERVERPORT = (process.env.PORT || 5000);
const CONNECTION_URL = "mongodb+srv://Loneflint:Kolomon01@cluster0.dydau.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/chat', ChatRoutes)
app.use('/users', UserRoutes)
app.use('/test', TestRoutes)

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => httpServer.listen(SERVERPORT, () => console.log(`Server is running on port ${SERVERPORT}`)))
    .catch((e) => console.log(e));
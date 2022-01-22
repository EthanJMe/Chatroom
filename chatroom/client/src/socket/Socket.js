import io from "socket.io-client";
import {store} from "../state/store/store"
import { redux_addChat } from "../state/chatSlice"
const ENDPOINT = "http://localhost:5000"


// const socket = io(ENDPOINT);

// const socket = io(ENDPOINT);

//const socket = io()
socket.on('connect', () => {
  //console.log(`connected as ${socket.id}`)
  socket.emit("userJoin", "public")
})

socket.on("greeting", greeting => console.log(greeting))

socket.on("serverMessage", (data, id) => {
    store.dispatch(redux_addChat(data))
    console.log(data)
  })

  socket.on("userLeft", (exit) => {
    console.log(exit);
  
  });
  
  export default socket
const express = require("express");
const app = express();
require("./db/config");
const dotenv = require("dotenv");
dotenv.config();
const cors=require('cors')
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/userRoutes");
const postRouter = require("./routes/postRoutes");
const PORT = process.env.PORT || 9000;
const socketIo=require('socket.io')
const http=require('http')

app.use(cors())
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/user/", userRouter);
app.use("/api/v1/post", postRouter);

const server=http.createServer(app)

const io=socketIo(server)
const users=[{}]

io.on('connection',(socket)=>{
  console.log("new connected ")

socket.on('join',({user})=>{
  users[socket.id]=user;
  console.log(user)
})

  socket.on('message',(data)=>{
    console.log(data)
    socket.broadcast.emit('message',data.message)
  })

socket.on("disconnect",()=>{
  console.log("user left")
})

})

server.listen(PORT, (err) => {
  if (!err) console.log("Server is running");
});

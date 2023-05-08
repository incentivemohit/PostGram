import React, { useEffect, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import socketIO from 'socket.io-client'

const ENDPOINT='http://localhost:9000'



function ChatContainer() {

  let socket;

  const [sendMessage,setSendMessage]=useState("")
  const [receiveMessage,setReceiveMessage]=useState("")


  const sendMes=()=>{
  const message=document.getElementById('typedMessage').value
  socket.emit('message',message)
  setSendMessage((prev)=> [...prev,message])
  document.getElementById('typedMessage').value=""
  
  }

  useEffect(()=>{
     socket=socketIO(ENDPOINT,{transports:['websocket']})
     socket.on("connect",()=>{
      console.log("connected")
    })
    
  socket.emit('join',{user:"mohit"})

    socket.on("message",(data)=>{
      console.log(data)
    })
    return ()=>{
      socket.disconnect()
      socket.off()
    }
    
  },[socket])
  return (
    <>
      <div className=" h-screen flex flex-col rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="flex items-center gap-2  bg-inherit rounded-md pl-4 py-2">
          <img
            src="/assets/images/mkk.jpg"
            className="w-12 h-12 rounded-full"
            alt=""
          />
          <p className="text-white text-xl font-medium">Mohit Kumar</p>
        </div>
        <hr />
        <div className=" overflow-auto h-screen  flex flex-col justify-start my-2 gap-3 ">
          <p className={ `${receiveMessage!=0?"bg-green-100":""} w-2/4
           p-3 rounded-3 ml-2`}>
           {receiveMessage!=0?receiveMessage:""}
          </p>
          <p className={ `${sendMessage!=0?"bg-green-100":""} w-2/4 ml-auto
           p-3 rounded-3 ml-2`}>
           {sendMessage!=0?sendMessage:""}
          </p>
        </div>
        <div className=" flex mb-2 bg-white rounded-full p-2 mx-2">
          <input
            type="text"
            className="w-100 focus:outline-none pl-5 pr-5"
            placeholder="Type here..."
            id="typedMessage"
          />
          <span className="bg-blue-300 rounded-full p-2 cursor-pointer hover:bg-blue-600 hover:text-white " onClick={()=>sendMes()}>
            <SendIcon />
          </span>
        </div>
      </div>
    </>
  );
}

export default ChatContainer;

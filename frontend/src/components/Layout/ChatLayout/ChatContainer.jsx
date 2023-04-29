import React from "react";
import SendIcon from "@mui/icons-material/Send";

function ChatContainer() {
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
        <div className=" overflow-auto h-screen  flex flex-col  my-2 gap-3 ">
          <p className="bg-green-100 w-2/4 ml-auto p-3 rounded-3 mr-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            facilis quia nisi porro optio voluptas! Magnam consequatur molestias
            soluta quia cupiditate excepturi fugit voluptate.
          </p>
          <p className="bg-green-100 w-2/4  p-3 rounded-3 ml-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
            cumque modi sed!
          </p>
          <p className="bg-green-100 w-2/4 ml-auto p-3 rounded-3 mr-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            facilis quia nisi porro optio voluptas! Magnam consequatur molestias
            soluta quia cupiditate excepturi fugit voluptate.
          </p>
          <p className="bg-green-100 w-2/4  p-3 rounded-3 ml-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
            cumque modi sed!
          </p>
          <p className="bg-green-100 w-2/4 ml-auto p-3 rounded-3 mr-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            facilis quia nisi porro optio voluptas! Magnam consequatur molestias
            soluta quia cupiditate excepturi fugit voluptate.
          </p>
          <p className="bg-green-100 w-2/4  p-3 rounded-3 ml-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
            cumque modi sed!
          </p>
        </div>
        <div className=" flex mb-2 bg-white rounded-full p-2 mx-2">
          <input
            type="text"
            className="w-100 focus:outline-none pl-5 pr-5"
            placeholder="Type here..."
          />
          <span className="bg-blue-300 rounded-full p-2 cursor-pointer hover:bg-blue-600 hover:text-white ">
            <SendIcon />
          </span>
        </div>
      </div>
    </>
  );
}

export default ChatContainer;

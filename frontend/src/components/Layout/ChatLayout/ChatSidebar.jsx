import React from "react";
import ChatFriend from "./ChatFriend";
import Search from "../../Utilities/Search";

function ChatSidebar() {
  return (
    <>
      <div className="card h-screen">
        <p className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-center p-2 text-xl">
          Conversation With Friends
        </p>

        <div className="w-100 py-2">
          <Search />
        </div>
        <ul className="list-group overflow-auto">
          <li className="cursor-pointer list-group-item border-0 py-2 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  hover:text-white">
            <ChatFriend />
          </li>
          <li className="cursor-pointer list-group-item border-0 py-2 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  hover:text-white">
            <ChatFriend />
          </li>{" "}
          <li className="cursor-pointer list-group-item border-0 py-2 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  hover:text-white">
            <ChatFriend />
          </li>
          <li className="cursor-pointer list-group-item border-0 py-2 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  hover:text-white">
            <ChatFriend />
          </li>{" "}
          <li className="cursor-pointer list-group-item border-0 py-2 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  hover:text-white">
            <ChatFriend />
          </li>
          <li className="cursor-pointer list-group-item border-0 py-2 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  hover:text-white">
            <ChatFriend />
          </li>
          <li className="cursor-pointer list-group-item border-0 py-2 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  hover:text-white">
            <ChatFriend />
          </li>
          <li className="cursor-pointer list-group-item border-0 py-2 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  hover:text-white">
            <ChatFriend />
          </li>
          <li className="cursor-pointer list-group-item border-0 py-2 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  hover:text-white">
            <ChatFriend />
          </li>
          <li className="cursor-pointer list-group-item border-0 py-2 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  hover:text-white">
            <ChatFriend />
          </li>
          <li className="cursor-pointer list-group-item border-0 py-2 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  hover:text-white">
            <ChatFriend />
          </li>
        </ul>
      </div>
    </>
  );
}

export default ChatSidebar;

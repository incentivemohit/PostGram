import React, {  useState } from "react";
import Navbar from "../Navbar";
import ActiveFriendList from "../../Utilities/ActiveFriendList";
import NewPost from "../../Post/NewPost";
import ChatSidebar from "./ChatSidebar";
import ChatContainer from "./ChatContainer";



function ChatLayout() {
  
  const [state, setState] = useState(false);


  const handleNewPost = (value) => {
    setState(value);
  };
  return (
    <>
      <div className="card md:w-4/5 m-auto p-2 relative">
        <Navbar handleNewPost={handleNewPost} />
        <ActiveFriendList />
        <div className="flex gap-2">
          <div className="w-2/6">
            <ChatSidebar />
          </div>

          <div className="w-4/5 flex flex-col gap-2">
            <ChatContainer/>
          </div>
        </div>
        {state ? <NewPost handleNewPost={handleNewPost} /> : ""}
      </div>
    </>
  );
}

export default ChatLayout;

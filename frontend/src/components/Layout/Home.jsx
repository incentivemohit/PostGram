import React, { useState } from "react";
import Sidebar from "./Sidebar";
import PostContainer from "./PostContainer";
import LeftSidebar from "./LeftSidebar";
import Navbar from "./Navbar";
import ActiveFriendList from "../Utilities/ActiveFriendList";
import NewPost from "../Post/NewPost";
import Notifications from "../Utilities/Notifications";

function Home() {
  const [state, setState] = useState(false);
  const [notify,setNotify]=useState(false)

  const handleNewPost = (value) => {
    setState(value);
  };

  const handleNotifications=(value)=>{
    setNotify(value)
  }

  return (
    <>
      <div className="card md:w-4/5 m-auto p-2 relative ">
        <Navbar handleNewPost={handleNewPost} handleNotifications={handleNotifications}/>
        <ActiveFriendList />

        <div className="h-screen md:flex justify-between gap-2 ">
          <div className="w-3/5">
            <LeftSidebar handleNewPost={handleNewPost} />
          </div>
          <div className="w-100 overflow-auto">
            <PostContainer />
          </div>
          <div className="w-3/5">
            <Sidebar />
          </div>
        </div>
        {state ? <NewPost handleNewPost={handleNewPost} /> : ""}
        {notify ? <Notifications handleNotifications={handleNotifications} /> : ""}
      </div>
    </>
  );
}

export default Home;

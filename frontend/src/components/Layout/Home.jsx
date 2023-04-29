import React, { useState } from "react";
import Sidebar from "./Sidebar";
import PostContainer from "./PostContainer";
import LeftSidebar from "./LeftSidebar";
import Navbar from "./Navbar";
import ActiveFriendList from "../Utilities/ActiveFriendList";
import NewPost from "../Post/NewPost";

function Home() {
  const [state, setState] = useState(false);

  const handleNewPost = (value) => {
    setState(value);
  };

  return (
    <>
      <div className="card md:w-4/5 m-auto p-2 relative ">
        <Navbar handleNewPost={handleNewPost} />
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
      </div>
    </>
  );
}

export default Home;

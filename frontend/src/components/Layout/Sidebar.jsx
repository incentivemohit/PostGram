import React from "react";
import FriendList from "../Utilities/FriendList";

function Sidebar() {
  return (
    <>
      <div className="card p-2">
        <div className="bg-white p-2">
          <p className="text-xl text-center rounded-xl text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Followers
          </p>
          <FriendList />
        </div>
        <div className="bg-white p-2">
          <p className="text-xl text-center  rounded-xl text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Following
          </p>
          <FriendList />
        </div>
      </div>
    </>
  );
}

export default Sidebar;

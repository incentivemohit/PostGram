import React from "react";
import Post from "./Post";

function PostContainer() {
  return (
    <>
      <div className="w-100">
        <div className="flex flex-col gap-2 ">
          <Post /> <Post /> <Post /> <Post /> <Post /> <Post />
        </div>
      </div>
    </>
  );
}

export default PostContainer;

import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import axios from "axios";
import { PostContext } from "../PostContext";


function PostContainer() {
  const [posts, setPosts] = useState([]);
  const {state}=useContext(PostContext)

  const loadposts = async () => {
    await axios
      .get(`/api/v1/post/posts`)
      .then((res) => {
        setPosts(res.data.data);
       
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    loadposts();
  }, [state]);

  return (
    <>
      <div className="w-100">
        <div className="flex flex-col gap-2 ">
          {
            posts.length!=0 ?posts.map((data)=>
               <Post  data={data}/>
              
            ):<img src="/assets/images/no-post.jpg" className="w-100 h-100"/>
          }
       
        </div>
      </div>
    </>
  );
}

export default PostContainer;

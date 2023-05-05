import React from "react";

import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import ShareIcon from "@mui/icons-material/Share";
import Comments from "../Utilities/Comments";
import axios from "axios";
import { PostContext } from "../PostContext";

function Post({data}) {
  const [like, setLike] = useState("black");
  const [heart, setHeart] = useState("black");
  const [follow, setFollow] = useState("follow");
  const [viewComments, setViewComments] = useState(false);

  const {setState}=React.useContext(PostContext)

  const handleClose = () => {
    setViewComments(false);
  };

  const handleFavourite = () => {
    if (heart === "black") {
      setHeart("red");
    } else if (heart === "red") {
      setHeart("black");
    }
  };

  const handleLike =async() => {
    
setState(false)
    if (like === "black") {
      await axios.get(`/api/v1/post/liked/${data._id}`).then((res)=>{
        
        setState(true)
        setLike("blue");
      }).catch((err)=>console.log(err.message))
      
    } else if (like === "blue") {
      await axios.get(`/api/v1/post/liked/${data._id}`).then((res)=>{
       
         setState(true)
        setLike("black");
      }).catch((err)=>console.log(err.message))
    }
  };


  const handleFollow = async() => {
    setState(false)
    if (follow === "follow") {
      await axios.get(`/api/v1/user/follow/${data.userId._id}`).then((res)=>{
        setState(true)
        setFollow("Unfollow");
      }).catch((err)=>console.log(err.message))
     
    } else if (follow === "Unfollow") {
      await axios.get(`/api/v1/user/follow/${data.userId._id}`).then((res)=>{
        setState(true)
        setFollow("follow");
      }).catch((err)=>console.log(err.message))
    }
  };
  return (
    <>
      <div className="card relative" key={data.id}>
        <div className="card-body">
          <div className="post-top-left d-flex mb-2 align-items-center justify-content-between ">
            <div
              className="d-flex align-items-center"
              style={{ cursor: "pointer" }}
            >
              <div className="profile-picture">
                <img
                  src="/assets/images/postImage.jpg"
                  className="w-12 h-12 rounded-full"
                  alt=""
                />
              </div>
              <h6 className="mx-2">{data.userId.name}</h6>
            </div>
            <div className="post-top-right" style={{ cursor: "pointer" }}>
              <MoreVertIcon />
            </div>
          </div>

          <div className="post-image" style={{ cursor: "pointer" }}>
            <img
              src="/assets/images/postImage.jpg"
              className="w-100 h-100"
              alt=""
            />
          </div>

          <p className="post-desc py-2">
            {data.caption}
          </p>

          <div className="flex justify-between items-center  mt-2">
            <ul className=" list-group list-group-horizontal">
              <li className="list-group-item cursor-pointer">
                <ThumbUpIcon
                  style={{ color: `${like}` }}
                  onClick={()=>handleLike()}
                />
                
                &nbsp;{data.likesAndDislike.length}
              </li>
             
              <li className="list-group-item cursor-pointer">
                <FavoriteIcon
                  style={{ color: `${heart}` }}
                  onClick={()=>handleFavourite()}
                />
              </li>
              <li className="list-group-item cursor-pointer">
                <ShareIcon />
              </li>
            </ul>
            <button
              className="btn btn-outline-primary w-25"
              onClick={()=>handleFollow()}
            >
              {follow}
            </button>
          </div>

          <p
            className="pl-1 my-2 cursor-pointer"
            onClick={() => setViewComments(true)}
          >
            View all 45 comments
          </p>
          <div className="flex w-100 justify-between items-center ">
            <div className="w-2/12">
              <img
                src="/assets/images/mkk.jpg"
                className="w-10 h-10 rounded-full"
                alt=""
              />
            </div>
            <input
              type="text"
              className=" w-100 pr-5 focus:outline-none"
              placeholder="Add a comment..."
            />
            <span className="bg-blue-300 rounded-full p-2 cursor-pointer hover:bg-blue-600 hover:text-white ">
              <SendIcon />
            </span>
          </div>
        </div>

        {viewComments ? <Comments handleClose={handleClose} /> : ""}
      </div>
    </>
  );
}

export default Post;

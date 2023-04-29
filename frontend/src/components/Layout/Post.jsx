import React from "react";

import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import ShareIcon from "@mui/icons-material/Share";
import Comments from "../Utilities/Comments";

function Post() {
  const [like, setLike] = useState("black");
  const [dislike, setdisLike] = useState("black");
  const [heart, setHeart] = useState("black");
  const [follow, setFollow] = useState("follow");
  const [viewComments, setViewComments] = useState(false);

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

  const handleLike = () => {
    if (like === "black") {
      setLike("blue");
    } else if (like === "blue") {
      setLike("black");
    }
  };
  const handleDislike = () => {
    if (dislike === "black") {
      setdisLike("blue");
    } else if (dislike === "blue") {
      setdisLike("black");
    }
  };

  const handleFollow = () => {
    if (follow === "follow") {
      setFollow("Unfollow");
    } else if (follow === "Unfollow") {
      setFollow("follow");
    }
  };
  return (
    <>
      <div className="card relative">
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
              <h6 className="mx-2">Mohit Kumar</h6>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            facere optio illum nostrum quia sint vitae sequi unde! Laborum sed
            et illo? Quos vel rem facilis praesentium fugit sunt qui Lorem ipsum
            dolor sit amet
          </p>

          <div className="flex justify-between items-center  mt-2">
            <ul className=" list-group list-group-horizontal">
              <li className="list-group-item cursor-pointer">
                <ThumbUpIcon
                  style={{ color: `${like}` }}
                  onClick={handleLike}
                />
              </li>
              <li className="list-group-item cursor-pointer">
                <ThumbDownIcon
                  style={{ color: `${dislike}` }}
                  onClick={handleDislike}
                />
              </li>
              <li className="list-group-item cursor-pointer">
                <FavoriteIcon
                  style={{ color: `${heart}` }}
                  onClick={handleFavourite}
                />
              </li>{" "}
              <li className="list-group-item cursor-pointer">
                <ShareIcon />
              </li>
            </ul>
            <button
              className="btn btn-outline-primary w-25"
              onClick={handleFollow}
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

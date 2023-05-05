import React, { useContext, useEffect, useState } from "react";
import Menu from "../Utilities/UserMenu";
import { Link } from "react-router-dom";
import Search from "../Utilities/Search";
import { Badge } from "@mui/material";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { PostContext } from "../PostContext";

function Navbar({ handleNewPost ,handleNotifications}) {

  const {Notification}=useContext(PostContext)

  return (
    <>
      <div className=" md:flex justify-between items-center py-2 shadow-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
        <div className="w-100">
          <Link to="/">
            <p
              className="text-3xl text-white ml-20 cursor-pointer"
              style={{ fontFamily: "MuseoModerno, cursive" }}
            >
              Postgram
            </p>
          </Link>
        </div>
        <div className="w-100">
          <Search />
        </div>
        <div className="w-100 pr-2  md:items-center flex justify-end gap-2 items-center">
          <div className="p-2  hover:bg-black hover:rounded-full" onClick={()=>handleNotifications(true)}>
            <Badge
              badgeContent={Notification.length?Notification.length:"0"}
              color="primary"
              className="cursor-pointer  "
            >
              <NotificationsActiveIcon className="text-white" />
            </Badge>
          </div>

          <Menu handleNewPost={handleNewPost} />
        </div>
      </div>
    </>
  );
}

export default Navbar;

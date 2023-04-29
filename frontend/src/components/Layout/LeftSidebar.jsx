import React, { useContext } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatIcon from "@mui/icons-material/Chat";
import { AuthContext } from "../AuthContext";

function LeftSidebar({ handleNewPost }) {
  const { logout, userInfo } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout()
      .then((res) => {
        if (res === 200) {
          localStorage.removeItem("user");
          navigate("/login");
        } else {
          alert("Can't logout");
        }
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <>
      <div className="card">
        <div className="text-center py-2">
          <img
            src="/assets/images/mkk.jpg"
            className="w-28 h-28 rounded-full m-auto"
            alt=""
          />
          <p className="text-xl my-2 cursor-pointer font-bold">
            {userInfo.username}
          </p>
          <hr />
          <h1 className="text-3xl">9</h1>
          <h1 className="text-xl">Followers</h1>
          <hr />
          <h1 className="text-3xl">23,990</h1>
          <h1 className="text-xl">Following</h1>
        </div>

        <hr />

        <ul className="list-group user-info border-0">
          <Link to="/user/profile">
            <li className="list-group-item border-0 py-3 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  hover:text-white">
              <AccountCircleIcon />
              &nbsp;&nbsp;Profile
            </li>
          </Link>

          <li
            onClick={() => handleNewPost(true)}
            className="cursor-pointer list-group-item border-0 py-3 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-white "
          >
            <AddCircleOutlineIcon />
            &nbsp;&nbsp;New Post
          </li>
          <Link to="/user/chats">
            <li className="list-group-item border-0 py-3 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-white ">
              <ChatIcon />
              &nbsp;&nbsp;Chats
            </li>
          </Link>
          <Link to="/login">
            <li
              onClick={() => handleLogout()}
              className="list-group-item border-0 py-3 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-white "
            >
              <LogoutIcon />
              &nbsp;&nbsp;Logout
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default LeftSidebar;

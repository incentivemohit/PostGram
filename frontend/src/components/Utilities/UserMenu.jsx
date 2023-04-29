import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ChatIcon from "@mui/icons-material/Chat";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { AuthContext } from "../AuthContext";

export default function UserMenu({ handleNewPost }) {
  const { logout } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <img
          src="/assets/images/mkk.jpg"
          className="w-10 h-10 rounded-full"
          alt=""
        />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Link to="/">
          <MenuItem>
            <HomeIcon />
            &nbsp;Home
          </MenuItem>
        </Link>
        <Link to="/user/profile">
          <MenuItem>
            <AccountCircleIcon />
            &nbsp;Profile
          </MenuItem>
        </Link>
        <Link to="/user/chats">
          <MenuItem>
            <ChatIcon />
            &nbsp;Chats
          </MenuItem>
        </Link>

        <MenuItem onClick={() => handleNewPost(true)}>
          <AddCircleOutlineIcon />
          &nbsp;New Post
        </MenuItem>

        <Link to="/login" onClick={() => handleLogout()}>
          <MenuItem>
            <LogoutIcon />
            &nbsp;Logout
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

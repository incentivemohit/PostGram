import axios from "axios";
import { createContext, useEffect } from "react";
import React, { useState } from "react";
export const PostContext = createContext();

export const PostContextProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const [theme, setTheme] = useState("white");
  const [state,setState]=useState(false)
  const [Notification, setNotification] = useState([]);
 

  const changeTheme = () => {
    if (theme === "white") {
      setTheme("black");
    } else {
      setTheme("white");
    }
  };

  const newPost = () => {
    setToggle(true);
  };

 

  const loadNotification = async () => {
    await axios
      .get(`/api/v1/user/notifications`)
      .then((res) => {
        setNotification(res.data.data);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    loadNotification();
  }, []);

  return (
    <PostContext.Provider value={{Notification, newPost, toggle, changeTheme, theme,state,setState }}>
      {children}
    </PostContext.Provider>
  );
};

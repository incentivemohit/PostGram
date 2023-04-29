import { createContext } from "react";
import React, { useState } from "react";
export const PostContext = createContext();

export const PostContextProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const [theme, setTheme] = useState("white");

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

  return (
    <PostContext.Provider value={{ newPost, toggle, changeTheme, theme }}>
      {children}
    </PostContext.Provider>
  );
};

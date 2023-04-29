import { createContext } from "react";
import React, { useState } from "react";
import axios from "axios";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState([]);

  const login = async (email, password) => {
    return await axios
      .post("/api/v1/user/signin", { email, password })
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data.data));
        setUserInfo(res.data.data);
        return res.status;
      })
      .catch((err) => console.log(err.message));
  };

  const logout = async () => {
    return await axios
      .get("/api/v1/user/logout")
      .then((res) => {
        return res.status;
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <AuthContext.Provider value={{ login, logout, userInfo, setUserInfo }}>
      {children}
    </AuthContext.Provider>
  );
};

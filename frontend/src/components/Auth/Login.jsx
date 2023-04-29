import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as React from "react";
import { Alert } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const [falseAlert, setFalseAlert] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (email && password) {
        await login(email, password).then((res) => {
          if (res === 200) {
            navigate("/");
          } else {
            setFalseAlert(true);
            setTimeout(() => {
              setFalseAlert(false);
            }, 2000);
          }
        });
      } else {
        alert("Oops! Something is missing !!!");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {falseAlert ? (
        <Alert
          variant="filled"
          severity="warning"
          style={{ display: "flex", justifyContent: "center" }}
        >
          User Doesn't Exists!!
        </Alert>
      ) : (
        ""
      )}
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen  justify-center items-center flex ">
        <div className="bg-white p-3 w-3/4 xl:w-1/3 rounded-xl">
          <form
            className="form-group flex flex-col gap-2"
            onSubmit={handleSubmit}
          >
            <h3 className="text-center  font-bold text-3xl">PostGram</h3>

            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control py-3  "
              placeholder="Enter Email..."
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              className="form-control py-3"
              placeholder="Enter Password..."
            />
            <Link>
              <p className="text-right">forget password ?</p>
            </Link>

            <button className="bg-blue-600 w-100 my-2 py-2 text-white text-[22px] rounded-xl hover:bg-orange-700">
              Login
            </button>
            <p className="text-center text-[15px]">
              <Link to="/register">Don't have an Account?</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;

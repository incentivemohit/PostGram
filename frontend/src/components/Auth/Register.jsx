import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as React from "react";
import axios from "axios";
import { Alert } from "@mui/material";

function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const [showAlert, setShowAlert] = useState({
    trueAlert: false,
    falseAlert: false,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!user.name && !user.email && !user.password) {
        alert("Inputs are empty");
      } else {
        if (user.password === user.cpassword) {
          const { name, email, password } = user;
          await axios
            .post("/api/v1/user/signup", { name, email, password })
            .then((res) => {
              if (res.status === 201) {
                setShowAlert({
                  trueAlert: true,
                  falseAlert: false,
                });
                setTimeout(() => {
                  navigate("/login");
                }, 1500);
              } else {
                setShowAlert({
                  trueAlert: false,
                  falseAlert: true,
                });
                setTimeout(() => {
                  setShowAlert({
                    falseAlert: false,
                  });
                  setUser({
                    name: "",
                    email: "",
                    password: "",
                  });
                }, 3000);
              }
            })
            .catch((err) => console.log(err.message));
        } else {
          alert("Password doesn't match");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {showAlert.trueAlert ? (
        <Alert
          variant="filled"
          severity="success"
          style={{ display: "flex", justifyContent: "center" }}
        >
          Congratulations!! You have Registered Successfully!
        </Alert>
      ) : (
        ""
      )}
      {showAlert.falseAlert ? (
        <Alert
          variant="filled"
          severity="warning"
          style={{ display: "flex", justifyContent: "center" }}
        >
          !! Oops, You are already registered!
        </Alert>
      ) : (
        ""
      )}
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen w-screen justify-center items-center flex">
        <div className="bg-white p-3 w-3/4 xl:w-1/3 rounded-xl">
          <form
            className="form-group flex flex-col gap-2"
            onSubmit={handleSubmit}
          >
            <h3 className="text-center py-2 font-bold text-3xl">PostGram</h3>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="form-control py-3 "
              placeholder="Enter name..."
            />
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="form-control py-3"
              placeholder="Enter Email..."
            />
            <input
              type="password"
              value={user.password}
              onChange={handleChange}
              name="password"
              className="form-control py-3"
              placeholder="Enter Password..."
            />
            <input
              type="password"
              value={user.cpassword}
              onChange={handleChange}
              name="cpassword"
              className="form-control py-3"
              placeholder="Enter Confirm-Password..."
            />
            <input type="file" className="form-control py-3" name="file" />
            <button className="bg-blue-600 w-100 my-2 py-2 text-white text-[22px] rounded-xl hover:bg-orange-700">
              Register
            </button>
            <p className="text-center">
              <Link to="/login">Already have an Account?</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;

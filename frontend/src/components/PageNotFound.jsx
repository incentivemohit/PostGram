import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <>
      <div className="h-screen relative">
        <img
          src="/assets/images/errorpage.jpg"
          className="bg-cover w-100 h-100"
          alt=""
        />
        <Link to="/">
          <p className="text-2xl absolute top-5 left-5  bg-orange-300 rounded-full p-2">
            <ArrowBackIcon /> Go to Homepage
          </p>
        </Link>
      </div>
    </>
  );
}

export default PageNotFound;

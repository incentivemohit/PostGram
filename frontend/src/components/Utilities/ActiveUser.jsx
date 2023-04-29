import React from "react";

function ActiveUser() {
  return (
    <>
      <div className="cursor-pointer flex items-center relative w-[50px] h-[50px]">
        <img
          src="/assets/images/mkk.jpg"
          className="w-10 h-10 rounded-full"
          alt=""
        />

        <div className="absolute left-7 top-1 p-2 bg-green-800 rounded-full w-[2px] h-[2px]">
          &nbsp;
        </div>
      </div>
    </>
  );
}

export default ActiveUser;

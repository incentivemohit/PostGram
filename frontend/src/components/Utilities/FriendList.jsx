import React from "react";
import Friend from "./Friend";

function FriendList() {
  return (
    <>
      <ul className="overflow-auto max-h-72">
        <li className="m-3">
          <Friend />
        </li>
        <li className="m-3">
          <Friend />
        </li>
        <li className="m-3">
          <Friend />
        </li>
        <li className="m-3">
          <Friend />
        </li>
        <li className="m-3">
          <Friend />
        </li>
        <li className="m-3">
          <Friend />
        </li>
      </ul>
    </>
  );
}

export default FriendList;

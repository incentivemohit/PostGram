import React from "react";

function ChatFriend() {
  return (
    <>
      <div className="flex gap-2 items-center  p-2">
        <img
          src="/assets/images/mkk.jpg"
          className="w-12 h-12 rounded-full mx-2"
          alt=""
        />
        <div className="w-4/5">
          <p className="text-xl">Mohit kumar</p>
          <p className="text-ellipsis	text-nowrap overflow-hidden w-4/5 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            harum enim esse.
          </p>
        </div>
      </div>
    </>
  );
}

export default ChatFriend;

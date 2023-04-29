import React from "react";

function Search() {
  return (
    <>
      <div className="bg-white rounded-full p-2 flex justify-center items-center w-100">
        <input
          type="text"
          className="w-full pl-3 focus:outline-none"
          placeholder="Search people..."
        />
        <i className="fa fa-search pr-2 cursor-pointer"></i>
      </div>
    </>
  );
}

export default Search;

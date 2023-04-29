import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";

function UserPost({ id, data, handleDelete, handleEdit }) {
  return (
    <>
      <div className="card h-100">
        <div className="card-body">
          <div className="post-image" style={{ cursor: "pointer" }}>
            <img
              src="/assets/images/postImage.jpg"
              className="w-100 h-100"
              alt=""
            />
          </div>

          <p className="post-desc cursor-pointer h-40 overflow-auto my-3 px-1">
            {data.caption}
          </p>

          <div className="flex justify-between pt-2">
            <button
              onClick={() => handleEdit(id)}
              className=" p-1 rounded-full hover:bg-blue-500 hover:text-white"
            >
              <EditIcon />
            </button>
            <button
              onClick={() => handleDelete(id)}
              className=" p-1 rounded-full hover:bg-red-500 hover:text-white"
            >
              <DeleteForeverIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserPost;

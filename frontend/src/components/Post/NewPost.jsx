import { useState } from "react";

import * as React from "react";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

function NewPost({ handleNewPost }) {
  const [user, setUser] = useState({
    caption: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!user.caption) {
        alert("Write something in description...");
      } else {
        await axios
          .post("/api/v1/post/newpost", { caption: user.caption })
          .then(() => {
            alert("Post Published");
            setUser({ caption: "" });
          })
          .catch((err) => console.log(err.message));
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="absolute  flex justify-center items-center  backdrop-blur-sm bg-black/50 w-100 h-screen">
        <div className="card p-4 w-2/5">
          <div
            className="w-100 text-right mb-2 cursor-pointer"
            onClick={() => handleNewPost(false)}
          >
            <CloseIcon />
          </div>
          <form
            className="form-group NewPost-form-page"
            onSubmit={handleSubmit}
          >
            <textarea
              value={user.caption}
              onChange={handleChange}
              name="caption"
              className="form-control h-80"
              placeholder="Write your thoughts here..."
            />
            <input type="file" className=" my-2" />
            <button className="btn btn-warning w-100 mt-2">Publish</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default NewPost;

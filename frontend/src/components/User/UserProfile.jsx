import React, { useEffect, useState } from "react";
import Sidebar from "../Layout/Sidebar";
import UserPost from "./UserPost";
import Navbar from "../Layout/Navbar";
import ActiveFriendList from "../Utilities/ActiveFriendList";
import NewPost from "../Post/NewPost";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";

function UserProfile() {
  const [posts, setPosts] = useState([]);
  const [state, setState] = useState(false);
  const [load, setload] = useState(false);

  const handleEdit = async (id) => {
    alert("hello");
    await axios
      .put(`/api/v1/post/${id}`)
      .then((res) => {
        alert("Post Updated");
        setload(true);
      })
      .catch((err) => console.log(err.message));
  };

  const handleDelete = async (id) => {
    await axios
      .delete(`/api/v1/post/${id}`)
      .then((res) => {
        {
          alert("Post Deleted");
          setload(true);
        }
      })
      .catch((err) => console.log(err.message));
  };

  const loadposts = async () => {
    await axios
      .get("/api/v1/post/posts")
      .then((res) => {
        console.log(res.data.data);
        setPosts(res.data.data);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    loadposts();
  }, [load]);

  const handleNewPost = (value) => {
    setState(value);
  };
  return (
    <>
      <div className="card md:w-4/5 m-auto p-2 relative">
        <Navbar handleNewPost={handleNewPost} />
        <ActiveFriendList />
        <div className="flex gap-2">
          <div className="w-2/6">
            <Sidebar />
          </div>

          <div className="w-4/5 flex flex-col gap-2">
            <div className="card ">
              <div className="card-body   flex justify-center gap-4 p-3">
                <div className="w-1/2 flex justify-end">
                  <img
                    src="/assets/images/mkk.jpg"
                    className="w-32 h-32 rounded-full"
                    alt=""
                  />
                </div>
                <div className="  w-3/4">
                  <div>
                    <div className="flex justify-between items-center">
                      <p className="text-3xl font-bold">Mohit Kumar</p>
                      <span className="cursor-pointer">
                        <EditIcon />
                      </span>
                    </div>
                    <p className="text-md">
                      Followers (9)
                      <span>&nbsp;&nbsp;&nbsp;Following (2,345) </span>
                    </p>
                    <p className="bg-red-800 text-white max-w-fit rounded-full px-2 mt-2">
                      Bio
                    </p>
                    <p className="text-sm w-3/4">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Similique totam consectetur doloribus.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 overflow-auto ">
              {posts &&
                posts.map((data) => {
                  return (
                    <UserPost
                      key={data._id}
                      id={data._id}
                      data={data}
                      handleEdit={handleEdit}
                      handleDelete={handleDelete}
                    />
                  );
                })}
            </div>
          </div>
        </div>

        {state ? <NewPost handleNewPost={handleNewPost} /> : ""}
      </div>
    </>
  );
}

export default UserProfile;

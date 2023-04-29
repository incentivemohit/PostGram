import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function Comments({ handleClose }) {
  return (
    <>
      <div className="absolute top-0 bg-white h-100 w-100">
        <div className="flex justify-between items-center p-3">
          <p className="text-xl">All Comments</p>
          <span onClick={() => handleClose()} className="cursor-pointer">
            <CloseIcon />
          </span>
        </div>

        <ul className=" overflow-auto h-5/6">
          <li className="py-2">
            <div className="flex gap-2  justify-between items-center p-2 w-100">
              <img
                src="/assets/images/mkk.jpg"
                className="w-12 h-12 rounded-full mx-2 "
                alt=""
              />
              <p className="text-xl w-80">Mohit kumar</p>
              <span className="bg-black rounded-full text-white hover:bg-red-600 hover:text-white cursor-pointer hover:rounded-full p-1">
                <DeleteForeverIcon />
              </span>
            </div>
            <div>
              <p className="pl-24 text-sm  pr-4 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                harum enim esse.dfsfsdfjl Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Maiores harum enim Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Maiores harum enim esse.dfsfsdfjl
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                harum enim Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Maiores harum enim esse.dfsfsdfjl Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Maiores harum enim Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Maiores harum
                enim esse.dfsfsdfjl Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Maiores harum enim
              </p>
            </div>
          </li>
          <li className="py-2">
            <div className="flex gap-2  justify-between items-center p-2 w-100">
              <img
                src="/assets/images/mkk.jpg"
                className="w-12 h-12 rounded-full mx-2 "
                alt=""
              />
              <p className="text-xl w-80">Mohit kumar</p>
              <span className="bg-black rounded-full text-white hover:bg-red-600 hover:text-white cursor-pointer hover:rounded-full p-1">
                <DeleteForeverIcon />
              </span>
            </div>
            <div>
              <p className="pl-24 text-sm  pr-4 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                harum enim esse.dfsfsdfjl Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Maiores harum enim Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Maiores harum enim esse.dfsfsdfjl
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                harum enim Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Maiores harum enim esse.dfsfsdfjl Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Maiores harum enim Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Maiores harum
                enim esse.dfsfsdfjl Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Maiores harum enim
              </p>
            </div>
          </li>{" "}
          <li className="py-2">
            <div className="flex gap-2  justify-between items-center p-2 w-100">
              <img
                src="/assets/images/mkk.jpg"
                className="w-12 h-12 rounded-full mx-2 "
                alt=""
              />
              <p className="text-xl w-80">Mohit kumar</p>
              <span className="bg-black rounded-full text-white hover:bg-red-600 hover:text-white cursor-pointer hover:rounded-full p-1">
                <DeleteForeverIcon />
              </span>
            </div>
            <div>
              <p className="pl-24 text-sm  pr-4 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                harum enim esse.dfsfsdfjl Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Maiores harum enim Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Maiores harum enim esse.dfsfsdfjl
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                harum enim Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Maiores harum enim esse.dfsfsdfjl Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Maiores harum enim Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Maiores harum
                enim esse.dfsfsdfjl Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Maiores harum enim
              </p>
            </div>
          </li>
          <li className="py-2">
            <div className="flex gap-2  justify-between items-center p-2 w-100">
              <img
                src="/assets/images/mkk.jpg"
                className="w-12 h-12 rounded-full mx-2 "
                alt=""
              />
              <p className="text-xl w-80">Mohit kumar</p>
              <span className="bg-black rounded-full text-white hover:bg-red-600 hover:text-white cursor-pointer hover:rounded-full p-1">
                <DeleteForeverIcon />
              </span>
            </div>
            <div>
              <p className="pl-24 text-sm  pr-4 h-max overflow-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                harum enim esse.dfsfsdfjl Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Maiores harum enim
              </p>
            </div>
          </li>{" "}
          <li className="py-2">
            <div className="flex gap-2  justify-between items-center p-2 w-100">
              <img
                src="/assets/images/mkk.jpg"
                className="w-12 h-12 rounded-full mx-2 "
                alt=""
              />
              <p className="text-xl w-80">Mohit kumar</p>
              <span className="bg-black rounded-full text-white hover:bg-red-600 hover:text-white cursor-pointer hover:rounded-full p-1">
                <DeleteForeverIcon />
              </span>
            </div>
            <div>
              <p className="pl-24 text-sm  pr-4 h-max overflow-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                harum enim esse.dfsfsdfjl Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Maiores harum enim
              </p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Comments;

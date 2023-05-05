import React, { useContext } from 'react'
import CloseIcon from "@mui/icons-material/Close";
import { PostContext } from '../PostContext';


function Notifications({handleNotifications}) {
  const {Notification}=useContext(PostContext)
console.log(Notification)
  return (
    <>
      <div className="absolute  flex justify-center items-center  backdrop-blur-sm bg-black/50 w-100 h-screen">
        <div className="card p-4 h-3/4">
        <div className="flex justify-between items-center p-3">
          <p className="text-xl">All Notifications</p>
          <span onClick={() => handleNotifications(false)} className="cursor-pointer">
            <CloseIcon />
          </span>
        </div>
          <ul className=" overflow-auto h-5/6">
{
  Notification.length?Notification.map((data)=>{
   return <li>
    <div className="flex gap-2  items-center p-2 w-100">
      <img
        src="/assets/images/mkk.jpg"
        className="w-10 h-10 rounded-full mx-2 "
        alt=""
      />
      <p className="text-md w-80">{data.name} liked your post.</p>
     
    </div>

  </li>
  }):"No Notifications Yet"
}

     
        
         
        </ul>


        </div>
      </div>
    
    </>
  )
}

export default Notifications
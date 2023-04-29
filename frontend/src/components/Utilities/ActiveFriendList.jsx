import React from "react";
import ActiveUser from "./ActiveUser";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function ActiveFriendList() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 15,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 9,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className="py-2">
        <Carousel responsive={responsive} className="mx-3">
          <div>
            <ActiveUser />
          </div>
          <div>
            <ActiveUser />
          </div>
          <div>
            <ActiveUser />
          </div>
          <div>
            <ActiveUser />
          </div>
          <div>
            <ActiveUser />
          </div>
          <div>
            <ActiveUser />
          </div>
          <div>
            <ActiveUser />
          </div>
          <div>
            <ActiveUser />
          </div>
          <div>
            <ActiveUser />
          </div>
          <div>
            <ActiveUser />
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default ActiveFriendList;

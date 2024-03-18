/* eslint-disable no-unused-vars */
import React from "react";
import Button from "./Button";
import { MouseFollower } from 'react-mouse-follower';
import { UpdateFollower } from 'react-mouse-follower';
const Foreground = () => {
  
  // const data = [
  //   { text: "whoa" },
  //   { text: "next level" },
  //   { text: "mysuper power" },
  //   { text: "amazing" },
  //   { text: "fantastic" },
  //   { text: "incredible" },
  //   { text: "insane" },
  //   { text: "awesome" },
  //   { text: "mind blowing" },
  //   { text: "super" },
  
  // ];
  return (
    <>
    <MouseFollower/>
    <UpdateFollower id="main" className="locomotive" mouseOptions={{
      backgroundColor: '#8330C2',
      zIndex: 2,
      followSpeed: 1.5,
    }}>
    <div
      
      className="fixed top-0 left-0 z-[3] flex items-end w-full h-screen"
    >
     
      
        <Button   />
      
      
    </div>
    </UpdateFollower>
    </>
  );
};

export default Foreground;

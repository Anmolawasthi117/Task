/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import Button from "./Button";
import { MouseFollower } from 'react-mouse-follower';
import { UpdateFollower } from 'react-mouse-follower';
const Foreground = () => {
  const ref = useRef(null);
  const data = [
    { text: "whoa" },
    { text: "next level" },
    { text: "mysuper power" },
    { text: "amazing" },
    { text: "fantastic" },
    { text: "incredible" },
    { text: "insane" },
    { text: "awesome" },
    { text: "mind blowing" },
    { text: "super" },
  
  ];
  return (
    <>
    <MouseFollower/>
    <UpdateFollower id="main" className="locomotive" mouseOptions={{
      backgroundColor: '#8330C2',
      zIndex: 2,
      followSpeed: 1.5,
    }}>
    <div
      ref={ref}
      className="fixed top-0 left-0 z-[3] flex items-end w-full h-screen"
    >
      {data.map((item, index) => (
        <Button data={item} key ={null} refrence={ref} />
      ))}
      
      
      
    </div>
    </UpdateFollower>
    </>
  );
};

export default Foreground;

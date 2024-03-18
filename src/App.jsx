// eslint-disable-next-line no-unused-vars
import React from "react"
import Backgroud from "./components/Backgroud"
import Foreground from "./components/Foreground"
import { MouseFollower } from 'react-mouse-follower';
import LocomotiveScroll from 'locomotive-scroll';



export default function App() {
  // eslint-disable-next-line no-unused-vars
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div>
   <MouseFollower />
    <Backgroud/>
    <Foreground/>
    
    
    </div>

  )
}
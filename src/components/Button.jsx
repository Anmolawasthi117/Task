/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'
const Button = () => {
  return (
    <>
    <motion.div drag dragConstraints={{left:0,top:0,right:0,bottom:0}} dragElastic={1.5} whileDrag={{scale:1.2}}>
       <button className={`rounded-3xl bg-red-400 box-border  pl-5 pr-5 pt-2 pb-2 text-[#FAF9F6]`} style={{ backgroundColor: "#" + Math.floor(Math.random() * 16777215).toString(16) }}>hello</button>
    </motion.div>
    <motion.div drag dragConstraints={{left:6,top:15,right:10,bottom:2}} dragElastic={1.5} whileDrag={{scale:1.2}}>
       <button className={`rounded-3xl bg-red-400 box-border  pl-5 pr-5 pt-2 pb-2 text-[#FAF9F6]`} style={{ backgroundColor: "#" + Math.floor(Math.random() * 16777215).toString(16) }}>fantastic</button>
    </motion.div>
    <motion.div drag dragConstraints={{left:9,top:4,right:92,bottom:2}} dragElastic={1.5} whileDrag={{scale:1.2}}>
       <button className={`rounded-3xl bg-red-400 box-border  pl-5 pr-5 pt-2 pb-2 text-[#FAF9F6]`} style={{ backgroundColor: "#" + Math.floor(Math.random() * 16777215).toString(16) }}>amazing</button>
    </motion.div>
    <motion.div drag dragConstraints={{left:15,top:8,right:9,bottom:2}} dragElastic={1.5} whileDrag={{scale:1.2}}>
       <button className={`rounded-3xl bg-red-400 box-border  pl-5 pr-5 pt-2 pb-2 text-[#FAF9F6]`} style={{ backgroundColor: "#" + Math.floor(Math.random() * 16777215).toString(16) }}>insane</button>
    </motion.div>
    <motion.div drag dragConstraints={{left:4,top:8,right:9,bottom:2}} dragElastic={1.3} whileDrag={{scale:1.2}}>
       <button className={`rounded-3xl bg-red-400 box-border  pl-5 pr-5 pt-2 pb-2 text-[#FAF9F6]`} style={{ backgroundColor: "#" + Math.floor(Math.random() * 16777215).toString(16) }}> fantastic </button>
    </motion.div>
    
    </>
  )
}

export default Button

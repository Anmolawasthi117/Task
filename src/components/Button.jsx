/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'
const Button = ({data,refrence}) => {
  return (
    <motion.div drag dragConstraints={refrence} whileDrag={{scale:1.2}}>
       <button className={`rounded-3xl bg-red-400 box-border  pl-5 pr-5 pt-2 pb-2 text-[#FAF9F6]`} style={{ backgroundColor: "#" + Math.floor(Math.random() * 16777215).toString(16) }}>{data.text}</button>
    </motion.div>
  )
}

export default Button

"use client";

import { motion } from 'framer-motion'
import React from 'react'

const Work = () => {
  return (
   <motion.section initial={{opacity: 0}} animate={{opacity:1,
      transition:{
          delay:2.4,
          duration:0.4,
          ease:"easeIn"    }}}>
      My Work</motion.section>  )
}

export default Work
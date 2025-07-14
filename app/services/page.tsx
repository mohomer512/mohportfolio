"use client";

import { motion } from 'framer-motion'
import React from 'react'

const Services = () => {
  return (
   <motion.section initial={{opacity: 0}} animate={{opacity:1,
      transition:{
          delay:2.4,
          duration:0.4,
          ease:"easeIn"    }}}>
      My Services</motion.section>  )
}

export default Services
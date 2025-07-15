"use client";

import React from 'react'
import {motion} from "framer-motion"
import Blod from '@/components/Blod';

const Home = () => {
  return (
    <motion.section initial={{opacity: 0}} animate={{opacity:1,
      transition:{
          delay:2.4,
          duration:0.4,
          ease:"easeIn"    },}}
          
          className="h-screen flex item-center"
          >
      <div className="flex flex-col xl:flex-row items-center justify-between w-full">
        <div className="w-full xl:w-[550px]">text</div>
        <div className="hidden xl:block flex-1 relative z-20">
        <Blod containerStyles="w-[560px] h-[560px]" />

        </div>
      </div>
      
      </motion.section>
  )
}

export default Home
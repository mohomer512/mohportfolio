"use client";

import React from 'react'
import {motion} from "framer-motion"
import Blod from '@/components/Blod';
import Image from 'next/image';
import avatarImg from "@/public/assets/avatar.png";

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
          <Image src ={avatarImg} alt="" width={440} height={600}
          quality={100} className="absolute -top-16 left-[120px]"
          />

          <div className="w-full h-[164px]
          absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary
          via-primary/90 to-primary/40
          ">
          </div>

        </div>
      </div>
      
      </motion.section>
  )
}

export default Home
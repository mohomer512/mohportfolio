"use client";

import React from 'react'
import {motion} from "framer-motion"
import { TypeAnimation } from 'react-type-animation';
import Blod from '@/components/Blod';
import Image from 'next/image';
import avatarImg from "@/public/assets/avatar.png";
import {MdArrowOutward} from 'react-icons/md'
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import Socials from '@/components/Socials';

const Home = () => {
  return (
    <motion.section
      initial={{opacity: 0}}
      animate={{
        opacity:1,
        transition:{
          delay:2.4,
          duration:0.4,
          ease:"easeIn"
        },
      }}
      // Ensure the section itself is a flex container and centers its content
      // On small screens, it will center content. On large, it will align items as per xl: directives.
      className="h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      {/* The main container for your content.
          On small screens, it should be a column and its children centered.
          On large screens, it should be a row with space between.
      */}
      <div className="flex flex-col items-center xl:flex-row xl:justify-between w-full max-w-7xl mx-auto">

        {/* Text content area */}
        <div className="w-full xl:w-[550px] flex flex-col items-center text-center xl:items-start xl:text-left mb-8 xl:mb-0">
          <h1 className="h1 flex-1 mb-[28px]">
            Hi!! I`m Mohammed, <br />
            <TypeAnimation
              sequence={["Web Developer",2000,"IT Support Specialist",2000]}
              wrapper="span"
              speed={40}
              className="text-accent"
              repeat={Infinity}
              cursor={false}
            />
          </h1>
          <p className="max-w-[500px] mb-[44px] px-4"> {/* Added px-4 for padding on smaller screens */}
            Begin your digital journey.<br/>
            Experience how your ideas effortlessly<br/>
            evolve into seamless online realities.
          </p>

          <button className="btn btn-lg btn-accent mb-16">
            <div className="flex items-center gap-3">
              <span>Let`s talk.</span>
              <MdArrowOutward />
            </div>
          </button>

          {/* Contact information */}
          <div className="flex flex-col items-center xl:flex-row xl:items-center gap-4 xl:gap-8">
            <div className="flex items-center gap-4 text-lg">
              <span className="text-accent">
                <HiOutlinePhone />
              </span>
              <span>+20 1123633179</span>
            </div>

            <div className="flex items-center gap-4 text-lg">
              <span className="text-accent">
                <HiOutlineMail className="text-xl" />
              </span>
              <span>drprogrammer512@hotmail.com</span>
            </div>
          </div>
          <Socials  /> {/* Added margin top for spacing */}
        </div>

        {/* Image and Blob section */}
        {/* The 'hidden xl:block' ensures this section is only visible on large screens.
            If you want it to appear on mobile, you'd remove 'hidden' but then need to handle its responsiveness carefully.
            For now, keeping it hidden on mobile simplifies the layout.
        */}
        <div className="hidden xl:block flex-1 relative z-20">
          <Blod containerStyles="w-[560px] h-[560px]" />
          <Image
            src ={avatarImg}
            alt=""
            width={440}
            height={600}
            quality={100}
            className="absolute -top-16 left-[120px] mt-28"
          />
          <div className="w-full h-[164px] absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary via-primary/90 to-primary/40"></div>
        </div>
      </div>
    </motion.section>
  )
}

export default Home;
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Blod from '@/components/Blod'; // Assuming this path is correct
import Image from 'next/image';
import avatarImg from "@/public/assets/avatar.png"; // Assuming this path is correct
import { MdArrowOutward } from 'react-icons/md';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import Socials from '@/components/Socials'; // Assuming this path is correct

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn"
        },
      }}
      // Overall section styling:
      // h-screen: Full viewport height
      // flex flex-col items-center justify-center: Centers content vertically and horizontally by default (mobile-first)
      // px-4 sm:px-6 lg:px-8: Responsive horizontal padding
      className="h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative" // Added 'relative' here
    >
      {/* Main content wrapper:
          flex-col items-center: Column layout, centered items on small screens
          xl:flex-row xl:justify-between: Row layout, space-between on extra-large screens
          w-full max-w-7xl mx-auto: Full width, max-width, and horizontally centered
      */}
      <div className="flex flex-col items-center xl:flex-row xl:justify-between w-full max-w-7xl mx-auto">

        {/* Text content area */}
        <div
          // Default: Full width, flex column, items centered, text centered
          // xl: On extra-large screens, fixed width, items start, text left
          // mb-8: Margin bottom on small screens
          className="w-full xl:w-[550px] flex flex-col items-center text-center xl:items-start xl:text-left mb-8 xl:mb-0"
        >
          <h1 className="h1 flex-1 mb-[28px]">
            Hi!! I`m Mohammed, <br />
            <TypeAnimation
              sequence={["Web Developer", 2000, "IT Support Specialist", 2000]}
              wrapper="span"
              speed={40}
              className="text-accent"
              repeat={Infinity}
              cursor={false}
            />
          </h1>
          <p className="max-w-[500px] mb-[44px] px-4 sm:px-0"> {/* Adjusted padding for smaller screens */}
            Begin your digital journey.<br />
            Experience how your ideas effortlessly<br />
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
          {/* Socials component for mobile/tablet if desired, but moved the main one */}
          {/* If you want Socials on mobile, add it here with different styling */}
        </div>

        {/* Image and Blob section */}
        {/* hidden xl:block: Only visible on extra-large screens and above */}
        {/* flex-1: Takes available space */}
        {/* relative z-20: Positions it for its children and sets z-index */}
        <div className="hidden xl:block flex-1 relative z-20">
          {/* Blod component container */}
          <Blod containerStyles="w-[560px] h-[560px]" />
          {/* Avatar image */}
          <Image
            src={avatarImg}
            alt="Avatar"
            width={440}
            height={600}
            quality={100}
            // Absolute positioning relative to its parent div (.hidden.xl:block)
            className="absolute -top-16 left-[120px] mt-28"
          />
          {/* Gradient overlay for the image */}
          <div className="w-full h-[164px] absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary via-primary/90 to-primary/40"></div>
        </div>

      </div>

 
      {/* Socials component positioned absolutely to the right of the screen on larger viewports */}
      <Socials
        containerStyles=" flex 2xl:flex-col gap-6  2xl:flex 2xl:absolute
        2xl:flex 2xl:absolute 2xl:top-1/2 2xl:right-2 2xl:-translate-x-1/2 2xl:-translate-y-1/2
        " 
        
        iconStyles="
        bg-accent text-white hover:bg-accent-hover transition w-[48px] h-[48px] text-[22px]
        flex items-center justify-center rounded-full cursor-pointer
        "
      />
    </motion.section>
  );
};

export default Home;
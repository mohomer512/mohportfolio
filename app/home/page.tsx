"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Blod from '@/components/Blod'; // Assuming this path is correct
import Image from 'next/image';
import avatarImg from "@/public/assets/avatar.png"; // Assuming this path is correct
import { MdArrowOutward } from 'react-icons/md';
import { Mail, Phone } from 'lucide-react'; // Using lucide-react for consistent icon styling
import Socials from '@/components/Socials'; // Assuming this path is correct
import PatternBackground from '@/components/PatternBackground';
import Gradient from '@/components/Gradient';

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
      className="h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background patterns and gradient */}
      <Gradient />
      <PatternBackground />

      {/* Main content wrapper */}
      <div className="relative z-10 flex flex-col items-center xl:flex-row xl:justify-between w-full max-w-7xl mx-auto py-16 xl:py-0">

        {/* Text content area */}
        <div className="w-full xl:w-[550px] flex flex-col items-center text-center xl:items-start xl:text-left mb-8 xl:mb-0">
          <h1 className="font-mono h1 flex-1 mb-[28px] text-white">
            Hi! Im Mohammed, <br />
            <TypeAnimation
              sequence={["Web Developer", 2000, "IT Support Specialist", 2000]}
              wrapper="span"
              speed={40}
              className="text-blue-500"
              repeat={Infinity}
              cursor={false}
            />
          </h1>
          <p className="font-mono max-w-[500px] mb-[44px] px-4 sm:px-0 text-gray-300">
            Begin your digital journey.
            Experience how your ideas effortlessly
            evolve into seamless online realities.
          </p>

          <button className="btn btn-lg bg-blue-500 text-white rounded-lg px-6 py-3 hover:bg-blue-600 transition-colors">
            <div className="flex items-center gap-3">
              <span>Lets talk.</span>
              <MdArrowOutward />
            </div>
          </button>

          {/* Contact information - Icons fixed to use lucide-react */}
          <div className="flex flex-col items-center xl:flex-row xl:items-center gap-4 xl:gap-8 mt-12">
            <div className="flex items-center gap-4 text-white">
              <span className="text-blue-500">
                <Phone size={24} />
              </span>
              <span>+20 1123633179</span>
            </div>
            <div className="flex items-center gap-4 text-white">
              <span className="text-blue-500">
                <Mail size={24} />
              </span>
              <span>drprogrammer512@hotmail.com</span>
            </div>
          </div>
        </div>

        {/* Image and Blob section */}
        <div className="hidden xl:block flex-1 relative z-20">
          <Blod containerStyles="w-[560px] h-[560px]" />
          <Image
            src={avatarImg}
            alt="Mohammed Omer"
            width={390}
            height={540}
            quality={100}
            className="absolute -top-16 left-[120px] rounded-full shadow-2xl"
          />
           <div className="absolute top-[480px] left-[50%] transform -translate-x-1/2 text-center w-full bg-white/10 rounded-lg p-4 max-w-xs backdrop-blur-sm shadow-md border border-white/20">
            <h3 className="text-lg font-bold text-white">Full Stack Developer</h3>
            <p className="text-sm text-gray-300">Building beautiful and functional web applications</p>
          </div>
        </div>
      </div>
      
      {/* Socials component - Simplified styling */}
      <Socials
        containerStyles="fixed bottom-6 xl:bottom-auto xl:top-1/2 xl:-translate-y-1/2 xl:right-8 flex flex-row xl:flex-col gap-6" 
        iconStyles="bg-blue-500 text-white hover:bg-blue-600 transition w-[48px] h-[48px] text-[22px] flex items-center justify-center rounded-full cursor-pointer"
      />
    </motion.section>
  );
};

export default Home;

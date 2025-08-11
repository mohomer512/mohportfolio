"use client";

import { motion } from 'framer-motion';
import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import Testimonial from '@/components/Testmonial'; // Assuming this is your Testimonial component
import Info from '@/components/Info';
import Journey from '@/components/Journey';
import Skills from '@/components/Skills';
import Stats from '@/components/Stats';

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn"
        }
      }}
      className='min-h-screen flex items-center'
    >
      <div className="container mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-12 w-full min-h-[680px]">

          {/* Left Side - Profile Image or Decoration */}
          <div className="hidden xl:flex flex-col w-full relative pt-14 h-full bg-cover bg-center rounded-xl overflow-hidden"
               style={{ backgroundImage: "url('https://placehold.co/600x680/1a202c/fafafa?text=Mohammed+Omer')" }}>
            {/* The background image serves as the visual element */}
          </div>

          {/* Right Side - Scrollable Content */}
          <div className="flex-1 min-h-0">
            <ScrollArea className="h-[680px] w-full rounded-md border border-gray-800 p-6 bg-black/10">
              <div className="space-y-12">
                <div className='space-y-4'>
                  <div className='flex items-center gap-3'>
                    <div className='w-2 h-2 bg-pink-500 rounded-full' />
                    <p className="text-lg font-semibold text-white">About me</p>
                  </div>
                  <h2 className='text-3xl font-bold'>
                    <span className='text-pink-500'>Mohammed</span> Omer
                  </h2>
                  <p className="text-gray-300 text-base leading-relaxed">
                    Full Stack Developer with over 1 year of experience in designing and developing
                    responsive, user-friendly web applications using React.js, Laravel, and Node.js.
                    4+ years of background in IT Support, demonstrating strong problem-solving,
                    system administration, and technical troubleshooting capabilities. Combines
                    a passion for clean, maintainable code and UI/UX best practices with
                    a commitment to continuous learning and staying up-to-date with emerging
                    technologies.
                  </p>
                </div>
                
                {/* Dynamically rendered components with consistent spacing */}
                <div className="flex flex-col items-start gap-16">
                  <Stats />
                  <Testimonial />
                  <Info />
                  <Journey />
                  <Skills />
                </div>
              </div>
            </ScrollArea>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default About;

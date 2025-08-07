"use client";

import { motion } from 'framer-motion'
import React from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"

//import  from '@/components
import Testmonial from '@/components/Testmonial';
import Stats from '@/components/stats';
import Info from '@/components/Info';
import Journey from '@/components/Journey';
import Skills from '@/components/Skills';

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
      <div className="container mx-auto px-4 mt-16-">
        <div className="flex flex-col xl:flex-row items-stretch gap-8 w-full min-h-[680px] mt-16">

          {/* Left Side - Image or Decoration */}
          <div className="hidden xl:flex flex-col w-full max-w-[430px] relative bg-pink-50/10 pt-14">
            {/* يمكنك وضع صورة هنا لاحقًا */}
            <div className="text-center text-xl font-bold">1</div>
          </div>

          {/* Right Side - Scrollable Content */}
          <div className="flex-1 min-h-0">
            <ScrollArea className="h-300 w-full rounded-md border p-4">
              <div className="space-y-6">
                <div className='flex items-center gap-3'>
                  <div className='w-2 h-2 bg-accent rounded-full' />
                  <p className="text-lg font-semibold">About me</p>
                </div>
                <h2 className='text-3xl font-bold mb-4'>
                  <span className='text-accent'>Mohammed</span> Omer
                </h2>
                <p>
                  Full Stack Developer with over 1 year of experience in designing and developing
                  responsive, user-friendly web applications using React.js, Laravel, and Node.js.
                  4+ years of background in IT Support, demonstrating strong problem-solving,
                  system administration, and technical troubleshooting capabilities. Combines
                  a passion for clean, maintainable code and UI/UX best practices with
                  a commitment to continuous learning and staying up-to-date with emerging
                  technologies
                </p>

                {/* محتوى طويل لتجربة التمرير */}

                <div className="flex flex-col items-start gap-16 ">
                  <Stats />
                  <div>
                  <Testmonial />
                  </div>
                  <div>
                    <Info />
                  </div>
                  <div>
                    <Journey/>
                  </div>
                  <div>
                    <Skills/>
                  </div>
                </div>
              </div>
            </ScrollArea>
          </div>

        </div>
      </div>
    </motion.section>
  );
}

export default About;

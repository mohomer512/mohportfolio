"use client";

import { motion } from "framer-motion";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import Testimonial from "@/components/Testmonial";
import Info from "@/components/Info";
import Journey from "@/components/Journey";
import Skills from "@/components/Skills";
import Stats from "@/components/Stats";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-screen flex items-center"
    >
      <div className="container mx-auto px-4 mt-16">
        {/* موبايل: عمودي - شاشات كبيرة: عمودين */}
        <div className="flex flex-col xl:grid xl:grid-cols-2 items-start gap-12 w-full">
          
          {/* صورة البروفايل */}
          <div
            className="w-full h-64 sm:h-80 md:h-[400px] xl:h-full bg-cover bg-center rounded-xl overflow-hidden"
            style={{
              backgroundImage:
                "url('https://scontent-hbe1-1.xx.fbcdn.net/v/t39.30808-6/488971722_10004520639611144_3051538740023573649_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHnqlX_p93ORxWXRD8whpzfzPSHPCyb9YjM9Ic8LJv1iHRZjLI3k31kXH4Km478mvCvdYhJorPzrk5MivEsW_nc&_nc_ohc=M3J4_XoE27UQ7kNvwFQ6215&_nc_oc=AdlvCqyzEHz38VduG4c00Y5Alkzkohd-lQvBnqPKgtSiObtDlFWeIrA5JXj4cFWTh4U&_nc_zt=23&_nc_ht=scontent-hbe1-1.xx&_nc_gid=v8d-QE3QHXbQO2J7CXU7HA&oh=00_AfXzTT_ZtIZiUKKZ_afTr_zvcGxf7N4-uPTskfIf_uDd1w&oe=68A05DD5')",
            }}
          ></div>

          {/* المحتوى */}
          <div className="flex-1 w-full">
            <ScrollArea className="h-[calc(100vh-200px)] xl:h-[680px] w-full rounded-md border border-gray-800 p-6 bg-black/10">
              <div className="space-y-12">
                {/* About Section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full" />
                    <p className="text-lg font-semibold text-white">About me</p>
                  </div>
                  <h2 className="text-3xl font-bold">
                    <span className="text-pink-500">Mohammed</span> Omer
                  </h2>
                  <p className="text-gray-300 text-base leading-relaxed">
                    Full Stack Developer with over 1 year of experience in
                    designing and developing responsive, user-friendly web
                    applications using React.js, Laravel, and Node.js. 4+ years
                    of background in IT Support, demonstrating strong
                    problem-solving, system administration, and technical
                    troubleshooting capabilities. Combines a passion for clean,
                    maintainable code and UI/UX best practices with a commitment
                    to continuous learning and staying up-to-date with emerging
                    technologies.
                  </p>
                </div>

                {/* باقي الأقسام */}
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
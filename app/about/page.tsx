"use client";

import { motion } from "framer-motion";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import Testimonial from "@/components/Testmonial";
import Info from "@/components/Info";
import Journey from "@/components/Journey";
import Skills from "@/components/Skills";
import Stats from "@/components/Stats";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.3,
          duration: 0.4,
          ease: "easeInOut",
        },
      }}
      className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16"
    >
      <div className="flex flex-col xl:grid xl:grid-cols-2 items-start gap-12 w-full">

        {/* صورة البروفايل */}
        <div
          className="w-full h-64 sm:h-80 md:h-[400px] xl:h-full bg-cover bg-center rounded-xl overflow-hidden flex"
          style={{
            backgroundImage:
              "url('https://scontent-hbe1-1.xx.fbcdn.net/v/t39.30808-6/488971722_10004520639611144_3051538740023573649_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHnqlX_p93ORxWXRD8whpzfzPSHPCyb9YjM9Ic8LJv1iHRZjLI3k31kXH4Km478mvCvdYhJorPzrk5MivEsW_nc&_nc_ohc=M3J4_XoE27UQ7kNvwEHvvMV&_nc_oc=Adlr-DsgocrGmABkcPrh4Wlr8jK96rFjYqOfLTBHwHaw_xYiMgJSQBGPJldiuSmBdVM&_nc_zt=23&_nc_ht=scontent-hbe1-1.xx&_nc_gid=NrRszA_dQt9rsS2esP-_nw&oh=00_AfXRwlVJaEiqEWWJEqT6Q87uVWmlYia_nruxJchiq2YI_Q&oe=68A13ED5')",
          }}
        ></div>

        {/* المحتوى */}
        <div className="flex-1 w-full">
          <ScrollArea className="h-[calc(100vh-200px)] xl:h-[680px] w-full rounded-md border border-gray-800 p-6 sm:p-8 bg-black/10">
            <div className="space-y-12 text-left">
              {/* قسم التعريف */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full" />
                  <p className="text-lg font-semibold text-white">About me</p>
                </div>
                <h2 className="text-3xl font-bold">
                  <span className="text-accent">Mohammed</span> Omer
                </h2>
                <p className="text-gray-300 text-base leading-relaxed pr-2">
                  Full Stack Developer with over 1 year of experience<br/> in
                  building modern web applications using <br/> technologies such as
                  React, Next.js, Node.js, Laravel, <br/>and IT Support Specialist with over 4 years of experience
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

              {/* زر الانتقال لصفحة الاتصال */}
              <Link href="/contact">
                <button className="btn btn-lg bg-blue-500 text-white rounded-lg px-6 py-3 hover:bg-blue-600 transition-colors">
                  <div className="flex items-center gap-3">
                    <span>Lets talk.</span>
                    <MdArrowOutward />
                  </div>
                </button>
              </Link>
            </div>
          </ScrollArea>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
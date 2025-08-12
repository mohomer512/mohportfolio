"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const Journey = () => {
  interface TimelineItem {
    icon: React.ReactNode;
    title: string;
    company: string;
    date: string;
    description: string;
  }

  const journeyData: TimelineItem[] = [
    {
      icon: <Briefcase className="text-accent w-5 h-5" />,
      title: "Full Stack Developer",
      company: "Freelancer",
      date: "2024 - Present",
      description:
        "Designed and developed responsive, user-friendly web applications using React.js and Node.js. Collaborated with a team to build scalable and robust solutions.",
    },
    {
      icon: <Briefcase className="text-accent w-5 h-5" />,
      title: "IT Support Specialist",
      company: "Tax Office , Khartoum, Sudan",
      date: "2022 - 2024",
      description:
        "Provided technical support and system administration for a large corporate network. Maintained hardware and software, and resolved complex issues for clients.",
    },
    {
      icon: <GraduationCap className="text-accent w-5 h-5" />,
      title: "Bachelor of  Computer Science",
      company: "University of sudan",
      date: "2015 - 2019",
      description:
        "Completed coursework in data structures, algorithms, and software engineering. Graduated with honors.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.3, duration: 0.5, ease: "easeInOut" },
      }}
      className="p-6 rounded-xl shadow-inner bg-black/10"
    >
      <h3 className="text-2xl font-bold mb-8 text-white">
        My <span className="text-accent">Journey</span>
      </h3>

      <div className="relative border-l-2 border-gray-700 pl-10 space-y-10">
        {journeyData.map((item, index) => (
          <div key={index} className="relative">
            {/* Circle with icon */}
            <div className=" flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 border-2 border-pink-500 shadow-lg">
              {item.icon}
            </div>

            {/* Content */}
            <div className="space-y-1">
              <p className="text-lg font-bold text-accent">{item.title}</p>
              <p className="text-base text-gray-300">{item.company}</p>
              <p className="text-sm font-light text-gray-500">{item.date}</p>
              <p className="text-base text-gray-400 mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Journey;
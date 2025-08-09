"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const Journey = () => {
  // Define a type for a single timeline item.
  interface TimelineItem {
    icon: React.ReactNode;
    title: string;
    company: string;
    date: string;
    description: string;
  }

  // Sample data for the career and education timeline.
  // Replace this with your actual journey details.
  const journeyData: TimelineItem[] = [
    {
      icon: <Briefcase className="text-pink-500 w-6 h-6" />,
      title: "Full Stack Developer",
      company: "Tech Solutions Inc.",
      date: "2023 - Present",
      description: "Designed and developed responsive, user-friendly web applications using React.js and Node.js. Collaborated with a team to build scalable and robust solutions.",
    },
    {
      icon: <Briefcase className="text-pink-500 w-6 h-6" />,
      title: "IT Support Specialist",
      company: "Global IT Services",
      date: "2019 - 2023",
      description: "Provided technical support and system administration for a large corporate network. Maintained hardware and software, and resolved complex issues for clients.",
    },
    {
      icon: <GraduationCap className="text-pink-500 w-6 h-6" />,
      title: "Bachelor of Science in Computer Science",
      company: "University of Technology",
      date: "2015 - 2019",
      description: "Completed coursework in data structures, algorithms, and software engineering. Graduated with honors.",
    },
  ];

  return (
    // The motion.div adds the same fade-in animation.
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="p-4 rounded-xl shadow-inner bg-black/10"
    >
      <h3 className="text-2xl font-bold mb-8 text-white">
        My <span className="text-pink-500">Journey</span>
      </h3>
      <div className="relative border-l-2 border-gray-700 space-y-8 pl-6">
        {journeyData.map((item, index) => (
          <div key={index} className="relative before:absolute before:left-[-35px] before:top-1 before:w-6 before:h-6 before:rounded-full before:bg-gray-700 flex items-start space-x-4">
            {/* The icon and the vertical line */}
            <div className="absolute left-[-45px] top-0.5 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/20">
              {item.icon}
            </div>
            
            {/* The content of the timeline item */}
            <div className="flex-1 space-y-1">
              <p className="text-lg font-bold text-pink-500">{item.title}</p>
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
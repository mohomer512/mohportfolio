"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Database, Cloud, Code, Atom, Palette } from 'lucide-react';

// Define a type for a single skill item.
interface SkillItem {
  name: string;
  icon: React.ReactNode;
}

const Skills: React.FC = () => {
  // Sample data for your skills, including icons.
  const skillsData: SkillItem[] = [
    {
      name: "React",
      icon: <Atom className="text-pink-500 w-8 h-8" />,
    },
    {
      name: "MongoDB",
      icon: <Database className="text-pink-500 w-8 h-8" />,
    },
    {
      name: "Supabase",
      icon: <Cloud className="text-pink-500 w-8 h-8" />,
    },
    {
      name: "JavaScript",
      icon: <Code className="text-pink-500 w-8 h-8" />,
    },
    {
      name: "Tailwind CSS",
      icon: <Palette className="text-pink-500 w-8 h-8" />,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="p-4 rounded-xl shadow-inner bg-black/10"
    >
      <h3 className="text-2xl font-bold mb-8 text-white">
        My <span className="text-pink-500">Skills</span>
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {skillsData.map((skill, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-lg transition-transform duration-300 hover:scale-105 hover:bg-white/10"
          >
            {skill.icon}
            <p className="text-center text-sm md:text-base font-semibold text-gray-300 mt-2">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;

"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

// Define a type for a single work item.
interface WorkItem {
  image: string;
  title: string;
  description: string;
  link: string;
}

const Work: React.FC = () => {
  // Sample data for your work/portfolio projects.
  const workData: WorkItem[] = [
    {
      image: "/assets/work/thumb1.png",
      title: "Car Rental",
      description: "A full-stack platform built with modern technologies.  and a secure checkout process.",
      link: "https://car-rental-six-pi.vercel.app/", // Replace with the actual project URL
    },
    {
      image: "/assets/work/thumb2.png",
      title: "Rent ease ",
      description: "A modern  application . Developed using Next.js for server-side rendering.",
      link: "https://rent-ease-green.vercel.app/sign-in", // Replace with the actual project URL
    },
    {
      image: "/assets/work/thumb3.png",
      title: "Store app",
      description: "A modern  application. Developed with React, Bootstrap for styling.",
      link: "#", // Replace with the actual project URL
    },
  ];

  return (
    // The motion.section provides the same fade-in animation as your other components.
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
      className="p-4 rounded-xl shadow-inner bg-black/10"
    >
      <h2 className="text-3xl font-bold mb-8 text-white text-center">
        My <span className="text-accent">Work</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {workData.map((item, index) => (
          <div
            key={index}
            className="bg-white/5 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
              <p className="text-sm text-gray-300 mb-4">{item.description}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
              >
                View Project <ExternalLink size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Work;
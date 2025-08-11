"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, GitBranch, Server } from 'lucide-react';

// Define a type for a single service item.
interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Services: React.FC = () => {
  // Sample data for the services you provide.
  const servicesData: ServiceItem[] = [
    {
      icon: <Code className="text-pink-500 w-12 h-12" />,
      title: "Web Development",
      description: "Building responsive and dynamic web applications from scratch using modern technologies like React, Next.js, and JavaScript.",
    },
    {
      icon: <Layout className="text-pink-500 w-12 h-12" />,
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing user interfaces with a focus on user experience, accessibility, and modern design trends.",
    },
    {
      icon: <Server className="text-pink-500 w-12 h-12" />,
      title: "Backend Development",
      description: "Developing robust and scalable server-side applications, APIs, and databases using technologies like Node.js, Express, and MongoDB.",
    },
    {
      icon: <GitBranch className="text-pink-500 w-12 h-12" />,
      title: "Version Control",
      description: "Implementing professional workflows and best practices for collaborative development using Git and platforms like GitHub and GitLab.",
    },
  ];

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
      className="p-4 rounded-xl shadow-inner bg-black/10"
    >
      <h2 className="text-3xl font-bold mb-8 text-white text-center">
        My <span className="text-pink-500">Services</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {servicesData.map((service, index) => (
          <div 
            key={index} 
            className="flex flex-col items-start p-6 bg-white/5 rounded-lg transition-transform duration-300 hover:scale-105 hover:bg-white/10"
          >
            <div className="mb-4">
              {service.icon}
            </div>
            <h4 className="text-xl font-bold text-white mb-2">
              {service.title}
            </h4>
            <p className="text-sm font-light text-gray-300">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Services;

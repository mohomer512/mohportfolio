"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, CalendarDays } from 'lucide-react';

// Define a type for a single item in the personalInfo array.
interface PersonalInfoItem {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const Info: React.FC = () => {
  // Sample data for the user's personal information.
  // The personalInfo array is now of type PersonalInfoItem[].
  const personalInfo: PersonalInfoItem[] = [
    {
      icon: <Mail className="text-pink-500 w-5 h-5" />,
      label: "Email",
      value: "mohammed.omer@example.com",
    },
    {
      icon: <Phone className="text-pink-500 w-5 h-5" />,
      label: "Phone",
      value: "+1 (555) 123-4567",
    },
    {
      icon: <MapPin className="text-pink-500 w-5 h-5" />,
      label: "Location",
      value: "New York, USA",
    },
    {
      icon: <CalendarDays className="text-pink-500 w-5 h-5" />,
      label: "Birthday",
      value: "January 1, 1990",
    },
  ];

  return (
    // The motion.div adds the same fade-in animation as your other components.
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="p-4 rounded-xl shadow-inner bg-black/10"
    >
      <h3 className="text-2xl font-bold mb-4 text-white">
        Personal <span className="text-pink-500">Details</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {personalInfo.map((item, index) => (
          <div key={index} className="flex items-center gap-4 p-3 bg-white/5 rounded-lg">
            {/* Icon for each piece of info */}
            <div className="flex-shrink-0">
              {item.icon}
            </div>
            <div className="flex-1 flex flex-col">
              {/* Label for the information (e.g., "Email") */}
              <p className="text-sm font-semibold text-gray-400">
                {item.label}
              </p>
              {/* The actual value (e.g., "mohammed.omer@example.com") */}
              <p className="text-base text-white">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Info;

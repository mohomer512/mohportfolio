"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  // Define a type for the form data.
  interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
  }

  // State to manage the form input values.
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Handle changes to the form inputs.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission.
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      alert("✅ Your message has been saved in MongoDB!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      alert("❌ Something went wrong: " + data.message);
    }
  } catch (error) {
    alert("⚠️ Error sending message");
    console.error(error);
  }
};

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
      className="container mx-auto px-4 min-h-screen flex items-center"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-5xl mx-auto p-8 rounded-xl shadow-2xl bg-black/10">
        {/* Left Side: Contact Information & Socials */}
        <div className="flex flex-col justify-center space-y-8 p-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Contact <span className="text-accent ">Me</span>
          </h2>
          <p className="text-gray-300">
            Feel free to reach out to me for collaborations, projects, or just to say hello. Im always open to new opportunities!
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4 text-white">
              <Mail className="text-accent" />
              <p>drprogrammer512@hotmail.com</p>
            </div>
            <div className="flex items-center gap-4 text-white">
              <Phone className="text-accent" />
              <p>+201123633179</p>
            </div>
            <div className="flex items-center gap-4 text-white">
              <MapPin className="text-accent" />
              <p>Egypt,Cario,Bader City </p>
            </div>
          </div>

          <div className="flex items-center gap-6 mt-4">
            <a href="https://www.linkedin.com/in/mohammed-omer-759714294/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="text-gray-400 hover:text-accent transition-colors" size={32} />
            </a>
            <a href="https://github.com/mohomer512" target="_blank" rel="noopener noreferrer">
              <Github className="text-gray-400 hover:text-accent transition-colors" size={32} />
            </a>
            {/* Add more social media links here if you wish */}
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="p-4">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-white/5 border-b-2 border-gray-700 text-white p-4 rounded-lg focus:outline-none focus:border-accent transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white/5 border-b-2 border-gray-700 text-white p-4 rounded-lg focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-white/5 border-b-2 border-gray-700 text-white p-4 rounded-lg focus:outline-none focus:border-accent transition-colors"
            />
            <textarea
              name="message"
              rows={6}
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-white/5 border-b-2 border-gray-700 text-white p-4 rounded-lg focus:outline-none focus:border-accent transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;

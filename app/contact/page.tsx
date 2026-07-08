"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const inputStyles =
  "w-full rounded-lg border border-white/10 bg-white/[0.07] p-4 text-white placeholder:text-slate-500 outline-none transition-colors focus:border-accent focus:bg-white/[0.1]";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
        alert("Your message has been saved.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Something went wrong: " + data.message);
      }
    } catch (error) {
      alert("Error sending message.");
      console.error(error);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.25,
          duration: 0.45,
          ease: "easeOut",
        },
      }}
      className="mt-20 grid min-h-[calc(100vh-120px)] items-center gap-8 pb-16 lg:grid-cols-[0.9fr_1.1fr]"
    >
      <section className="section-shell">
        <span className="eyebrow mb-5">Contact</span>
        <h1 className="h2 text-white">Let's discuss SharePoint, workflows, or internal systems.</h1>
        <p className="mt-5 text-slate-300">
          Reach out for SharePoint SE on-premises work, SPFx web parts, Plumsail customization,
          approval automation, or infrastructure troubleshooting.
        </p>

        <div className="mt-8 space-y-4">
          <a href="mailto:drprogrammer512@hotmail.com" className="card-surface card-surface-hover flex items-center gap-4 p-4">
            <Mail className="text-accent" />
            <span className="break-all text-white">drprogrammer512@hotmail.com</span>
          </a>
          <a href="tel:+201123633179" className="card-surface card-surface-hover flex items-center gap-4 p-4">
            <Phone className="text-accent" />
            <span className="text-white">+20 1123633179</span>
          </a>
          <div className="card-surface flex items-center gap-4 p-4">
            <MapPin className="text-accent" />
            <span className="text-white">Egypt, Cairo, Badr City</span>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/mohammed-omer-759714294/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.07] text-slate-300 transition-all hover:border-accent/40 hover:bg-accent hover:text-primary"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="https://github.com/mohomer512"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.07] text-slate-300 transition-all hover:border-accent/40 hover:bg-accent hover:text-primary"
          >
            <Github size={22} />
          </a>
        </div>
      </section>

      <section className="section-shell">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 md:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className={inputStyles}
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              className={inputStyles}
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className={inputStyles}
          />
          <textarea
            name="message"
            rows={7}
            placeholder="Tell me about the SharePoint or workflow problem"
            value={formData.message}
            onChange={handleChange}
            className={`${inputStyles} resize-none`}
          />
          <button type="submit" className="btn btn-lg btn-accent w-full gap-3 md:w-auto">
            <span>Send message</span>
            <Send size={18} />
          </button>
        </form>
      </section>
    </motion.section>
  );
};

export default Contact;

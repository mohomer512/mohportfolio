"use client";

import React from "react";
import { motion } from "framer-motion";
import { BriefcaseBusiness, Code2, GraduationCap, ServerCog } from "lucide-react";

interface TimelineItem {
  icon: React.ReactNode;
  title: string;
  organization: string;
  date: string;
  description: string;
}

const journeyData: TimelineItem[] = [
  {
    icon: <ServerCog className="h-5 w-5 text-accent" />,
    title: "SharePoint Developer",
    organization: "ESafe Advanced Cybersecurity / BeSafe Technology",
    date: "2025 - Present",
    description:
      "Working on SharePoint Server SE on-premises solutions, SPFx web parts, Plumsail Forms, CSOM, approval workflows, and document tracking for enterprise environments.",
  },
  {
    icon: <Code2 className="h-5 w-5 text-accent" />,
    title: "React & Next.js Developer",
    organization: "Frontend and SharePoint interface development",
    date: "2024 - Present",
    description:
      "Coding with React and Next.js to build modern web interfaces, SharePoint dashboards, and internal business tools.",
  },
  {
    icon: <BriefcaseBusiness className="h-5 w-5 text-accent" />,
    title: "IT Support Specialist",
    organization: "Tax Office, Khartoum, Sudan",
    date: "2022 - 2024",
    description:
      "Worked with Active Directory, users, hardware, CCTV, networking, UPS, firewall, server troubleshooting, and Windows-based infrastructure operations.",
  },
  {
    icon: <GraduationCap className="h-5 w-5 text-accent" />,
    title: "Bachelor of Computer Science",
    organization: "University of Sudan",
    date: "2013 - 2017",
    description:
      "Studied core software development, data structures, databases, networking, and systems concepts.",
  },
];

const Journey = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="section-shell"
    >
      <div className="mb-8">
        <span className="eyebrow mb-4">Journey</span>
        <h2 className="h3 text-white">Experience and education</h2>
      </div>

      <div className="relative space-y-6 before:absolute before:bottom-2 before:left-5 before:top-2 before:w-px before:bg-white/10">
        {journeyData.map((item) => (
          <article key={`${item.title}-${item.date}`} className="relative grid grid-cols-[42px_1fr] gap-4">
            <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-lg border border-accent/30 bg-surface">
              {item.icon}
            </div>
            <div className="card-surface p-5">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-slate-300">{item.organization}</p>
                </div>
                <p className="text-sm font-semibold text-accent">{item.date}</p>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </motion.section>
  );
};

export default Journey;

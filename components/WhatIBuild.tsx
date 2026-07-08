"use client";

import React from "react";
import { motion } from "framer-motion";
import { BarChart3, FileClock, FileCheck2, ServerCog } from "lucide-react";
import { whatIBuildItems } from "@/lib/profile-data";

const icons = [FileCheck2, FileClock, BarChart3, ServerCog];

const WhatIBuild = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="section-shell"
    >
      <div className="mb-8 max-w-3xl">
        <span className="eyebrow mb-4">What I build</span>
        <h2 className="h2 text-white">Enterprise workflow tools for internal teams.</h2>
        <p className="mt-4 text-slate-300">
          I build practical SharePoint and on-premises workflow solutions for teams that need approvals,
          document tracking, dashboards, and reliable automation inside their own infrastructure.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {whatIBuildItems.map((item, index) => {
          const Icon = icons[index] ?? FileCheck2;

          return (
            <article key={item.title} className="card-surface card-surface-hover p-5">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Icon size={22} />
              </div>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
            </article>
          );
        })}
      </div>
    </motion.section>
  );
};

export default WhatIBuild;

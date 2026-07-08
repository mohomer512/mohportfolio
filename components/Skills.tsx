"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, Code2, DatabaseZap, ServerCog, Workflow } from "lucide-react";
import { skillGroups } from "@/lib/profile-data";

type SkillsProps = {
  className?: string;
};

const groupIcons = [DatabaseZap, Workflow, Code2, ServerCog, Building2];

const Skills: React.FC<SkillsProps> = ({ className = "" }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={`section-shell ${className}`}
    >
      <div className="mb-8 max-w-3xl">
        <span className="eyebrow mb-4">Technical skills</span>
        <h2 className="h2 text-white">SharePoint, automation, frontend, and infrastructure.</h2>
        <p className="mt-4 text-slate-300">
          A focused skill set for on-premises SharePoint environments, internal workflow automation,
          and the server infrastructure that supports enterprise document systems.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {skillGroups.map((group, index) => {
          const Icon = groupIcons[index] ?? DatabaseZap;

          return (
            <article key={group.title} className="card-surface card-surface-hover p-5">
              <div className="mb-5 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{group.summary}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2 text-sm leading-5 text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Skills;

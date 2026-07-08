"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, Code2, FileCheck2, ListChecks, ServerCog, Workflow } from "lucide-react";

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const servicesData: ServiceItem[] = [
  {
    icon: <ServerCog className="h-7 w-7" />,
    title: "SharePoint SE Development",
    description:
      "On-premises SharePoint Server Subscription Edition customization, SPFx web parts, CSOM logic, REST API integration, and structured lists/libraries.",
  },
  {
    icon: <Workflow className="h-7 w-7" />,
    title: "Workflow & Forms Automation",
    description:
      "Approval workflow design, Plumsail Forms customization, SharePoint Designer / Workflow Manager concepts, and practical business process automation.",
  },
  {
    icon: <FileCheck2 className="h-7 w-7" />,
    title: "Document Approval Systems",
    description:
      "PDF and document approval flows with permissions, versioning, metadata, status visibility, and document tracking across internal teams.",
  },
  {
    icon: <ListChecks className="h-7 w-7" />,
    title: "SharePoint Dashboards",
    description:
      "Internal dashboards that summarize approvals, pending documents, department work, and SharePoint list data in a clear interface.",
  },
  {
    icon: <Code2 className="h-7 w-7" />,
    title: "Frontend Web Parts",
    description:
      "React, Next.js, TypeScript, JavaScript, HTML, and CSS interfaces for SharePoint web parts and internal business tools.",
  },
  {
    icon: <Building2 className="h-7 w-7" />,
    title: "Business Systems / ERP",
    description:
      "Odoo ERP knowledge for understanding business processes, automation needs, and integration basics around operational data.",
  },
  {
    icon: <ServerCog className="h-7 w-7" />,
    title: "Infrastructure Support",
    description:
      "Active Directory experience since 2022, plus Windows Server, SQL Server, networking, CCTV, UPS, firewall, and server troubleshooting.",
  },
];

const Services: React.FC = () => {
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
      className="mt-20 space-y-8 pb-16"
    >
      <section className="section-shell">
        <span className="eyebrow mb-5">Services</span>
        <h1 className="h2 max-w-3xl text-white">Practical systems for SharePoint and on-premises teams.</h1>
        <p className="mt-5 max-w-3xl text-slate-300">
          I focus on solutions that make internal work easier to approve, track, troubleshoot, and
          maintain inside enterprise infrastructure.
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        {servicesData.map((service) => (
          <article key={service.title} className="card-surface card-surface-hover p-6">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
              {service.icon}
            </div>
            <h2 className="text-xl font-semibold text-white">{service.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">{service.description}</p>
          </article>
        ))}
      </div>
    </motion.section>
  );
};

export default Services;

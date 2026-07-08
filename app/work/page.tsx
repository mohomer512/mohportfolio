"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface WorkItem {
  image: string;
  title: string;
  description: string;
  link: string;
}

const workData: WorkItem[] = [
  {
    image: "/assets/work/thumb1.png",
    title: "Car Rental",
    description: "A full-stack car rental platform with a responsive interface and checkout flow.",
    link: "https://car-rental-six-pi.vercel.app/",
  },
  {
    image: "/assets/work/thumb2.png",
    title: "Rent Ease",
    description: "A modern rental application developed with Next.js for a fast web experience.",
    link: "https://rent-ease-green.vercel.app/sign-in",
  },
  {
    image: "/assets/work/thumb3.png",
    title: "Store App",
    description: "A web store interface developed with React and Bootstrap styling.",
    link: "#",
  },
];

const Work: React.FC = () => {
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
        <span className="eyebrow mb-5">Selected work</span>
        <h1 className="h2 max-w-3xl text-white">Web projects and practical interface work.</h1>
        <p className="mt-5 max-w-3xl text-slate-300">
          A small selection of existing web projects alongside my current SharePoint and internal
          workflow development focus.
        </p>
      </section>

      <div className="grid gap-5 md:grid-cols-2">
        {workData.map((item) => (
          <article key={item.title} className="card-surface card-surface-hover overflow-hidden">
            <div className="relative h-52 w-full border-b border-white/10">
              <Image src={item.image} alt={item.title} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-white">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 font-semibold text-accent transition-colors hover:text-sky-200"
              >
                View project <ExternalLink size={16} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </motion.section>
  );
};

export default Work;

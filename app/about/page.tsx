"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import Info from "@/components/Info";
import Journey from "@/components/Journey";
import Skills from "@/components/Skills";
import Stats from "@/components/Stats";
import WhatIBuild from "@/components/WhatIBuild";
import aboutImg from "@/public/assets/about.jpg";
import { profileSummary } from "@/lib/profile-data";

const About = () => {
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
      className="mx-auto mt-20 grid w-full gap-8 pb-16 xl:grid-cols-[0.86fr_1.14fr]"
    >
      <aside className="xl:sticky xl:top-8 xl:self-start">
        <div className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.06] p-3 shadow-2xl shadow-slate-950/30">
          <div className="relative h-[360px] overflow-hidden rounded-lg sm:h-[460px] xl:h-[620px]">
            <Image
              src={aboutImg}
              alt="Mohammed Omer Ali"
              fill
              sizes="(min-width: 1280px) 420px, 100vw"
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </aside>

      <div className="space-y-8">
        <section className="section-shell">
          <span className="eyebrow mb-5">About me</span>
          <h1 className="h2 text-white">
            Mohammed Omer Ali, SharePoint Developer for enterprise on-premises systems.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-200">{profileSummary}</p>
          <p className="mt-4 leading-8 text-slate-300">
            My work focuses on internal approval systems, SharePoint lists and libraries, document
            tracking, permissions, and automation that can run reliably inside local infrastructure.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-300">
            <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2">
              <MapPin size={16} className="text-accent" />
              Cairo, Egypt
            </span>
            <span className="rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2">
              Sudanese developer
            </span>
          </div>

          <div className="mt-8">
            <Link href="/contact" className="btn btn-lg btn-accent inline-flex gap-3">
              <span>Let's talk</span>
              <ArrowUpRight size={19} />
            </Link>
          </div>
        </section>

        <Stats />
        <WhatIBuild />
        <Info />
        <Journey />
        <Skills />
      </div>
    </motion.section>
  );
};

export default About;

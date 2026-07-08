"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  ArrowUpRight,
  CheckCircle2,
  FileCheck2,
  Mail,
  Phone,
  ServerCog,
  ShieldCheck,
} from "lucide-react";
import Blod from "@/components/Blod";
import PatternBackground from "@/components/PatternBackground";
import Socials from "@/components/Socials";
import avatarImg from "@/public/assets/avatar.png";
import { heroHighlights, profileSummary } from "@/lib/profile-data";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.35,
          duration: 0.55,
          ease: "easeOut",
        },
      }}
      className="relative flex min-h-[calc(100vh-48px)] items-center overflow-hidden px-1 py-24 sm:px-4 lg:py-20"
    >
      <PatternBackground className="pointer-events-none absolute -right-36 top-10 hidden h-[540px] w-[540px] opacity-10 md:block xl:right-0" />

      <div className="relative z-10 grid w-full items-center gap-12 xl:grid-cols-[1.05fr_0.95fr]">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center xl:mx-0 xl:items-start xl:text-left">
          <span className="eyebrow mb-6">
            <ShieldCheck size={16} />
            Sudanese SharePoint Developer
          </span>

          <h1 className="h1 mb-6 text-white">
            Mohammed Omer Ali
            <span className="mt-3 block text-[0.46em] font-semibold leading-tight text-accent md:text-[0.42em]">
              <TypeAnimation
                sequence={[
                  "SharePoint Server SE",
                  1800,
                  "SPFx Web Parts",
                  1800,
                  "React & Next.js Interfaces",
                  1800,
                  "Workflow Automation",
                  1800,
                  "Document Approval Systems",
                  1800,
                ]}
                wrapper="span"
                speed={42}
                repeat={Infinity}
                cursor={false}
              />
            </span>
          </h1>

          <p className="max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
            {profileSummary}
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3 xl:justify-start">
            {heroHighlights.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.07] px-3 py-2 text-sm text-slate-200"
              >
                <CheckCircle2 size={16} className="text-accent" />
                {item}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row xl:items-start">
            <Link href="/contact" className="btn btn-lg btn-accent gap-3">
              <span>Let&apos;s talk</span>
              <ArrowUpRight size={19} />
            </Link>
            <Link href="/about" className="btn btn-lg btn-tertiary gap-3">
              <span>View profile</span>
              <ArrowUpRight size={19} />
            </Link>
          </div>

          <div className="mt-9 grid w-full max-w-2xl gap-3 text-sm text-slate-200 sm:grid-cols-2">
            <a
              href="tel:+201123633179"
              className="card-surface card-surface-hover flex items-center gap-3 p-4"
            >
              <Phone size={19} className="text-accent" />
              <span>+20 1123633179</span>
            </a>
            <a
              href="mailto:drprogrammer512@hotmail.com"
              className="card-surface card-surface-hover flex items-center gap-3 p-4"
            >
              <Mail size={19} className="text-accent" />
              <span className="break-all">drprogrammer512@hotmail.com</span>
            </a>
          </div>
        </div>

        <div className="relative mx-auto hidden min-h-[620px] w-full max-w-[520px] xl:block">
          <Blod containerStyles="absolute left-4 top-8 h-[500px] w-[500px] opacity-80" />

          <div className="absolute left-1/2 top-8 w-[360px] -translate-x-1/2 overflow-hidden rounded-lg border border-white/10 bg-white/[0.08] p-3 shadow-2xl shadow-slate-950/40 backdrop-blur">
            <Image
              src={avatarImg}
              alt="Mohammed Omer Ali"
              width={390}
              height={540}
              quality={100}
              priority
              className="h-[470px] w-full rounded-lg object-cover object-top"
            />
          </div>

          <div className="card-surface absolute left-0 top-[118px] flex w-[230px] items-start gap-3 p-4">
            <FileCheck2 size={26} className="mt-1 text-accent" />
            <div>
              <p className="font-semibold text-white">Approval Systems</p>
              <p className="mt-1 text-sm text-slate-300">Documents, routing, status, and tracking.</p>
            </div>
          </div>

          <div className="card-surface absolute bottom-10 right-0 flex w-[245px] items-start gap-3 p-4">
            <ServerCog size={26} className="mt-1 text-accent" />
            <div>
              <p className="font-semibold text-white">On-Premises Ready</p>
              <p className="mt-1 text-sm text-slate-300">SharePoint SE, Windows Server, SQL Server.</p>
            </div>
          </div>
        </div>
      </div>

      <Socials
        containerStyles="fixed bottom-5 left-1/2 z-20 hidden -translate-x-1/2 flex-row gap-3 sm:flex xl:bottom-auto xl:left-auto xl:right-8 xl:top-1/2 xl:-translate-y-1/2 xl:translate-x-0 xl:flex-col"
        iconStyles="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.08] text-[21px] text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-accent hover:text-primary"
      />
    </motion.section>
  );
};

export default Hero;

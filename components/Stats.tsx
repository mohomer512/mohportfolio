"use client";

import CountUp from "react-countup";

const Stats = () => {
  return (
    <section className="section-shell">
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="card-surface p-5">
          <div className="flex items-end gap-1 text-4xl font-bold text-accent">
            <span className="text-2xl">Since</span>
            <CountUp end={2024} duration={2.2} delay={0.2} />
          </div>
          <p className="mt-2 text-sm font-semibold text-white">React & Next.js coding</p>
          <p className="mt-1 text-xs leading-5 text-slate-400">Frontend interfaces, dashboards, and web parts.</p>
        </div>

        <div className="card-surface p-5">
          <div className="flex items-end gap-1 text-4xl font-bold text-accent">
            <span className="text-2xl">Since</span>
            <CountUp end={2022} duration={2.2} delay={0.2} />
          </div>
          <p className="mt-2 text-sm font-semibold text-white">Active Directory & IT support</p>
          <p className="mt-1 text-xs leading-5 text-slate-400">Tax Office infrastructure and support work.</p>
        </div>

        <div className="card-surface p-5">
          <p className="text-3xl font-bold text-accent">2025</p>
          <p className="mt-2 text-sm font-semibold text-white">ESafe / BeSafe SharePoint Developer</p>
          <p className="mt-1 text-xs leading-5 text-slate-400">Enterprise on-premises workflow systems.</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;

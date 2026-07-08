"use client";

import CountUp from "react-countup";

const Stats = () => {
  return (
    <section className="section-shell">
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="card-surface p-5">
          <div className="flex items-end gap-1 text-4xl font-bold text-accent">
            <CountUp end={1} duration={2.2} delay={0.2} />
            <span className="text-2xl">+</span>
          </div>
          <p className="mt-2 text-sm font-semibold text-white">Year in development</p>
          <p className="mt-1 text-xs leading-5 text-slate-400">SharePoint, frontend, and automation.</p>
        </div>

        <div className="card-surface p-5">
          <div className="flex items-end gap-1 text-4xl font-bold text-accent">
            <CountUp end={4} duration={2.2} delay={0.2} />
            <span className="text-2xl">+</span>
          </div>
          <p className="mt-2 text-sm font-semibold text-white">Years in IT support</p>
          <p className="mt-1 text-xs leading-5 text-slate-400">Servers, networks, hardware, and users.</p>
        </div>

        <div className="card-surface p-5">
          <p className="text-3xl font-bold text-accent">On-prem</p>
          <p className="mt-2 text-sm font-semibold text-white">Enterprise systems focus</p>
          <p className="mt-1 text-xs leading-5 text-slate-400">SharePoint SE, Windows Server, SQL Server.</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;

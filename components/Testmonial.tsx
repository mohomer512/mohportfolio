"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";

const priorities = [
  "Clear approval stages and document ownership",
  "Reliable on-premises automation for internal teams",
  "Readable dashboards and maintainable SharePoint structures",
];

const Testimonial = () => {
  return (
    <section className="section-shell">
      <span className="eyebrow mb-4">Work priorities</span>
      <h2 className="h3 text-white">Built around clarity, tracking, and maintainability.</h2>
      <div className="mt-6 grid gap-3">
        {priorities.map((item) => (
          <div key={item} className="card-surface flex items-center gap-3 p-4">
            <CheckCircle2 className="h-5 w-5 text-accent" />
            <p className="text-sm text-slate-300">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;

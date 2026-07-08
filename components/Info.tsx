"use client";

import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

interface PersonalInfoItem {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

const personalInfo: PersonalInfoItem[] = [
  {
    icon: <Mail className="h-5 w-5 text-accent" />,
    label: "Email",
    value: "drprogrammer512@hotmail.com",
    href: "mailto:drprogrammer512@hotmail.com",
  },
  {
    icon: <Phone className="h-5 w-5 text-accent" />,
    label: "Phone",
    value: "+20 1123633179",
    href: "tel:+201123633179",
  },
  {
    icon: <MapPin className="h-5 w-5 text-accent" />,
    label: "Location",
    value: "Cairo, Badr City",
  },
];

const Info: React.FC = () => {
  return (
    <section className="section-shell">
      <div className="mb-6">
        <span className="eyebrow mb-4">Contact details</span>
        <h2 className="h3 text-white">Professional contact information</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {personalInfo.map((item) => {
          const content = (
            <div className="card-surface card-surface-hover flex h-full items-start gap-4 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                {item.icon}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-slate-400">{item.label}</p>
                <p className="mt-1 break-words text-base text-white">{item.value}</p>
              </div>
            </div>
          );

          return item.href ? (
            <a key={item.label} href={item.href}>
              {content}
            </a>
          ) : (
            <div key={item.label}>{content}</div>
          );
        })}
      </div>
    </section>
  );
};

export default Info;

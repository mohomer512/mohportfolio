"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const slides = [
  {
    src: "/assets/about-sharepoint-workflow.png",
    alt: "Mohammed Omer Ali working with SharePoint approval workflow systems",
    title: "SharePoint SE + SPFx",
    caption: "Approval workflows, dashboards, and document tracking.",
  },
  {
    src: "/assets/about-dev-erp.png",
    alt: "Mohammed Omer Ali developer illustration with SharePoint, Plumsail, Next.js, and ERP tools",
    title: "React, Next.js & ERP",
    caption: "Frontend development, Odoo knowledge, and on-premises systems.",
  },
  {
    src: "/assets/about.jpg",
    alt: "Mohammed Omer Ali profile photo",
    title: "Enterprise Support",
    caption: "Active Directory, Windows Server, infrastructure, and IT operations.",
  },
];

const AboutPhotoSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? slides.length - 1 : current - 1));
  };

  const goToNext = () => {
    setActiveIndex((current) => (current === slides.length - 1 ? 0 : current + 1));
  };

  return (
    <div className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.06] p-3 shadow-2xl shadow-slate-950/30">
      <div className="relative h-[360px] overflow-hidden rounded-lg sm:h-[460px] xl:h-[620px]">
        <Image
          key={activeSlide.src}
          src={activeSlide.src}
          alt={activeSlide.alt}
          fill
          sizes="(min-width: 1280px) 420px, 100vw"
          className="object-cover object-center transition-opacity duration-500"
          priority
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent p-5">
          <p className="text-lg font-semibold text-white">{activeSlide.title}</p>
          <p className="mt-1 text-sm leading-6 text-slate-200">{activeSlide.caption}</p>
        </div>

        <button
          type="button"
          onClick={goToPrevious}
          aria-label="Previous image"
          className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-lg border border-white/10 bg-slate-950/55 text-white backdrop-blur transition-colors hover:bg-accent hover:text-primary"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          onClick={goToNext}
          aria-label="Next image"
          className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-lg border border-white/10 bg-slate-950/55 text-white backdrop-blur transition-colors hover:bg-accent hover:text-primary"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Show ${slide.title}`}
            className={`h-2 rounded-full transition-all ${
              index === activeIndex ? "bg-accent" : "bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutPhotoSlider;

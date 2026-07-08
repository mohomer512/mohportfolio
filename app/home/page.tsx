import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import WhatIBuild from "@/components/WhatIBuild";

export default function HomePage() {
  return (
    <div className="space-y-8 pb-16">
      <Hero />
      <WhatIBuild />
      <Skills />
    </div>
  );
}

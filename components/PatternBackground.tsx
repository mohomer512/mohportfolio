import React from "react";
import Image from "next/image";

type PatternProps = {
  className?: string;
  alt?: string;
};

const PatternBackground: React.FC<PatternProps> = ({ className = "hidden md:flex absolute left-24 top-0 w-full h-full bg-no-repeat bg-cover bg-center xl:bg-contain xl:-top-[110px] -z-10", alt = "Pattern" }) => {
  return (
    <Image
      src="/assets/pattern.svg"
      alt={alt}
      width={500}
      height={500}
      className={className}
      priority
    />
  );
};

export default PatternBackground;
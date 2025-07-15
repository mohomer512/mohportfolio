"use client";

import { motion } from "framer-motion";

const rectangleVariants = {
  initial: {
    y: "-100%", // Starts off-screen above
    height: "100%",
  },
  animate: {
    y: "0%", // Animates to cover the screen
    height: "0%", // No height on purpose after covering the screen, it's just a placeholder to make it look smooth
  },
  exit: {
    y: ["0%", "100%"], // Animation from 0% (on-screen) to 100% (off-screen below)
    height: ["0%", "100%"], // Similarly, height changes
  },
};

const Rectangle = () => {
  return (
    <>
      {/* Layer 1 - Bottom Layer */}
      <motion.div
        variants={rectangleVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          delay: 0,
          duration: 1.8, // Increased duration for even slower animation (e.g., 1.8 seconds)
          ease: [0.63, 0, 0.17, 1],
        }}
        className="fixed top-full w-screen h-screen z-10 bg-[#0a0815]"
      />

      {/* Layer 2 - Middle Layer */}
      <motion.div
        variants={rectangleVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          delay: 0.1, // Small delay for staggering
          duration: 1.8, // Increased duration for even slower animation
          ease: [0.63, 0, 0.17, 1],
        }}
        className="fixed top-full w-screen h-screen z-20 bg-[#1b162b]"
      />

      {/* Layer 3 - Top Layer */}
      <motion.div
        variants={rectangleVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          delay: 0.2, // Small delay for staggering
          duration: 1.8, // Increased duration for even slower animation
          ease: [0.63, 0, 0.17, 1],
        }}
        className="fixed top-full w-screen h-screen z-30 bg-[#2d2545]"
      />
    </>
  );
};

export default Rectangle;
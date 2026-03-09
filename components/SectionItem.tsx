"use client";

import { motion } from "framer-motion";
import { SectionItemProps } from "./types";

export default function SectionItem({ section, isActive }: SectionItemProps) {
  return (
    <motion.section
      className="
        h-screen w-full flex flex-col justify-center items-start
        px-8 md:px-12 lg:px-16 relative
      "
      initial={{ opacity: 0.4 }}
      animate={{ opacity: isActive ? 1 : 0.4 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Active indicator */}
      {isActive && (
        <motion.div
          className="absolute left-0 w-1 h-24 bg-accent-green"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.4 }}
        />
      )}

      {/* Subtitle */}
      <motion.p
        className="
          text-sm md:text-base uppercase tracking-wider
          text-accent-green mb-4
        "
        initial={{ y: 20, opacity: 0 }}
        animate={{
          y: isActive ? 0 : 20,
          opacity: isActive ? 1 : 0,
        }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        {section.subtitle}
      </motion.p>

      {/* Title */}
      <motion.h2
        className="
          text-4xl md:text-5xl lg:text-6xl font-bold
          text-cinematic text-cinematic-light mb-6
        "
        initial={{ y: 30, opacity: 0 }}
        animate={{
          y: isActive ? 0 : 30,
          opacity: isActive ? 1 : 0.6,
        }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {section.title}
      </motion.h2>

      {/* Description */}
      <motion.p
        className="
          text-lg md:text-xl text-gray-400 max-w-md
        "
        initial={{ y: 30, opacity: 0 }}
        animate={{
          y: isActive ? 0 : 30,
          opacity: isActive ? 1 : 0,
        }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {section.description}
      </motion.p>
    </motion.section>
  );
}

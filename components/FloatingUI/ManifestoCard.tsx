"use client";

import { motion } from "framer-motion";

export default function ManifestoCard() {
  return (
    <motion.div
      className="
        relative max-w-2xl w-full
        pointer-events-auto
      "
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Glassmorphism Card */}
      <div
        className="
          relative
          backdrop-blur-xl
          bg-white/10
          border border-white/20
          rounded-2xl
          p-12 md:p-16
          shadow-2xl
        "
      >
        {/* Poetic Typography Content */}
        <div className="space-y-8">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            We reinvent
            <br />
            the systems
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-white/80 font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Between nature and technology,
            <br />
            we find a new way to build.
          </motion.p>

          <motion.p
            className="text-base md:text-lg text-white/60 font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Software that breathes.
            <br />
            Interfaces that grow.
            <br />
            Systems that adapt.
          </motion.p>
        </div>

        {/* Subtle gradient accent */}
        <div
          className="
            absolute -bottom-px left-0 right-0 h-px
            bg-gradient-to-r from-transparent via-white/40 to-transparent
          "
        />
      </div>

      {/* Floating accent dots */}
      <motion.div
        className="absolute -top-4 -right-4 w-3 h-3 rounded-full bg-bio-glow/60 blur-sm"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-6 -left-6 w-2 h-2 rounded-full bg-accent-blue/60 blur-sm"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
    </motion.div>
  );
}

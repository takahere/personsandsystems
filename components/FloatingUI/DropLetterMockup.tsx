"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function DropLetterMockup() {
  const [isHovered, setIsHovered] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleClick = () => {
    setIsAnalyzing(true);
    setTimeout(() => setIsAnalyzing(false), 3000);
  };

  return (
    <motion.div
      className="relative max-w-4xl w-full pointer-events-auto"
      animate={{
        y: [0, -12, 0],
      }}
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Mac Window Frame */}
      <div className="relative backdrop-blur-2xl bg-black/40 border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
        {/* Traffic Light Buttons */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-4 text-xs text-white/60 font-light">DropLetter.app</span>
        </div>

        {/* Main Content */}
        <div className="p-8 md:p-12">
          {/* Drop Zone */}
          <motion.div
            className={`
              relative
              border-2 border-dashed rounded-xl
              p-16 md:p-24
              transition-all duration-300
              cursor-pointer
              ${
                isHovered
                  ? "border-bio-glow/60 bg-bio-glow/5"
                  : "border-white/20 bg-white/5"
              }
              ${isAnalyzing ? "border-accent-blue/60 bg-accent-blue/10" : ""}
            `}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="text-center space-y-6">
              {!isAnalyzing ? (
                <>
                  {/* Upload Icon */}
                  <motion.div
                    className="flex justify-center"
                    animate={{
                      y: isHovered ? -8 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg
                      className="w-16 h-16 text-white/60"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                  </motion.div>

                  {/* Text */}
                  <div className="space-y-2">
                    <p className="text-xl md:text-2xl text-white font-light">
                      {isHovered ? "Drop your document here" : "Upload Document"}
                    </p>
                    <p className="text-sm text-white/50">
                      PDF, DOCX, or TXT • Max 10MB
                    </p>
                  </div>

                  {/* Browse Button */}
                  <motion.button
                    className="
                      px-6 py-3
                      bg-white/10 hover:bg-white/20
                      border border-white/20
                      rounded-lg
                      text-sm text-white font-light
                      transition-all duration-200
                    "
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Browse Files
                  </motion.button>
                </>
              ) : (
                <>
                  {/* Analyzing State */}
                  <motion.div
                    className="flex justify-center"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <svg
                      className="w-16 h-16 text-accent-blue"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                  </motion.div>

                  <div className="space-y-2">
                    <p className="text-xl md:text-2xl text-white font-light">
                      Analyzing document...
                    </p>
                    <p className="text-sm text-white/50">
                      Powered by AI
                    </p>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-accent-blue"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 3, ease: "easeInOut" }}
                    />
                  </div>
                </>
              )}
            </div>
          </motion.div>

          {/* Info Text */}
          <motion.p
            className="mt-6 text-center text-sm text-white/40 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            AI-powered letter delivery service. Hack the postal law.
          </motion.p>
        </div>
      </div>

      {/* Floating accent light */}
      <motion.div
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-32 bg-bio-glow/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}

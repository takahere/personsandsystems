"use client";

import { motion } from "framer-motion";

interface SidebarProps {
  currentSection: number;
  onSectionChange: (index: number) => void;
}

const sections = [
  { id: 0, number: "01", title: "REINVENTING THE SYSTEMS" },
  { id: 1, number: "02", title: "DROPLETTER" },
  { id: 2, number: "03", title: "COMING SOON" },
];

export default function Sidebar({ currentSection, onSectionChange }: SidebarProps) {
  return (
    <div className="w-full h-full flex flex-col bg-black">
      {/* BENEFITS INCLUDE Label - matching A24 */}
      <div className="px-5 py-4">
        <span className="text-white/40 text-[10px] uppercase tracking-[0.12em]">
          Benefits Include:
        </span>
      </div>

      {/* Project List */}
      <div className="flex-1">
        {sections.map((section, index) => (
          <motion.button
            key={section.id}
            onClick={() => onSectionChange(index)}
            className={`
              w-full px-5 py-5 flex items-center justify-between
              border-b border-white/[0.12]
              transition-all duration-300 cursor-pointer
              ${currentSection === index
                ? "bg-cream/[0.12]"
                : "hover:bg-white/[0.03]"
              }
            `}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            {/* Number - Left aligned */}
            <span className={`
              text-[11px] tabular-nums transition-colors duration-300
              ${currentSection === index ? "text-white/40" : "text-white/20"}
            `}>
              {section.number}
            </span>

            {/* Title - Right aligned */}
            <span className={`
              text-[10px] uppercase tracking-[0.06em] text-right transition-colors duration-300
              ${currentSection === index ? "text-white" : "text-white/40"}
            `}>
              {section.title}
            </span>
          </motion.button>
        ))}
      </div>

      {/* JOIN Button Section - Fixed at bottom, A24 style */}
      <div className="flex-shrink-0 mt-auto">
        {/* JOIN button - cream background */}
        <motion.button
          className="w-full py-8 bg-cream hover:bg-cream-hover text-black transition-all duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="block text-4xl font-bold tracking-tight">
            JOIN
          </span>
        </motion.button>

        {/* Pricing section - cream background like A24 */}
        <div className="bg-cream py-4 px-5">
          {/* Monthly / Annually Toggle */}
          <div className="flex items-center justify-center gap-8 mb-3">
            <span className="text-[9px] uppercase tracking-[0.1em] text-black/70 border-b border-black/30 pb-0.5">
              Monthly
            </span>
            <span className="text-[9px] uppercase tracking-[0.1em] text-black/30">
              Annually
            </span>
          </div>

          {/* Price */}
          <div className="flex items-start justify-center text-black">
            <span className="text-lg mt-2">$</span>
            <span className="text-6xl font-light leading-none" style={{ fontFamily: 'Georgia, serif' }}>
              9
            </span>
            <span className="text-xl mt-1">.99</span>
            <span className="text-[9px] text-black/50 ml-1 mt-4 uppercase tracking-wide">
              /month
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

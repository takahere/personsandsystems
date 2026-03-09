"use client";

import { motion, AnimatePresence } from "framer-motion";

interface VisualStageProps {
  currentSection: number;
}

// Background images for each section
const backgroundImages = [
  {
    id: 0,
    url: "https://images.unsplash.com/photo-1511497584788-876760111969?w=1920&q=80",
    alt: "Deep Forest & Fog",
  },
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
    alt: "Calm Lake",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&q=80",
    alt: "Night Sky",
  },
];

// Desktop UI mockup content for each section
const mockupContent = [
  {
    id: 0,
    title: "Persons & Systems",
    subtitle: "Dashboard",
    stats: [
      { label: "Active Projects", value: "12" },
      { label: "Team Members", value: "8" },
      { label: "Completed", value: "94%" },
    ],
  },
  {
    id: 1,
    title: "Dropletter",
    subtitle: "Mail Dashboard",
    stats: [
      { label: "Letters Sent", value: "2,847" },
      { label: "Delivery Rate", value: "99.2%" },
      { label: "Avg. Time", value: "2.3 days" },
    ],
  },
  {
    id: 2,
    title: "Coming Soon",
    subtitle: "Preview",
    stats: [
      { label: "Launch", value: "Q2 2026" },
      { label: "Waitlist", value: "1,204" },
      { label: "Progress", value: "78%" },
    ],
  },
];

export default function VisualStage({ currentSection }: VisualStageProps) {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* BACKGROUND LAYER - Nature Images */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          {backgroundImages.map((bg) =>
            bg.id === currentSection ? (
              <motion.div
                key={bg.id}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${bg.url})`,
                  }}
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40" />
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>

      {/* FOREGROUND LAYER - Desktop UI Mockup */}
      <div className="relative z-10 w-full h-full flex items-center justify-center p-8 md:p-12 lg:p-16">
        <AnimatePresence mode="wait">
          {mockupContent.map((content) =>
            content.id === currentSection ? (
              <motion.div
                key={content.id}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -40, scale: 0.95 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="w-full max-w-3xl"
              >
                {/* Desktop Window Frame */}
                <div className="bg-[#1a1a1a]/90 backdrop-blur-xl rounded-xl overflow-hidden shadow-2xl border border-white/10">
                  {/* Window Title Bar */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-black/40 border-b border-white/10">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
                    </div>
                    <div className="flex-1 text-center">
                      <span className="text-white/40 text-xs">{content.title}</span>
                    </div>
                    <div className="w-14"></div>
                  </div>

                  {/* Window Content */}
                  <div className="p-6 md:p-8">
                    {/* Header */}
                    <div className="mb-8">
                      <h2 className="text-white text-2xl md:text-3xl font-light mb-1">
                        {content.title}
                      </h2>
                      <p className="text-white/40 text-sm">{content.subtitle}</p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-4 md:gap-6">
                      {content.stats.map((stat, index) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                          className="bg-white/5 rounded-lg p-4 md:p-5 border border-white/5"
                        >
                          <p className="text-white/40 text-[10px] md:text-xs uppercase tracking-wider mb-2">
                            {stat.label}
                          </p>
                          <p className="text-white text-2xl md:text-3xl font-light">
                            {stat.value}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Decorative Elements */}
                    <div className="mt-8 space-y-3">
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-white/20 to-white/10 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: "75%" }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </div>
                      <div className="flex gap-3">
                        <div className="h-2 flex-1 bg-white/5 rounded-full"></div>
                        <div className="h-2 w-1/3 bg-white/5 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating accent */}
                <motion.div
                  className="absolute -bottom-4 -right-4 w-24 h-24 bg-cream/10 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

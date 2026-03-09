"use client";

import { motion } from "framer-motion";

const notifications = [
  {
    id: 1,
    title: "New Feature Coming",
    message: "Something revolutionary is in the works...",
    time: "Just now",
    delay: 0,
  },
  {
    id: 2,
    title: "Persons and Systems",
    message: "The future is being written.",
    time: "2 min ago",
    delay: 0.2,
  },
  {
    id: 3,
    title: "Stay Tuned",
    message: "Innovation in progress.",
    time: "5 min ago",
    delay: 0.4,
  },
];

export default function TeaserNotification() {
  return (
    <motion.div
      className="relative max-w-md w-full space-y-4 pointer-events-auto"
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {notifications.map((notification, index) => (
        <motion.div
          key={notification.id}
          className="
            relative
            backdrop-blur-xl
            bg-black/60
            border border-white/20
            rounded-2xl
            p-4
            shadow-2xl
            hover:bg-black/70
            transition-all duration-300
            cursor-pointer
          "
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            delay: notification.delay,
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{ scale: 1.03, x: -4 }}
          style={{
            zIndex: notifications.length - index,
          }}
        >
          {/* iPhone-style notification */}
          <div className="flex items-start gap-4">
            {/* App Icon */}
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-bio-glow/80 to-accent-blue/80 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className="flex-grow min-w-0">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-sm font-medium text-white truncate">
                  {notification.title}
                </h3>
                <span className="text-xs text-white/50 flex-shrink-0">
                  {notification.time}
                </span>
              </div>
              <p className="mt-1 text-sm text-white/70 line-clamp-2">
                {notification.message}
              </p>
            </div>
          </div>

          {/* Notification indicator dot */}
          <motion.div
            className="absolute top-2 right-2 w-2 h-2 rounded-full bg-bio-glow"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      ))}

      {/* CTA Button */}
      <motion.button
        className="
          w-full
          backdrop-blur-xl
          bg-white/10 hover:bg-white/20
          border border-white/20
          rounded-xl
          p-4
          text-white text-sm font-medium
          transition-all duration-300
          shadow-lg
        "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Get Notified When We Launch
      </motion.button>

      {/* Floating glow effect */}
      <motion.div
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-48 bg-accent-blue/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}

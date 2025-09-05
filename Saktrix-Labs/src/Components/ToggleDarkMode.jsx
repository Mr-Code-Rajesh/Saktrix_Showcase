import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../Context/useTheme";

export default function ThemeToggle() {
  const {theme, toggleTheme} = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{ scale: 0.9, rotate: 10 }}
      className="relative flex items-center justify-center w-10 h-10
                 rounded-2xl shadow-xl border border-gray-300/40 dark:border-gray-700/50
                 bg-white/30 dark:bg-black/30 backdrop-blur-xl
                 transition-all duration-500 overflow-hidden group"
    >
      {/* AI Glow Aura */}
      <motion.span
        className="absolute inset-0 rounded-2xl bg-gradient-to-r 
                   from-purple-500 via-pink-500 to-blue-500 opacity-40 blur-xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />

      {/* Icon */}
      {theme === "light" ? (
        <motion.div
          key="sun"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 12 }}
          whileHover={{ scale: 1.2, rotate: 10, color: "#facc15" }}
          className="text-yellow-400 text-2xl drop-shadow-lg relative z-10"
        >
          <FaSun />
        </motion.div>
      ) : (
        <motion.div
          key="moon"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 12 }}
          whileHover={{ scale: 1.2, rotate: -10, color: "#818cf8" }}
          className="text-indigo-400 text-2xl drop-shadow-lg relative z-10"
        >
          <FaMoon />
        </motion.div>
      )}
    </motion.button>
  );
}


















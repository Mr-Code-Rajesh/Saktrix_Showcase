import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  // Load theme from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("data-theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    }
  }, []);

  // Handle theme change
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("data-theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      className="relative flex items-center justify-center w-14 h-14 
                 rounded-2xl shadow-xl border border-gray-300 dark:border-gray-700
                 bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-black
                 transition-all duration-500 overflow-hidden group"
    >
      {/* Hover Glow */}
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 
                   opacity-0 group-hover:opacity-20 blur-2xl transition duration-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.3, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      />

      {/* Icon Animation */}
      {theme === "light" ? (
        <motion.div
          key="sun"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="text-yellow-500 text-2xl drop-shadow-glow"
        >
          <FaSun />
        </motion.div>
      ) : (
        <motion.div
          key="moon"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="text-indigo-400 text-2xl drop-shadow-glow"
        >
          <FaMoon />
        </motion.div>
      )}
    </motion.button>
  );
}

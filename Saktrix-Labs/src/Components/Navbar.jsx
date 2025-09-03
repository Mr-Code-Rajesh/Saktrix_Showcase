import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ToggleDarkMode";
import SaktriLogo from '../assets/saktrix_logo.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Components", to: "/components" },
    { name: "About", to: "/about" },
    { name: "GitHub", to: "/github" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50"
    >
      {/* 🌌 Neon Glow Aura (Dark Mode Only) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }}
        className="absolute inset-0 -z-10 hidden dark:block">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90%] h-[140%] 
                        bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 
                        opacity-40 blur-3xl rounded-full animate-pulse" />
      </motion.div>

      {/* Actual Navbar */}
      <div
        className="backdrop-blur-md border-b border-white/20 dark:border-gray-800
                   bg-white/40 dark:bg-gradient-to-r dark:from-black dark:via-gray-900 dark:to-black
                   shadow-lg"
      >
        <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-extrabold bg-gradient-to-r 
                       from-purple-500 via-pink-500 to-blue-500 
                       text-transparent bg-clip-text cursor-pointer"
          >
            <NavLink to="/" className="flex items-center gap-2">
              <img src={SaktriLogo} alt="Saktrix Logo" className="h-8" /> <span>Saktrix Showcase</span>
            </NavLink>
          </motion.div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {links.map((link, idx) => (
              <motion.li
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="relative group overflow-hidden px-1 py-1 rounded-md"
              >
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `relative px-2 py-2 z-10 text-gray-800 dark:text-gray-200 transition ${
                      isActive ? "text-purple-500 dark:text-pink-400" : ""
                    }`
                  }
                >
                  {link.name}
                </NavLink>

                {/* 🌊 Ripple Effect */}
                <motion.span
                  whileHover={{ scale: 2, opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 
                             rounded-full opacity-30 blur-md pointer-events-none"
                />

                {/* Glow underline */}
                <span
                  className="absolute left-0 bottom-[-4px] w-0 h-[6px] 
                             bg-gradient-to-r from-purple-500 to-pink-500 
                             transition-all duration-500 group-hover:w-full"
                />
              </motion.li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* GitHub Icon */}
            <motion.a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ rotate: 15, scale: 1.2 }}
              className="text-gray-700 dark:text-gray-300 text-xl"
            >
              <FaGithub />
            </motion.a>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden flex flex-col gap-[6px] group"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span
                className={`w-6 h-[2px] rounded-full bg-gray-700 dark:bg-gray-300 
                transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[8px]" : ""}`}
              />
              <span
                className={`w-6 h-[2px] rounded-full bg-gray-700 dark:bg-gray-300 
                transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`w-6 h-[2px] rounded-full bg-gray-700 dark:bg-gray-300 
                transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[8px]" : ""}`}
              />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden flex flex-col space-y-4 px-6 py-6 
                     bg-white/80 dark:bg-gradient-to-b dark:from-black dark:via-gray-900 dark:to-black
                     backdrop-blur-lg border-t border-white/20 dark:border-gray-800"
        >
          {links.map((link, idx) => (
            <li key={idx}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `block text-gray-800 dark:text-gray-200 font-medium hover:text-purple-500 dark:hover:text-pink-400 transition ${
                    isActive ? "text-purple-500 dark:text-pink-400" : ""
                  }`
                }
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.header>
  );
}

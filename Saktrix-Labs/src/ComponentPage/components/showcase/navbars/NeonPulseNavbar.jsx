import { useState } from "react";
import { motion } from "framer-motion";
import { FaHome, FaGithub, FaUser, FaBars } from "react-icons/fa";
import { useTheme } from "../../../../Context/useTheme";

const links = [
  { name: "Home", icon: <FaHome />, href: "#" },
  { name: "Profile", icon: <FaUser />, href: "#profile" },
  { name: "GitHub", icon: <FaGithub />, href: "https://github.com/" },
];

export default function NeonPulseNavbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [active, setActive] = useState("Home");
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full backdrop-blur-lg bg-black/40 dark:bg-gray-900/40 border-b border-neon shadow-lg"
      style={{ boxShadow: "0 4px 32px 0 rgba(0,0,0,0.18)", borderRadius: "0 0 24px 24px" }}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-2 text-pink-400 font-bold text-xl">
          <span className="h-8 w-8 rounded-full bg-gradient-to-tr from-pink-400 to-purple-400 flex items-center justify-center shadow-lg">🤖</span>
          <span className="tracking-widest">NEON PULSE</span>
        </div>
        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">
          {links.map(link => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={() => setActive(link.name)}
              whileHover={{ scale: 1.08, textShadow: "0 0 12px #f472b6" }}
              className={`flex items-center gap-2 px-3 py-1 rounded-lg font-semibold text-pink-400 dark:text-purple-300 hover:bg-pink-100/20 dark:hover:bg-purple-900/20 transition duration-300 border-b-2 ${active === link.name ? "border-pink-400 neon-pulse" : "border-transparent"}`}
            >
              {link.icon} {link.name}
            </motion.a>
          ))}
        </div>
        {/* Actions */}
        <div className="flex items-center gap-3">
          <button onClick={toggleTheme} className="px-2 py-1 rounded-lg bg-gradient-to-tr from-pink-400 to-purple-400 text-white shadow-md">
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="px-2 py-1 rounded-lg bg-pink-400 text-white shadow-md flex items-center gap-1">
            <FaGithub />
          </a>
          {/* Hamburger */}
          <button className="md:hidden text-pink-400" onClick={() => setOpen(o => !o)}>
            <FaBars size={24} />
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="md:hidden bg-black/80 dark:bg-gray-900/80 backdrop-blur-lg border-t border-pink-400 overflow-hidden"
      >
        <div className="flex flex-col gap-4 py-4 px-6">
          {links.map(link => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={() => setActive(link.name)}
              whileHover={{ scale: 1.05, textShadow: "0 0 12px #f472b6" }}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg font-semibold text-pink-400 dark:text-purple-300 hover:bg-pink-100/20 dark:hover:bg-purple-900/20 transition duration-300 border-b-2 ${active === link.name ? "border-pink-400 neon-pulse" : "border-transparent"}`}
            >
              {link.icon} {link.name}
            </motion.a>
          ))}
        </div>
      </motion.div>
      <style>{`.neon-pulse { box-shadow: 0 0 12px 2px #f472b6, 0 0 24px 4px #f472b6; animation: neonPulse 0.6s infinite alternate; } @keyframes neonPulse { 0% { box-shadow: 0 0 12px 2px #f472b6; } 100% { box-shadow: 0 0 24px 4px #f472b6; } }`}</style>
    </motion.nav>
  );
}

import { useState } from "react";
import { motion } from "framer-motion";
import { FaHome, FaGithub, FaUser, FaBars } from "react-icons/fa";
import { useTheme } from "../../../../Context/useTheme";

const links = [
  { name: "Home", icon: <FaHome />, href: "#" },
  { name: "Profile", icon: <FaUser />, href: "#profile" },
  { name: "GitHub", icon: <FaGithub />, href: "https://github.com/" },
];

export default function HologramNavbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/30 dark:bg-gray-900/30 border-b border-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 shadow-lg"
      style={{ boxShadow: "0 4px 32px 0 rgba(0,0,0,0.12)", borderRadius: "0 0 24px 24px" }}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-2 text-cyan-400 font-bold text-xl">
          <span className="h-8 w-8 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-400 flex items-center justify-center shadow-lg">🤖</span>
          <span className="tracking-widest">HOLOGRAM</span>
        </div>
        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">
          {links.map(link => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ scale: 1.08, textShadow: "0 0 8px #67e8f9" }}
              className="flex items-center gap-2 px-3 py-1 rounded-lg font-semibold text-cyan-400 dark:text-purple-300 hover:bg-cyan-100/20 dark:hover:bg-purple-900/20 transition duration-300 border-b-2 border-transparent hover:border-cyan-400"
            >
              {link.icon} {link.name}
            </motion.a>
          ))}
        </div>
        {/* Actions */}
        <div className="flex items-center gap-3">
          <button onClick={toggleTheme} className="px-2 py-1 rounded-lg bg-gradient-to-tr from-cyan-400 to-purple-400 text-white shadow-md">
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="px-2 py-1 rounded-lg bg-cyan-400 text-white shadow-md flex items-center gap-1">
            <FaGithub />
          </a>
          {/* Hamburger */}
          <button className="md:hidden text-cyan-400" onClick={() => setOpen(o => !o)}>
            <FaBars size={24} />
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="md:hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-t border-cyan-400 overflow-hidden"
      >
        <div className="flex flex-col gap-4 py-4 px-6">
          {links.map(link => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ scale: 1.05, textShadow: "0 0 8px #67e8f9" }}
              className="flex items-center gap-2 px-3 py-2 rounded-lg font-semibold text-cyan-400 dark:text-purple-300 hover:bg-cyan-100/20 dark:hover:bg-purple-900/20 transition duration-300 border-b-2 border-transparent hover:border-cyan-400"
            >
              {link.icon} {link.name}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}

import { useState } from "react";
import { motion } from "framer-motion";
import { FaHome, FaUser, FaCog, FaBars } from "react-icons/fa";
import { useTheme } from "../../../../Context/useTheme";

const links = [
  { name: "Home", icon: <FaHome />, href: "#" },
  { name: "Profile", icon: <FaUser />, href: "#profile" },
  { name: "Settings", icon: <FaCog />, href: "#settings" },
];

export default function GlitchDrawer() {
  const [open, setOpen] = useState(true);
  const [mobile, setMobile] = useState(false);
  const { theme } = useTheme();
  const [active, setActive] = useState("Home");
  return (
    <>
      {/* Desktop Drawer */}
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 h-screen z-40 ${open ? "w-64" : "w-16"} bg-black/40 dark:bg-gray-900/40 border-r border-pink-400 shadow-xl flex flex-col transition-all duration-300 relative`}
        style={{ boxShadow: "0 4px 32px 0 #f472b6", borderRadius: "0 24px 24px 0" }}
      >
        <div className="flex items-center justify-between px-4 py-4">
          <span className="flex items-center gap-2 text-pink-400 font-bold text-xl">
            <span className="h-8 w-8 rounded-full bg-gradient-to-tr from-pink-400 to-purple-400 flex items-center justify-center shadow-lg">🤖</span>
            {open && <span className="tracking-widest">GLITCH</span>}
          </span>
          <button onClick={() => setOpen(o => !o)} className="text-pink-400">
            <FaBars size={24} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-pink-400 scrollbar-track-transparent">
          <nav className="flex flex-col gap-2 px-2">
            {links.map(link => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setActive(link.name)}
                whileHover={{ scale: 1.08 }}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg font-semibold text-pink-400 dark:text-purple-300 hover:bg-pink-100/20 dark:hover:bg-purple-900/20 transition duration-300 border-l-4 border-transparent glitch-link ${active === link.name ? "glitch-active" : ""}`}
              >
                {link.icon} {open && <span className="glitch-text">{link.name}</span>}
              </motion.a>
            ))}
          </nav>
        </div>
      </motion.div>
      {/* Mobile Overlay */}
      <button className="fixed top-4 left-4 z-50 md:hidden text-pink-400" onClick={() => setMobile(true)}>
        <FaBars size={28} />
      </button>
      <motion.div
        initial={false}
        animate={mobile ? { x: 0, opacity: 1 } : { x: -320, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed inset-0 z-50 bg-black/80 dark:bg-gray-900/80 md:hidden"
        style={{ width: "100vw" }}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 py-6">
            <span className="flex items-center gap-2 text-pink-400 font-bold text-xl">
              <span className="h-8 w-8 rounded-full bg-gradient-to-tr from-pink-400 to-purple-400 flex items-center justify-center shadow-lg">🤖</span>
              <span className="tracking-widest">GLITCH</span>
            </span>
            <button onClick={() => setMobile(false)} className="text-pink-400">
              <FaBars size={28} />
            </button>
          </div>
          <nav className="flex-1 flex flex-col gap-4 px-8 overflow-y-auto scrollbar-thin scrollbar-thumb-pink-400 scrollbar-track-transparent">
            {links.map(link => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setActive(link.name)}
                whileHover={{ scale: 1.08 }}
                className={`flex items-center gap-3 px-3 py-3 rounded-lg font-semibold text-pink-400 dark:text-purple-300 hover:bg-pink-100/20 dark:hover:bg-purple-900/20 transition duration-300 border-l-4 border-transparent glitch-link ${active === link.name ? "glitch-active" : ""}`}
              >
                {link.icon} <span className="glitch-text">{link.name}</span>
              </motion.a>
            ))}
          </nav>
        </div>
      </motion.div>
      <style>{`.glitch-link:hover .glitch-text { animation: glitch 0.4s linear infinite; } .glitch-active .glitch-text { animation: glitch 0.6s linear infinite; } @keyframes glitch { 0% { text-shadow: 2px 0 #f472b6, -2px 0 #a78bfa; } 20% { text-shadow: -2px 0 #f472b6, 2px 0 #a78bfa; } 40% { text-shadow: 2px 2px #f472b6, -2px -2px #a78bfa; } 60% { text-shadow: -2px 2px #f472b6, 2px -2px #a78bfa; } 80% { text-shadow: 2px 0 #f472b6, -2px 0 #a78bfa; } 100% { text-shadow: none; } }`}</style>
    </>
  );
}

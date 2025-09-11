import { useState } from "react";
import { motion } from "framer-motion";
import { FaHome, FaUser, FaCog, FaBars } from "react-icons/fa";
import { useTheme } from "../../../../Context/useTheme";

const links = [
  { name: "Home", icon: <FaHome />, href: "#" },
  { name: "Profile", icon: <FaUser />, href: "#profile" },
  { name: "Settings", icon: <FaCog />, href: "#settings" },
];

export default function HologramSidebar() {
  const [open, setOpen] = useState(true);
  const [mobile, setMobile] = useState(false);
  const { theme } = useTheme();
  const [active, setActive] = useState("Home");
  return (
    <>
      {/* Desktop Sidebar */}
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 h-screen z-40 ${open ? "w-64" : "w-16"} bg-white/30 dark:bg-gray-900/30 backdrop-blur-lg border-r border-gradient-to-b from-cyan-400 via-purple-400 to-pink-400 shadow-xl flex flex-col transition-all duration-300 relative`}
        style={{ boxShadow: "0 4px 32px 0 rgba(0,0,0,0.12)", borderRadius: "0 24px 24px 0" }}
      >
        <div className="flex items-center justify-between px-4 py-4">
          <span className="flex items-center gap-2 text-cyan-400 font-bold text-xl">
            <span className="h-8 w-8 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-400 flex items-center justify-center shadow-lg">🤖</span>
            {open && <span className="tracking-widest">HOLOGRAM</span>}
          </span>
          <button onClick={() => setOpen(o => !o)} className="text-cyan-400">
            <FaBars size={24} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-400 scrollbar-track-transparent">
          <nav className="flex flex-col gap-2 px-2">
            {links.map(link => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setActive(link.name)}
                whileHover={{ scale: 1.08, textShadow: "0 0 8px #67e8f9" }}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg font-semibold text-cyan-400 dark:text-purple-300 hover:bg-cyan-100/20 dark:hover:bg-purple-900/20 transition duration-300 border-l-4 ${active === link.name ? "border-cyan-400 hologram-glow" : "border-transparent"}`}
              >
                {link.icon} {open && link.name}
              </motion.a>
            ))}
          </nav>
        </div>
      </motion.div>
      {/* Mobile Overlay */}
      <button className="fixed top-4 left-4 z-50 md:hidden text-cyan-400" onClick={() => setMobile(true)}>
        <FaBars size={28} />
      </button>
      <motion.div
        initial={false}
        animate={mobile ? { x: 0, opacity: 1 } : { x: -320, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed inset-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg md:hidden"
        style={{ width: "100vw" }}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 py-6">
            <span className="flex items-center gap-2 text-cyan-400 font-bold text-xl">
              <span className="h-8 w-8 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-400 flex items-center justify-center shadow-lg">🤖</span>
              <span className="tracking-widest">HOLOGRAM</span>
            </span>
            <button onClick={() => setMobile(false)} className="text-cyan-400">
              <FaBars size={28} />
            </button>
          </div>
          <nav className="flex-1 flex flex-col gap-4 px-8 overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-400 scrollbar-track-transparent">
            {links.map(link => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setActive(link.name)}
                whileHover={{ scale: 1.08, textShadow: "0 0 8px #67e8f9" }}
                className={`flex items-center gap-3 px-3 py-3 rounded-lg font-semibold text-cyan-400 dark:text-purple-300 hover:bg-cyan-100/20 dark:hover:bg-purple-900/20 transition duration-300 border-l-4 ${active === link.name ? "border-cyan-400 hologram-glow" : "border-transparent"}`}
              >
                {link.icon} {link.name}
              </motion.a>
            ))}
          </nav>
        </div>
      </motion.div>
      <style>{`.hologram-glow { box-shadow: 0 0 12px 2px #67e8f9, 0 0 24px 4px #a78bfa; }`}</style>
    </>
  );
}

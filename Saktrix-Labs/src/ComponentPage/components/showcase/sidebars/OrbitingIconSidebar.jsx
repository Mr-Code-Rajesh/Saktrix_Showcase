import { useState } from "react";
import { motion } from "framer-motion";
import { FaHome, FaUser, FaCog, FaBars } from "react-icons/fa";
import { useTheme } from "../../../../Context/useTheme";

const links = [
  { name: "Home", icon: <FaHome />, href: "#" },
  { name: "Profile", icon: <FaUser />, href: "#profile" },
  { name: "Settings", icon: <FaCog />, href: "#settings" },
];

function Orb({ color, delay }) {
  return (
    <motion.span
      className={`absolute w-2 h-2 rounded-full ${color}`}
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 2, delay }}
      style={{ top: "50%", left: "50%", marginLeft: -4, marginTop: -4 }}
    />
  );
}

export default function OrbitingIconSidebar() {
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
        className={`fixed top-0 left-0 h-screen z-40 ${open ? "w-64" : "w-16"} bg-gray-900/80 dark:bg-black/80 border-r border-blue-400 shadow-xl flex flex-col transition-all duration-300 relative`}
        style={{ boxShadow: "0 4px 32px 0 #38bdf8", borderRadius: "0 24px 24px 0" }}
      >
        <div className="flex items-center justify-between px-4 py-4">
          <span className="flex items-center gap-2 text-blue-400 font-bold text-xl">
            <span className="h-8 w-8 rounded-full bg-gradient-to-tr from-blue-400 to-purple-400 flex items-center justify-center shadow-lg relative">
              <Orb color="bg-blue-400" delay={0} />
              <Orb color="bg-purple-400" delay={1} />
              <Orb color="bg-pink-400" delay={2} />
              🤖
            </span>
            {open && <span className="tracking-widest">ORBIT</span>}
          </span>
          <button onClick={() => setOpen(o => !o)} className="text-blue-400">
            <FaBars size={24} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-transparent">
          <nav className="flex flex-col gap-2 px-2">
            {links.map(link => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setActive(link.name)}
                whileHover={{ scale: 1.08, textShadow: "0 0 8px #38bdf8" }}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg font-semibold text-blue-400 dark:text-purple-300 hover:bg-blue-100/20 dark:hover:bg-purple-900/20 transition duration-300 border-l-4 ${active === link.name ? "border-blue-400 orbit-glow" : "border-transparent"}`}
              >
                <span className="relative">
                  {link.icon}
                  <Orb color="bg-blue-400" delay={0.2} />
                </span>
                {open && link.name}
              </motion.a>
            ))}
          </nav>
        </div>
      </motion.div>
      {/* Mobile Overlay */}
      <button className="fixed top-4 left-4 z-50 md:hidden text-blue-400" onClick={() => setMobile(true)}>
        <FaBars size={28} />
      </button>
      <motion.div
        initial={false}
        animate={mobile ? { x: 0, opacity: 1 } : { x: -320, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed inset-0 z-50 bg-gray-900/90 dark:bg-black/90 md:hidden"
        style={{ width: "100vw" }}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 py-6">
            <span className="flex items-center gap-2 text-blue-400 font-bold text-xl">
              <span className="h-8 w-8 rounded-full bg-gradient-to-tr from-blue-400 to-purple-400 flex items-center justify-center shadow-lg relative">
                <Orb color="bg-blue-400" delay={0} />
                <Orb color="bg-purple-400" delay={1} />
                <Orb color="bg-pink-400" delay={2} />
                🤖
              </span>
              <span className="tracking-widest">ORBIT</span>
            </span>
            <button onClick={() => setMobile(false)} className="text-blue-400">
              <FaBars size={28} />
            </button>
          </div>
          <nav className="flex-1 flex flex-col gap-4 px-8 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-transparent">
            {links.map(link => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setActive(link.name)}
                whileHover={{ scale: 1.08, textShadow: "0 0 8px #38bdf8" }}
                className={`flex items-center gap-3 px-3 py-3 rounded-lg font-semibold text-blue-400 dark:text-purple-300 hover:bg-blue-100/20 dark:hover:bg-purple-900/20 transition duration-300 border-l-4 ${active === link.name ? "border-blue-400 orbit-glow" : "border-transparent"}`}
              >
                <span className="relative">
                  {link.icon}
                  <Orb color="bg-blue-400" delay={0.2} />
                </span>
                {link.name}
              </motion.a>
            ))}
          </nav>
        </div>
      </motion.div>
      <style>{`.orbit-glow { box-shadow: 0 0 12px 2px #38bdf8, 0 0 24px 4px #a78bfa; }`}</style>
    </>
  );
}

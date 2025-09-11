import { useState } from "react";
import { motion } from "framer-motion";
import { FaHome, FaUser, FaCog, FaBars } from "react-icons/fa";
import { useTheme } from "../../../../Context/useTheme";

const links = [
  { name: "Home", icon: <FaHome />, href: "#" },
  { name: "Profile", icon: <FaUser />, href: "#profile" },
  { name: "Settings", icon: <FaCog />, href: "#settings" },
];

function Sparkles() {
  return (
    <svg className="absolute left-0 top-0 h-full w-full z-0" viewBox="0 0 256 1024" fill="none">
      {[...Array(12)].map((_, i) => (
        <circle key={i} cx={Math.random() * 256} cy={Math.random() * 1024} r={Math.random() * 2 + 1} fill="#fbbf24" opacity={Math.random()} />
      ))}
    </svg>
  );
}

export default function StarlightDrawer() {
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
        className={`fixed top-0 left-0 h-screen z-40 ${open ? "w-64" : "w-16"} bg-yellow-100/20 dark:bg-yellow-900/20 border-r border-yellow-400 shadow-xl flex flex-col transition-all duration-300 relative`}
        style={{ boxShadow: "0 4px 32px 0 #fbbf24", borderRadius: "0 24px 24px 0" }}
      >
        <Sparkles />
        <div className="flex items-center justify-between px-4 py-4 relative z-10">
          <span className="flex items-center gap-2 text-yellow-400 font-bold text-xl">
            <span className="h-8 w-8 rounded-full bg-gradient-to-tr from-yellow-400 to-yellow-200 flex items-center justify-center shadow-lg">🤖</span>
            {open && <span className="tracking-widest">STARLIGHT</span>}
          </span>
          <button onClick={() => setOpen(o => !o)} className="text-yellow-400">
            <FaBars size={24} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-yellow-400 scrollbar-track-transparent z-10">
          <nav className="flex flex-col gap-2 px-2">
            {links.map(link => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setActive(link.name)}
                whileHover={{ scale: 1.08, textShadow: "0 0 8px #fbbf24" }}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg font-semibold text-yellow-400 dark:text-yellow-300 hover:bg-yellow-100/20 dark:hover:bg-yellow-900/20 transition duration-300 border-l-4 ${active === link.name ? "border-yellow-400 starlight-glow" : "border-transparent"}`}
              >
                {link.icon} {open && link.name}
              </motion.a>
            ))}
          </nav>
        </div>
      </motion.div>
      {/* Mobile Overlay */}
      <button className="fixed top-4 left-4 z-50 md:hidden text-yellow-400" onClick={() => setMobile(true)}>
        <FaBars size={28} />
      </button>
      <motion.div
        initial={false}
        animate={mobile ? { x: 0, opacity: 1 } : { x: -320, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed inset-0 z-50 bg-yellow-100/80 dark:bg-yellow-900/80 md:hidden"
        style={{ width: "100vw" }}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 py-6">
            <span className="flex items-center gap-2 text-yellow-400 font-bold text-xl">
              <span className="h-8 w-8 rounded-full bg-gradient-to-tr from-yellow-400 to-yellow-200 flex items-center justify-center shadow-lg">🤖</span>
              <span className="tracking-widest">STARLIGHT</span>
            </span>
            <button onClick={() => setMobile(false)} className="text-yellow-400">
              <FaBars size={28} />
            </button>
          </div>
          <nav className="flex-1 flex flex-col gap-4 px-8 overflow-y-auto scrollbar-thin scrollbar-thumb-yellow-400 scrollbar-track-transparent">
            {links.map(link => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setActive(link.name)}
                whileHover={{ scale: 1.08, textShadow: "0 0 8px #fbbf24" }}
                className={`flex items-center gap-3 px-3 py-3 rounded-lg font-semibold text-yellow-400 dark:text-yellow-300 hover:bg-yellow-100/20 dark:hover:bg-yellow-900/20 transition duration-300 border-l-4 ${active === link.name ? "border-yellow-400 starlight-glow" : "border-transparent"}`}
              >
                {link.icon} {link.name}
              </motion.a>
            ))}
          </nav>
        </div>
      </motion.div>
      <style>{`.starlight-glow { box-shadow: 0 0 12px 2px #fbbf24, 0 0 24px 4px #fbbf24; animation: twinkle 1.2s infinite alternate; } @keyframes twinkle { 0% { box-shadow: 0 0 12px 2px #fbbf24; } 100% { box-shadow: 0 0 24px 8px #fbbf24; } }`}</style>
    </>
  );
}

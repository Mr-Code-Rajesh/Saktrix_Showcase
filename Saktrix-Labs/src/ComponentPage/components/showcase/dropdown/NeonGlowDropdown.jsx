import { useState } from "react";
import { motion } from "framer-motion";
import { FaBolt } from "react-icons/fa";

const NeonGlowDropdown = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative w-full max-w-xs mx-auto">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-4 py-2 rounded-xl bg-black dark:bg-gray-900 text-cyan-300 border-2 border-cyan-400 shadow-lg font-semibold hover:shadow-cyan-400/50 focus:outline-none"
        style={{ boxShadow: open ? "0 0 16px 4px #06b6d4" : undefined }}
      >
        <span className="flex items-center gap-2"><FaBolt /> Neon Menu</span>
        <span className={`transition-transform ${open ? "rotate-180" : ""}`}>▼</span>
      </button>
      <motion.ul
        initial={{ opacity: 0, y: -10 }}
        animate={open ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.25 }}
        className={`absolute left-0 w-full mt-2 rounded-xl bg-black dark:bg-gray-900 border-2 border-cyan-400 shadow-lg z-10 ${open ? "block" : "hidden"}`}
        style={{ position: 'relative', overflow: 'hidden', minHeight: '40px', maxHeight: '180px', width: '100%' }}
      >
        {["Dashboard", "Settings", "Profile", "Logout"].map((item) => (
          <li key={item} className="relative px-4 py-2 hover:bg-cyan-900/30 cursor-pointer transition-colors z-10">{item}</li>
        ))}
      </motion.ul>
    </div>
  );
};

export default NeonGlowDropdown;

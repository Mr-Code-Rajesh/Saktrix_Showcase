import { useState } from "react";
import { motion } from "framer-motion";
import { FaBug } from "react-icons/fa";

const GlitchMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative w-full max-w-xs mx-auto">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-4 py-2 rounded-xl bg-black dark:bg-gray-900 text-pink-400 border-2 border-pink-400 shadow-lg font-semibold focus:outline-none"
        style={{ animation: open ? "glitch 0.7s infinite" : "none" }}
      >
        <span className="flex items-center gap-2"><FaBug /> Glitch Menu</span>
        <span className={`transition-transform ${open ? "rotate-180" : ""}`}>▼</span>
      </button>
      <motion.ul
        initial={{ opacity: 0, y: -10 }}
        animate={open ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className={`absolute left-0 w-full mt-2 rounded-xl bg-black dark:bg-gray-900 border-2 border-pink-400 shadow-lg z-10 ${open ? "block" : "hidden"}`}
        style={{ position: 'relative', overflow: 'hidden', minHeight: '40px', maxHeight: '180px', width: '100%' }}
      >
        {["Glitch", "Error", "404", "Logout"].map((item) => (
          <li key={item} className="relative px-4 py-2 hover:bg-pink-900/30 cursor-pointer transition-colors z-10">{item}</li>
        ))}
      </motion.ul>
      <style>{`
        @keyframes glitch {
          0% { filter: none; }
          20% { filter: blur(1px) brightness(1.2); }
          40% { filter: none; }
          60% { filter: blur(2px) brightness(0.8); }
          80% { filter: none; }
          100% { filter: none; }
        }
      `}</style>
    </div>
  );
};

export default GlitchMenu;

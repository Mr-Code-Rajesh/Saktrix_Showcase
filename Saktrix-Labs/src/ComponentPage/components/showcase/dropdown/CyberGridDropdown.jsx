import { useState } from "react";
import { motion } from "framer-motion";
import { FaThLarge } from "react-icons/fa";

const CyberGridDropdown = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative w-full max-w-xs mx-auto">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-4 py-2 rounded-xl bg-gray-900 dark:bg-black text-green-400 border-2 border-green-400 shadow-lg font-semibold focus:outline-none"
      >
        <span className="flex items-center gap-2"><FaThLarge /> Cyber Grid</span>
        <span className={`transition-transform ${open ? "rotate-180" : ""}`}>▼</span>
      </button>
      <motion.ul
        initial={{ opacity: 0, y: -10 }}
        animate={open ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className={`absolute left-0 w-full mt-2 rounded-xl bg-gray-900 dark:bg-black border-2 border-green-400 shadow-lg z-10 ${open ? "block" : "hidden"}`}
        style={{ position: "relative", overflow: "hidden" }}
      >
        <svg width="100%" height="40" className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
          <g stroke="#22c55e" strokeWidth="1" opacity="0.2">
            {[...Array(8)].map((_, i) => (
              <line key={i} x1={i * 40} y1="0" x2={i * 40} y2="40" />
            ))}
            {[...Array(4)].map((_, i) => (
              <line key={i} x1="0" y1={i * 10} x2="320" y2={i * 10} />
            ))}
          </g>
        </svg>
        {["Grid", "Nodes", "Network", "Logout"].map((item) => (
          <li key={item} className="relative px-4 py-2 hover:bg-green-900/30 cursor-pointer transition-colors z-10">{item}</li>
        ))}
      </motion.ul>
    </div>
  );
};

export default CyberGridDropdown;

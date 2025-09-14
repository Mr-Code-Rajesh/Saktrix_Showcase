import { useState } from "react";
import { motion } from "framer-motion";
import { FaInfinity } from "react-icons/fa";

const HelixDropdown = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative w-full max-w-xs mx-auto">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-4 py-2 rounded-xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900 text-white font-semibold shadow-lg focus:outline-none"
      >
        <span className="flex items-center gap-2"><FaInfinity /> Helix</span>
        <span className={`transition-transform ${open ? "rotate-180" : ""}`}>▼</span>
      </button>
      <motion.ul
        initial={{ opacity: 0, y: -10 }}
        animate={open ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className={`absolute left-0 w-full mt-2 rounded-xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900 text-white shadow-lg z-10 ${open ? "block" : "hidden"}`}
        style={{ position: 'relative', overflow: 'hidden', minHeight: '40px', maxHeight: '180px', width: '100%' }}
      >
        {["Helix", "Spiral", "Twist", "Logout"].map((item) => (
          <li key={item} className="relative px-4 py-2 hover:bg-purple-900/30 cursor-pointer transition-colors z-10">{item}</li>
        ))}
      </motion.ul>
    </div>
  );
};

export default HelixDropdown;

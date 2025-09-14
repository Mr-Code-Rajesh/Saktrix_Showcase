import { useState } from "react";
import { motion } from "framer-motion";
import { FaRegWindowMaximize } from "react-icons/fa";

const GlassDropdown = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative w-full max-w-xs mx-auto">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-4 py-2 rounded-xl bg-white/30 dark:bg-gray-900/30 backdrop-blur-lg text-blue-700 dark:text-purple-200 border border-blue-200 dark:border-purple-400 shadow-lg font-semibold focus:outline-none"
      >
        <span className="flex items-center gap-2"><FaRegWindowMaximize /> Glass Menu</span>
        <span className={`transition-transform ${open ? "rotate-180" : ""}`}>▼</span>
      </button>
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={open ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className={`absolute left-0 w-full mt-2 rounded-xl bg-white/30 dark:bg-gray-900/30 backdrop-blur-lg border border-blue-200 dark:border-purple-400 shadow-lg z-10 ${open ? "block" : "hidden"}`}
            style={{ minHeight: "48px", maxHeight: "180px", overflow: "hidden", position: "relative" }}
          >
            {[
              "Home", "Explore", "Notifications", "Logout"
            ].map((item) => (
              <li key={item} className="relative px-4 py-2 hover:bg-blue-200/30 dark:hover:bg-purple-400/20 cursor-pointer transition-colors z-10">{item}</li>
            ))}
          </motion.ul>
    </div>
  );
};

export default GlassDropdown;

import { useState } from "react";
import { motion } from "framer-motion";
import { FaRegStar, FaRegBell, FaRegUser } from "react-icons/fa";

const OrbitIconDropdown = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative w-full max-w-xs mx-auto">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-4 py-2 rounded-xl bg-gradient-to-tr from-blue-400 via-indigo-400 to-purple-400 dark:from-blue-900 dark:via-indigo-900 dark:to-purple-900 text-white font-semibold shadow-lg focus:outline-none"
        style={{ position: "relative" }}
      >
        <span className="flex items-center gap-2">
          <FaRegStar className="animate-orbit inline-block" />
          <FaRegBell className="animate-orbit2 inline-block" />
          <FaRegUser className="animate-orbit3 inline-block" />
          Orbit Icons
        </span>
        <span className={`transition-transform ${open ? "rotate-180" : ""}`}>▼</span>
        <style>{`
          @keyframes orbit { 0% { transform: rotate(0deg) translateX(0); } 100% { transform: rotate(360deg) translateX(8px); } }
          @keyframes orbit2 { 0% { transform: rotate(0deg) translateY(0); } 100% { transform: rotate(360deg) translateY(8px); } }
          @keyframes orbit3 { 0% { transform: rotate(0deg) scale(1); } 100% { transform: rotate(360deg) scale(1.2); } }
          .animate-orbit { animation: orbit 1.2s linear infinite; }
          .animate-orbit2 { animation: orbit2 1.2s linear infinite; }
          .animate-orbit3 { animation: orbit3 1.2s linear infinite; }
        `}</style>
      </button>
      <motion.ul
        initial={{ opacity: 0, y: -10 }}
        animate={open ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className={`absolute left-0 w-full mt-2 rounded-xl bg-gradient-to-tr from-blue-400 via-indigo-400 to-purple-400 dark:from-blue-900 dark:via-indigo-900 dark:to-purple-900 text-white shadow-lg z-10 ${open ? "block" : "hidden"}`}
        style={{ position: 'relative', overflow: 'hidden', minHeight: '40px', maxHeight: '180px', width: '100%' }}
      >
        {["Orbit", "Satellite", "Rocket", "Logout"].map((item) => (
          <li key={item} className="relative px-4 py-2 hover:bg-indigo-900/30 cursor-pointer transition-colors z-10">{item}</li>
        ))}
      </motion.ul>
    </div>
  );
};

export default OrbitIconDropdown;

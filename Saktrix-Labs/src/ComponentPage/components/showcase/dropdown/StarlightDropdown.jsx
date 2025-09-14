import { useState } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const StarlightDropdown = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative w-full max-w-xs mx-auto">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-4 py-2 rounded-xl bg-gradient-to-br from-yellow-400 via-pink-400 to-purple-400 dark:from-yellow-900 dark:via-pink-900 dark:to-purple-900 text-white font-semibold shadow-lg focus:outline-none"
        style={{ position: "relative" }}
      >
        <span className="flex items-center gap-2"><FaStar /> Starlight Menu</span>
        <span className={`transition-transform ${open ? "rotate-180" : ""}`}>▼</span>
        <span className="absolute left-0 top-0 w-full h-full pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <span
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                left: `${Math.random() * 80}px`,
                top: `${Math.random() * 32}px`,
                width: "3px",
                height: "3px",
                opacity: Math.random(),
                animation: `twinkle 1.2s infinite ${i * 0.2}s`,
              }}
            />
          ))}
        </span>
        <style>{`
          @keyframes twinkle {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 1; }
          }
        `}</style>
      </button>
      <motion.ul
        initial={{ opacity: 0, y: -10 }}
        animate={open ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className={`absolute left-0 w-full mt-2 rounded-xl bg-gradient-to-br from-yellow-400 via-pink-400 to-purple-400 dark:from-yellow-900 dark:via-pink-900 dark:to-purple-900 text-white shadow-lg z-10 ${open ? "block" : "hidden"}`}
        style={{ position: 'relative', overflow: 'hidden', minHeight: '40px', maxHeight: '180px', width: '100%' }}
      >
        {["Stars", "Galaxy", "Universe", "Logout"].map((item) => (
          <li key={item} className="relative px-4 py-2 hover:bg-purple-900/30 cursor-pointer transition-colors z-10">{item}</li>
        ))}
      </motion.ul>
    </div>
  );
};

export default StarlightDropdown;

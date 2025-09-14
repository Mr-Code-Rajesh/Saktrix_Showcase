import { useState } from "react";
import { motion } from "framer-motion";

const tabs = ["Orbit", "Satellite", "Rocket", "Logout"];

export default function OrbitTabs() {
  const [active, setActive] = useState(0);
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex space-x-2 p-1">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActive(i)}
            className={`relative px-4 py-2 rounded-lg font-semibold transition focus:outline-none ${active === i ? "bg-indigo-400 dark:bg-indigo-600 text-white shadow-lg" : "bg-indigo-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-300 opacity-70"}`}
          >
            {tab}
            {active === i && (
              <motion.div
                layoutId="orbit-dot"
                className="absolute left-1/2 -bottom-2 w-3 h-3 rounded-full bg-indigo-400 dark:bg-indigo-600 animate-orbit"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                style={{ transform: "translateX(-50%)" }}
              />
            )}
          </button>
        ))}
      </div>
      <style>{`
        @keyframes orbit {
          0% { transform: translateX(-50%) scale(1); }
          50% { transform: translateX(-50%) scale(1.3); }
          100% { transform: translateX(-50%) scale(1); }
        }
        .animate-orbit { animation: orbit 1.2s linear infinite; }
      `}</style>
    </div>
  );
}

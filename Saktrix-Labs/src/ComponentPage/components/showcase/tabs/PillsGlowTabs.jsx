import { useState } from "react";
import { motion } from "framer-motion";

const tabs = ["Overview", "Stats", "Billing", "Support"];

export default function PillsGlowTabs() {
  const [active, setActive] = useState(0);
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex space-x-2 p-1">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActive(i)}
            className={`relative px-4 py-2 rounded-full font-semibold transition focus:outline-none ${active === i ? "bg-cyan-400 dark:bg-cyan-600 text-white shadow-lg" : "bg-cyan-100 dark:bg-gray-800 text-cyan-600 dark:text-cyan-300 opacity-70"}`}
          >
            {tab}
            {active === i && (
              <motion.div
                layoutId="pills-glow"
                className="absolute left-2 right-2 -bottom-1 h-1 rounded bg-cyan-400 dark:bg-cyan-600 shadow-neon"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

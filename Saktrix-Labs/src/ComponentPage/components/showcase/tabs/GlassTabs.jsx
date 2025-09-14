import { useState } from "react";
import { motion } from "framer-motion";

const tabs = ["Dashboard", "Analytics", "Team", "Settings"];

export default function GlassTabs() {
  const [active, setActive] = useState(0);
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex space-x-2 bg-white/30 dark:bg-gray-900/30 backdrop-blur-lg rounded-xl p-1">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActive(i)}
            className={`relative px-4 py-2 rounded-lg font-semibold transition focus:outline-none ${active === i ? "bg-white/60 dark:bg-gray-800/60 text-blue-700 dark:text-purple-200 shadow-lg" : "text-blue-700 dark:text-purple-200 opacity-70"}`}
          >
            {tab}
            {active === i && (
              <motion.div
                layoutId="glass-underline"
                className="absolute left-2 right-2 -bottom-1 h-1 rounded bg-blue-300 dark:bg-purple-400"
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

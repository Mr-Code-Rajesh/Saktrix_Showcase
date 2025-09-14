import { useState } from "react";
import { motion } from "framer-motion";

const tabs = ["Feed", "Trending", "Discover", "Logout"];

export default function AuroraTabs() {
  const [active, setActive] = useState(0);
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex space-x-2 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 dark:from-green-900 dark:via-blue-900 dark:to-purple-900 rounded-xl p-1">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActive(i)}
            className={`relative px-4 py-2 rounded-lg font-semibold transition focus:outline-none ${active === i ? "bg-white/10 text-white shadow-lg" : "text-white opacity-70"}`}
          >
            {tab}
            {active === i && (
              <motion.div
                layoutId="aurora-underline"
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

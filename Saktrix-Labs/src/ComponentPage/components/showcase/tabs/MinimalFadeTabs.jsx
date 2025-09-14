import { useState } from "react";
import { motion } from "framer-motion";

const tabs = ["Minimal", "Fade", "Scale", "Logout"];

export default function MinimalFadeTabs() {
  const [active, setActive] = useState(0);
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex space-x-2 p-1">
        {tabs.map((tab, i) => (
          <motion.button
            key={tab}
            onClick={() => setActive(i)}
            className={`relative px-4 py-2 rounded-lg font-semibold transition focus:outline-none ${active === i ? "bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 shadow-lg" : "bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white opacity-70"}`}
            initial={{ opacity: 0.7, scale: 0.95 }}
            animate={active === i ? { opacity: 1, scale: 1 } : { opacity: 0.7, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            {tab}
            {active === i && (
              <motion.div
                layoutId="minimal-fade"
                className="absolute left-2 right-2 -bottom-1 h-1 rounded bg-gray-900 dark:bg-gray-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

import { useState } from "react";
import { motion } from "framer-motion";

const tabs = ["Circuit", "Node", "Signal", "Logout"];

export default function CircuitTabs() {
  const [active, setActive] = useState(0);
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex space-x-2 p-1">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActive(i)}
            className={`relative px-4 py-2 rounded-lg font-semibold transition focus:outline-none ${active === i ? "bg-green-400 dark:bg-green-600 text-white shadow-lg" : "bg-green-100 dark:bg-gray-800 text-green-600 dark:text-green-300 opacity-70"}`}
          >
            {tab}
            {active === i && (
              <motion.div
                layoutId="circuit-line"
                className="absolute left-2 right-2 -bottom-1 h-1 rounded bg-green-400 dark:bg-green-600 animate-circuit"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
      <style>{`
        @keyframes circuit {
          0% { width: 0; }
          100% { width: 100%; }
        }
        .animate-circuit { animation: circuit 1.2s linear infinite; }
      `}</style>
    </div>
  );
}

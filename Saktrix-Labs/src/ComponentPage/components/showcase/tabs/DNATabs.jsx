import { useState } from "react";
import { motion } from "framer-motion";

const tabs = ["DNA", "Genome", "Sequence", "Logout"];

export default function DNATabs() {
  const [active, setActive] = useState(0);
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex space-x-2 p-1">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActive(i)}
            className={`relative px-4 py-2 rounded-lg font-semibold transition focus:outline-none ${active === i ? "bg-purple-400 dark:bg-purple-600 text-white shadow-lg" : "bg-purple-100 dark:bg-gray-800 text-purple-600 dark:text-purple-300 opacity-70"}`}
          >
            {tab}
            {active === i && (
              <motion.div
                layoutId="dna-helix"
                className="absolute left-2 right-2 -bottom-1 h-1 rounded bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 animate-dna"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
      <style>{`
        @keyframes dna {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        .animate-dna { animation: dna 1.2s linear infinite; }
      `}</style>
    </div>
  );
}

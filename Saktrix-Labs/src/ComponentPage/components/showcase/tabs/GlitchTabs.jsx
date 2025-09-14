import { useState } from "react";
import { motion } from "framer-motion";

const tabs = ["Glitch", "404", "Error", "Logout"];

export default function GlitchTabs() {
  const [active, setActive] = useState(0);
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex space-x-2 p-1">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActive(i)}
            className={`relative px-4 py-2 rounded-lg font-semibold transition focus:outline-none ${active === i ? "bg-pink-400 dark:bg-pink-600 text-white shadow-lg" : "bg-pink-100 dark:bg-gray-800 text-pink-600 dark:text-pink-300 opacity-70"}`}
          >
            <span className={active === i ? "glitch" : ""}>{tab}</span>
            {active === i && (
              <motion.div
                layoutId="glitch-underline"
                className="absolute left-2 right-2 -bottom-1 h-1 rounded bg-pink-400 dark:bg-pink-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
      <style>{`
        .glitch {
          position: relative;
          color: #ec4899;
          animation: glitch 0.7s infinite;
        }
        @keyframes glitch {
          0% { text-shadow: 2px 0 #f472b6, -2px 0 #a21caf; }
          20% { text-shadow: -2px 0 #f472b6, 2px 0 #a21caf; }
          40% { text-shadow: 2px 0 #f472b6, -2px 0 #a21caf; }
          60% { text-shadow: -2px 0 #f472b6, 2px 0 #a21caf; }
          80% { text-shadow: 2px 0 #f472b6, -2px 0 #a21caf; }
          100% { text-shadow: none; }
        }
      `}</style>
    </div>
  );
}

import { useState } from "react";
import { motion } from "framer-motion";

const tabs = ["Stars", "Galaxy", "Universe", "Logout"];

export default function StarlightTabs() {
  const [active, setActive] = useState(0);
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex space-x-2 p-1 relative bg-gradient-to-br from-yellow-400 via-pink-400 to-purple-400 dark:from-yellow-900 dark:via-pink-900 dark:to-purple-900 rounded-xl">
        <span className="absolute left-0 top-0 w-full h-full pointer-events-none z-0">
          {[...Array(12)].map((_, i) => (
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
        {tabs.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActive(i)}
            className={`relative px-4 py-2 rounded-lg font-semibold transition focus:outline-none z-10 ${active === i ? "bg-white/10 text-white shadow-lg" : "text-white opacity-70"}`}
          >
            {tab}
            {active === i && (
              <motion.div
                layoutId="starlight-underline"
                className="absolute left-2 right-2 -bottom-1 h-1 rounded bg-purple-400 dark:bg-purple-900"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        ))}
        <style>{`
          @keyframes twinkle {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 1; }
          }
        `}</style>
      </div>
    </div>
  );
}

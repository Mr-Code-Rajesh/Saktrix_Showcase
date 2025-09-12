import { useState } from "react";
import { motion } from "framer-motion";

const StarlightTooltipButton = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative flex justify-center items-center">
      <button
        className="rounded-xl bg-gradient-to-r from-yellow-400 to-purple-400 dark:from-yellow-900 dark:to-purple-900 text-white font-semibold px-5 py-2 text-base shadow-lg hover:scale-105 transition-transform duration-200"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        tabIndex={0}
      >
        Starlight Button
      </button>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={show ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-xl bg-gradient-to-br from-yellow-400 via-pink-400 to-purple-400 dark:from-yellow-900 dark:via-pink-900 dark:to-purple-900 text-white font-semibold shadow-lg border border-yellow-400 pointer-events-none"
        style={{ position: "relative", overflow: "hidden", height: "40px" }}
      >
        <span className="relative z-10">Starlight Powered</span>
        {/* Twinkling stars */}
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
      </motion.div>
    </div>
  );
};

export default StarlightTooltipButton;

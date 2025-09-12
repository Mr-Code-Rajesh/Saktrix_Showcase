import { useState } from "react";
import { motion } from "framer-motion";

const NeonTooltipButton = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative flex justify-center items-center">
      <button
        className="rounded-xl bg-gradient-to-r from-cyan-400 to-pink-500 dark:from-cyan-900 dark:to-pink-900 text-white font-semibold px-5 py-2 text-base shadow-lg hover:scale-105 transition-transform duration-200"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        tabIndex={0}
      >
        Neon Button
      </button>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={show ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.25 }}
        className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-xl bg-black/80 dark:bg-gray-900/80 text-cyan-300 font-bold border-2 border-cyan-400 shadow-lg pointer-events-none"
        style={{
          boxShadow: show
            ? "0 0 24px 8px #06b6d4, 0 0 8px 2px #f472b6"
            : "none",
          animation: show ? "pulseNeon 1s infinite" : "none",
        }}
      >
        Neon Powered
      </motion.div>
      <style>{`
        @keyframes pulseNeon {
          0%, 100% { box-shadow: 0 0 24px 8px #06b6d4, 0 0 8px 2px #f472b6; }
          50% { box-shadow: 0 0 32px 16px #06b6d4, 0 0 16px 4px #f472b6; }
        }
      `}</style>
    </div>
  );
};

export default NeonTooltipButton;

import { useState } from "react";
import { motion } from "framer-motion";

const DNATooltipButton = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative flex justify-center items-center">
      <button
        className="rounded-xl bg-gradient-to-r from-blue-400 to-pink-400 dark:from-blue-900 dark:to-pink-900 text-white font-semibold px-5 py-2 text-base shadow-lg hover:scale-105 transition-transform duration-200"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        tabIndex={0}
      >
        DNA Button
      </button>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={show ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-xl bg-white/30 dark:bg-gray-900/30 backdrop-blur-lg text-pink-700 dark:text-blue-200 font-semibold shadow-lg border-2 border-pink-400 dark:border-blue-400 pointer-events-none"
        style={{ position: "relative", overflow: "visible" }}
      >
        <span className="relative z-10">DNA Powered</span>
        {/* DNA helix border */}
        <svg width="100" height="32" className="absolute left-0 top-0 w-full h-full z-0 pointer-events-none">
          <path
            d="M0,16 Q25,0 50,16 Q75,32 100,16"
            stroke="#ec4899"
            strokeWidth="2"
            fill="none"
            className="animate-dna"
          />
        </svg>
        <style>{`
          .animate-dna { stroke-dasharray: 200; stroke-dashoffset: 200; animation: dnaHelix 1.2s linear forwards; }
          @keyframes dnaHelix { to { stroke-dashoffset: 0; } }
        `}</style>
      </motion.div>
    </div>
  );
};

export default DNATooltipButton;

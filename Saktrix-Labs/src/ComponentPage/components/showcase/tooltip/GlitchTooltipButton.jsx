import { useState } from "react";
import { motion } from "framer-motion";

const GlitchTooltipButton = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative flex justify-center items-center">
      <button
        className="rounded-xl bg-gradient-to-r from-pink-500 to-indigo-500 dark:from-pink-900 dark:to-indigo-900 text-white font-semibold px-5 py-2 text-base shadow-lg hover:scale-105 transition-transform duration-200"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        tabIndex={0}
      >
        Glitch Button
      </button>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={show ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.2 }}
        className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-xl bg-black/80 dark:bg-gray-900/80 text-pink-400 font-bold border border-pink-400 shadow-lg pointer-events-none glitch"
      >
        <span className="relative z-10">Glitch Effect</span>
      </motion.div>
      <style>{`
        .glitch {
          animation: glitch 0.7s infinite;
        }
        @keyframes glitch {
          0% { transform: translate(0,0); }
          20% { transform: translate(-2px,2px); }
          40% { transform: translate(2px,-2px); }
          60% { transform: translate(-1px,1px); }
          80% { transform: translate(1px,-1px); }
          100% { transform: translate(0,0); }
        }
      `}</style>
    </div>
  );
};

export default GlitchTooltipButton;

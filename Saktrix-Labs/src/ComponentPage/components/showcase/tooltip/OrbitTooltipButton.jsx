import { useState } from "react";
import { motion } from "framer-motion";

const OrbitTooltipButton = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative flex justify-center items-center">
      <button
        className="rounded-xl bg-gradient-to-r from-indigo-400 to-purple-400 dark:from-indigo-900 dark:to-purple-900 text-white font-semibold px-5 py-2 text-base shadow-lg hover:scale-105 transition-transform duration-200"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        tabIndex={0}
      >
        Orbit Button
      </button>
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={show ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-xl bg-indigo-900/80 dark:bg-purple-900/80 text-white font-semibold shadow-lg border border-indigo-400 pointer-events-none"
        style={{ position: "relative", overflow: "visible" }}
      >
        <span className="relative z-10">Orbit Powered</span>
        {/* Orbs */}
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <span className="absolute animate-orbit w-2 h-2 bg-pink-400 rounded-full" style={{ left: "-24px", top: "-8px" }} />
          <span className="absolute animate-orbit2 w-2 h-2 bg-cyan-400 rounded-full" style={{ left: "24px", top: "-8px" }} />
        </span>
        <style>{`
          @keyframes orbit { 0% { transform: rotate(0deg) translateX(24px); } 100% { transform: rotate(360deg) translateX(24px); } }
          @keyframes orbit2 { 0% { transform: rotate(0deg) translateX(-24px); } 100% { transform: rotate(360deg) translateX(-24px); } }
          .animate-orbit { animation: orbit 1.2s linear infinite; }
          .animate-orbit2 { animation: orbit2 1.2s linear infinite; }
        `}</style>
      </motion.div>
    </div>
  );
};

export default OrbitTooltipButton;

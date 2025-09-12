import { useState } from "react";
import { motion } from "framer-motion";

const MatrixTooltipButton = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative flex justify-center items-center">
      <button
        className="rounded-xl bg-gradient-to-r from-green-400 to-black dark:from-green-900 dark:to-black text-white font-semibold px-5 py-2 text-base shadow-lg hover:scale-105 transition-transform duration-200"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        tabIndex={0}
      >
        Matrix Button
      </button>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={show ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-xl bg-black/90 text-green-400 font-mono font-semibold shadow-lg border border-green-400 pointer-events-none"
        style={{ position: "relative", overflow: "hidden", height: "40px" }}
      >
        <span className="relative z-10">Matrix Powered</span>
        {/* Matrix rain */}
        <span className="absolute left-0 top-0 w-full h-full pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <span
              key={i}
              className="absolute text-green-400 opacity-40"
              style={{
                left: `${i * 10}%`,
                animation: `matrixRain 1.2s linear infinite ${i * 0.1}s`,
              }}
            >
              0 1 0 1
            </span>
          ))}
        </span>
        <style>{`
          @keyframes matrixRain {
            0% { top: -20px; opacity: 0.2; }
            50% { top: 20px; opacity: 0.4; }
            100% { top: 40px; opacity: 0.2; }
          }
        `}</style>
      </motion.div>
    </div>
  );
};

export default MatrixTooltipButton;

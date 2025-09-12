import { useState } from "react";
import { motion } from "framer-motion";

const CircuitTooltipButton = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative flex justify-center items-center">
      <button
        className="rounded-xl bg-gradient-to-r from-green-400 to-gray-800 dark:from-green-900 dark:to-gray-900 text-white font-semibold px-5 py-2 text-base shadow-lg hover:scale-105 transition-transform duration-200"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        tabIndex={0}
      >
        Circuit Button
      </button>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={show ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-xl bg-black/90 text-green-300 font-semibold shadow-lg border-2 border-green-400 pointer-events-none"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <span className="relative z-10">Circuit Powered</span>
        {/* Circuit pattern */}
        <svg width="80" height="32" className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
          <g stroke="#22c55e" strokeWidth="1" opacity="0.2">
            {[...Array(8)].map((_, i) => (
              <line key={i} x1={i * 10} y1="0" x2={i * 10} y2="32" />
            ))}
            {[...Array(4)].map((_, i) => (
              <line key={i} x1="0" y1={i * 8} x2="80" y2={i * 8} />
            ))}
          </g>
        </svg>
      </motion.div>
    </div>
  );
};

export default CircuitTooltipButton;

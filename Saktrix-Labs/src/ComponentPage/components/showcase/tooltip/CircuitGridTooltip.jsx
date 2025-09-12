import { useState } from "react";
import { motion } from "framer-motion";

const TooltipButton = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative flex justify-center items-center">
      <button
        className="rounded-xl bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 dark:from-cyan-900 dark:via-purple-900 dark:to-pink-900 text-white font-semibold px-5 py-2 text-base shadow-lg transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onFocus={() => setShow(true)}
        onBlur={() => setShow(false)}
        tabIndex={0}
      >
        AI Button
      </button>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={show ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.25 }}
        className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-xl bg-white/30 dark:bg-gray-900/30 backdrop-blur-lg text-blue-700 dark:text-purple-200 text-sm font-semibold shadow-lg border border-pink-300 dark:border-purple-400 pointer-events-none"
        style={{ boxShadow: "0 0 16px 4px #f472b6" }}
      >
        AI Powered
      </motion.div>
    </div>
  );
};

export default TooltipButton;

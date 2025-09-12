import { useState } from "react";
import { motion } from "framer-motion";

const GlassTooltipButton = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative flex justify-center items-center">
      <button
        className="rounded-xl bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-900 dark:to-purple-900 text-white font-semibold px-5 py-2 text-base shadow-lg hover:scale-105 transition-transform duration-200"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        tabIndex={0}
      >
        Glass Button
      </button>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={show ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-xl bg-white/30 dark:bg-gray-900/30 backdrop-blur-lg text-blue-700 dark:text-purple-200 font-semibold border border-blue-200 dark:border-purple-400 shadow-lg pointer-events-none"
        style={{ boxShadow: "0 0 16px 4px #a5b4fc" }}
      >
        Glass Effect
      </motion.div>
    </div>
  );
};

export default GlassTooltipButton;

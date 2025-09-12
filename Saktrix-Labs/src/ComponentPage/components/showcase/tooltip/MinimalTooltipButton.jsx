import { useState } from "react";
import { motion } from "framer-motion";

const MinimalTooltipButton = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative flex justify-center items-center">
      <button
        className="rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold px-5 py-2 text-base shadow-lg hover:scale-105 transition-transform duration-200"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        tabIndex={0}
      >
        Minimal Button
      </button>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={show ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.2 }}
        className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 z-50 px-3 py-1 rounded-md bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-medium shadow-lg pointer-events-none"
      >
        Minimal Powered
      </motion.div>
    </div>
  );
};

export default MinimalTooltipButton;

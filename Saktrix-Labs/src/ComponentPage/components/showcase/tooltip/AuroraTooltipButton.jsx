import { useState } from "react";
import { motion } from "framer-motion";

const AuroraTooltipButton = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative flex justify-center items-center">
      <button
        className="rounded-xl bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 dark:from-green-900 dark:via-blue-900 dark:to-purple-900 text-white font-semibold px-5 py-2 text-base shadow-lg hover:scale-105 transition-transform duration-200"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        tabIndex={0}
      >
        Aurora Button
      </button>
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={show ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }}
        transition={{ duration: 0.4 }}
        className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-xl bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 dark:from-green-900 dark:via-blue-900 dark:to-purple-900 text-white font-semibold shadow-lg border border-blue-400 pointer-events-none"
        style={{ boxShadow: "0 0 24px 8px #60a5fa" }}
      >
        Aurora Powered
      </motion.div>
    </div>
  );
};

export default AuroraTooltipButton;

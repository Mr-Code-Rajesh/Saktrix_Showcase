import { useState } from "react";
import { motion } from "framer-motion";

export default function AuroraSwitch() {
  const [on, setOn] = useState(false);
  return (
    <div className="flex items-center gap-3">
      <span className="text-teal-400 dark:text-teal-300 font-semibold">Aurora Switch</span>
      <motion.button
        onClick={() => setOn(!on)}
        animate={{ boxShadow: on ? "0 0 12px 2px #14b8a6" : "none" }}
        className={`w-12 h-6 flex items-center rounded-full p-1 transition-all duration-300 ${on ? "bg-teal-600" : "bg-gray-400"}`}
      >
        <motion.div
          animate={{ x: on ? 24 : 0 }}
          className="w-5 h-5 bg-white rounded-full shadow flex items-center justify-center"
        >
          <span className={`block w-3 h-3 rounded-full ${on ? "bg-teal-400 animate-pulse" : "bg-gray-300"}`} />
        </motion.div>
      </motion.button>
    </div>
  );
}

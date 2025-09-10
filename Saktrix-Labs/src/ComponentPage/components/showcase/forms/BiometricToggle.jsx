import { useState } from "react";
import { motion } from "framer-motion";
import { FaFingerprint } from "react-icons/fa";

export default function BiometricToggle() {
  const [enabled, setEnabled] = useState(false);
  return (
    <div className="flex items-center gap-3">
      <span className="text-blue-400 dark:text-blue-300 font-semibold">Biometric Toggle</span>
      <motion.button
        onClick={() => setEnabled(!enabled)}
        animate={{ boxShadow: enabled ? "0 0 12px 2px #3b82f6" : "none" }}
        className={`w-12 h-6 flex items-center rounded-full p-1 transition-all duration-300 ${enabled ? "bg-blue-600" : "bg-gray-400"}`}
      >
        <motion.div
          animate={{ x: enabled ? 24 : 0 }}
          className="w-5 h-5 bg-white rounded-full shadow flex items-center justify-center"
        >
          <FaFingerprint className={`text-blue-400 ${enabled ? "animate-pulse" : ""}`} />
        </motion.div>
      </motion.button>
    </div>
  );
}

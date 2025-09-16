import { motion } from "framer-motion";
import { FaInfo } from "react-icons/fa";

export default function MinimalGlowFAB() {
  return (
    <div className="relative w-full h-40 flex items-center justify-center bg-gray-900 rounded-lg">
    <motion.button
      whileHover={{ boxShadow: "0 0 10px #06b6d4" }}
      whileTap={{ scale: 0.95 }}
      className="absolute w-14 h-14 flex items-center justify-center rounded-full bg-white dark:bg-gray-900 text-cyan-500 border border-cyan-400"
    >
      <FaInfo size={20} />
    </motion.button>
    </div>
  );
}

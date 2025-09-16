import { motion } from "framer-motion";
import { FaMicrochip } from "react-icons/fa";

export default function CircuitFAB() {
  return (
    <div className="relative w-full h-40 flex items-center justify-center bg-gray-900 rounded-lg">
      <motion.button
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        className="absolute w-14 h-14 flex items-center justify-center rounded-full bg-gray-900 text-teal-400 border border-teal-500"
      >
      <FaMicrochip size={20} />
      <motion.div
        className="absolute inset-0 border-2 border-teal-400 rounded-full"
        animate={{ opacity: [1, 0.3, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />
    </motion.button>
    </div>
  );
}

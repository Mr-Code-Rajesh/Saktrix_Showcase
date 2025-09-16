import { motion } from "framer-motion";
import { FaBrain } from "react-icons/fa";

export default function AICoreFAB() {
  return (
    <div className="relative w-full h-40 flex items-center justify-center bg-gray-900 rounded-lg">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="absolute  w-14 h-14 flex items-center justify-center rounded-full bg-gray-800 text-pink-500"
      >
        <FaBrain size={22} />
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-pink-400"
          animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.2, 0.6] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </motion.button>
    </div>
  );
}

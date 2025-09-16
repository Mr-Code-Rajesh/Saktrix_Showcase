import { motion } from "framer-motion";
import { FaHeartbeat } from "react-icons/fa";

export default function PulsingFAB() {
  return (
    <div className="relative w-full h-40 flex items-center justify-center bg-gray-900 rounded-lg">
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      animate={{ scale: [1, 1.15, 1] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
      className="absolute  w-14 h-14 flex items-center justify-center rounded-full bg-red-600 text-white shadow-lg"
    >
      <FaHeartbeat size={24} />
    </motion.button>
    </div>
  );
}

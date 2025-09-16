import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

export default function ElevatedFAB() {
  return (
    <div className="relative w-full h-40 flex items-center justify-center bg-gray-900 rounded-lg">
      <motion.button
        whileHover={{ y: -6, boxShadow: "0 8px 20px rgba(0,0,0,0.3)" }}
        whileTap={{ scale: 0.95 }}
        className="absolute  w-14 h-14 flex items-center justify-center rounded-full bg-blue-600 text-white shadow-lg"
      >
        <FaArrowUp size={20} />
      </motion.button>
    </div>
  );
}

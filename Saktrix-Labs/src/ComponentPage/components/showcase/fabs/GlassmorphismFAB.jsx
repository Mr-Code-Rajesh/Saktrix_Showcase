import { motion } from "framer-motion";
import { FaCloud } from "react-icons/fa";

export default function GlassmorphismFAB() {
  return (
    <div className="relative w-full h-40 flex items-center justify-center bg-gray-900 rounded-lg">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="absolute w-14 h-14 flex items-center justify-center rounded-full bg-white/30 backdrop-blur-md text-blue-500 border border-white shadow-lg"
      >
        <FaCloud size={22} />
      </motion.button>
    </div>
  );
}

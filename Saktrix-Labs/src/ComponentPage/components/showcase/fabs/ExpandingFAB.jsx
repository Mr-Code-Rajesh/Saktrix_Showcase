import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

export default function ExpandingFAB() {
  return (
    <div className="relative w-full h-40 flex items-center justify-center bg-gray-900 rounded-lg">
      <motion.button
        whileHover={{ width: 100 }}
        whileTap={{ scale: 0.95 }}
        className="absolute  w-14 h-14 flex items-center justify-center rounded-full bg-green-500 text-white shadow-lg cursor-pointer overflow-hidden"
      >
        <FaSearch size={18} />
      </motion.button>
    </div>
  );
}

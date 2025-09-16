import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

export default function OrbitingIconSearchBar() {
  return (
    <div className="relative">
      <motion.div
        className="flex items-center px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700"
      >
        <FaSearch className="text-gray-600 dark:text-gray-300" />
        <input
          type="text"
          placeholder="Orbit search..."
          className="ml-2 bg-transparent outline-none flex-1 text-gray-700 dark:text-gray-200"
        />
      </motion.div>
      <motion.span
        className="absolute -top-3 left-1 text-yellow-400"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
      >
        ✨
      </motion.span>
    </div>
  );
}

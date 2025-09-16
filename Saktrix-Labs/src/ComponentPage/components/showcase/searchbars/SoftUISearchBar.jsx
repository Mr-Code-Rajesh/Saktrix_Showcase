import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

export default function SoftUISearchBar() {
  return (
    <motion.div
      whileTap={{ scale: 0.97 }}
      className="flex items-center px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-800 shadow-inner"
    >
      <FaSearch className="text-gray-600 dark:text-gray-300" />
      <input
        type="text"
        placeholder="Soft search..."
        className="ml-2 bg-transparent outline-none flex-1 text-gray-700 dark:text-gray-200"
      />
    </motion.div>
  );
}

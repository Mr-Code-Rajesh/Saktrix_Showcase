import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

export default function AIDashboardSearchBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center px-4 py-2 rounded-md bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 shadow-sm"
    >
      <FaSearch className="text-gray-600 dark:text-gray-300" />
      <input
        type="text"
        placeholder="Search dashboard..."
        className="ml-2 bg-transparent outline-none flex-1 text-gray-700 dark:text-gray-200"
      />
    </motion.div>
  );
}

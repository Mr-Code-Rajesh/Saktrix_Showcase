import { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

export default function ExpandableSearchBar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ width: 50 }}
      animate={{ width: expanded ? 250 : 50 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="flex items-center bg-gray-200 dark:bg-gray-800 rounded-full px-3 py-2 shadow-md"
    >
      <FaSearch
        className="text-gray-600 dark:text-gray-300 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      />
      {expanded && (
        <motion.input
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          type="text"
          placeholder="Search..."
          className="ml-2 bg-transparent outline-none flex-1 text-gray-700 dark:text-gray-200"
        />
      )}
    </motion.div>
  );
}

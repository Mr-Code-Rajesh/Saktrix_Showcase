import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

export default function TerminalSearchBar() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center px-3 py-2 rounded bg-black border border-green-600 text-green-400 font-mono"
    >
      <FaSearch />
      <input
        type="text"
        placeholder="search_query$"
        className="ml-2 bg-transparent outline-none flex-1 text-green-400 placeholder-green-600 font-mono"
      />
    </motion.div>
  );
}

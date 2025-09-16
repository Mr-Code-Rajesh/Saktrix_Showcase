import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

export default function NeonGlowSearchBar() {
  return (
    <motion.div
      whileHover={{ boxShadow: "0 0 15px #06b6d4" }}
      className="flex items-center px-3 py-2 rounded-full border-2 border-cyan-400 dark:border-purple-500 bg-black text-cyan-300 dark:text-purple-300"
    >
      <FaSearch />
      <input
        type="text"
        placeholder="Neon search..."
        className="ml-2 bg-transparent outline-none flex-1 placeholder-gray-500 text-white"
      />
    </motion.div>
  );
}

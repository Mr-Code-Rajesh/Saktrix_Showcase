import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

export default function CyberpunkSearchBar() {
  return (
    <motion.div
      whileHover={{ textShadow: "0px 0px 6px #ec4899, 0px 0px 12px #3b82f6" }}
      className="flex items-center px-3 py-2 rounded-full bg-black border-2 border-pink-500 text-pink-400"
    >
      <FaSearch />
      <input
        type="text"
        placeholder="> cyber search _"
        className="ml-2 bg-transparent outline-none flex-1 text-pink-400 placeholder-pink-300 font-mono"
      />
    </motion.div>
  );
}

import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

export default function HolographicSearchBar() {
  return (
    <motion.div
      whileHover={{ backgroundPosition: "200% center" }}
      className="flex items-center px-4 py-2 rounded-full border-2 text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-[length:200%_200%] transition-all"
    >
      <FaSearch />
      <input
        type="text"
        placeholder="Holographic search..."
        className="ml-2 bg-transparent outline-none flex-1 placeholder-white/70 text-white"
      />
    </motion.div>
  );
}

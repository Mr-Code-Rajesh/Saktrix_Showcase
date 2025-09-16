import { motion } from "framer-motion";
import { MdOutlineFavorite } from "react-icons/md";

export default function SoftUIFAB() {
  return (
    <div className="relative w-full h-40 flex items-center justify-center bg-gray-900 rounded-lg">
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="absolute w-14 h-14 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 text-pink-500 shadow-inner"
    >
      <MdOutlineFavorite size={24} />
    </motion.button>
    </div>
  );
}

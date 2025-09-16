import { motion } from "framer-motion";
import { FaMagic } from "react-icons/fa";

export default function HolographicFAB() {
  return (
    <div className="relative w-full h-40 flex items-center justify-center bg-gray-900 rounded-lg">
    <motion.button
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      className=" absolute w-14 h-14 flex items-center justify-center rounded-full text-white bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
    >
      <FaMagic size={20} />
    </motion.button>
    </div>
  );
}

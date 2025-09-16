import { motion } from "framer-motion";
import { FaRegSmile } from "react-icons/fa";

export default function ShadowMorphFAB() {
  return (
    <div className="relative w-full h-40 flex items-center justify-center bg-gray-900 rounded-lg">
    <motion.button
      whileHover={{ boxShadow: "0 0 20px #f59e0b" }}
      whileTap={{ scale: 0.95 }}
      className="absolute w-14 h-14 flex items-center justify-center rounded-full bg-yellow-400 text-black shadow-lg"
    >
      <FaRegSmile size={22} />
    </motion.button>
    </div>
  );
}

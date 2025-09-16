import { motion } from "framer-motion";
import { FaBolt } from "react-icons/fa";

export default function GlitchFAB() {
  return (
    <div className="relative w-full h-40 flex items-center justify-center bg-gray-900 rounded-lg">
    <motion.button
      whileHover={{
        scale: 1.1,
        textShadow: "0 0 6px #ec4899, 0 0 10px #3b82f6",
      }}
      whileTap={{ scale: 0.95 }}
      className="absolute w-14 h-14 flex items-center justify-center rounded-full bg-black text-yellow-400 border border-yellow-400"
    >
      <FaBolt size={22} />
    </motion.button>
    </div>
  );
}

import { motion } from "framer-motion";
import { FaRobot } from "react-icons/fa";

export default function CyberpunkFAB() {
  return (
    <div className="relative w-full h-40 flex items-center justify-center bg-gray-900 rounded-lg">
    <motion.button
      whileHover={{
        scale: 1.15,
        textShadow: "0px 0px 8px #ec4899, 0px 0px 12px #3b82f6",
      }}
      whileTap={{ scale: 0.95 }}
      className="absolute w-14 h-14 flex items-center justify-center rounded-full bg-black text-pink-500 border border-blue-500"
    >
      <FaRobot size={22} />
    </motion.button>
    </div>
  );
}

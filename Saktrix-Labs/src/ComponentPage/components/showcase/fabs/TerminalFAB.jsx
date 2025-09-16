import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

export default function TerminalFAB() {
  return (
    <div className="relative w-full h-40 flex items-center justify-center bg-gray-900 rounded-lg">
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed  w-14 h-14 flex items-center justify-center rounded-full bg-black text-green-400 font-mono border border-green-600"
    >
      <FaCode size={20} />
    </motion.button>
    </div>

  );
}

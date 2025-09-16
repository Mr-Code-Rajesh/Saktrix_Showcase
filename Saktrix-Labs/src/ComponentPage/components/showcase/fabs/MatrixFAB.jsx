import { motion } from "framer-motion";
import { FaTerminal } from "react-icons/fa";

export default function MatrixFAB() {
  return (
    <div className="relative w-full h-40 flex items-center justify-center bg-gray-900 rounded-lg">
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="absolute w-14 h-14 flex items-center justify-center rounded-full bg-black text-green-500 border border-green-700 "
    >
      <FaTerminal size={20} />
      <motion.div
        className="absolute inset-0 bg-green-400/10 rounded-full"
        animate={{ y: ["-100%", "100%"] }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      />
    </motion.button>
    </div>
  );
}

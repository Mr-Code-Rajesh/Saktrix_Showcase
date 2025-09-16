import { motion } from "framer-motion";
import { FaAtom } from "react-icons/fa";

export default function QuantumFAB() {
  return (
    <div className="relative w-full h-40 flex items-center justify-center bg-gray-900 rounded-lg">
      <motion.button
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        className="absolute  w-14 h-14 flex items-center justify-center rounded-full bg-indigo-600 text-white"
      >
        <FaAtom size={22} />
      </motion.button>
    </div>
  );
}

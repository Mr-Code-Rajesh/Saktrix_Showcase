import { motion } from "framer-motion";
import { MdAdd } from "react-icons/md";

export default function NeonGlowFAB() {
  return (
    <div className="relative w-full h-40 flex items-center justify-center bg-gray-900 rounded-lg">
    <motion.button
      whileHover={{ scale: 1.1, boxShadow: "0 0 20px #06b6d4" }}
      whileTap={{ scale: 0.95 }}
      className="absolute  w-14 h-14 flex items-center justify-center rounded-full bg-black border-2 border-cyan-400 text-cyan-400"
    >
      <MdAdd size={24} />
    </motion.button>
    </div>
  );
}

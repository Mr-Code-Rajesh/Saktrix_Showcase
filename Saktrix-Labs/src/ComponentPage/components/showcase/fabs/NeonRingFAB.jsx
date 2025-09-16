import { motion } from "framer-motion";
import { FaCircle } from "react-icons/fa";

export default function NeonRingFAB() {
  return (
   <div className="relative w-full h-40 flex items-center justify-center bg-gray-900 rounded-lg">
    <motion.button
      whileHover={{ scale: 1.15, boxShadow: "0 0 15px #9333ea" }}
      whileTap={{ scale: 0.95 }}
      className="absolute  w-14 h-14 flex items-center justify-center rounded-full bg-purple-700 text-white  overflow-hidden"
    >
      <FaCircle size={20} />
    </motion.button>
    </div>
  );
}

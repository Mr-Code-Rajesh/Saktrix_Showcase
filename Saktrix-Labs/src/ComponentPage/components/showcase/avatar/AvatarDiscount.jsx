import { motion } from "framer-motion";
import { FaUserCircle } from "react-icons/fa";

export default function AvatarDiscount() {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(217,70,239,0.9)" }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="relative inline-block m-4 rounded-full"
    >
      <div className="w-16 h-16 rounded-full flex items-center justify-center 
                      bg-fuchsia-500 text-white ring-2 ring-fuchsia-300 shadow-lg">
        <FaUserCircle className="w-14 h-14" />
      </div>

      <span className="absolute -top-1 -right-1 flex items-center justify-center 
                       w-6 h-6 text-xs font-bold text-white 
                       bg-pink-500 rounded-full shadow-lg shadow-pink-500/50">
        🎉
      </span>
    </motion.div>
  );
}

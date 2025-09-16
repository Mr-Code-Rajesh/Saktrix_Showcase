import { motion } from "framer-motion";
import { MdLightMode } from "react-icons/md";

export default function LaserSweepFAB() {
  return (
    <div className="relative w-full h-40 flex items-center justify-center bg-black/30 rounded-lg">
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className=" absolute  w-14 h-14 flex items-center justify-center rounded-full bg-yellow-400 text-black  overflow-hidden"
    >
      <MdLightMode size={22} />
      <motion.div
        className="absolute inset-0 bg-white/30"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6 }}
      />
    </motion.button>
    </div>
  );
}

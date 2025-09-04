import { motion } from "framer-motion";

export default function AnimatedCardShowcase() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="w-64 h-40 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center text-lg font-semibold cursor-pointer"
    >
      ✨ Hover Me!
    </motion.div>
  );
}

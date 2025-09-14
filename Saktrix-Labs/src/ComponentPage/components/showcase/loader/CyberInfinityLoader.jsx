import { motion } from "framer-motion";

export default function CyberInfinityLoader() {
  return (
    <motion.div
      className="flex items-center justify-center h-40"
      animate={{ rotate: 360 }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
    >
      <div className="text-6xl text-pink-500 font-bold">∞</div>
    </motion.div>
  );
}

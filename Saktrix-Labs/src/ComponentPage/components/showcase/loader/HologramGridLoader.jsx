import { motion } from "framer-motion";

export default function HologramGridLoader() {
  return (
    <div className="grid grid-cols-5 gap-1 p-4 bg-gray-900 rounded-lg">
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="w-4 h-4 bg-cyan-500"
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.05 }}
        />
      ))}
    </div>
  );
}

import { motion } from "framer-motion";

export default function NeuralPulseLoader() {
  return (
    <div className="relative flex items-center justify-center h-40">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute w-20 h-20 rounded-full border-4 border-cyan-400"
          initial={{ scale: 0.5, opacity: 1 }}
          animate={{ scale: 2.5, opacity: 0 }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.6 }}
        />
      ))}
      <div className="w-10 h-10 rounded-full bg-cyan-500 shadow-lg shadow-cyan-400"></div>
    </div>
  );
}

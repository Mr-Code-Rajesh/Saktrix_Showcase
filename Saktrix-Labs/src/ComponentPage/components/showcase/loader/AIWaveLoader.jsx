import { motion } from "framer-motion";

export default function AIWaveLoader() {
  return (
    <div className="relative flex items-center justify-center h-40">
      {[0,1,2].map((i) => (
        <motion.div
          key={i}
          className="absolute w-20 h-20 rounded-full border-4 border-teal-400"
          initial={{ scale: 0.5, opacity: 1 }}
          animate={{ scale: 2.0, opacity: 0 }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}
    </div>
  );
}

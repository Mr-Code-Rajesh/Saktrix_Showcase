import { motion } from "framer-motion";

export default function LightBeamLoader() {
  return (
    <div className="relative flex items-center justify-center h-40">
      {[0,1,2].map((i) => (
        <motion.div
          key={i}
          className="absolute w-24 h-24 rounded-full border-4 border-indigo-500"
          animate={{ rotate: 360 }}
          transition={{ duration: 2 + i, repeat: Infinity, ease: "linear" }}
        />
      ))}
      <motion.div
        className="absolute w-12 h-12 rounded-full bg-indigo-400"
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    </div>
  );
}

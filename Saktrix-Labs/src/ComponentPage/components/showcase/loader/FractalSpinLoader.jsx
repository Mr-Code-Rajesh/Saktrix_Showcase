import { motion } from "framer-motion";

export default function FractalSpinLoader() {
  return (
    <div className="relative flex items-center justify-center h-40">
      {[0,1,2].map((i) => (
        <motion.div
          key={i}
          className="absolute w-16 h-16 border-4 border-fuchsia-500 rounded-lg"
          animate={{ rotate: 360 }}
          transition={{ duration: 3 + i, repeat: Infinity, ease: "linear" }}
        />
      ))}
    </div>
  );
}

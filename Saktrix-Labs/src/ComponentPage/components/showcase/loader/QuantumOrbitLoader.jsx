import { motion } from "framer-motion";

export default function QuantumOrbitLoader() {
  return (
    <div className="relative flex items-center justify-center h-40">
      <div className="w-12 h-12 rounded-full bg-indigo-500 shadow-lg shadow-indigo-400"></div>
      {[0,1,2].map((i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 rounded-full bg-pink-500"
          animate={{ rotate: 360 }}
          transition={{ duration: 2 + i, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "60px", top: "50%", left: "50%" }}
        />
      ))}
    </div>
  );
}

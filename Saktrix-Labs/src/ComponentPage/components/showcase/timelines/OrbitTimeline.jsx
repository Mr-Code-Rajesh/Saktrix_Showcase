import { motion } from "framer-motion";

const events = [
  "Launch 🚀",
  "Orbit Stabilized 🌍",
  "Deep Space 🪐",
];

export default function OrbitTimeline() {
  return (
    <div className="relative w-64 h-64 mx-auto flex items-center justify-center rounded-full border-2 border-purple-400 animate-spin-slow">
      {events.map((text, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: i * 0.5 }}
          className="absolute text-center text-sm font-bold text-purple-500"
          style={{ transform: `rotate(${i * 120}deg) translate(8rem) rotate(-${i * 120}deg)` }}
        >
          {text}
        </motion.div>
      ))}
    </div>
  );
}

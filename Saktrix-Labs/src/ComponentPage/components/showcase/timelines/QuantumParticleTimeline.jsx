import { motion } from "framer-motion";

const events = [
  "Particle Initiation ✨",
  "Quantum Flow 🌌",
  "Stability Achieved ✔",
];

export default function QuantumParticleTimeline() {
  return (
    <div className="relative flex flex-col items-start pl-8 border-l-2 border-gray-400 dark:border-gray-600">
      {events.map((text, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.4 }}
          viewport={{ once: true }}
          className="mb-6 relative"
        >
          <div className="absolute -left-4 w-3 h-3 rounded-full bg-purple-400 animate-pulse" />
          <p className="text-gray-700 dark:text-gray-300">{text}</p>
        </motion.div>
      ))}
    </div>
  );
}

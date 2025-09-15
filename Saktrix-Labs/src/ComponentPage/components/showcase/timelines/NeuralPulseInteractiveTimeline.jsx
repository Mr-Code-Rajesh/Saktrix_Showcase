import { motion } from "framer-motion";

const events = [
  "Pulse Start ⚡",
  "Signal Propagation 🌐",
  "Insight Delivered 📊",
];

export default function NeuralPulseInteractiveTimeline() {
  return (
    <div className="relative pl-8 border-l-2 border-blue-500">
      {events.map((text, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.4 }}
          viewport={{ once: true }}
          className="mb-6 relative"
        >
          <div className="absolute -left-4 w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
          <p className="text-gray-700 dark:text-gray-300">{text}</p>
        </motion.div>
      ))}
    </div>
  );
}

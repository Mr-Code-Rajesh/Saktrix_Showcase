import { motion } from "framer-motion";

const events = [
  { label: "Phase 1: Data Prep" },
  { label: "Phase 2: Training" },
  { label: "Phase 3: Deployment" },
];

export default function HolographicGradientTimeline() {
  return (
    <div className="relative pl-8 border-l-4 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full">
      {events.map((e, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.3 }}
          viewport={{ once: true }}
          className="mb-8 relative"
        >
          <div className="absolute -left-5 w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-pink-400" />
          <p className="font-semibold text-gray-800 dark:text-gray-200">{e.label}</p>
        </motion.div>
      ))}
    </div>
  );
}

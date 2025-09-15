import { motion } from "framer-motion";

const events = [
  { step: "Booting System..." },
  { step: "Loading Neural Matrix..." },
  { step: "Connection Established ✔" },
];

export default function CyberpunkCircuitTimeline() {
  return (
    <div className="relative pl-8 border-l-2 border-pink-500 shadow-[0_0_8px_#ec4899]">
      {events.map((event, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.4 }}
          viewport={{ once: true }}
          className="mb-6 relative"
        >
          <div className="absolute -left-4 w-3 h-3 rounded-full bg-pink-500 shadow-[0_0_6px_#ec4899]" />
          <p className="text-gray-200">{event.step}</p>
        </motion.div>
      ))}
    </div>
  );
}

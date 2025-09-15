import { motion } from "framer-motion";

const events = [
  "Milestone 1: Prototype",
  "Milestone 2: Beta Launch",
  "Milestone 3: Full Release",
];

export default function SoftUIMilestoneTimeline() {
  return (
    <div className="space-y-6 p-6">
      {events.map((text, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 100, delay: i * 0.3 }}
          viewport={{ once: true }}
          className="p-4 rounded-xl bg-gray-200 dark:bg-gray-800 shadow-inner"
        >
          <p className="text-gray-700 dark:text-gray-200">{text}</p>
        </motion.div>
      ))}
    </div>
  );
}

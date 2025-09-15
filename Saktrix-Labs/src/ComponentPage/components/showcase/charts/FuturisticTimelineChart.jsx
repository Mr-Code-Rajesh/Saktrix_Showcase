import { motion } from "framer-motion";

const milestones = [
  { time: "2021", event: "AI Launch" },
  { time: "2022", event: "ML Upgrade" },
  { time: "2023", event: "Neural Net Expansion" },
  { time: "2024", event: "Quantum AI" },
];

export default function FuturisticTimelineChart() {
  return (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <div className="relative border-l-2 border-purple-500 dark:border-purple-400 pl-6">
        {milestones.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.3 }}
            className="mb-6"
          >
            <div className="absolute -left-3 w-6 h-6 rounded-full bg-purple-500"></div>
            <h3 className="font-bold text-purple-600 dark:text-purple-400">{m.time}</h3>
            <p className="text-gray-700 dark:text-gray-300">{m.event}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

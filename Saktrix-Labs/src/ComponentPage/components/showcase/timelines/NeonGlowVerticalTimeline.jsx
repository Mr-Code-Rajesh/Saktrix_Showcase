import { motion } from "framer-motion";

const events = [
  { year: "2021", text: "AI Launch 🚀" },
  { year: "2022", text: "Neural Upgrade ⚡" },
  { year: "2023", text: "Quantum Expansion 🔮" },
];

export default function NeonGlowVerticalTimeline() {
  return (
    <div className="relative pl-8 border-l-4 border-cyan-400 dark:border-purple-500 shadow-[0_0_12px_#06b6d4]">
      {events.map((event, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.3 }}
          viewport={{ once: true }}
          className="mb-8 relative"
        >
          <div className="absolute -left-5 w-4 h-4 rounded-full bg-cyan-400 dark:bg-purple-500 shadow-[0_0_10px_#06b6d4]" />
          <h3 className="font-bold text-lg text-cyan-500 dark:text-purple-400">{event.year}</h3>
          <p className="text-gray-700 dark:text-gray-300">{event.text}</p>
        </motion.div>
      ))}
    </div>
  );
}

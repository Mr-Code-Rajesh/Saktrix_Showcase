import { motion } from "framer-motion";

const events = [
  { year: "2021", text: "AI Launch 🚀" },
  { year: "2022", text: "Model Scaling 📈" },
  { year: "2023", text: "Quantum Integration 🔮" },
];

export default function GlassmorphismHorizontalTimeline() {
  return (
    <div className="flex space-x-8 overflow-x-auto p-6 bg-white/20 dark:bg-gray-800/30 backdrop-blur-lg rounded-xl">
      {events.map((event, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.3 }}
          viewport={{ once: true }}
          className="min-w-[200px] p-4 bg-white/30 dark:bg-gray-700/30 rounded-lg shadow-lg"
        >
          <h3 className="font-bold text-lg">{event.year}</h3>
          <p>{event.text}</p>
        </motion.div>
      ))}
    </div>
  );
}

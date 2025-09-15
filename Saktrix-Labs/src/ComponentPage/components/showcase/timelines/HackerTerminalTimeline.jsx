import { motion } from "framer-motion";

const events = [
  "Initializing AI core...",
  "Connecting neural network...",
  "Access Granted ✔",
];

export default function HackerTerminalTimeline() {
  return (
    <div className="bg-black p-6 rounded-lg font-mono text-green-400">
      {events.map((text, i) => (
        <motion.p
          key={i}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, delay: i * 1 }}
          className="whitespace-nowrap overflow-hidden border-r-2 border-green-400"
        >
          {text}
        </motion.p>
      ))}
    </div>
  );
}

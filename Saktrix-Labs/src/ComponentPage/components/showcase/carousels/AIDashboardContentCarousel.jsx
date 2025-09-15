import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const contents = [
  { title: "📊 Analytics", desc: "Track user behavior with AI insights." },
  { title: "📑 Reports", desc: "Generate automated performance reports." },
  { title: "🛰 Monitoring", desc: "Real-time anomaly detection dashboard." },
];

export default function AIDashboardContentCarousel() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((index + 1) % contents.length);

  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg shadow-lg">
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-bold">{contents[index].title}</h3>
          <p className="mt-2 text-gray-300">{contents[index].desc}</p>
        </motion.div>
      </AnimatePresence>
      <button onClick={next} className="mt-4 px-4 py-1 bg-blue-600 rounded-lg">Next</button>
    </div>
  );
}

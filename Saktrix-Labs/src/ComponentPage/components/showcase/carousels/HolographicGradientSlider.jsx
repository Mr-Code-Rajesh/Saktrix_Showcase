import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  "🌌 Explore the Holographic Future",
  "🔮 AI-driven Gradient Experiences",
  "🌈 Shimmering Transitions Await",
];

export default function HolographicGradientSlider() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((index + 1) % slides.length);

  return (
    <div className="p-6 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-xl text-white text-center">
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-xl font-bold"
        >
          {slides[index]}
        </motion.div>
      </AnimatePresence>
      <button onClick={next} className="mt-4 px-4 py-1 bg-white/30 rounded-lg">Next</button>
    </div>
  );
}

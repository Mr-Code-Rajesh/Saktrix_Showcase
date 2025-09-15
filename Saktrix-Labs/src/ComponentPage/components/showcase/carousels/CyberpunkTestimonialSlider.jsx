import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  "🚀 AI changed everything for our business.",
  "💡 The future feels cyberpunk with this design.",
  "✨ Neon vibes meet powerful insights.",
];

export default function CyberpunkTestimonialSlider() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((index + 1) % testimonials.length);

  return (
    <div className="p-6 bg-gray-900 rounded-lg text-center text-pink-400 font-mono">
      <AnimatePresence>
        <motion.p
          key={index}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 30 }}
          transition={{ duration: 0.5 }}
          className="text-lg font-bold"
        >
          {testimonials[index]}
        </motion.p>
      </AnimatePresence>
      <button onClick={next} className="mt-4 px-4 py-1 bg-pink-600 rounded-lg">Next</button>
    </div>
  );
}

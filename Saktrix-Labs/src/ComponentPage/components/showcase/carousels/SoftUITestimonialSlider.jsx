import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  "🤖 This UI feels soft and futuristic.",
  "🌐 Neumorphism meets interactivity.",
  "⚡ Modern and subtle testimonial style.",
];

export default function SoftUITestimonialSlider() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((index + 1) % testimonials.length);

  return (
    <div className="p-6 rounded-2xl bg-gray-200 dark:bg-gray-800 shadow-inner text-center">
      <AnimatePresence>
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-lg font-bold"
        >
          {testimonials[index]}
        </motion.p>
      </AnimatePresence>
      <button onClick={next} className="mt-4 px-4 py-1 bg-gray-300 dark:bg-gray-600 rounded-lg">Next</button>
    </div>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://source.unsplash.com/random/400x200/?tech",
  "https://source.unsplash.com/random/400x200/?ai",
  "https://source.unsplash.com/random/400x200/?futuristic",
];

export default function GlassmorphismImageSlider() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((index + 1) % images.length);

  return (
    <div className="relative w-full max-w-lg mx-auto p-6 bg-white/20 dark:bg-gray-800/30 backdrop-blur-lg rounded-xl overflow-hidden">
      <AnimatePresence>
        <motion.img
          key={index}
          src={images[index]}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6 }}
          className="rounded-xl shadow-lg w-full"
        />
      </AnimatePresence>
      <button onClick={next} className="absolute bottom-3 right-3 bg-white/30 dark:bg-gray-700/50 px-4 py-1 rounded-lg text-sm">
        Next
      </button>
    </div>
  );
}

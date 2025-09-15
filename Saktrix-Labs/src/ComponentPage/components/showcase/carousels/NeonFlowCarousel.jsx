import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://via.placeholder.com/400x200/06b6d4/fff?text=AI+Slide+1",
  "https://via.placeholder.com/400x200/9333ea/fff?text=AI+Slide+2",
  "https://via.placeholder.com/400x200/ec4899/fff?text=AI+Slide+3",
];

export default function NeonFlowCarousel() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <div className="relative w-full max-w-lg mx-auto p-6 bg-black rounded-xl shadow-lg overflow-hidden">
      <AnimatePresence>
        <motion.img
          key={index}
          src={images[index]}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
          className="rounded-lg border-4 border-cyan-400 shadow-[0_0_20px_#06b6d4]"
        />
      </AnimatePresence>
      <button onClick={prev} className="absolute top-1/2 left-3 -translate-y-1/2 bg-purple-600 text-white px-2 py-1 rounded">◀</button>
      <button onClick={next} className="absolute top-1/2 right-3 -translate-y-1/2 bg-cyan-600 text-white px-2 py-1 rounded">▶</button>
    </div>
  );
}

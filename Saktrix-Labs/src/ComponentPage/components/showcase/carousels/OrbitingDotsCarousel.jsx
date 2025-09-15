import { useState } from "react";
import { motion } from "framer-motion";

const slides = ["AI Slide One", "AI Slide Two", "AI Slide Three", "AI Slide Four"];

export default function OrbitingDotsCarousel() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((index + 1) % slides.length);

  return (
    <div className="relative w-full max-w-md mx-auto p-6 bg-gray-900 text-white rounded-lg">
      <h2 className="text-xl font-bold text-center">{slides[index]}</h2>
      <div className="flex justify-center mt-6 space-x-4">
        {slides.map((_, i) => (
          <motion.div
            key={i}
            className={`w-3 h-3 rounded-full ${i === index ? "bg-cyan-400" : "bg-gray-500"}`}
            animate={i === index ? { scale: [1, 1.4, 1] } : {}}
            transition={{ repeat: i === index ? Infinity : 0, duration: 1.2 }}
          />
        ))}
      </div>
      <button onClick={next} className="absolute bottom-3 right-3 px-3 py-1 bg-purple-600 rounded-lg">
        Next
      </button>
    </div>
  );
}

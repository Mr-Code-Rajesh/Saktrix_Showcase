import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const items = ["Logo 1", "Logo 2", "Logo 3", "Logo 4"];

export default function NeuralPulseAutoScroller() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-lg overflow-hidden">
      <motion.div
        key={index}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center font-bold text-purple-500"
      >
        {items[index]}
      </motion.div>
    </div>
  );
}

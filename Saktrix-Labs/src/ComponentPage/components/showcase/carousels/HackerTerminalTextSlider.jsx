import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const texts = ["Access Granted", "Loading Data...", "Connection Secure"];

export default function HackerTerminalTextSlider() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % texts.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-6 bg-black text-green-400 font-mono rounded-lg text-center">
      <motion.div
        key={index}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.5 }}
        className="text-lg"
      >
        {texts[index]}
      </motion.div>
    </div>
  );
}

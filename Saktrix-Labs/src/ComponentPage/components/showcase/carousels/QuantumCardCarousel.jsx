import { useState } from "react";
import { motion } from "framer-motion";

const cards = [
  { id: 1, title: "AI Assistant", desc: "Next-gen automation." },
  { id: 2, title: "Quantum Engine", desc: "Hyper speed insights." },
  { id: 3, title: "Neural Link", desc: "Seamless data flow." },
];

export default function QuantumCardCarousel() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((index + 1) % cards.length);
  const prev = () => setIndex((index - 1 + cards.length) % cards.length);

  return (
    <div className="relative flex items-center justify-center w-full p-6 bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden">
      {cards.map((card, i) => {
        const offset = i - index;
        return (
          <motion.div
            key={card.id}
            className="absolute w-64 p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800"
            animate={{
              x: offset * 220,
              scale: i === index ? 1.1 : 0.9,
              rotateY: offset * -15,
              zIndex: i === index ? 10 : 0,
            }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <h3 className="text-lg font-bold">{card.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{card.desc}</p>
          </motion.div>
        );
      })}
      <button onClick={prev} className="absolute left-3 px-3 py-1 bg-purple-600 text-white rounded-lg">◀</button>
      <button onClick={next} className="absolute right-3 px-3 py-1 bg-purple-600 text-white rounded-lg">▶</button>
    </div>
  );
}

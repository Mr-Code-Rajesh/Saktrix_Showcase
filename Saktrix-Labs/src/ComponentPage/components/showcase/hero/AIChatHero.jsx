import { motion } from "framer-motion";
import { FaComments } from "react-icons/fa";

const chatBubbles = [
  { text: "Hello! How can I help you today?", align: "left" },
  { text: "Show me the latest AI features.", align: "right" },
  { text: "Sure! Here are some highlights...", align: "left" },
];

const AIChatHero = () => (
  <section className="w-full min-h-[80vh] flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900 relative overflow-hidden">
    {/* Animated chat bubbles */}
    <div className="absolute inset-0 pointer-events-none z-0" />
    <div className="relative z-10 flex flex-col items-center text-center px-6 py-12 md:py-0 md:w-1/2">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="flex items-center justify-center mb-4"
      >
        <FaComments className="text-5xl text-purple-300 drop-shadow-glow" />
      </motion.div>
      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl md:text-6xl font-extrabold text-purple-300 dark:text-pink-200 mb-4 drop-shadow-glow"
      >
        AI Chat Hero
      </motion.h1>
      <motion.p
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-lg md:text-2xl text-purple-100 dark:text-pink-100 mb-8"
      >
        Conversational AI with animated chat bubbles and glowing CTAs.
      </motion.p>
      <div className="w-full flex flex-col gap-4 mb-8">
        {chatBubbles.map((bubble, i) => (
          <motion.div
            key={i}
            initial={{ x: bubble.align === "left" ? -40 : 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 * i }}
            className={`max-w-xs px-4 py-2 rounded-lg shadow-lg text-left text-base font-medium ${bubble.align === "left" ? "bg-purple-100 text-purple-900 self-start" : "bg-pink-100 text-pink-900 self-end"}`}
          >
            {bubble.text}
          </motion.div>
        ))}
      </div>
      <motion.button
        whileHover={{ scale: 1.08, background: "linear-gradient(90deg,#a78bfa,#f472b6)" }}
        className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-400 text-white font-bold shadow-lg transition-all duration-300 hover:from-pink-400 hover:to-purple-500"
      >
        Start Chat
      </motion.button>
    </div>
  </section>
);

export default AIChatHero;

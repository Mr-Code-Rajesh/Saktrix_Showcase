import { motion } from "framer-motion";
import { FaRegStar } from "react-icons/fa";

const matrixRain = Array.from({ length: 20 }, (_, i) => ({
  x: i * 72 + 24,
  delay: Math.random() * 2,
}));

const StarlightMatrixHero = () => (
  <section className="w-full min-h-[80vh] flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 dark:from-gray-950 dark:via-blue-950 dark:to-purple-950 relative overflow-hidden">
    {/* Matrix rain and starlight glow background */}
    <motion.div className="absolute inset-0 pointer-events-none z-0">
      <svg width="100%" height="100%" viewBox="0 0 1440 320" className="w-full h-full">
        {matrixRain.map((rain, i) => (
          <motion.text
            key={i}
            x={rain.x}
            y={0}
            fontSize="24"
            fill="#a78bfa"
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: [0, 320], opacity: [0.7, 0.2, 0.7] }}
            transition={{ repeat: Infinity, duration: 3 + rain.delay, ease: "linear", delay: rain.delay }}
          >
            0 1
          </motion.text>
        ))}
        {[...Array(30)].map((_, i) => (
          <circle key={i} cx={Math.random() * 1440} cy={Math.random() * 320} r={Math.random() * 2 + 1} fill="#fbbf24" opacity={Math.random()} />
        ))}
      </svg>
    </motion.div>
    <div className="relative z-10 flex flex-col items-center text-center px-6 py-12 md:py-0 md:w-1/2">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="flex items-center justify-center mb-4"
      >
        <FaRegStar className="text-5xl text-yellow-300 drop-shadow-glow" />
      </motion.div>
      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl md:text-6xl font-extrabold text-yellow-300 dark:text-purple-200 mb-4 drop-shadow-glow"
      >
        Starlight Matrix Hero
      </motion.h1>
      <motion.p
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-lg md:text-2xl text-yellow-100 dark:text-purple-100 mb-8"
      >
        Matrix rain meets starlight glow for a truly AI-inspired hero.
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.08, background: "linear-gradient(90deg,#fbbf24,#a78bfa)" }}
        className="px-8 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-purple-500 text-white font-bold shadow-lg transition-all duration-300 hover:from-purple-500 hover:to-yellow-400"
      >
        Enter Matrix
      </motion.button>
    </div>
  </section>
);

export default StarlightMatrixHero;

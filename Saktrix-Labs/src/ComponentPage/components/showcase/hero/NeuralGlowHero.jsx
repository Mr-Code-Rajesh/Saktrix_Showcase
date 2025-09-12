import { motion } from "framer-motion";
import { FaRobot } from "react-icons/fa";

const NeuralGlowHero = () => (
  <section className="w-full min-h-[80vh] flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 relative overflow-hidden">
    {/* Animated neural network glow */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="absolute inset-0 pointer-events-none"
    >
      <svg width="100%" height="100%" viewBox="0 0 1440 320" fill="none" className="w-full h-full">
        <defs>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="720" cy="160" rx="600" ry="120" fill="url(#glow)" />
      </svg>
    </motion.div>
    <div className="relative z-10 flex flex-col items-center text-center px-6 py-12 md:py-0 md:w-1/2">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="flex items-center justify-center mb-4"
      >
        <FaRobot className="text-5xl text-white drop-shadow-glow" />
      </motion.div>
      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl md:text-6xl font-extrabold text-white dark:text-pink-200 mb-4 drop-shadow-glow"
      >
        Neural Glow Hero
      </motion.h1>
      <motion.p
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-lg md:text-2xl text-white/80 dark:text-pink-100 mb-8"
      >
        Experience the future of AI with glowing neural networks and animated gradients.
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.08, background: "linear-gradient(90deg,#f472b6,#a78bfa)" }}
        className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold shadow-lg transition-all duration-300 hover:from-purple-500 hover:to-pink-500"
      >
        Get Started
      </motion.button>
    </div>
  </section>
);

export default NeuralGlowHero;

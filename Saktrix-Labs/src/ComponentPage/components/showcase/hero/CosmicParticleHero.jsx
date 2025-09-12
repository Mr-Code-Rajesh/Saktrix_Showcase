import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const particles = Array.from({ length: 30 }, (_, i) => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  r: Math.random() * 2 + 1,
  o: Math.random() * 0.7 + 0.3,
}));

const CosmicParticleHero = () => (
  <section className="w-full min-h-[80vh] flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 dark:from-indigo-950 dark:via-blue-950 dark:to-purple-950 relative overflow-hidden">
    {/* Cosmic particle animation background */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.7 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 pointer-events-none z-0"
    >
      <svg width="100%" height="100%" viewBox="0 0 100 100" className="w-full h-full">
        {particles.map((p, i) => (
          <motion.circle
            key={i}
            cx={p.x}
            cy={p.y}
            r={p.r}
            fill="#fbbf24"
            opacity={p.o}
            animate={{
              cy: [p.y, p.y + Math.random() * 10, p.y],
              opacity: [p.o, 0.2, p.o],
            }}
            transition={{ repeat: Infinity, duration: 4 + Math.random() * 2, ease: "easeInOut" }}
          />
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
        <FaStar className="text-5xl text-yellow-300 drop-shadow-glow" />
      </motion.div>
      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl md:text-6xl font-extrabold text-yellow-300 dark:text-yellow-200 mb-4 drop-shadow-glow"
      >
        Cosmic Particle Hero
      </motion.h1>
      <motion.p
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-lg md:text-2xl text-yellow-100 dark:text-yellow-100 mb-8"
      >
        Explore cosmic AI with animated particles and glowing CTAs.
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.08, background: "linear-gradient(90deg,#fbbf24,#a78bfa)" }}
        className="px-8 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-purple-500 text-white font-bold shadow-lg transition-all duration-300 hover:from-purple-500 hover:to-yellow-400"
      >
        Launch Now
      </motion.button>
    </div>
  </section>
);

export default CosmicParticleHero;

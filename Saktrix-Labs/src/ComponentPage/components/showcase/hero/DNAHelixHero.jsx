import { motion } from "framer-motion";
import { FaDna } from "react-icons/fa";

const DNAHelixHero = () => (
  <section className="w-full min-h-[80vh] flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-lime-400 via-blue-400 to-purple-400 dark:from-lime-900 dark:via-blue-900 dark:to-purple-900 relative overflow-hidden">
    {/* DNA Helix animated background */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.7 }}
      transition={{ duration: 1 }}
      className="absolute left-0 top-0 h-full w-24 pointer-events-none z-0"
    >
      <svg width="100%" height="100%" viewBox="0 0 24 320" fill="none" className="w-full h-full">
        <motion.path
          d="M12 0 Q24 80 12 160 Q0 240 12 320"
          stroke="#a3e635"
          strokeWidth="3"
          fill="none"
          animate={{
            pathLength: [0.7, 1, 0.7],
          }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
        {[32, 96, 160, 224, 288].map((cy, i) => (
          <circle key={i} cx="12" cy={cy} r="4" fill="#a3e635" opacity="0.7" />
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
        <FaDna className="text-5xl text-lime-400 drop-shadow-glow" />
      </motion.div>
      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl md:text-6xl font-extrabold text-lime-400 dark:text-blue-200 mb-4 drop-shadow-glow"
      >
        DNA Helix Hero
      </motion.h1>
      <motion.p
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-lg md:text-2xl text-lime-100 dark:text-blue-100 mb-8"
      >
        AI meets biology with animated DNA helix and glowing CTAs.
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.08, background: "linear-gradient(90deg,#a3e635,#a78bfa)" }}
        className="px-8 py-3 rounded-full bg-gradient-to-r from-lime-400 to-purple-500 text-white font-bold shadow-lg transition-all duration-300 hover:from-purple-500 hover:to-lime-400"
      >
        Learn More
      </motion.button>
    </div>
  </section>
);

export default DNAHelixHero;

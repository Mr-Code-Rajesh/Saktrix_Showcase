import { motion } from "framer-motion";

export default function ProgressSection() {
  const progress = 70; // % Completed

  return (
    <section className="relative py-16 bg-gradient-to-b from-gray-100 to-white dark:from-black dark:to-gray-900 overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl top-10 left-20 animate-pulse" />
        <div className="absolute w-[300px] h-[300px] bg-pink-500/20 rounded-full blur-3xl bottom-10 right-20 animate-pulse" />
      </div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-extrabold text-center bg-gradient-to-r 
                   from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text"
      >
        🚀 Saktrix UI Progress
      </motion.h2>

      {/* Subtitle */}
      <p className="mt-4 text-center text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
        Saktrix UI is <span className="font-bold text-purple-500">{progress}%</span> completed.  
        Full launch coming soon – stay tuned for the next-gen UI experience!
      </p>

      {/* Progress Bar */}
      <div className="mt-10 max-w-3xl mx-auto px-6">
        <div className="w-full h-5 rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden shadow-inner">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${progress}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 shadow-lg"
          />
        </div>

        {/* Percentage Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-4 font-bold text-lg text-purple-600 dark:text-pink-400 drop-shadow-glow"
        >
          {progress}% Completed
        </motion.div>
      </div>
    </section>
  );
}

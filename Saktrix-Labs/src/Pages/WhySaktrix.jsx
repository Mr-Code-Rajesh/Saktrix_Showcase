import { motion } from "framer-motion";
import { FaBolt, FaPalette, FaCodeBranch } from "react-icons/fa";

const values = [
  {
    icon: <FaBolt className="text-yellow-400 text-4xl" />,
    title: "⚡ Fast",
    desc: "Optimized with React + Tailwind for blazing-fast performance and smooth dev experience.",
  },
  {
    icon: <FaPalette className="text-pink-400 text-4xl" />,
    title: "🎨 Modern",
    desc: "AI-inspired layouts and Framer Motion animations bring futuristic, fluid design to life.",
  },
  {
    icon: <FaCodeBranch className="text-blue-400 text-4xl" />,
    title: "🛠️ Open Source",
    desc: "Community-driven and free. Contribute, share, and shape Saktrix with developers worldwide.",
  },
];

export default function WhySaktrix() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-black dark:via-gray-950 dark:to-gray-900 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl top-10 left-10 animate-pulse" />
        <div className="absolute w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse" />
      </div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text"
      >
        Why Saktrix?
      </motion.h2>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {values.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
            className="relative group bg-white/70 dark:bg-gray-900/40 rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-800/50 backdrop-blur-xl hover:shadow-purple-500/30 hover:border-purple-400/40 transition-all duration-500"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-2xl rounded-2xl transition duration-500" />

            {/* Content */}
            <div className="relative flex flex-col items-center text-center space-y-4">
              {item.icon}
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

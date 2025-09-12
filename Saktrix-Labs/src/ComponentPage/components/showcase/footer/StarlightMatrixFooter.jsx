import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaLinkedin, FaDiscord } from "react-icons/fa";

const socialLinks = [
  { icon: <FaGithub />, href: "https://github.com/" },
  { icon: <FaTwitter />, href: "https://twitter.com/" },
  { icon: <FaLinkedin />, href: "https://linkedin.com/" },
  { icon: <FaDiscord />, href: "https://discord.com/" },
];
const matrixRain = Array.from({ length: 10 }, (_, i) => ({
  x: i * 144 + 24,
  delay: Math.random() * 2,
}));

const StarlightMatrixFooter = () => (
  <footer className="w-full py-8 px-4 flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 dark:from-gray-950 dark:via-blue-950 dark:to-purple-950">
    {/* Matrix rain and starlight glow background */}
    <motion.div className="absolute inset-0 pointer-events-none z-0">
      <svg width="100%" height="100%" viewBox="0 0 1440 80" className="w-full h-20">
        {matrixRain.map((rain, i) => (
          <motion.text
            key={i}
            x={rain.x}
            y={0}
            fontSize="18"
            fill="#a78bfa"
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: [0, 80], opacity: [0.7, 0.2, 0.7] }}
            transition={{ repeat: Infinity, duration: 3 + rain.delay, ease: "linear", delay: rain.delay }}
          >
            0 1
          </motion.text>
        ))}
        {[...Array(20)].map((_, i) => (
          <circle key={i} cx={Math.random() * 1440} cy={Math.random() * 80} r={Math.random() * 2 + 1} fill="#fbbf24" opacity={Math.random()} />
        ))}
      </svg>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
    >
      <div className="text-2xl font-bold text-yellow-300 drop-shadow-glow">Starlight Matrix Footer</div>
      <div className="flex gap-6">
        {socialLinks.map((link, i) => (
          <motion.a
            key={i}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#fbbf24" }}
            className="text-yellow-300 text-2xl hover:text-yellow-400 transition drop-shadow-glow"
          >
            {link.icon}
          </motion.a>
        ))}
      </div>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="relative z-10 mt-6 text-yellow-200 text-sm text-center"
    >
      &copy; {new Date().getFullYear()} Saktrix Labs. All rights reserved.
    </motion.div>
  </footer>
);

export default StarlightMatrixFooter;

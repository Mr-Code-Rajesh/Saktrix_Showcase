import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaLinkedin, FaDiscord } from "react-icons/fa";

const socialLinks = [
  { icon: <FaGithub />, href: "https://github.com/" },
  { icon: <FaTwitter />, href: "https://twitter.com/" },
  { icon: <FaLinkedin />, href: "https://linkedin.com/" },
  { icon: <FaDiscord />, href: "https://discord.com/" },
];
const particles = Array.from({ length: 20 }, (_, i) => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  r: Math.random() * 2 + 1,
  o: Math.random() * 0.7 + 0.3,
}));

const CosmicParticleFooter = () => (
  <footer className="w-full py-8 px-4 flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 dark:from-indigo-950 dark:via-blue-950 dark:to-purple-950">
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
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
    >
      <div className="text-2xl font-bold text-yellow-300 drop-shadow-glow">Cosmic Particle Footer</div>
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

export default CosmicParticleFooter;

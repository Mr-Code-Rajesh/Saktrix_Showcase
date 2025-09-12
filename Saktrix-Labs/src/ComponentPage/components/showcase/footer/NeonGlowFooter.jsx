import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaLinkedin, FaDiscord } from "react-icons/fa";

const socialLinks = [
  { icon: <FaGithub />, href: "https://github.com/" },
  { icon: <FaTwitter />, href: "https://twitter.com/" },
  { icon: <FaLinkedin />, href: "https://linkedin.com/" },
  { icon: <FaDiscord />, href: "https://discord.com/" },
];

const NeonGlowFooter = () => (
  <footer className="w-full py-8 px-4 bg-black dark:bg-gray-900 flex flex-col items-center justify-center relative overflow-hidden">
    {/* Neon glowing border */}
    <div className="absolute inset-0 pointer-events-none z-0">
      <div className="w-full h-full border-4 border-cyan-400 rounded-2xl opacity-40 animate-pulse" style={{ boxShadow: "0 0 40px 10px #06b6d4" }} />
    </div>
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
    >
      <div className="text-2xl font-bold text-cyan-400 drop-shadow-glow">Neon Glow Footer</div>
      <div className="flex gap-6">
        {socialLinks.map((link, i) => (
          <motion.a
            key={i}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#06b6d4" }}
            className="text-cyan-400 text-2xl hover:text-cyan-300 transition drop-shadow-glow"
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
      className="relative z-10 mt-6 text-cyan-200 text-sm text-center"
    >
      &copy; {new Date().getFullYear()} Saktrix Labs. All rights reserved.
    </motion.div>
  </footer>
);

export default NeonGlowFooter;

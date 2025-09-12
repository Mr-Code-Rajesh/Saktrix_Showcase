import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaLinkedin, FaDiscord } from "react-icons/fa";

const socialLinks = [
  { icon: <FaGithub />, href: "https://github.com/" },
  { icon: <FaTwitter />, href: "https://twitter.com/" },
  { icon: <FaLinkedin />, href: "https://linkedin.com/" },
  { icon: <FaDiscord />, href: "https://discord.com/" },
];

const CyberGridFooter = () => (
  <footer className="w-full py-8 px-4 flex flex-col items-center justify-center relative overflow-hidden bg-black dark:bg-gray-900">
    {/* Cyberpunk grid lines background */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 pointer-events-none z-0"
    >
      <svg width="100%" height="100%" viewBox="0 0 1440 80" className="w-full h-20">
        <g stroke="#06b6d4" strokeWidth="1" opacity="0.3">
          {[...Array(20)].map((_, i) => (
            <line key={i} x1={i * 72} y1="0" x2={i * 72} y2="80" />
          ))}
          {[...Array(4)].map((_, i) => (
            <line key={i} x1="0" y1={i * 20} x2="1440" y2={i * 20} />
          ))}
        </g>
      </svg>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
    >
      <div className="text-2xl font-bold text-cyan-400 drop-shadow-glow">Cyber Grid Footer</div>
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

export default CyberGridFooter;

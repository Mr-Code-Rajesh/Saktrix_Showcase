import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaLinkedin, FaDiscord } from "react-icons/fa";

const socialLinks = [
  { icon: <FaGithub />, href: "https://github.com/" },
  { icon: <FaTwitter />, href: "https://twitter.com/" },
  { icon: <FaLinkedin />, href: "https://linkedin.com/" },
  { icon: <FaDiscord />, href: "https://discord.com/" },
];

const DNAHelixFooter = () => (
  <footer className="w-full py-8 px-4 flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-lime-400 via-blue-400 to-purple-400 dark:from-lime-900 dark:via-blue-900 dark:to-purple-900">
    {/* DNA Helix animated background */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.7 }}
      transition={{ duration: 1 }}
      className="absolute left-0 top-0 h-full w-24 pointer-events-none z-0"
    >
      <svg width="100%" height="100%" viewBox="0 0 24 80" fill="none" className="w-full h-20">
        <motion.path
          d="M12 0 Q24 20 12 40 Q0 60 12 80"
          stroke="#a3e635"
          strokeWidth="3"
          fill="none"
          animate={{
            pathLength: [0.7, 1, 0.7],
          }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
        {[16, 32, 48, 64].map((cy, i) => (
          <circle key={i} cx="12" cy={cy} r="4" fill="#a3e635" opacity="0.7" />
        ))}
      </svg>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
    >
      <div className="text-2xl font-bold text-lime-400 dark:text-blue-200 drop-shadow-glow">DNA Helix Footer</div>
      <div className="flex gap-6">
        {socialLinks.map((link, i) => (
          <motion.a
            key={i}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#a3e635" }}
            className="text-lime-400 dark:text-blue-200 text-2xl hover:text-lime-500 dark:hover:text-blue-400 transition drop-shadow-glow"
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
      className="relative z-10 mt-6 text-lime-200 dark:text-blue-100 text-sm text-center"
    >
      &copy; {new Date().getFullYear()} Saktrix Labs. All rights reserved.
    </motion.div>
  </footer>
);

export default DNAHelixFooter;

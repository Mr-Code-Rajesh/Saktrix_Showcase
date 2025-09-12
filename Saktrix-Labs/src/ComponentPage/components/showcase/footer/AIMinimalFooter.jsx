import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaLinkedin, FaDiscord } from "react-icons/fa";

const socialLinks = [
  { icon: <FaGithub />, href: "https://github.com/" },
  { icon: <FaTwitter />, href: "https://twitter.com/" },
  { icon: <FaLinkedin />, href: "https://linkedin.com/" },
  { icon: <FaDiscord />, href: "https://discord.com/" },
];

const AIMinimalFooter = () => (
  <footer className="w-full py-8 px-4 flex flex-col items-center justify-center relative overflow-hidden bg-white dark:bg-gray-900">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
    >
      <div className="text-2xl font-bold text-gray-900 dark:text-white drop-shadow-glow">AI Minimal Footer</div>
      <div className="flex gap-6">
        {socialLinks.map((link, i) => (
          <motion.a
            key={i}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#6366f1" }}
            className="text-gray-900 dark:text-white text-2xl hover:text-indigo-500 dark:hover:text-indigo-300 transition drop-shadow-glow"
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
      className="relative z-10 mt-6 text-gray-700 dark:text-gray-300 text-sm text-center"
    >
      &copy; {new Date().getFullYear()} Saktrix Labs. All rights reserved.
    </motion.div>
  </footer>
);

export default AIMinimalFooter;

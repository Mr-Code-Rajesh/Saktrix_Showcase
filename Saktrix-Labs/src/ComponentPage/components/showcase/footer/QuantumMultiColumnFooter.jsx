import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaLinkedin, FaDiscord } from "react-icons/fa";

const socialLinks = [
  { icon: <FaGithub />, href: "https://github.com/" },
  { icon: <FaTwitter />, href: "https://twitter.com/" },
  { icon: <FaLinkedin />, href: "https://linkedin.com/" },
  { icon: <FaDiscord />, href: "https://discord.com/" },
];

const QuantumMultiColumnFooter = () => (
  <footer className="w-full py-8 px-4 flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-400 via-blue-400 to-pink-400 dark:from-purple-900 dark:via-blue-900 dark:to-pink-900">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start justify-between"
    >
      <div className="text-2xl font-bold text-purple-300 dark:text-pink-200 drop-shadow-glow mb-4 md:mb-0">Quantum Multi-Column Footer</div>
      <div className="flex flex-col gap-2 text-purple-200 dark:text-pink-100">
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">Features</a>
        <a href="#" className="hover:underline">Pricing</a>
      </div>
      <div className="flex gap-6 justify-end">
        {socialLinks.map((link, i) => (
          <motion.a
            key={i}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#a78bfa" }}
            className="text-purple-300 dark:text-pink-200 text-2xl hover:text-purple-400 dark:hover:text-pink-400 transition drop-shadow-glow"
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
      className="relative z-10 mt-6 text-purple-200 dark:text-pink-100 text-sm text-center"
    >
      &copy; {new Date().getFullYear()} Saktrix Labs. All rights reserved.
    </motion.div>
  </footer>
);

export default QuantumMultiColumnFooter;

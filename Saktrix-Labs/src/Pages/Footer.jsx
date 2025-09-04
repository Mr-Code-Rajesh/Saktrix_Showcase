import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube, FaTelegram, FaReddit, FaXTwitter } from "react-icons/fa6";

const links = [
  { name: "GitHub", icon: <FaGithub />, url: "https://github.com/" },
  { name: "LinkedIn", icon: <FaLinkedin />, url: "https://linkedin.com/" },
  { name: "Instagram", icon: <FaInstagram />, url: "https://instagram.com/" },
  { name: "YouTube", icon: <FaYoutube />, url: "https://youtube.com/" },
  { name: "Twitter (X)", icon: <FaXTwitter />, url: "https://x.com/" },
  { name: "Telegram", icon: <FaTelegram />, url: "https://t.me/" },
  { name: "Reddit", icon: <FaReddit />, url: "https://reddit.com/" },
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-100 to-white dark:from-black dark:to-gray-900 py-12 mt-0 overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[300px] h-[300px] bg-purple-500/20 blur-3xl top-10 left-10 animate-pulse" />
        <div className="absolute w-[250px] h-[250px] bg-pink-500/20 blur-3xl bottom-10 right-10 animate-pulse" />
      </div>

      {/* Social Links */}
      <div className="flex flex-wrap justify-center gap-6">
        {links.map((link, i) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-purple-500 
                       transition-colors duration-300 group"
          >
            <span className="text-xl group-hover:scale-125 transition-transform">{link.icon}</span>
            <span className="text-sm font-medium">{link.name}</span>
          </motion.a>
        ))}
      </div>

      {/* Divider */}
      <div className="w-3/4 mx-auto my-8 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent dark:via-gray-600" />

      {/* Copyright */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center text-sm text-gray-600 dark:text-gray-400"
      >
        © 2025 <span className="font-semibold text-purple-500">Saktrix UI</span> – Showcase Edition.  
        Main release coming soon 🚀
      </motion.p>
    </footer>
  );
}

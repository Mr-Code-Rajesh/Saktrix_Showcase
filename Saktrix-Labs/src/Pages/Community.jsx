import { motion } from "framer-motion";
import { FaDiscord, FaGithub, FaYoutube, FaInstagram, FaTelegramPlane } from "react-icons/fa";

export default function CommunitySection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white dark:from-black dark:via-gray-950 dark:to-gray-900 overflow-hidden">
      {/* Background Glow Orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl top-10 left-20 animate-pulse" />
        <div className="absolute w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl bottom-10 right-20 animate-pulse" />
      </div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r 
                   from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text"
      >
        Join the Saktrix Journey 🚀
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-6 text-lg md:text-xl text-center max-w-3xl mx-auto text-gray-700 dark:text-gray-300"
      >
        Contribute, suggest, or just explore – we’re building this together.
      </motion.p>

      {/* Social Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-12 flex flex-wrap justify-center gap-6"
      >
        <SocialButton
          href="https://discord.com/"
          icon={<FaDiscord />}
          label="Join Discord"
          gradient="from-indigo-500 to-purple-500"
        />
        <SocialButton
          href="https://t.me/"
          icon={<FaTelegramPlane />}
          label="Join Telegram"
          gradient="from-sky-400 to-blue-600"
        />
        <SocialButton
          href="https://github.com/"
          icon={<FaGithub />}
          label="Follow on GitHub"
          gradient="from-gray-700 to-black"
        />
        <SocialButton
          href="https://youtube.com/"
          icon={<FaYoutube />}
          label="YouTube"
          gradient="from-red-500 to-pink-600"
        />
        <SocialButton
          href="https://instagram.com/"
          icon={<FaInstagram />}
          label="Instagram"
          gradient="from-pink-500 to-yellow-400"
        />
      </motion.div>
    </section>
  );
}

/* Reusable Social Button */
function SocialButton({ href, icon, label, gradient }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.08, rotate: 2 }}
      className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold text-white 
                  bg-gradient-to-r ${gradient} shadow-lg hover:shadow-xl 
                  transition-all duration-500`}
    >
      <span className="text-xl">{icon}</span>
      {label}
    </motion.a>
  );
}

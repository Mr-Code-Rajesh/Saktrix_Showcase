// src/pages/About.jsx
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  FaRocket,
  FaBullseye,
  FaBolt,
  FaPalette,
  FaPuzzlePiece,
  FaCode,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaReddit,
} from "react-icons/fa";

const fadeUp = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } };

export const About = () => {
  const timeline = [
    { year: 2023, text: "Idea sparked while designing UIs for college tech events." },
    { year: 2024, text: "Built reusable ultra-level components during evenings & weekends." },
    { year: 2025, text: "Showcase Edition released with 280+ components for public use." },
    { year: "Next", text: "Finish the full Saktrix UI library (~70% complete) and launch v1." },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-[#0a0a0f] dark:via-[#111827] dark:to-[#0f172a] transition-colors duration-500">
      {/* Futuristic gradient orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="hidden dark:block absolute left-[-20%] top-[-20%] w-[600px] h-[600px] bg-gradient-to-tr from-purple-700/40 to-indigo-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute right-[-15%] bottom-[-10%] w-[500px] h-[500px] bg-gradient-to-bl from-pink-500/20 to-blue-400/20 rounded-full blur-[120px] animate-pulse" />
      </div>

      {/* Hero Section */}
      <section className="pt-24 pb-10 px-6 max-w-6xl mx-auto text-center">
        <motion.h1
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"
        >
          Saktrix Showcase – 280+ Ultra-Level React + Tailwind UI Components
        </motion.h1>

        <p className="mt-6 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
          The Showcase Edition of Saktrix is live! Explore{" "}
          <strong>280+ polished, animation-ready</strong> React components built with Tailwind CSS
          and Framer Motion. Copy, learn, and integrate production-grade UI while the full Saktrix UI
          library continues testing.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <NavLink
            to="/components"
            className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium shadow-lg hover:scale-105 hover:shadow-pink-500/30 transition-transform"
          >
            <FaRocket /> 🚀 Explore Components
          </NavLink>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-5 py-3 rounded-2xl border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 bg-white/40 dark:bg-black/30 backdrop-blur-md hover:shadow-lg transition"
          >
            <FaGithub /> View on GitHub
          </a>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="px-6 max-w-6xl mx-auto py-10">
        <motion.div
          className="grid md:grid-cols-2 gap-8 items-start"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.12 }}
        >
          {/* Mission Card */}
          <motion.div
            variants={fadeUp}
            className="rounded-2xl p-8 bg-white/70 dark:bg-gray-900/50 backdrop-blur-lg border border-gray-200 dark:border-gray-800 shadow-lg"
          >
            <h3 className="text-2xl font-semibold flex items-center gap-3">
              <FaBullseye className="text-purple-500" /> Mission
            </h3>
            <p className="mt-3 text-gray-700 dark:text-gray-300">
              Deliver ready-to-use, premium UI blocks so developers can ship beautiful interfaces
              faster.
            </p>

            <h3 className="text-2xl font-semibold flex items-center gap-3 mt-6">
              <FaRocket className="text-pink-500" /> Vision
            </h3>
            <p className="mt-3 text-gray-700 dark:text-gray-300">
              Complete the full Saktrix UI library (currently ~70% finished) and grow it into an
              open-source design system for next-gen apps.
            </p>
          </motion.div>

          {/* Highlights */}
          <motion.div
            variants={fadeUp}
            className="rounded-2xl p-8 bg-gradient-to-br from-white/60 to-gray-50 dark:from-gray-900/40 dark:to-black/30 border border-gray-200 dark:border-gray-800 shadow-xl"
          >
            <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100">Key Highlights</h4>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Modern Stack: React + Tailwind + Framer Motion",
                "Dark/Light Mode Ready",
                "280+ Unique, Animated Components",
                "Copy-Paste Integration",
                "Open Source & Free to Use",
              ].map((t) => (
                <li
                  key={t}
                  className="flex items-start gap-3 text-gray-700 dark:text-gray-300 text-sm"
                >
                  <FaBolt className="mt-1 text-yellow-400" /> {t}
                </li>
              ))}
            </ul>

            {/* Progress Bar */}
            <div className="mt-6">
              <div className="text-sm text-gray-600 dark:text-gray-400">Progress</div>
              <div className="mt-2 w-full h-3 rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "70%" }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 shadow-lg"
                />
              </div>
              <div className="mt-2 text-sm font-medium text-purple-600 dark:text-pink-400">
                Saktrix UI: 70% Completed
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Timeline */}
      <section className="px-6 max-w-6xl mx-auto py-12">
        <motion.h3
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          className="text-3xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"
        >
          Journey of Saktrix
        </motion.h3>

        <div className="space-y-6">
          {timeline.map((t, i) => (
            <motion.div
              key={t.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="p-5 rounded-xl bg-white/60 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 shadow-md"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-lg font-semibold">{t.year}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{t.text}</div>
                </div>
                <div className="text-xl text-purple-500 animate-pulse">●</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Creator Card */}
      <section className="px-6 max-w-6xl mx-auto py-12">
        <motion.h3
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          className="text-3xl font-extrabold text-center mb-8"
        >
          Team & Creator
        </motion.h3>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto"
        >
          <div className="p-6 rounded-2xl bg-white/70 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 shadow-lg flex flex-col sm:flex-row items-center gap-6">
            <div className="w-28 h-28 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl font-bold shadow-md">
              RP
            </div>
            <div>
              <div className="text-xl font-semibold">Rajesh P</div>
              <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                Founder & Sole Developer • Tamil Nadu, India
              </div>
              <p className="mt-3 text-gray-700 dark:text-gray-300">
                Frontend developer passionate about React, Tailwind, and community-driven design.
              </p>
              <div className="mt-4 flex gap-3 text-lg">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-200 hover:text-purple-600"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-200 hover:text-blue-600"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-200 hover:text-pink-500"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Tech Stack */}
      <section className="px-6 max-w-6xl mx-auto py-12">
        <motion.h3
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          className="text-3xl font-extrabold text-center mb-8"
        >
          Technology Stack
        </motion.h3>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          initial="hidden"
          whileInView="show"
        >
          {[
            "React",
            "Vite",
            "Tailwind CSS",
            "TypeScript",
            "GitHub",
            "GitLab",
            "Framer Motion",
            "Firebase",
            "GitHub Actions",
            "Netlify",
            "Vercel",
          ].map((t) => (
            <motion.span
              key={t}
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 rounded-full bg-white/70 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 shadow text-sm"
            >
              {t}
            </motion.span>
          ))}
        </motion.div>
      </section>

      {/* Community */}
      <section className="px-6 max-w-6xl mx-auto py-12 text-center">
        <motion.h3
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          className="text-3xl font-extrabold mb-6"
        >
          Community & Contributions
        </motion.h3>

        <motion.p
          initial="hidden"
          whileInView="show"
          className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
        >
          Open-source on GitHub. Feedback and contributions welcome. Follow updates on Instagram,
          LinkedIn, Reddit, and YouTube.
        </motion.p>

        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://github.com/"
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-gray-800 to-black text-white flex items-center gap-3 shadow"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href="https://linkedin.com/"
            className="px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-700 flex items-center gap-3 text-gray-800 dark:text-gray-200"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="https://instagram.com/"
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-yellow-400 text-white flex items-center gap-3"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram /> Instagram
          </a>
        </div>

        <div className="mt-8 text-gray-700 dark:text-gray-300">
          <div>
            ✉️ Email:{" "}
            <a
              className="text-purple-600 dark:text-pink-400 font-medium"
              href="mailto:rajesh.p262003@gmail.com"
            >
              rajesh.p262003@gmail.com
            </a>
          </div>
          <div className="mt-2">
            🤝 Suggest components via{" "}
            <a
              href="https://github.com/"
              className="text-purple-600 dark:text-pink-400 font-medium"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Issues
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};



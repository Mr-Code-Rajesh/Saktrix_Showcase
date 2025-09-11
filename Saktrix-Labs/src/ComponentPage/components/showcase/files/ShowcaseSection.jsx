import { useState } from "react";
import Tabs from "../ui/Tabs";
import CodeBlock from "../ui/CodeBlock";
import TagBadge from "../ui/TagBadge";
import { motion, AnimatePresence } from "framer-motion";

export default function ShowcaseSection({
  id,
  title,
  description,
  Component,
  tags = [],
  code,
}) {
  const [activeTab, setActiveTab] = useState("preview");

  return (
    <motion.section
      id={id}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="
        space-y-4 
        border 
        rounded-2xl 
        p-6 
        shadow-lg 
        bg-white/60 dark:bg-gray-900/60 
        backdrop-blur-md 
        border-gray-200 dark:border-gray-700
        w-full
      "
    >
      {/* Title + Tags */}
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="flex gap-2 mt-1 flex-wrap">
          {tags.map((tag) => (
            <TagBadge key={tag} label={tag} />
          ))}
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300">{description}</p>

      {/* Tabs: Preview / Code */}
      <div className="flex gap-4 border-b border-gray-200 dark:border-gray-700">
        <button
          onClick={() => setActiveTab("preview")}
          className={`pb-2 text-sm font-medium transition-colors ${
            activeTab === "preview"
              ? "text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-500"
              : "text-gray-500 dark:text-gray-400 hover:text-indigo-500"
          }`}
        >
          🔮 Preview
        </button>
        <button
          onClick={() => setActiveTab("code")}
          className={`pb-2 text-sm font-medium transition-colors ${
            activeTab === "code"
              ? "text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-500"
              : "text-gray-500 dark:text-gray-400 hover:text-indigo-500"
          }`}
        >
          💻 Code
        </button>
      </div>

      {/* Animated Content */}
      <AnimatePresence mode="wait">
        {activeTab === "preview" ? (
          <motion.div
            key="preview"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          >
            <Component />
          </motion.div>
        ) : (
          <motion.div
            key="code"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-h-[400px] overflow-auto rounded-lg"
          >
            <CodeBlock code={code || `<${Component.name} />`} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

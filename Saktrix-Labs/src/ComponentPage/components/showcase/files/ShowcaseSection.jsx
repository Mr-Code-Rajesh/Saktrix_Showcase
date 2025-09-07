import { motion, AnimatePresence } from "framer-motion";
import Tabs from "../ui/Tabs";
import CodeBlock from "../ui/CodeBlock";
import TagBadge from "../ui/TagBadge";

export default function ShowcaseSection({
  id,
  title,
  description,
  Component,
  tags = [],
  code,
}) {
  return (
    <motion.section
      layout
      id={id}
      className="space-y-4 rounded-2xl p-6 shadow-lg border border-white/20 
                 bg-white/70 dark:bg-white/10 backdrop-blur-xl
                 w-full max-w-5xl mx-auto transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Title + Tags */}
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="flex gap-2 mt-2 flex-wrap">
          {tags.map((tag) => (
            <TagBadge key={tag} label={tag} />
          ))}
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300">{description}</p>

      {/* Tabs */}
      <AnimatePresence mode="wait">
        <motion.div
          key={id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="min-h-[240px] max-h-[400px] overflow-hidden"
        >
          <Tabs
            preview={
              <div className="flex justify-center items-center min-h-[200px]">
                <Component />
              </div>
            }
            code={
              <div className="h-[300px] overflow-auto rounded-lg">
                <CodeBlock code={code || `<${Component.name} />`} />
              </div>
            }
          />
        </motion.div>
      </AnimatePresence>
    </motion.section>
  );
}

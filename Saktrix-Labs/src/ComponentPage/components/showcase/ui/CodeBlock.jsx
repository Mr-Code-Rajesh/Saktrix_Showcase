import { FiCopy, FiCheck } from "react-icons/fi";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../../../Context/useTheme";

export default function CodeBlock({ code }) {
  const { theme } = useTheme();
  const codeTheme = theme === "dark" ? dracula : prism;

  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full">
      <div
        className="
          relative 
          w-full 
          max-h-[400px] 
          overflow-x-auto 
          overflow-y-auto 
          rounded-lg 
          bg-[#0d1117] dark:bg-[#0d1117] 
          border border-gray-700
        "
      >
        <SyntaxHighlighter
          language="jsx"
          style={codeTheme}
          wrapLines={true}
          wrapLongLines={true}
          customStyle={{
            background: "transparent",
            fontSize: "0.875rem",
            lineHeight: "1.4rem",
          }}
        >
          {code.trim()}
        </SyntaxHighlighter>
      </div>

      {/* Copy button */}
      <button
        onClick={copy}
        className="absolute top-2 right-2 bg-gray-800 hover:bg-gray-700 p-1 rounded flex items-center justify-center w-8 h-8"
      >
        <AnimatePresence mode="wait" initial={false}>
          {copied ? (
            <motion.div
              key="check"
              initial={{ scale: 0, opacity: 0, rotate: -45 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0, opacity: 0, rotate: 45 }}
              transition={{ duration: 0.2 }}
            >
              <FiCheck size={16} color="#22c55e" />
            </motion.div>
          ) : (
            <motion.div
              key="copy"
              initial={{ scale: 0, opacity: 0, rotate: 45 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0, opacity: 0, rotate: -45 }}
              transition={{ duration: 0.2 }}
            >
              <FiCopy size={16} color="#ffffff" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}

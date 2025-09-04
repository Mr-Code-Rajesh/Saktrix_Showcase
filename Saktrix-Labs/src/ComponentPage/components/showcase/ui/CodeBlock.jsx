import { FiCopy, FiCheck } from "react-icons/fi";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CodeBlock({ code }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // reset after 2s
  };

  return (
    <div className="relative">
      <SyntaxHighlighter
        language="jsx"
        style={oneDark}
        wrapLines={true}
        wrapLongLines={true}
        className="rounded-lg text-sm"
      >
        {code.trim()}
      </SyntaxHighlighter>

      {/* Copy button with animation */}
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
              <FiCheck size={16} color="#22c55e" /> {/* green-500 */}
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


import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqData = [
  {
    title: "What is Artificial Intelligence?",
    content:
      "AI is the simulation of human intelligence processes by machines, especially computer systems.",
  },
  {
    title: "How does Machine Learning work?",
    content:
      "Machine Learning uses algorithms to parse data, learn from it, and make decisions based on patterns.",
  },    
];

const AccordionAI1 = () => {
  // ✅ FIX 1: Use a single state to track the index of the currently open item.
  // null means nothing is open.
  const [openIndex, setOpenIndex] = useState(null);

  // ✅ FIX 2: Accept index as an argument so we know which item to toggle.
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {faqData.map((item, index) => {
        // ✅ FIX 3: Determine open state for each item individually.
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="border-b border-gray-300 dark:border-gray-700"
          >
            <div
              className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
              // ✅ FIX 4: Pass index to toggleAccordion so it knows which one to open.
              onClick={() => toggleAccordion(index)}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${index}`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) =>
                e.key === "Enter" && toggleAccordion(index)
              }
            >
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                {item.title}
              </h2>

              {/* Animate the arrow rotation */}
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaChevronDown className="text-gray-600 dark:text-gray-400" />
              </motion.div>
            </div>

            {/* Accordion content */}
            <motion.div
              id={`accordion-content-${index}`}
              initial={{ height: 0 }}
              animate={{ height: isOpen ? "auto" : 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="p-4 text-gray-700 dark:text-gray-300">
                {item.content}
              </div>
            </motion.div>
          </div>
        );
      })}
    </>
  );
};

export default AccordionAI1;

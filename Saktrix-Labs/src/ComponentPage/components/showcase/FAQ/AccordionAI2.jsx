import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

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


const AccordionAI2 = ({ title, content }) => {
    const [OpenIndex, setIsOpen] = useState(null);

    const toggleAccordion = (index) => {
        setIsOpen(OpenIndex === index ? null : index);
    };

   return (
    
    <>
      {faqData.map((item,index)=>{
    const isOpen = OpenIndex === index;

     return (
        <div className="border-b border-gray-300 dark:border-gray-700">
            
            <div
                className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => toggleAccordion(index)}
                aria-expanded={isOpen}
                aria-controls="accordion-content"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && toggleAccordion(index)}
            >
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{item.title}</h2>
                {isOpen ? <FaChevronUp className="text-gray-600 dark:text-gray-400" /> : <FaChevronDown className="text-gray-600 dark:text-gray-400" />}
            </div>
            <motion.div
                id="accordion-content"
                initial={{ height: 0 }}
                animate={{ height: isOpen ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
            >
                <div className="p-4 text-gray-700 dark:text-gray-300">{item.content}</div>
            </motion.div>
        </div>
    );
   })}
    </>
   )
};

export default AccordionAI2;
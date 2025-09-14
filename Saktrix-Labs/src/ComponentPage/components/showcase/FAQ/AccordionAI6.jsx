import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const AccordionAI6 = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border border-gray-300 dark:border-gray-700 rounded-lg mb-4">
            <div 
                className="flex justify-between items-center p-4 cursor-pointer bg-gray-100 dark:bg-gray-800 rounded-lg"
                onClick={toggleAccordion}
                role="button"
                aria-expanded={isOpen}
                aria-controls="accordion-content"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && toggleAccordion()}
            >
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{title}</h2>
                <FaChevronDown className={`transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} />
            </div>
            <motion.div
                id="accordion-content"
                initial={{ height: 0 }}
                animate={{ height: isOpen ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden bg-gray-50 dark:bg-gray-900 rounded-b-lg"
            >
                <div className="p-4 text-gray-700 dark:text-gray-300">
                    {content}
                </div>
            </motion.div>
        </div>
    );
};

export default AccordionAI6;
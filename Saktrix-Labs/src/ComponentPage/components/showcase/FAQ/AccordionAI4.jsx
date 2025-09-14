import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const AccordionAI4 = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div 
                className="flex justify-between items-center p-4 cursor-pointer"
                onClick={toggleAccordion}
                role="button"
                aria-expanded={isOpen}
                aria-controls="accordion-content"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && toggleAccordion()}
            >
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{title}</h2>
                <FaChevronDown 
                    className={`transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} 
                />
            </div>
            <motion.div
                id="accordion-content"
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
            >
                <div className="p-4 text-gray-600 dark:text-gray-400">
                    {content}
                </div>
            </motion.div>
        </div>
    );
};

export default AccordionAI4;
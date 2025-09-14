import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const AccordionAI9 = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`border rounded-lg shadow-md mb-4 transition-all duration-300 ${isOpen ? 'bg-gray-100 dark:bg-gray-800' : 'bg-white dark:bg-gray-900'}`}>
            <div 
                className="flex justify-between items-center p-4 cursor-pointer" 
                onClick={toggleAccordion} 
                aria-expanded={isOpen} 
                aria-controls="accordion-content"
                role="button"
                tabIndex={0}
                onKeyPress={(e) => e.key === 'Enter' && toggleAccordion()}
            >
                <h2 className={`text-lg font-semibold ${isOpen ? 'text-blue-600 dark:text-blue-400' : 'text-gray-800 dark:text-gray-200'}`}>
                    {title}
                </h2>
                <FaChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
            </div>
            <motion.div 
                id="accordion-content" 
                initial={{ height: 0 }} 
                animate={{ height: isOpen ? 'auto' : 0 }} 
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
            >
                <div className="p-4 text-gray-700 dark:text-gray-300">
                    {content}
                </div>
            </motion.div>
        </div>
    );
};

export default AccordionAI9;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const AccordionAI5 = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border-b border-gray-300 dark:border-gray-700">
            <div 
                className="flex justify-between items-center p-4 cursor-pointer hover:bg-gradient-to-r from-blue-500 to-purple-500 text-white transition-all duration-300"
                onClick={toggleAccordion}
                role="button"
                aria-expanded={isOpen}
                aria-controls="accordion-content"
                tabIndex={0}
            >
                <h2 className="text-lg font-semibold">{title}</h2>
                <FaChevronDown className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
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

export default AccordionAI5;
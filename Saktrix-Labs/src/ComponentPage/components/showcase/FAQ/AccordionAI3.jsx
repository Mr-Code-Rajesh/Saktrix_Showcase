import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const AccordionAI3 = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`border-b border-gray-300 dark:border-gray-700`}>
            <div 
                className={`flex justify-between items-center p-4 cursor-pointer transition-all duration-300 ${isOpen ? 'bg-blue-500 text-white' : 'bg-white text-gray-800 dark:bg-gray-800 dark:text-white'}`} 
                onClick={toggleAccordion}
                role="button" 
                aria-expanded={isOpen} 
                aria-controls={`content-${title}`}
                tabIndex={0}
            >
                <h2 className="text-lg font-semibold">{title}</h2>
                <FaChevronDown className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </div>
            <motion.div 
                id={`content-${title}`} 
                initial={{ height: 0 }} 
                animate={{ height: isOpen ? 'auto' : 0 }} 
                transition={{ duration: 0.3 }}
                className={`overflow-hidden ${isOpen ? 'p-4' : 'p-0'}`}
            >
                <p className={`text-gray-600 dark:text-gray-300`}>{content}</p>
            </motion.div>
        </div>
    );
};

export default AccordionAI3;
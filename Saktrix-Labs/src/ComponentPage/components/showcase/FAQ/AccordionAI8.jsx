import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const AccordionAI8 = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-full max-w-md mx-auto my-4">
            <div 
                className={`flex justify-between items-center p-4 rounded-lg cursor-pointer transition-all duration-300 ${isOpen ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' : 'bg-white text-gray-800 shadow-lg'}`} 
                onClick={toggleAccordion}
                role="button"
                aria-expanded={isOpen}
                aria-controls={`content-${title}`}
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && toggleAccordion()}
            >
                <h2 className="text-lg font-semibold">{title}</h2>
                <FaChevronDown className={`transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} />
            </div>
            <motion.div 
                id={`content-${title}`} 
                className="overflow-hidden" 
                initial={{ height: 0 }} 
                animate={{ height: isOpen ? 'auto' : 0 }} 
                transition={{ duration: 0.3 }}
            >
                <div className="p-4 bg-gray-100 text-gray-700 rounded-b-lg">
                    {content}
                </div>
            </motion.div>
        </div>
    );
};

export default AccordionAI8;
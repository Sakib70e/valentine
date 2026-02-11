import React from 'react';
import { motion } from 'framer-motion';

const variants = {
    initial: { opacity: 0, x: 50, scale: 0.95 },
    animate: { opacity: 1, x: 0, scale: 1 },
    exit: { opacity: 0, x: -50, scale: 0.95 }
};

const TransitionWrapper = ({ children, className = "", style = {}, ...props }) => {
    return (
        <motion.div
            className={className}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{ width: '100%', height: '100%', ...style }}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default TransitionWrapper;

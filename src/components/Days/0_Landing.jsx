import React from 'react';
import TransitionWrapper from '../Layout/TransitionWrapper';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Landing = ({ onStart }) => {
    return (
        <TransitionWrapper className="flex-center" style={{ flexDirection: 'column', background: 'linear-gradient(135deg, #fff0f5 0%, #ffe4e1 100%)' }}>
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                style={{ marginBottom: '2rem' }}
            >
                <Heart size={64} color="var(--color-rose-red)" fill="var(--color-rose-red)" />
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                style={{
                    fontSize: '3rem',
                    marginBottom: '1rem',
                    color: 'var(--color-passionate-red)',
                    textAlign: 'center',
                    padding: '0 20px'
                }}
            >
                Our Valentine Journey
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                style={{
                    marginBottom: '3rem',
                    fontSize: '1.2rem',
                    color: 'var(--color-text-dark)',
                    textAlign: 'center'
                }}
            >
                A week of love, memories, and surprises.
            </motion.p>

            <motion.button
                onClick={onStart}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(214, 51, 108, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                style={{
                    padding: '16px 40px',
                    fontSize: '1.2rem',
                    borderRadius: '50px',
                    border: 'none',
                    background: 'var(--color-rose-red)',
                    color: 'white',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(214, 51, 108, 0.3)',
                    fontWeight: '600',
                    letterSpacing: '0.5px'
                }}
            >
                Start the Journey
            </motion.button>
        </TransitionWrapper>
    );
};

export default Landing;

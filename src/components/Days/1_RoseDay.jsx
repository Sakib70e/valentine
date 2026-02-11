import React, { useState } from 'react';
import TransitionWrapper from '../Layout/TransitionWrapper';
import { motion } from 'framer-motion';

const RoseDay = ({ onNext }) => {
    const [bloomed, setBloomed] = useState(false);

    const bloomVariant = {
        closed: { scale: 0.8, rotate: 0 },
        open: { scale: 1.2, rotate: 360, transition: { duration: 1, type: "spring" } }
    };

    return (
        <TransitionWrapper className="flex-center" style={{ flexDirection: 'column', background: 'linear-gradient(135deg, #ffe4e1 0%, #fff0f5 100%)' }}>
            <h2 style={{ color: 'var(--color-rose-red)', marginBottom: '2rem' }}>Happy Rose Day!</h2>

            <p style={{ marginBottom: '2rem', textAlign: 'center', maxWidth: '300px' }}>
                For my beautiful Ahana, a rose that blooms just like my love for you.
            </p>

            <motion.div
                variants={bloomVariant}
                animate={bloomed ? "open" : "closed"}
                onClick={() => setBloomed(true)}
                style={{ cursor: 'pointer', marginBottom: '2rem' }}
            >
                {/* Simple SVG Rose Placeholder or Icon */}
                <svg
                    width="100"
                    height="100"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#d6336c"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    {/* Stem */}
                    <motion.path
                        d="M12 22V12"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.6 }}
                    />

                    {/* Leaves */}
                    <motion.path
                        d="M12 18C10 16 8 16 7 18"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    />
                    <motion.path
                        d="M12 16C14 14 16 14 17 16"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    />

                    {/* Rose Bloom */}
                    <motion.path
                        d="M12 12C9 9 9 6.5 12 5C15 6.5 15 9 12 12Z"
                        fill={bloomed ? "#d6336c" : "none"}
                        initial={{ scale: 0.8, opacity: 0.6 }}
                        animate={{ scale: bloomed ? 1.2 : 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    />
                </svg>

            </motion.div>

            {bloomed && (
                <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    onClick={onNext}
                    style={{
                        padding: '12px 30px',
                        fontSize: '1rem',
                        borderRadius: '50px',
                        border: 'none',
                        background: 'var(--color-passionate-red)',
                        color: 'white',
                        cursor: 'pointer'
                    }}
                >
                    Continue
                </motion.button>
            )}
        </TransitionWrapper>
    );
};

export default RoseDay;

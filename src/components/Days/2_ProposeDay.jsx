import React, { useState } from 'react';
import TransitionWrapper from '../Layout/TransitionWrapper';
import { motion } from 'framer-motion';

const ProposeDay = ({ onNext }) => {
    const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
    const [accepted, setAccepted] = useState(false);

    // Function to move "No" button randomly
    const moveNoButton = () => {
        // Calculate safe bounds based on viewport
        const maxOffset = Math.min(window.innerWidth / 2 - 60, 150);
        const x = Math.random() * (maxOffset * 2) - maxOffset;
        const y = Math.random() * (maxOffset * 2) - maxOffset;
        setNoButtonPos({ x, y });
    };

    return (
        <TransitionWrapper className="flex-center" style={{ flexDirection: 'column', background: 'linear-gradient(135deg, #fff0f5 0%, #ffc0cb 100%)' }}>
            <h2 style={{ color: 'var(--color-passionate-red)', marginBottom: '1.5rem', textAlign: 'center' }}>
                My Dearest Ahana...
            </h2>

            {!accepted ? (
                <>
                    <p style={{ marginBottom: '3rem', fontSize: '1.2rem', textAlign: 'center', padding: '0 20px' }}>
                        You make my world brighter. Will you be mine forever?
                    </p>

                    <div style={{ display: 'flex', gap: '2rem', position: 'relative' }}>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setAccepted(true)}
                            className="animate-heartbeat"
                            style={{
                                padding: '12px 30px',
                                fontSize: '1.1rem',
                                borderRadius: '50px',
                                border: 'none',
                                background: 'var(--color-rose-red)',
                                color: 'white',
                                cursor: 'pointer'
                            }}
                        >
                            Yes!
                        </motion.button>

                        <motion.button
                            animate={noButtonPos}
                            onHoverStart={moveNoButton}
                            onClick={moveNoButton}
                            style={{
                                padding: '12px 30px',
                                fontSize: '1.1rem',
                                borderRadius: '50px',
                                border: '1px solid var(--color-text-dark)',
                                background: 'transparent',
                                color: 'var(--color-text-dark)',
                                cursor: 'pointer'
                            }}
                        >
                            No
                        </motion.button>
                    </div>
                </>
            ) : (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex-center"
                    style={{ flexDirection: 'column' }}
                >
                    <h3 style={{ color: 'var(--color-passionate-red)', marginBottom: '1rem' }}>I knew you'd say Yes! ❤️</h3>
                    <motion.button
                        onClick={onNext}
                        style={{
                            padding: '12px 30px',
                            fontSize: '1rem',
                            borderRadius: '50px',
                            border: 'none',
                            background: 'var(--color-rose-red)',
                            color: 'white',
                            cursor: 'pointer',
                            marginTop: '2rem'
                        }}
                    >
                        Next Day
                    </motion.button>
                </motion.div>
            )}
        </TransitionWrapper>
    );
};

export default ProposeDay;

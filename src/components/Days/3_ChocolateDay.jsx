import React, { useState } from 'react';
import TransitionWrapper from '../Layout/TransitionWrapper';
import { motion } from 'framer-motion';

const ChocolateDay = ({ onNext }) => {
    const [unwrapped, setUnwrapped] = useState(false);

    return (
        <TransitionWrapper className="flex-center" style={{ flexDirection: 'column', background: 'linear-gradient(135deg, #d2691e 0%, #8b4513 100%)', color: '#fff' }}>
            <h2 style={{ marginBottom: '2rem', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>Happy Chocolate Day!</h2>

            {!unwrapped ? (
                <motion.div
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setUnwrapped(true)}
                    style={{ cursor: 'pointer', textAlign: 'center' }}
                >
                    <p style={{ marginBottom: '1rem' }}>Tap to unwrap your treat</p>
                    <div style={{
                        width: '200px',
                        height: '150px',
                        background: 'linear-gradient(45deg, #c0c0c0 25%, #e0e0e0 25%, #e0e0e0 50%, #c0c0c0 50%, #c0c0c0 75%, #e0e0e0 75%, #e0e0e0 100%)',
                        backgroundSize: '20px 20px',
                        borderRadius: '5px',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <span style={{ color: '#333', fontWeight: 'bold' }}>PREMIUM CHOCOLATE</span>
                    </div>
                </motion.div>
            ) : (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex-center"
                    style={{ flexDirection: 'column' }}
                >
                    <div style={{
                        width: '180px',
                        height: '130px',
                        background: '#3e2723',
                        borderRadius: '5px',
                        boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
                        marginBottom: '2rem',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '5px',
                        padding: '10px'
                    }}>
                        {[...Array(6)].map((_, i) => (
                            <div key={i} style={{ background: '#5d4037', borderRadius: '2px' }} />
                        ))}
                    </div>

                    <p style={{ marginBottom: '2rem' }}>Sweeter than chocolate, that's you!</p>

                    <button
                        onClick={onNext}
                        style={{
                            padding: '12px 30px',
                            fontSize: '1rem',
                            borderRadius: '50px',
                            border: 'none',
                            background: '#fff',
                            color: '#8b4513',
                            cursor: 'pointer',
                            fontWeight: 'bold'
                        }}
                    >
                        Continue
                    </button>
                </motion.div>
            )}
        </TransitionWrapper>
    );
};

export default ChocolateDay;

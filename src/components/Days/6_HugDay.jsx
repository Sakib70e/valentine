import React, { useState, useEffect, useRef } from 'react';
import TransitionWrapper from '../Layout/TransitionWrapper';
import { motion, useAnimation } from 'framer-motion';

const HugDay = ({ onNext }) => {
    const [hugLevel, setHugLevel] = useState(0);
    const [hugged, setHugged] = useState(false);
    const intervalRef = useRef(null);

    const startHugging = () => {
        if (hugged) return;
        intervalRef.current = setInterval(() => {
            setHugLevel((prev) => {
                if (prev >= 100) {
                    clearInterval(intervalRef.current);
                    setHugged(true);
                    return 100;
                }
                return prev + 2; // Speed of filling
            });
        }, 50);
    };

    const stopHugging = () => {
        if (hugged) return;
        clearInterval(intervalRef.current);
        if (hugLevel < 100) {
            setHugLevel(prev => Math.max(0, prev - 5)); // Decay if not full
        }
    };

    // Decay logic if released early
    useEffect(() => {
        if (!intervalRef.current && hugLevel > 0 && hugLevel < 100 && !hugged) {
            const decayId = setInterval(() => {
                setHugLevel(prev => {
                    if (prev <= 0) {
                        clearInterval(decayId);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 50);
            return () => clearInterval(decayId);
        }
    }, [hugLevel, hugged]);


    return (
        <TransitionWrapper className="flex-center" style={{ flexDirection: 'column', background: 'linear-gradient(135deg, #fff5ee 0%, #ffdab9 100%)' }}>
            <h2 style={{ color: '#cd853f', marginBottom: '2rem' }}>A Big Hug for Ahana!</h2>

            {!hugged ? (
                <>
                    <p style={{ marginBottom: '2rem', color: '#8b4513' }}>Hold the button to send me a warm hug!</p>

                    <div style={{ position: 'relative', width: '150px', height: '150px' }}>
                        {/* Progress Ring Background */}
                        <svg width="150" height="150" viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)' }}>
                            <circle cx="50" cy="50" r="45" stroke="#ffe4e1" strokeWidth="10" fill="none" />
                            <motion.circle
                                cx="50" cy="50" r="45"
                                stroke="#cd853f"
                                strokeWidth="10"
                                fill="none"
                                strokeDasharray="283"
                                strokeDashoffset={283 - (283 * hugLevel) / 100}
                            />
                        </svg>

                        <motion.button
                            onMouseDown={startHugging}
                            onMouseUp={stopHugging}
                            onMouseLeave={stopHugging}
                            onTouchStart={startHugging}
                            onTouchEnd={stopHugging}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                position: 'absolute',
                                top: '10px',
                                left: '10px',
                                width: '130px',
                                height: '130px',
                                borderRadius: '50%',
                                border: 'none',
                                background: '#f4a460',
                                color: 'white',
                                fontSize: '3rem',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            🤗
                        </motion.button>
                    </div>
                    <p style={{ marginTop: '1rem', color: '#8b4513', opacity: 0.7 }}>{Math.round(hugLevel)}% Hugged</p>
                </>
            ) : (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex-center"
                    style={{ flexDirection: 'column' }}
                >
                    <h3 style={{ color: '#cd853f', marginBottom: '1rem' }}>Sending a big hug!</h3>
                    <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        style={{ fontSize: '5rem', marginBottom: '2rem' }}
                    >
                        💖
                    </motion.div>

                    <button
                        onClick={onNext}
                        style={{
                            padding: '12px 30px',
                            fontSize: '1rem',
                            borderRadius: '50px',
                            border: 'none',
                            background: '#cd853f',
                            color: 'white',
                            cursor: 'pointer'
                        }}
                    >
                        Continue
                    </button>
                </motion.div>
            )}
        </TransitionWrapper>
    );
};

export default HugDay;

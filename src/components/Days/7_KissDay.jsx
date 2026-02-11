import React, { useState } from 'react';
import TransitionWrapper from '../Layout/TransitionWrapper';
import { motion, AnimatePresence } from 'framer-motion';

const KissDay = ({ onNext }) => {
    const [kisses, setKisses] = useState([]);
    const [count, setCount] = useState(0);

    const addKiss = (e) => {
        const x = e.clientX;
        const y = e.clientY;
        const id = Date.now();
        setKisses(prev => [...prev, { id, x, y }]);
        setCount(prev => prev + 1);

        // Auto cleanup logic is handled by AnimatePresence onExit normally, 
        // but here we just render them and let them float up.
        setTimeout(() => {
            setKisses(prev => prev.filter(k => k.id !== id));
        }, 2000);
    };

    return (
        <TransitionWrapper
            className="flex-center"
            style={{ flexDirection: 'column', background: 'linear-gradient(135deg, #ff69b4 0%, #ff1493 100%)', overflow: 'hidden', position: 'relative' }}
        >
            <div
                style={{ position: 'absolute', inset: 0, zIndex: 0 }}
                onClick={addKiss}
            />

            <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', pointerEvents: 'none' }}>
                <h2 style={{ color: '#ff1493', marginBottom: '2rem', textShadow: '0 2px 5px rgba(0,0,0,0.2)' }}>Happy Kiss Day!</h2>
                <p style={{ color: '#ff1493', marginBottom: '2rem', opacity: 0.9 }}>Tap anywhere to send a kiss!</p>

                <div style={{ fontSize: '1.5rem', color: '#ff1493', fontWeight: 'bold' }}>
                    Kisses Sent: {count}
                </div>
            </div>

            <AnimatePresence>
                {kisses.map(kiss => (
                    <motion.div
                        key={kiss.id}
                        initial={{ opacity: 1, y: 0, scale: 0.5 }}
                        animate={{ opacity: 0, y: -200, scale: 1.5 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                        style={{
                            position: 'absolute',
                            left: kiss.x,
                            top: kiss.y,
                            fontSize: '2rem',
                            pointerEvents: 'none',
                            transform: 'translate(-50%, -50%)'
                        }}
                    >
                        💋
                    </motion.div>
                ))}
            </AnimatePresence>

            {count >= 10 && (
                <motion.button
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    onClick={onNext}
                    style={{
                        position: 'absolute',
                        bottom: '50px',
                        zIndex: 10,
                        padding: '12px 30px',
                        fontSize: '1rem',
                        borderRadius: '50px',
                        border: 'none',
                        background: 'white',
                        color: '#ff1493',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
                    }}
                >
                    Proceed to The Big Day
                </motion.button>
            )}
        </TransitionWrapper>
    );
};

export default KissDay;

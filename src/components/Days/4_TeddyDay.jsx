import React, { useState } from 'react';
import TransitionWrapper from '../Layout/TransitionWrapper';
import { motion } from 'framer-motion';

const TeddyDay = ({ onNext }) => {
    const [found, setFound] = useState(false);

    return (
        <TransitionWrapper className="flex-center" style={{ flexDirection: 'column', background: 'linear-gradient(135deg, #f0f8ff 0%, #e6e6fa 100%)' }}>
            <h2 style={{ color: '#483d8b', marginBottom: '2rem' }}>A Cuddly Friend for You</h2>

            {!found ? (
                <>
                    <p style={{ marginBottom: '2rem', color: '#483d8b' }}>Where is Ahana's teddy hiding?</p>
                    <div style={{ position: 'relative', width: '300px', height: '300px' }}>
                        {/* Hiding Spots */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            style={{ position: 'absolute', bottom: '20px', left: '20px', fontSize: '3rem', cursor: 'pointer' }}
                            onClick={() => alert("Not here!")}
                        >
                            🌳
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            style={{ position: 'absolute', top: '50px', right: '40px', fontSize: '3rem', cursor: 'pointer' }}
                            onClick={() => alert("Not here!")}
                        >
                            🎁
                        </motion.div>

                        {/* The Teddy */}
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            style={{ position: 'absolute', bottom: '60px', right: '80px', fontSize: '3rem', cursor: 'pointer', opacity: 0.9 }}
                            onClick={() => setFound(true)}
                        >
                            🧸
                        </motion.div>

                        <motion.div
                            style={{ position: 'absolute', bottom: '60px', right: '80px', fontSize: '3rem', pointerEvents: 'none', zIndex: 1 }}
                        >
                            📦 {/* Box covering teddy */}
                        </motion.div>
                    </div>
                    <p style={{ marginTop: '20px', fontSize: '0.9rem', color: '#666' }}>Hint: Tap the box!</p>
                </>
            ) : (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex-center"
                    style={{ flexDirection: 'column' }}
                >
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 2, rotate: 0 }}
                        transition={{ type: "spring" }}
                        className="animate-heartbeat"
                        style={{ fontSize: '4rem', marginBottom: '2rem' }}
                    >
                        🧸
                    </motion.div>
                    <p style={{ marginBottom: '2rem', color: '#483d8b' }}>A warm hug in a fluffy form!</p>
                    <button
                        onClick={onNext}
                        style={{
                            padding: '12px 30px',
                            fontSize: '1rem',
                            borderRadius: '50px',
                            border: 'none',
                            background: '#9370db',
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

export default TeddyDay;

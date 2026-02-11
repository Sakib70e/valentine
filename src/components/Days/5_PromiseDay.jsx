import React, { useState } from 'react';
import TransitionWrapper from '../Layout/TransitionWrapper';
import { motion } from 'framer-motion';

const PromiseDay = ({ onNext }) => {
    const [signed, setSigned] = useState(false);
    const [promiseText, setPromiseText] = useState("");

    const handleSign = (e) => {
        e.preventDefault();
        if (promiseText.trim().length > 0) {
            setSigned(true);
        }
    };

    return (
        <TransitionWrapper className="flex-center" style={{ flexDirection: 'column', background: 'linear-gradient(135deg, #e0ffff 0%, #afeeee 100%)' }}>
            <h2 style={{ color: '#008b8b', marginBottom: '2rem' }}>Happy Promise Day!</h2>

            {!signed ? (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                        background: 'white',
                        padding: '2rem',
                        borderRadius: '10px',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                        width: '90%',
                        maxWidth: '400px',
                        textAlign: 'center'
                    }}
                >
                    <p style={{ marginBottom: '1.5rem', fontFamily: 'serif', fontStyle: 'italic', fontSize: '1.2rem', color: '#555' }}>
                        "Ahana, I promise to always represent love, patience, and home to you."
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '0.9rem', color: '#888' }}>Make your first valentine promise:</p>
                    <form onSubmit={handleSign}>
                        <input
                            type="text"
                            placeholder="I promise to..."
                            value={promiseText}
                            onChange={(e) => setPromiseText(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '10px',
                                borderRadius: '5px',
                                border: '1px solid #ccc',
                                marginBottom: '1rem',
                                fontFamily: 'inherit'
                            }}
                        />
                        <button
                            type="submit"
                            disabled={promiseText.trim().length === 0}
                            style={{
                                padding: '10px 20px',
                                borderRadius: '50px',
                                border: 'none',
                                background: '#20b2aa',
                                color: 'white',
                                cursor: 'pointer',
                                opacity: promiseText.trim().length > 0 ? 1 : 0.6
                            }}
                        >
                            Seal with a Promise
                        </button>
                    </form>
                </motion.div>
            ) : (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex-center"
                    style={{ flexDirection: 'column' }}
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        style={{ fontSize: '4rem', marginBottom: '1rem' }}
                    >
                        🤝
                    </motion.div>
                    <h3 style={{ color: '#008b8b', marginBottom: '1rem' }}>Promise Kept!</h3>
                    <p style={{ marginBottom: '2rem', fontStyle: 'italic', color: '#555' }}>"{promiseText}"</p>

                    <button
                        onClick={onNext}
                        style={{
                            padding: '12px 30px',
                            fontSize: '1rem',
                            borderRadius: '50px',
                            border: 'none',
                            background: '#20b2aa',
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

export default PromiseDay;

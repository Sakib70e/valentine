import React, { useState } from 'react';
import TransitionWrapper from '../Layout/TransitionWrapper';
import { motion } from 'framer-motion';

const ValentineDay = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <TransitionWrapper className="flex-center" style={{ flexDirection: 'column', background: 'radial-gradient(circle, #ff0000 0%, #800000 100%)' }}>

            {!isOpen ? (
                <motion.div
                    onClick={() => setIsOpen(true)}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.05 }}
                    style={{ cursor: 'pointer', textAlign: 'center' }}
                >
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        style={{ fontSize: '5rem', marginBottom: '1rem', filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.5))' }}
                    >
                        💌
                    </motion.div>
                    <p style={{ color: 'white', fontSize: '1.2rem', letterSpacing: '1px' }}>You have a special message...</p>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginTop: '0.5rem' }}>(Tap to open)</p>
                </motion.div>
            ) : (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ duration: 0.8, type: 'spring' }}
                    style={{
                        background: 'white',
                        padding: '3rem',
                        borderRadius: '20px',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                        width: '90%',
                        maxWidth: '500px',
                        textAlign: 'center',
                        position: 'relative'
                    }}
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        style={{ color: '#d6336c', marginBottom: '1.5rem', fontFamily: 'Outfit, sans-serif' }}
                    >
                        Happy First Valentine's Day, Ahana! ❤️
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        style={{ fontSize: '1.2rem', color: '#555', lineHeight: '1.6', marginBottom: '2rem' }}
                    >
                        From the moment I met you, my life became a beautiful journey. This is just our first Valentine of many more to come.
                        <br /><br />
                        I love you, Ahana. Will you be my Valentine forever?
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}
                    >
                        <button
                            onClick={() => alert("Yay! Happy Valentine's Day! ❤️")}
                            style={{
                                padding: '12px 30px',
                                borderRadius: '50px',
                                border: 'none',
                                background: '#d6336c',
                                color: 'white',
                                fontSize: '1.1rem',
                                cursor: 'pointer',
                                fontWeight: 'bold'
                            }}
                        >
                            Yes, Forever! ❤️
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </TransitionWrapper>
    );
};

export default ValentineDay;

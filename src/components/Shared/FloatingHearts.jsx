import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const FloatingHearts = () => {
    const [hearts, setHearts] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const id = Math.random().toString(36).substr(2, 9);
            const size = Math.random() * 20 + 10; // 10px to 30px
            const left = Math.random() * 100; // 0% to 100%
            const duration = Math.random() * 10 + 10; // 10s to 20s

            setHearts(prev => [...prev.slice(-20), { id, size, left, duration }]); // Keep last 20 hearts
        }, 1500); // Add a heart every 1.5s

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
            {hearts.map(heart => (
                <motion.div
                    key={heart.id}
                    initial={{ y: '110vh', opacity: 0, rotate: 0 }}
                    animate={{ y: '-10vh', opacity: [0, 1, 1, 0], rotate: 360 }}
                    transition={{ duration: heart.duration, ease: 'linear' }}
                    style={{
                        position: 'absolute',
                        left: `${heart.left}%`,
                        fontSize: `${heart.size}px`,
                        color: 'rgba(255, 182, 193, 0.4)',
                    }}
                >
                    ❤
                </motion.div>
            ))}
        </div>
    );
};

export default FloatingHearts;

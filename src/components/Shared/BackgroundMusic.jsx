import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

const BackgroundMusic = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(e => console.log("Audio play failed interaction required", e));
        }
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        // Auto-play attempt on mount (often blocked by browsers, but worth a try with muted logic if needed)
        // For now, we start muted/paused and wait for user interaction to be safe.
        audioRef.current.volume = 0.3;
    }, []);

    return (
        <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 1000 }}>
            {/* Placeholder for actual audio file - needing a source */}
            <audio ref={audioRef} loop>
                {/* Using a reliable placeholder. For a true romantic feel, place a file named 'music.mp3' in the public folder and change src to "/music.mp3" */}
                <source src="/music.mp3" type="audio/mp3" />
            </audio>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={togglePlay}
                style={{
                    background: 'rgba(255, 255, 255, 0.5)',
                    border: 'none',
                    borderRadius: '50%',
                    padding: '10px',
                    cursor: 'pointer',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    backdropFilter: 'blur(5px)'
                }}
            >
                {isPlaying ? <Volume2 color="#d6336c" size={24} /> : <VolumeX color="#d6336c" size={24} />}
            </motion.button>
        </div>
    );
};

export default BackgroundMusic;

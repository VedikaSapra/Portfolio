import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LINES = [
  '> Initializing portfolio...',
  '> Loading components...',
  '> Fetching skills...',
  '> Compiling projects...',
  '> Ready.',
];

const PROGRESS_STEPS = [10, 35, 60, 85, 100];

const SplashScreen = ({ onDone }) => {
  const [lineIndex, setLineIndex] = useState(0);
  const [typed, setTyped] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [visible, setVisible] = useState(true);
  const timerRef = useRef(null);

  // Typing effect
  useEffect(() => {
    if (lineIndex >= LINES.length) {
      // All lines done — wait then fade out
      setTimeout(() => {
        setDone(true);
        setTimeout(() => {
          setVisible(false);
          if (onDone) onDone();
        }, 700);
      }, 600);
      return;
    }

    const currentLine = LINES[lineIndex];
    if (charIndex < currentLine.length) {
      timerRef.current = setTimeout(() => {
        setTyped((prev) => prev + currentLine[charIndex]);
        setCharIndex((c) => c + 1);
      }, charIndex === 0 ? 0 : 28);
    } else {
      // Line done — move to next after pause
      timerRef.current = setTimeout(() => {
        setTyped('');
        setCharIndex(0);
        setProgress(PROGRESS_STEPS[lineIndex] ?? 100);
        setLineIndex((l) => l + 1);
      }, 350);
    }
    return () => clearTimeout(timerRef.current);
  }, [lineIndex, charIndex]);

  const barFilled = Math.round(progress / 10);
  const barEmpty = 10 - barFilled;
  const barStr = '█'.repeat(barFilled) + '░'.repeat(barEmpty);

  const completedLines = LINES.slice(0, lineIndex);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: '#0a0a0a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: "'Courier New', 'Lucida Console', monospace",
          }}
        >
          {/* Subtle scanline overlay */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 4px)',
          }} />

          <div style={{ width: '100%', maxWidth: '640px', padding: '2rem 3rem' }}>
            {/* Terminal header bar */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              marginBottom: '1.5rem',
            }}>
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57' }} />
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#febc2e' }} />
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840' }} />
              <span style={{ marginLeft: '1rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em' }}>
                vedika@portfolio ~ zsh
              </span>
            </div>

            {/* Completed lines */}
            {completedLines.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 0.3 }}
                style={{
                  color: line === '> Ready.' ? '#4ade80' : 'rgba(255,255,255,0.5)',
                  fontSize: '0.95rem',
                  marginBottom: '0.5rem',
                  letterSpacing: '0.02em',
                }}
              >
                {line}
              </motion.p>
            ))}

            {/* Currently typing line */}
            {lineIndex < LINES.length && (
              <p style={{ color: '#fff', fontSize: '0.95rem', marginBottom: '0.5rem', letterSpacing: '0.02em' }}>
                {typed}
                <span style={{ animation: 'blink 1s step-end infinite', fontSize: '1.1rem', marginLeft: '1px' }}>█</span>
              </p>
            )}

            {/* Progress bar */}
            <div style={{ marginTop: '2rem' }}>
              <p style={{
                fontFamily: "'Courier New', monospace",
                color: progress === 100 ? '#4ade80' : '#aaa',
                fontSize: '0.85rem',
                letterSpacing: '0.05em',
                whiteSpace: 'pre',
              }}>
                {`[${barStr}] ${progress}%`}
              </p>
            </div>
          </div>

          <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;

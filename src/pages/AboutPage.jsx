import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import profilePic from '../assets/profile.png';

const AboutPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a brief loading transition
    const timer = setTimeout(() => setIsLoading(false), 800);
    window.scrollTo(0, 0);
    return () => clearTimeout(timer);
  }, []);

  const pageVariants = {
    initial: { opacity: 0, y: 100 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] }
    },
    exit: {
      opacity: 0,
      y: -100,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate={isLoading ? "initial" : "animate"}
      exit="exit"
      style={{
        background: '#fff',
        minHeight: '100vh',
        padding: '120px 4rem 100px',
        color: '#000',
        fontFamily: 'inherit'
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <Link to="/" style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              color: 'var(--text-secondary)', textDecoration: 'none',
              fontWeight: 700, fontSize: '0.9rem', marginBottom: '2rem'
            }}>
              <ArrowLeft size={18} /> Back to Home
            </Link>
            <h1 style={{ fontSize: '5rem', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1, textTransform: 'uppercase' }}>
              Solving Problems,<br />
              <span style={{ color: 'var(--text-secondary)' }}>Building Future.</span>
            </h1>
          </div>
        </div>

        {/* Content Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '5rem', alignItems: 'start' }}>
          <div style={{ fontSize: '1.25rem', lineHeight: 1.8, color: '#333' }}>
            <p style={{ marginBottom: '2rem' }}>
              I am <strong>Vedika</strong>, a Full Stack Developer with a passion for creating digital experiences that are both functional and visually stunning.
              My journey in tech began with a curiosity about how the web works, which quickly evolved into a dedicated pursuit of engineering excellence.
            </p>
            <p style={{ marginBottom: '2rem' }}>
              Currently completing my B.Tech at <strong>Lovely Professional University</strong>, I have maintained a strong academic record (8.26 CGPA) while
              actively contributing to the developer community and building real-world applications.
            </p>
            <p style={{ marginBottom: '2rem' }}>
              Beyond coding, I'm an innovator at heart—holding a recently filed patent and continuously exploring emerging technologies.
              I believe that great software isn't just about lines of code; it's about understanding human needs and creating solutions that make life better.
            </p>

            <div style={{ marginTop: '3rem', borderLeft: '4px solid #000', paddingLeft: '2rem' }}>
              <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                "The best way to predict the future is to invent it."
              </p>
            </div>
          </div>

          <div style={{ position: 'sticky', top: '120px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Profile Picture */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                width: '100%',
                aspectRatio: '1/1',
                borderRadius: '2.5rem',
                overflow: 'hidden',
                border: '1px solid rgba(0,0,0,0.1)',
                boxShadow: '0 30px 60px rgba(0,0,0,0.08)'
              }}
            >
              <img 
                src={profilePic} 
                alt="Vedika" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </motion.div>

            <div style={{
              padding: '2.5rem', background: '#f8f9fa', borderRadius: '2rem',
              border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 20px 40px rgba(0,0,0,0.02)'
            }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1.5rem' }}>Core Focus</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {['Architecting Scalable Backends', 'Fluid UI/UX Interactions', 'Database Optimization', 'Real-time Communication Systems'].map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1rem', fontWeight: 700 }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#000' }} />
                    {item}
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: '2.5rem', paddingTop: '2.5rem', borderTop: '1px solid rgba(0,0,0,0.1)', display: 'flex', gap: '1.5rem' }}>
                <a href="https://linkedin.com/in/vedika-sapra-12" target="_blank" rel="noreferrer" style={{ color: '#000' }}><Linkedin size={24} /></a>
                <a href="https://github.com/VedikaSapra" target="_blank" rel="noreferrer" style={{ color: '#000' }}><Github size={24} /></a>
                <a href="mailto:sapravedika1234@gmail.com" style={{ color: '#000' }}><Mail size={24} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Entrance Loading Overlay */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: '-100%' }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            style={{
              position: 'fixed', inset: 0, background: '#000', zIndex: 2000,
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ color: '#fff', fontSize: '2rem', fontWeight: 900, letterSpacing: '0.2em' }}
            >
              VEDIKA
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AboutPage;

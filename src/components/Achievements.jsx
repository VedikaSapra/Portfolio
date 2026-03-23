import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import certificate images
import certC from '../assets/certifications/c programming.png';
import certTheory from '../assets/certifications/computational theory.png';
import certGraph from '../assets/certifications/graph camp.png';
import certGenAI from '../assets/certifications/master generative ai.png';
import certNptel from '../assets/certifications/nptelcertificate.png';
import certOOP from '../assets/certifications/object oriented programming.png';
import certWeb from '../assets/certifications/responsive web design.png';
import certSoftEng from '../assets/certifications/software eng.png';
import certSummer from '../assets/certifications/summertrainingcertificate.png';
import certMongo from '../assets/certifications/mongoDB badges.png';

const certificates = [
  { id: 0, title: 'Graph Camp', issuer: 'Algo University', year: '8 March 2026', image: certGraph, color: '#222222', link: '#' },
  { id: 1, title: 'Computational Theory:Language Priinciple & Finite Automata Theory', issuer: 'Infosys Springboard', year: '23 August 2025', image: certTheory, color: '#111111', link: '#' },
  { id: 2, title: 'Master Generative AI & Generative Ai tools(ChatGPT & more)', issuer: 'Infosys Springboard', year: '30 August 2025', image: certGenAI, color: '#333333', link: '#' },
  { id: 3, title: 'Frontend with React.js', issuer: 'Gokboru Tech Pvt Ltd', year: '18 July 2025', image: certSummer, color: '#888888', link: '#' },
  { id: 4, title: 'MongoDB Badges', issuer: 'MongoDB', year: '30 June 2025', image: certMongo, color: '#444444', link: '#' },
  { id: 5, title: 'Cloud Computing', issuer: 'NPTEL', year: 'May 2025', image: certNptel, color: '#444444', link: '#' },
  { id: 6, title: 'Object Oriented Programming', issuer: 'neocolab', year: '5 December 2024', image: certOOP, color: '#555555', link: '#' },
  { id: 7, title: 'Computer Programming', issuer: 'neocolab', year: '16 May 2024', image: certC, color: '#000000', link: '#' },
  { id: 8, title: 'Software Engineering: Implementataion and Testing', issuer: 'Coursera', year: '11 May 2024', image: certSoftEng, color: '#777777', link: '#' },
  { id: 9, title: 'Responsive Web Design', issuer: 'freecodecamp', year: '17 November 2023', image: certWeb, color: '#666666', link: '#' },
];

const Achievements = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(0);
  const [selectedCert, setSelectedCert] = useState(null);

  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  const nextStep = useCallback(() => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % certificates.length);
  }, []);

  const prevStep = useCallback(() => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextStep, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextStep]);

  // Helper to get relative card positions
  const getCardPos = (i) => {
    const diff = (i - index + certificates.length) % certificates.length;
    const isMobile = windowWidth < 768;
    const isTablet = windowWidth >= 768 && windowWidth < 1280;

    if (diff === 0) return 'center';
    
    // Hide side cards on mobile
    if (isMobile) return 'hidden';

    // Show only one side card on tablet? User said 2 cards for tablet. 
    // Usually 3 is centered, so 2 would be center + right? 
    // Let's stick to user: Desktop 3, Tablet 2, Mobile 1.
    // For 2, we show center and right.
    if (isTablet) {
      if (diff === 1 || diff === -(certificates.length - 1)) return 'right';
      return 'hidden';
    }

    if (diff === 1 || diff === -(certificates.length - 1)) return 'right';
    if (diff === certificates.length - 1 || diff === -1) return 'left';
    return 'hidden';
  };

  const cardVariants = {
    center: { x: '0%', scale: 1.1, opacity: 1, zIndex: 10, filter: 'blur(0px)' },
    left: { x: '-70%', scale: 0.85, opacity: 0.4, zIndex: 5, filter: 'blur(2px)' },
    right: { x: '70%', scale: 0.85, opacity: 0.4, zIndex: 5, filter: 'blur(2px)' },
    hidden: { opacity: 0, scale: 0.5, zIndex: 0, filter: 'blur(10px)' }
  };

  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCert]);

  return (
    <>
      <section id="achievements" style={{ padding: '130px 0', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', overflow: 'visible', position: 'relative', zIndex: 1 }}>
        <div className="container" style={{ padding: '0 2rem', position: 'relative' }}>
          
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginBottom: '5rem', textAlign: 'center' }}
          >
            <p style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '1rem' }}>Proven Excellence</p>
            <h2 style={{ fontSize: '4.5rem', fontWeight: 900, letterSpacing: '-0.04em', textTransform: 'uppercase', margin: 0 }}>
              CERTIFICATIONS <span style={{ color: 'var(--text-secondary)' }}>& AWARDS</span>
            </h2>
          </motion.div>

          {/* Carousel Container */}
          <div 
            style={{ position: 'relative', height: '500px', width: '100%', maxWidth: '1400px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Navigation Arrows */}
            <button onClick={prevStep} style={{ position: 'absolute', left: '1rem', zIndex: 50, background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(10px)', color: 'black', border: '1px solid rgba(0,0,0,0.1)', width: '60px', height: '60px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', transition: 'all 0.3s' }}>
              <ChevronLeft size={28} />
            </button>
            <button onClick={nextStep} style={{ position: 'absolute', right: '1rem', zIndex: 50, background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(10px)', color: 'black', border: '1px solid rgba(0,0,0,0.1)', width: '60px', height: '60px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', transition: 'all 0.3s' }}>
              <ChevronRight size={28} />
            </button>

            <AnimatePresence initial={false}>
              {certificates.map((cert, i) => {
                const pos = getCardPos(i);
                if (pos === 'hidden') return null;

                return (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={pos}
                    variants={cardVariants}
                    transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                    style={{
                      position: 'absolute',
                      width: '90%',
                      maxWidth: '420px',
                      height: '480px',
                      background: '#ffffff',
                      borderRadius: '32px',
                      padding: '30px',
                      boxShadow: pos === 'center' ? '0 40px 100px rgba(0,0,0,0.18)' : '0 20px 50px rgba(0,0,0,0.08)',
                      border: '1px solid rgba(0,0,0,0.06)',
                      display: 'flex',
                      flexDirection: 'column',
                      textAlign: 'center',
                      cursor: 'default'
                    }}
                  >
                    {/* Card Preview Area */}
                    <div style={{ 
                      flex: 1, 
                      width: '100%', 
                      borderRadius: '20px', 
                      background: `linear-gradient(135deg, ${cert.color}25, ${cert.color}05)`,
                      border: `2px solid ${cert.color}15`,
                      marginBottom: '24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      {/* Glossy Overlay */}
                      <div style={{
                        position: 'absolute',
                        top: 0, left: 0, right: 0, bottom: 0,
                        background: 'linear-gradient(135deg, transparent 45%, rgba(0,0,0,0.05) 50%, transparent 55%)',
                        backgroundSize: '300% 300%',
                        animation: 'glint 4s infinite alternate ease-in-out'
                      }} />
                      <div style={{ color: '#000', opacity: 0.9, position: 'relative', zIndex: 1, width: '100%', height: '100%' }}>
                        {cert.image ? (
                          <img src={cert.image} alt={cert.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        ) : (
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                            {cert.icon}
                          </div>
                        )}
                      </div>
                      <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', height: '6px', background: '#000' }} />
                    </div>

                    {/* Card Info */}
                    <span style={{ fontSize: '0.75rem', fontWeight: 900, letterSpacing: '0.15em', color: cert.color, textTransform: 'uppercase', marginBottom: '10px', display: 'block' }}>{cert.year}</span>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#111', marginBottom: '8px', lineHeight: 1.2, letterSpacing: '-0.02em' }}>{cert.title}</h3>
                    <p style={{ fontSize: '1rem', color: '#666', fontWeight: 600, marginBottom: '28px' }}>{cert.issuer}</p>

                    <motion.button
                      onClick={() => setSelectedCert(cert)}
                      whileHover={{ scale: 1.05, backgroundColor: '#000', color: '#fff', boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        marginTop: 'auto',
                        padding: '14px 28px',
                        border: '2px solid black',
                        borderRadius: '99px',
                        color: 'black',
                        background: 'transparent',
                        cursor: 'pointer',
                        fontWeight: 800,
                        fontSize: '0.95rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      View Certificate <ExternalLink size={18} />
                    </motion.button>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* View All Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}
          >
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              whileTap={{ scale: 0.95 }}
              style={{ borderRadius: '99px' }}
            >
              <Link
                to="/certificates"
                style={{
                  display: 'inline-block',
                  padding: '1.2rem 3.5rem',
                  background: '#000',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '99px',
                  fontWeight: 800,
                  fontSize: '1rem',
                  cursor: 'pointer',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                Explore All Certificates
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Modal Overlay - Moved outside section for better z-index handling */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            style={{
              position: 'fixed',
              top: 0, left: 0, right: 0, bottom: 0,
              background: 'rgba(0,0,0,0.85)',
              backdropFilter: 'blur(10px)',
              zIndex: 9999, // Extremely high z-index
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem'
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: '#fff',
                width: '100%',
                maxWidth: '1100px',
                borderRadius: '32px',
                overflow: 'hidden',
                display: 'grid',
                gridTemplateColumns: windowWidth < 1024 ? '1fr' : '1.2fr 1fr',
                position: 'relative',
                boxShadow: '0 50px 100px rgba(0,0,0,0.5)'
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  background: 'rgba(0,0,0,0.05)',
                  border: 'none',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 10,
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.05)'}
              >
                <X size={20} color="#000" />
              </button>

              {/* Left: Certificate Image */}
              <div style={{ background: '#f8f8f8', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img 
                  src={selectedCert.image} 
                  alt={selectedCert.title} 
                  style={{ 
                    width: '100%', 
                    height: 'auto', 
                    borderRadius: '12px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    border: '1px solid rgba(0,0,0,0.05)'
                  }} 
                />
              </div>

              {/* Right: Certificate Info */}
              <div style={{ padding: '60px 50px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ 
                  display: 'inline-flex', 
                  padding: '8px 16px', 
                  background: `${selectedCert.color}10`, 
                  borderRadius: '99px',
                  color: selectedCert.color,
                  fontSize: '0.85rem',
                  fontWeight: 800,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '1.5rem',
                  width: 'fit-content'
                }}>
                  {selectedCert.year} Awarded
                </div>
                
                <h3 style={{ fontSize: '3rem', fontWeight: 900, color: '#000', lineHeight: 1.1, marginBottom: '1rem', letterSpacing: '-0.04em' }}>
                  {selectedCert.title}
                </h3>
                
                <p style={{ fontSize: '1.25rem', color: '#666', fontWeight: 600, marginBottom: '3rem' }}>
                  Issued by <span style={{ color: '#000' }}>{selectedCert.issuer}</span>
                </p>

                <div style={{ 
                  padding: '2rem', 
                  background: '#f9f9f9', 
                  borderRadius: '24px', 
                  border: '1px solid rgba(0,0,0,0.05)',
                  marginBottom: '3rem'
                }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: 800, textTransform: 'uppercase', color: '#000', marginBottom: '0.75rem' }}>Platform Details</h4>
                  <p style={{ color: '#555', lineHeight: 1.6, margin: 0, fontSize: '0.95rem' }}>
                    Verified completion of advanced coursework and practical assessments in {selectedCert.title.toLowerCase()}. This certification recognizes professional-grade competence and adherence to industry standards.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Achievements;

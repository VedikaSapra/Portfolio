import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ExternalLink, Award, X } from 'lucide-react';

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

const allCerts = [
  { id: 1, title: 'Graph Camp', issuer: 'Algo University', year: '8 March 2026', image: certGraph, color: '#222222', link: '#' },
  { id: 2, title: 'Computational Theory:Language Priinciple & Finite Automata Theory', issuer: 'Infosys Springboard', year: '23 August 2025', image: certTheory, color: '#111111', link: '#' },
  { id: 3, title: 'Master Generative AI & Generative Ai tools(ChatGPT & more)', issuer: 'Infosys Springboard', year: '30 August 2025', image: certGenAI, color: '#333333', link: '#' },
  { id: 4, title: 'Frontend with React.js', issuer: 'Gokboru Tech Pvt Ltd', year: '18 July 2025', image: certSummer, color: '#888888', link: '#' },
  { id: 5, title: 'Cloud Computing', issuer: 'NPTEL', year: 'May 2025', image: certNptel, color: '#444444', link: '#' },
  { id: 6, title: 'Object Oriented Programming', issuer: 'neocolab', year: '5 December 2024', image: certOOP, color: '#555555', link: '#' },
  { id: 7, title: 'Computer Programming', issuer: 'neocolab', year: '16 May 2024', image: certC, color: '#000000', link: '#' },
  { id: 8, title: 'Software Engineering: Implementataion and Testing', issuer: 'Coursera', year: '11 May 2024', image: certSoftEng, color: '#777777', link: '#' },
  { id: 9, title: 'Responsive Web Design', issuer: 'freecodecamp', year: '17 November 2023', image: certWeb, color: '#666666', link: '#' },
];

const AllCertificates = () => {
  const [selectedCert, setSelectedCert] = React.useState(null);

  React.useEffect(() => {
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
      <div style={{ minHeight: '100vh', paddingBottom: '100px', position: 'relative', zIndex: 1, overflow: 'visible' }}>
      {/* Navigation */}
      <nav style={{ padding: '2rem 4rem', display: 'flex', alignItems: 'center' }}>
        <Link
          to="/"
          style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            textDecoration: 'none', color: '#111', fontWeight: 700,
            fontSize: '1rem', background: 'rgba(255,255,255,0.5)',
            padding: '10px 20px', borderRadius: '99px', backdropFilter: 'blur(10px)',
            border: '1px solid rgba(0,0,0,0.1)', transition: 'all 0.3s'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = '#000'; e.currentTarget.style.color = '#fff'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.5)'; e.currentTarget.style.color = '#111'; }}
        >
          <ChevronLeft size={20} /> Back to Portfolio
        </Link>
      </nav>

      <div className="container" style={{ padding: '0 4rem' }}>

        {/* Certificates Grid Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '4.5rem', fontWeight: 900, letterSpacing: '-0.04em', textTransform: 'uppercase' }}>
              All <span style={{ color: 'var(--text-secondary)' }}>Certificates</span>
            </h2>
          </div>

          {/* Grid */}
          <motion.div
            layout
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}
          >
            <AnimatePresence mode='popLayout'>
              {allCerts.map((cert) => (
                <motion.div
                  key={cert.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, type: 'spring', stiffness: 300, damping: 25 }}
                  whileHover={{ y: -10, boxShadow: '0 25px 50px rgba(0,0,0,0.1)' }}
                  style={{
                    background: '#ffffff',
                    borderRadius: '24px',
                    padding: '30px',
                    border: '1px solid rgba(0,0,0,0.06)',
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center'
                  }}
                >
                  <div style={{
                    flex: 1,
                    width: '100%',
                    borderRadius: '16px',
                    background: `linear-gradient(135deg, ${cert.color}15, ${cert.color}05)`,
                    marginBottom: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    aspectRatio: '5/4'
                  }}>
                    <div style={{ color: '#000', opacity: 0.9, position: 'relative', zIndex: 1, width: '100%', height: '100%' }}>
                      {cert.image ? (
                        <img src={cert.image} alt={cert.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      ) : (
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                          {cert.icon}
                        </div>
                      )}
                    </div>
                    <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', height: '4px', background: '#000' }} />
                  </div>

                  <span style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.15em', color: cert.color, textTransform: 'uppercase', marginBottom: '8px', display: 'block' }}>{cert.year}</span>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#111', marginBottom: '8px', lineHeight: 1.2 }}>{cert.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: '#666', fontWeight: 500, marginBottom: '20px' }}>{cert.issuer}</p>

                  <button
                    onClick={() => setSelectedCert(cert)}
                    style={{
                      marginTop: 'auto',
                      padding: '10px 20px',
                      border: '2px solid rgba(0,0,0,0.1)',
                      background: 'transparent',
                      borderRadius: '99px',
                      color: 'black',
                      cursor: 'pointer',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    View <ExternalLink size={16} />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          </motion.div>
        </div>
      </div>

      {/* Modal Overlay - Moved outside for better layering */}
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
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem'
            }}
          >
            <motion.div
              initial={{ scale: 0.97, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: '#fff',
                width: '100%',
                maxWidth: '1000px',
                borderRadius: '24px',
                overflow: 'hidden',
                display: 'grid',
                gridTemplateColumns: window.innerWidth < 1024 ? '1fr' : '1.1fr 1fr',
                position: 'relative'
              }}
            >
              <button
                onClick={() => setSelectedCert(null)}
                style={{
                  position: 'absolute', top: '1.25rem', right: '1.25rem',
                  background: 'rgba(0,0,0,0.05)', border: 'none',
                  width: '36px', height: '36px', borderRadius: '50%',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  zIndex: 10
                }}
              >
                <X size={18} color="#000" />
              </button>

              {/* Left: Certificate Image */}
              <div style={{ background: '#f8f8f8', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img 
                  src={selectedCert.image} 
                  alt={selectedCert.title} 
                  style={{ 
                    width: '100%', borderRadius: '8px',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.08)'
                  }} 
                />
              </div>

              {/* Right: Info */}
              <div style={{ padding: '40px' }}>
                <span style={{ 
                  fontSize: '0.75rem', fontWeight: 800, 
                  textTransform: 'uppercase', color: selectedCert.color,
                  letterSpacing: '0.1em', marginBottom: '1rem', display: 'block' 
                }}>
                  {selectedCert.year} Awarded
                </span>
                <h3 style={{ fontSize: '2.25rem', fontWeight: 900, marginBottom: '0.5rem', lineHeight: 1.1 }}>
                  {selectedCert.title}
                </h3>
                <p style={{ fontSize: '1.1rem', color: '#666', fontWeight: 600, marginBottom: '2rem' }}>
                  {selectedCert.issuer}
                </p>

                <div style={{ 
                  padding: '1.5rem', background: '#f9f9f9', 
                  borderRadius: '16px', marginBottom: '2rem' 
                }}>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.5rem' }}>Description</h4>
                  <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.5, margin: 0 }}>
                    Professional certification illustrating proficiency in {selectedCert.title.toLowerCase()}.
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

export default AllCertificates;

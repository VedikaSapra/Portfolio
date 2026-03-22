import React from 'react';
import { motion } from 'framer-motion';
import { Download, Code2, MessageSquare, Terminal, Cpu } from 'lucide-react';
import heroImg from '../assets/profile.png';

const allSkills = [
  'C', 'C++', 'Python', 'Java', 'JavaScript', 'PHP',
  'MongoDB Compass', 'MySQL Server', 'XAMPP', 'Redis', 'Git', 'GitHub',
  'Maven', 'Postman', 'HTML', 'CSS', 'Tailwind', 'React.JS', 'Node.JS', 'Socket.io', 'Axios'
];

const SkillsTicker = () => {
  const doubled = [...allSkills, ...allSkills];
  return (
    <div className="skills-ticker-wrapper">
      <div className="skills-ticker-track">
        {doubled.map((skill, i) => (
          <span key={i} className="skills-ticker-item">
            <span className="ticker-dot">●</span> {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'visible', paddingTop: '80px' }}>
      <div style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div className="container" style={{ padding: '0 4rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '2rem', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.p
                style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
              >
                Welcome to my universe
              </motion.p>
              <h1 style={{ fontSize: '5.5rem', fontWeight: 900, lineHeight: 1, letterSpacing: '-0.04em', marginBottom: '0.5rem' }}>
                I'm <span className="hero-name-gradient">Vedika</span>
              </h1>
              <motion.div
                style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem', color: 'var(--text-secondary)', letterSpacing: '-0.02em' }}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
              >
                Full Stack <span style={{ color: '#000', textDecoration: 'underline', textDecorationThickness: '4px', textUnderlineOffset: '6px' }}>Developer</span>
              </motion.div>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: 1.8, maxWidth: '540px' }}>
                Crafting immersive digital experiences through elegant code, robust backends, and stunning frontends.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <motion.a href="/resume.pdf" download whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  style={{ padding: '1rem 2.5rem', background: '#000', color: '#fff', textDecoration: 'none', borderRadius: '999px', fontWeight: 700, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Download size={18} /> Download CV
                </motion.a>
                <motion.a href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  style={{ padding: '1rem 2.5rem', border: '2px solid black', color: 'black', textDecoration: 'none', borderRadius: '999px', fontWeight: 700, fontSize: '0.95rem' }}>
                  Contact Me
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
            >
              <div style={{
                position: 'relative',
                width: '100%',
                maxWidth: '400px',
                aspectRatio: '1',
                borderRadius: '2rem',
                overflow: 'hidden',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
              }}>
                <motion.img
                  src={heroImg}
                  alt="Vedika Portrait"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.1))',
                  pointerEvents: 'none'
                }} />
              </div>
              {/* Decorative elements with Icons */}
              <motion.div
                style={{
                  position: 'absolute', top: '5%', right: '-5%', width: '80px', height: '80px',
                  borderRadius: '1.5rem', background: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: '2px solid rgba(0,0,0,0.1)', boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  zIndex: 10, color: '#000'
                }}
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 4 }}
              >
                <Code2 size={32} />
              </motion.div>

              <motion.div
                style={{
                  position: 'absolute', bottom: '15%', left: '-8%', width: '70px', height: '70px',
                  borderRadius: '1.25rem', background: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: '2px solid rgba(0,0,0,0.1)', boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
                  zIndex: 10, color: '#000'
                }}
                animate={{ y: [0, 12, 0], rotate: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 5, delay: 0.5 }}
              >
                <MessageSquare size={28} />
              </motion.div>

              <motion.div
                style={{
                  position: 'absolute', top: '40%', left: '-12%', width: '60px', height: '60px',
                  borderRadius: '50%', background: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: '2px solid rgba(0,0,0,0.1)', boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
                  zIndex: 10, color: '#000'
                }}
                animate={{ x: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 6 }}
              >
                <Terminal size={22} />
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.8 }} style={{ marginTop: '5rem' }}>
          <SkillsTicker />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

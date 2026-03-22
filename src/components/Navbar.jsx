import React, { useState, useEffect } from 'react';
import { Home, User, Code2, GraduationCap, Briefcase, Award, Mail, Trophy } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { icon: Home, label: 'Home', href: '#home', id: 'home' },
  { icon: User, label: 'About', href: '#about', id: 'about' },
  { icon: Code2, label: 'Skills', href: '#skills', id: 'skills' },
  { icon: GraduationCap, label: 'Education', href: '#education', id: 'education' },
  { icon: Briefcase, label: 'Projects', href: '#projects', id: 'projects' },
  { icon: Award, label: 'Certifications', href: '#achievements', id: 'achievements' },
  { icon: Trophy, label: 'Achievements', href: '#milestones', id: 'milestones' },
  { icon: Mail, label: 'Contact', href: '#contact', id: 'contact' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ x: -60, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
      style={{
        position: 'fixed',
        top: '2rem',
        left: '1.5rem',
        zIndex: 200,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.35rem',
        padding: '1rem 0.65rem',
        borderRadius: '1.25rem',
        background: 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(0,0,0,0.1)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
      }}
    >
      {/* Logo mark */}
      <div style={{ textAlign: 'center', marginBottom: '0.5rem', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
        <span style={{ fontSize: '1rem', fontWeight: 900, letterSpacing: '-0.04em' }}>V</span>
      </div>

      {navItems.map((item, i) => {
        const isActive = activeSection === item.id;
        const [isHovered, setIsHovered] = useState(false);

        return (
          <motion.a
            key={i}
            href={item.href}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.15, x: 4 }}
            whileTap={{ scale: 0.9 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '42px',
              height: '42px',
              borderRadius: '0.7rem',
              color: isActive ? '#ffffff' : 'var(--text-primary)',
              backgroundColor: isActive ? '#000000' : 'transparent',
              textDecoration: 'none',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              position: 'relative'
            }}
          >
            <item.icon size={19} strokeWidth={isActive ? 2.5 : 2.2} />
            
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 20 }}
                  exit={{ opacity: 0, x: 10 }}
                  style={{
                    position: 'absolute',
                    left: '100%',
                    background: '#000',
                    color: '#fff',
                    padding: '0.4rem 0.8rem',
                    borderRadius: '0.5rem',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    whiteSpace: 'nowrap',
                    pointerEvents: 'none',
                    zIndex: 210,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                  }}
                >
                  {item.label}
                  <div style={{
                    position: 'absolute',
                    left: '-4px',
                    top: '50%',
                    transform: 'translateY(-50%) rotate(45deg)',
                    width: '8px',
                    height: '8px',
                    background: '#000'
                  }} />
                </motion.div>
              )}
            </AnimatePresence>

            {isActive && (
              <motion.div
                layoutId="activeNav"
                style={{
                  position: 'absolute',
                  left: '-10px',
                  width: '4px',
                  height: '20px',
                  backgroundColor: '#000',
                  borderRadius: '99px'
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </motion.a>
        );
      })}
    </motion.nav>
  );
};

export default Navbar;

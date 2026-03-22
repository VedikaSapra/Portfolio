import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, GraduationCap, Code, Mail, Award, Trophy } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { icon: Home, label: 'Home', id: 'home', href: '#home' },
  { icon: User, label: 'About', id: 'about', href: '#about' },
  { icon: Code, label: 'Skills', id: 'skills', href: '#skills' },
  { icon: GraduationCap, label: 'Education', id: 'education', href: '#education' },
  { icon: Briefcase, label: 'Projects', id: 'projects', href: '#projects' },
  { icon: Trophy, label: 'Achievements', id: 'milestones', href: '#milestones' },
  { icon: Award, label: 'Certifications', id: 'achievements', href: '#achievements' },
  { icon: Mail, label: 'Contact', id: 'contact', href: '#contact' },
];

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-50% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => {
      navItems.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      left: '1.5rem',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 100,
      display: 'flex',
      flexDirection: 'column',
      gap: '0.4rem',
      padding: '1.2rem 0.75rem',
      borderRadius: '9999px',
      background: 'rgba(255,255,255,0.4)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      border: '1px solid rgba(255,255,255,0.2)',
      boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
    }}>
      {navItems.map((item, index) => {
        const isActive = activeSection === item.id;
        
        return (
          <div key={index} style={{ position: 'relative' }}
               onMouseEnter={() => setHoveredItem(index)}
               onMouseLeave={() => setHoveredItem(null)}>
            <motion.a
              href={item.href}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              style={{
                color: isActive ? '#fff' : '#000',
                background: isActive ? '#000' : 'transparent',
                textDecoration: 'none',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              className="sidebar-link"
            >
              <item.icon size={18} strokeWidth={isActive ? 2.5 : 2} />
            </motion.a>

            <AnimatePresence>
              {hoveredItem === index && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  style={{
                    position: 'absolute',
                    left: '50px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: '#000',
                    color: '#fff',
                    padding: '6px 14px',
                    borderRadius: '8px',
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                    pointerEvents: 'none',
                    letterSpacing: '0.05em',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
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
          </div>
        );
      })}
    </nav>
  );
};

export default Sidebar;

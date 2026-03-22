import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Download, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/', id: 'home', isPage: true },
  { label: 'About Me', href: '/about', id: 'about', isPage: true },
  { label: 'Skills', href: '/#skills', id: 'skills', isPage: false },
  { label: 'Education', href: '/#education', id: 'education', isPage: false },
  { label: 'Projects', href: '/#projects', id: 'projects', isPage: false },
  { label: 'Achievements', href: '/#milestones', id: 'milestones', isPage: false },
  { label: 'Certifications', href: '/#achievements', id: 'achievements', isPage: false },
  { label: 'Contact', href: '/#contact', id: 'contact', isPage: false },
];

const TopNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, item) => {
    if (!item.isPage && location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(item.id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      style={{
        position: 'fixed',
        top: '2rem',
        left: '5%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        width: '95vw',
        height: '3rem',
        maxWidth: '1500px',
        padding: '0.5rem 1.5rem',
        background: 'rgba(255,255,255,0.3)',
        backdropFilter: 'blur(25px)',
        WebkitBackdropFilter: 'blur(25px)',
        borderRadius: '99px',
        border: '1px solid rgba(255,255,255,0.3)',
        boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      {/* Logo/Brand */}
      <div style={{ 
        fontSize: '1.3rem', 
        fontWeight: 900, 
        letterSpacing: '-0.02em', 
        textTransform: 'uppercase',
        color: '#000'
      }}>
        Vedika
      </div>

      {/* Center Links */}
      <div style={{
        display: 'flex',
        gap: '2rem',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
      }}>
        {navLinks.map((link) => (
          <Link
            key={link.label}
            to={link.href}
            onClick={(e) => handleNavClick(e, link)}
            style={{
              textDecoration: 'none',
              color: '#111',
              fontSize: '0.85rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              transition: 'opacity 0.3s',
              opacity: location.pathname === link.href || (location.pathname === '/' && link.id === 'home') ? 1 : 0.6,
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => e.target.style.opacity = 1}
            onMouseLeave={(e) => {
              if (location.pathname !== link.href && !(location.pathname === '/' && link.id === 'home')) {
                e.target.style.opacity = 0.6;
              }
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* CV Icon Sidebar style */}
      <div style={{ width: '1px', height: '20px', background: 'rgba(0,0,0,0.1)' }} />

      <motion.a
        href="/resume.pdf"
        download
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          background: '#000',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textDecoration: 'none',
        }}
        title="Download CV" 
      >
        <Download size={16} />
      </motion.a>
    </motion.nav>
  );
};

export default TopNavbar;

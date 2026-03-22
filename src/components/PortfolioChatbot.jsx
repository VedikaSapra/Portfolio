import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Linkedin, Mail, Phone, ExternalLink, ArrowRight } from 'lucide-react';

const WhatsAppIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03a11.934 11.934 0 001.605 6.057L0 24l6.132-1.61a11.874 11.874 0 005.915 1.569h.005c6.635 0 12.032-5.396 12.035-12.031a11.85 11.85 0 00-3.483-8.47l-.001-.001z" />
  </svg>
);

const PortfolioChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCloud, setShowCloud] = useState(true);
  const [messages, setMessages] = useState([
    { role: 'bot', text: "Hi! I'm Vedika's virtual assistant. Ask me about her skills, education, or projects!" }
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // Process query
    setTimeout(() => {
      const response = processQuery(input.toLowerCase());
      setMessages(prev => [...prev, response]);
    }, 600);
  };

  const processQuery = (query) => {
    if (query.includes('skill') || query.includes('arsenal') || query.includes('tech')) {
      return { 
        role: 'bot', 
        text: "Vedika is proficient in C, C++, Python, Java, JavaScript, and various libraries like React.JS, Node.JS, and Tailwind.",
        action: { label: 'View All Skills', target: 'skills' }
      };
    }
    if (query.includes('education') || query.includes('university') || query.includes('school')) {
      return { 
        role: 'bot', 
        text: "She's currently pursuing B.Tech in CSE at Lovely Professional University (8.26 CGPA).",
        action: { label: 'Explore Education', target: 'education' }
      };
    }
    if (query.includes('project') || query.includes('work')) {
      return { 
        role: 'bot', 
        text: "Her major projects include a Super Furniture House website and PodcastPro application.",
        action: { label: 'See Projects', target: 'projects' }
      };
    }
    if (query.includes('contact') || query.includes('email') || query.includes('reach')) {
      return { 
        role: 'bot', 
        text: "You can reach her via email at sapravedika1234@gmail.com or via WhatsApp directly through the icons above.",
        action: { label: 'Go to Contact', target: 'contact' }
      };
    }
    return { 
      role: 'bot', 
      text: "I'm specialized in Vedika's professional background. Feel free to ask about her skills, projects, or education!" 
    };
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 1000, fontFamily: 'inherit' }}>
      {/* Cloudy Bubble */}
      <AnimatePresence>
        {showCloud && !isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            style={{ 
              position: 'absolute', bottom: '4.5rem', right: '0',
              background: 'white', padding: '0.8rem 1.2rem', borderRadius: '1.5rem',
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)', border: '1px solid rgba(0,0,0,0.05)',
              whiteSpace: 'nowrap', fontWeight: 700, fontSize: '0.9rem', color: '#111',
              cursor: 'pointer'
            }}
            onClick={() => setIsOpen(true)}
          >
            Ask Query
            <div style={{ 
              position: 'absolute', bottom: '-8px', right: '20px', 
              width: '15px', height: '15px', background: 'white', 
              transform: 'rotate(45deg)', borderRight: '1px solid rgba(0,0,0,0.05)',
              borderBottom: '1px solid rgba(0,0,0,0.05)'
            }} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          setIsOpen(!isOpen);
          setShowCloud(false);
        }}
        style={{
          width: '60px', height: '60px', borderRadius: '50%',
          background: 'black', color: 'white', border: 'none',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
          zIndex: 1001
        }}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            style={{
              position: 'absolute', bottom: '5rem', right: '0',
              width: '350px', height: '500px', background: 'white',
              borderRadius: '2rem', boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
              display: 'flex', flexDirection: 'column', overflow: 'hidden',
              border: '1px solid rgba(0,0,0,0.08)'
            }}
          >
            {/* Header */}
            <div style={{ padding: '1.5rem', background: '#000', color: 'white' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 800 }}>Portfolio AI</h3>
                <div style={{ display: 'flex', gap: '0.8rem' }}>
                  <a href="https://wa.me/919988147402" target="_blank" rel="noreferrer" style={{ color: 'white', display: 'flex', alignItems: 'center' }}>
                    <WhatsAppIcon size={22} />
                  </a>
                  <a href="https://www.linkedin.com/in/vedika-sapra-12" target="_blank" rel="noreferrer" style={{ color: 'white' }}>
                    <Linkedin size={18} />
                  </a>
                  <a href="mailto:sapravedika1234@gmail.com" style={{ color: 'white' }}>
                    <Mail size={18} />
                  </a>
                </div>
              </div>
              <p style={{ margin: 0, fontSize: '0.8rem', opacity: 0.8 }}>Always here to help you</p>
            </div>

            {/* Messages Area */}
            <div 
              ref={scrollRef}
              style={{ flex: 1, padding: '1.5rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
              {messages.map((msg, i) => (
                <div key={i} style={{ 
                  alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '80%', display: 'flex', flexDirection: 'column', gap: '0.5rem'
                }}>
                  <div style={{
                    padding: '0.8rem 1rem', borderRadius: '1.2rem',
                    background: msg.role === 'user' ? '#000' : '#f0f0f0',
                    color: msg.role === 'user' ? '#fff' : '#111',
                    fontSize: '0.9rem', fontWeight: 600, lineHeight: 1.4,
                    borderBottomRightRadius: msg.role === 'user' ? '4px' : '1.2rem',
                    borderBottomLeftRadius: msg.role === 'bot' ? '4px' : '1.2rem',
                  }}>
                    {msg.text}
                  </div>
                  {msg.action && (
                    <button
                      onClick={() => scrollToSection(msg.action.target)}
                      style={{
                        alignSelf: 'flex-start', padding: '0.5rem 1rem', borderRadius: '99px',
                        background: 'transparent', border: '1.5px solid #000', color: '#000',
                        fontSize: '0.8rem', fontWeight: 800, cursor: 'pointer',
                        display: 'flex', alignItems: 'center', gap: '5px', marginTop: '4px'
                      }}
                    >
                      {msg.action.label} <ArrowRight size={14} />
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div style={{ padding: '1.2rem', borderTop: '1px solid rgba(0,0,0,0.05)', display: 'flex', gap: '0.8rem' }}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your query..."
                style={{
                  flex: 1, padding: '0.8rem 1.2rem', borderRadius: '99px',
                  border: '1px solid rgba(0,0,0,0.1)', outline: 'none',
                  fontSize: '0.9rem', fontWeight: 500
                }}
              />
              <button
                onClick={handleSend}
                style={{
                  width: '45px', height: '45px', borderRadius: '50%',
                  background: '#000', color: 'white', border: 'none',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PortfolioChatbot;

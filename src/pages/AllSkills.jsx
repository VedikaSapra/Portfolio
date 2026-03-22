import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, Code2, Server, Database, Wrench, User } from 'lucide-react';

const allSkillsData = [
  { id: 1, name: 'HTML', category: 'Frontend', pct: 95, icon: <Code2 size={24} /> },
  { id: 2, name: 'CSS', category: 'Frontend', pct: 90, icon: <Code2 size={24} /> },
  { id: 3, name: 'Tailwind', category: 'Frontend', pct: 88, icon: <Code2 size={24} /> },
  { id: 4, name: 'React.JS', category: 'Frontend', pct: 92, icon: <Code2 size={24} /> },
  { id: 5, name: 'JavaScript', category: 'Frontend', pct: 92, icon: <Code2 size={24} /> },
  { id: 6, name: 'Axios', category: 'Frontend', pct: 85, icon: <Code2 size={24} /> },
  
  { id: 7, name: 'Node.JS', category: 'Backend', pct: 82, icon: <Server size={24} /> },
  { id: 8, name: 'Python', category: 'Backend', pct: 88, icon: <Server size={24} /> },
  { id: 9, name: 'Java', category: 'Backend', pct: 82, icon: <Server size={24} /> },
  { id: 10, name: 'C', category: 'Backend', pct: 85, icon: <Server size={24} /> },
  { id: 11, name: 'C++', category: 'Backend', pct: 90, icon: <Server size={24} /> },
  { id: 12, name: 'PHP', category: 'Backend', pct: 80, icon: <Server size={24} /> },
  { id: 13, name: 'Socket.io', category: 'Backend', pct: 75, icon: <Server size={24} /> },
  
  { id: 14, name: 'Git', category: 'Platforms/Tools', pct: 95, icon: <Wrench size={24} /> },
  { id: 15, name: 'GitHub', category: 'Platforms/Tools', pct: 95, icon: <Wrench size={24} /> },
  { id: 16, name: 'Postman', category: 'Platforms/Tools', pct: 88, icon: <Wrench size={24} /> },
  { id: 17, name: 'XAMPP', category: 'Platforms/Tools', pct: 80, icon: <Wrench size={24} /> },
  { id: 18, name: 'Maven', category: 'Platforms/Tools', pct: 75, icon: <Wrench size={24} /> },
  { id: 19, name: 'MongoDB Compass', category: 'Platforms/Tools', pct: 85, icon: <Wrench size={24} /> },

  { id: 20, name: 'MySQL Server', category: 'Database', pct: 88, icon: <Database size={24} /> },
  { id: 21, name: 'Redis', category: 'Database', pct: 78, icon: <Database size={24} /> },
];

const categories = ['All', 'Frontend', 'Backend', 'Platforms/Tools', 'Database'];

const AllSkills = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredSkills = activeTab === 'All' 
    ? allSkillsData 
    : allSkillsData.filter(s => s.category === activeTab);

  return (
    <div style={{ minHeight: '100vh', paddingBottom: '100px', position: 'relative', zIndex: 10 }}>
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
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '4.5rem', fontWeight: 900, letterSpacing: '-0.04em', textTransform: 'uppercase' }}>
              All <span style={{ color: 'var(--text-secondary)' }}>Skills</span>
            </h2>
          </div>

          {/* Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '4rem', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                style={{
                  padding: '12px 28px',
                  borderRadius: '99px',
                  border: activeTab === cat ? 'none' : '1px solid rgba(0,0,0,0.1)',
                  background: activeTab === cat ? '#000' : 'rgba(255,255,255,0.5)',
                  color: activeTab === cat ? '#fff' : '#111',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div 
            layout
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}
          >
            <AnimatePresence mode='popLayout'>
              {filteredSkills.map((skill) => (
                <motion.div
                  key={skill.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, type: 'spring', stiffness: 300, damping: 25 }}
                  whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(0,0,0,0.08)' }}
                  style={{
                    background: '#ffffff',
                    borderRadius: '20px',
                    padding: '24px',
                    border: '1px solid rgba(0,0,0,0.08)',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ padding: '10px', background: '#f8f9fa', borderRadius: '12px', color: '#111' }}>
                        {skill.icon}
                      </div>
                      <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#111' }}>{skill.name}</h3>
                    </div>
                    <span style={{ fontSize: '1.1rem', fontWeight: 900, color: '#111' }}>{skill.pct}%</span>
                  </div>

                  <div style={{ height: '8px', background: 'rgba(0,0,0,0.05)', borderRadius: '999px', overflow: 'hidden' }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.pct}%` }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                      style={{ height: '100%', background: '#111', borderRadius: '999px' }}
                    />
                  </div>
                  
                  <div style={{ marginTop: '12px', fontSize: '0.8rem', color: '#666', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {skill.category}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AllSkills;

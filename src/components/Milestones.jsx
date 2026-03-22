import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Star, Lightbulb } from 'lucide-react';

const achievements = [
  {
    title: 'Filed a Patent',
    subtitle: 'Technical Innovation',
    icon: <Lightbulb size={32} color="#000000" />,
    color: '#000000',
    desc: 'Officially filed a patent demonstrating unique, forward-thinking problem solving and engineering innovation.'
  },
  {
    title: '100+ LeetCode',
    subtitle: 'Data Structures & Algorithms',
    icon: <Code2 size={32} color="#333333" />,
    color: '#333333',
    desc: 'Consistently solving complex algorithmic challenges and optimizing code efficiency.'
  },
  {
    title: '4-Star HackerRank',
    subtitle: 'C++ Problem Solving',
    icon: <Star size={32} color="#666666" />,
    color: '#666666',
    desc: 'Achieved a 4-star badge demonstrating advanced proficiency in C++ and logic building.'
  }
];

const Milestones = () => {
  return (
    <section id="milestones" style={{ padding: '80px 0', minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', zIndex: 10 }}>
      <div className="container" style={{ padding: '0 4rem' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '1rem' }}>Highlights</p>
            <h2 style={{ fontSize: '4.5rem', fontWeight: 900, letterSpacing: '-0.04em', textTransform: 'uppercase', lineHeight: 1.1 }}>
              Key <span style={{ color: 'var(--text-secondary)' }}>Milestones</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {achievements.map((ach, i) => (
              <motion.div 
                key={i}
                whileHover={{ 
                  y: -15, 
                  scale: 1.02,
                  boxShadow: '0 30px 60px rgba(0,0,0,0.15), 0 0 20px rgba(0,0,0,0.05)',
                  borderColor: 'rgba(0,0,0,0.12)'
                }}
                style={{ 
                  background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(0,0,0,0.06)', borderRadius: '32px',
                  padding: '40px', display: 'flex', alignItems: 'flex-start', gap: '24px',
                  transition: 'all 0.5s cubic-bezier(0.2, 1, 0.3, 1)',
                  cursor: 'pointer'
                }}
              >
                <div style={{ 
                  width: '70px', height: '70px', borderRadius: '20px', 
                  background: `linear-gradient(135deg, ${ach.color}20, ${ach.color}05)`,
                  border: `1px solid ${ach.color}30`, display: 'flex', 
                  alignItems: 'center', justifyContent: 'center', flexShrink: 0
                }}>
                  {ach.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#111', marginBottom: '8px', lineHeight: 1.2 }}>{ach.title}</h3>
                  <div style={{ color: ach.color, fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>{ach.subtitle}</div>
                  <p style={{ color: '#666', lineHeight: 1.6, fontSize: '0.95rem' }}>{ach.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Milestones;

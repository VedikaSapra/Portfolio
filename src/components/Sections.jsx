import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { Link } from 'react-router-dom';
import {
  Mail, Github, Linkedin, GraduationCap, Calendar,
  Code2, Server, Database, Wrench, Phone, User,
  Layers, Briefcase, UserCheck, Download
} from 'lucide-react';

const WhatsAppIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03a11.934 11.934 0 001.605 6.057L0 24l6.132-1.61a11.874 11.874 0 005.915 1.569h.005c6.635 0 12.032-5.396 12.035-12.031a11.85 11.85 0 00-3.483-8.47l-.001-.001z" />
  </svg>
);

// ==========================
// ANIMATION VARIANTS
// ==========================
const revealVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] }
  }
};

const eduCardVariants = {
  hidden: { opacity: 0, x: -30, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.2, 1, 0.3, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const statsData = [
  { label: 'Projects', value: '7+', icon: Layers },
  { label: 'Experience', value: '3+ Years', icon: Briefcase },
  { label: 'Status', value: 'Open to Work', icon: UserCheck },
];

// ==========================
// ABOUT
// ==========================
export const About = () => (
  <section id="about" style={{ padding: '100px 0', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <div className="container" style={{ padding: '0 4rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          style={{ textAlign: 'center' }}
        >
          <motion.h2
            variants={revealVariants}
            style={{ fontSize: '4.5rem', fontWeight: 900, marginBottom: '2rem', letterSpacing: '-0.04em', textTransform: 'uppercase' }}
          >
            Who I <span style={{ color: 'var(--text-secondary)' }}>Am</span>
          </motion.h2>

          <motion.p
            variants={revealVariants}
            style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem' }}
          >
            I'm <strong>Vedika</strong> — an innovative Full Stack Developer dedicated to building scalable, high-impact digital solutions.
            I bridge the gap between elegant design and complex system architecture with clean, maintainable code.
          </motion.p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
            marginTop: '2rem'
          }}>
            {statsData.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={revealVariants}
                style={{
                  background: 'rgba(255,255,255,0.8)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(0,0,0,0.06)',
                  borderRadius: '24px',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: '1.5rem',
                  textAlign: 'left',
                  transition: 'all 0.3s ease'
                }}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
              >
                <div style={{
                  width: '60px', height: '60px', borderRadius: '16px',
                  background: '#f8f9fa', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  color: '#000', flexShrink: 0
                }}>
                  <stat.icon size={30} />
                </div>
                <div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#000', lineHeight: 1.1 }}>{stat.value}</div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '4px' }}>{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// ==========================
// SKILLS — Big box with 4 flip-reveal cards
// ==========================
const skillCategories = [
  {
    name: 'Frontend', icon: Code2, color: '#000000',
    skills: [
      { name: 'JavaScript', icon: <Code2 size={14} />, pct: 92 },
      { name: 'React.JS', icon: <Code2 size={14} />, pct: 92 },
      { name: 'HTML', icon: <Code2 size={14} />, pct: 95 },
      { name: 'CSS', icon: <Code2 size={14} />, pct: 90 },
      { name: 'Tailwind', icon: <Code2 size={14} />, pct: 88 },
      { name: 'Axios', icon: <Code2 size={14} />, pct: 85 },
    ]
  },
  {
    name: 'Backend', icon: Server, color: '#111111',
    skills: [
      { name: 'Python', icon: <Server size={14} />, pct: 88 },
      { name: 'Java', icon: <Server size={14} />, pct: 82 },
      { name: 'C', icon: <Server size={14} />, pct: 85 },
      { name: 'C++', icon: <Server size={14} />, pct: 90 },
      { name: 'Node.JS', icon: <Server size={14} />, pct: 82 },
      { name: 'PHP', icon: <Server size={14} />, pct: 80 },
      { name: 'Socket.io', icon: <Server size={14} />, pct: 75 },
    ]
  },
  {
    name: 'Platforms/Tools', icon: Wrench, color: '#222222',
    skills: [
      { name: 'Git', icon: <Wrench size={14} />, pct: 95 },
      { name: 'GitHub', icon: <Wrench size={14} />, pct: 95 },
      { name: 'Postman', icon: <Wrench size={14} />, pct: 90 },
      { name: 'XAMPP', icon: <Wrench size={14} />, pct: 80 },
      { name: 'Maven', icon: <Wrench size={14} />, pct: 75 },
      { name: 'MongoDB Compass', icon: <Wrench size={14} />, pct: 85 },
    ]
  },
  {
    name: 'Database', icon: Database, color: '#333333',
    skills: [
      { name: 'MySQL Server', icon: <Database size={14} />, pct: 88 },
      { name: 'Redis', icon: <Database size={14} />, pct: 75 },
    ]
  },
];

const SkillCard = ({ cat, index }) => {
  const Icon = cat.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="skill-card-container"
    >
      <div className="skill-card-inner" style={{ width: '350px' }}>
        {/* Front Side */}
        <div className="skill-card-front" style={{
          background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(20px)',
          border: '1px solid rgba(0,0,0,0.06)', borderRadius: '32px',
          padding: '35px', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px',
          textAlign: 'left', minWidth: '320px', maxWidth: '420px', width: '100%'
        }}>
          <div style={{
            width: '50px', height: '50px', borderRadius: '20px',
            background: `linear-gradient(135deg, ${cat.color}20, ${cat.color}05)`,
            border: `1px solid ${cat.color}30`, display: 'flex',
            alignItems: 'center', justifyContent: 'center', flexShrink: 0
          }}>
            <Icon size={32} color={cat.color} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#111', marginBottom: '8px', lineHeight: 1.2 }}>{cat.name}</h3>
            <div style={{ color: cat.color, fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{cat.skills.length} skills</div>
          </div>
        </div>

        {/* Back Side */}
        <div className="skill-card-back" style={{
          borderLeft: `6px solid ${cat.color}`, borderRadius: '32px',
          padding: '24px', background: '#111', color: '#fff',
          textAlign: 'left', display: 'flex', flexDirection: 'column',
          overflow: 'hidden', minWidth: '320px', maxWidth: '420px', width: '100%'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
            <Icon size={18} color={cat.color} />
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>{cat.name}</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem 1.25rem', flex: 1 }}>
            {cat.skills.map((s, i) => (
              <div key={s.name} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'rgba(255,255,255,0.9)', display: 'flex', alignItems: 'center', gap: '5px', whiteSpace: 'nowrap' }}>
                    {s.icon} {s.name}
                  </span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#fff' }}>{s.pct}%</span>
                </div>
                <div style={{ height: '5px', background: 'rgba(255,255,255,0.1)', borderRadius: '999px', overflow: 'hidden' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1, ease: [0.33, 1, 0.68, 1] }}
                    style={{ height: '100%', background: `linear-gradient(90deg, #fff, rgba(255,255,255,0.5))`, borderRadius: '999px' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Skills = () => (
  <section id="skills" style={{ padding: '100px 0', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <div className="container" style={{ padding: '0 4rem', maxWidth: '850px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ fontSize: '4.5rem', fontWeight: 900, letterSpacing: '-0.04em', textTransform: 'uppercase', lineHeight: 1.1, textAlign: 'center', marginBottom: '1rem' }}
        >
          My <span style={{ color: 'var(--text-secondary)' }}>Arsenal</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{ color: 'var(--text-secondary)', marginTop: '0', marginBottom: '4rem', fontSize: '1.25rem', textAlign: 'center' }}
        >
          Hover over a card to reveal our secrets
        </motion.p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '2rem',
          padding: '1rem',
        }}
      >
        {skillCategories.map((cat, i) => (
          <SkillCard key={cat.name} cat={cat} index={i} />
        ))}
      </div>

      {/* View All Skills Button */}
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
            to="/skills"
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
            Explore All Skills
          </Link>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

// ==========================
// EDUCATION — CONSTELLATION MAP
// ==========================
const eduConstellationData = [
  {
    degree: "B.Tech — Computer Science",
    field: "Computer Science and Engineering",
    institution: "Lovely Professional University",
    year: "Aug '23 – Present",
    description: "Currently pursuing Bachelor of Technology. Maintaining a CGPA of 8.26.",
    grade: "8.26 CGPA",
    cx: 72, cy: 25, label: "LPU", labelSide: "right",
  },
  {
    degree: "Intermediate (12th)",
    field: "PCM — Physics, Chemistry, Math",
    institution: "Lord Mahavira Jain Public School",
    year: "Apr '22 – Mar '23",
    description: "Focused on Mathematics, Physics, and Chemistry. Scored 85.2% overall.",
    grade: "85.2%",
    cx: 25, cy: 55, label: "LMJ School", labelSide: "left",
  },
  {
    degree: "Matriculation (10th)",
    field: "General — Secondary Education",
    institution: "Lord Mahavira Jain Public School",
    year: "Apr '20 – Mar '21",
    description: "Completed secondary education with distinction. Scored 92% overall.",
    grade: "92%",
    cx: 60, cy: 80, label: "LMJ School", labelSide: "right",
  },
];

const BGS = [
  {cx:10,cy:10,r:0.6,d:2.1,dl:0.3},{cx:88,cy:15,r:0.4,d:1.8,dl:0.9},{cx:45,cy:8,r:0.5,d:2.4,dl:0.5},
  {cx:92,cy:60,r:0.7,d:1.6,dl:1.2},{cx:5,cy:75,r:0.4,d:2.7,dl:0},{cx:60,cy:6,r:0.3,d:1.9,dl:0.7},
  {cx:18,cy:88,r:0.5,d:2.2,dl:1.5},{cx:82,cy:45,r:0.6,d:1.7,dl:0.2},{cx:35,cy:90,r:0.4,d:2.5,dl:1.1},
  {cx:76,cy:92,r:0.5,d:2,dl:0.6},{cx:50,cy:95,r:0.3,d:1.5,dl:1.8},{cx:15,cy:40,r:0.4,d:2.3,dl:0.4},
  {cx:90,cy:35,r:0.3,d:1.9,dl:0.8},{cx:65,cy:40,r:0.4,d:2.6,dl:1.3},{cx:22,cy:20,r:0.5,d:2,dl:0.1},
  {cx:80,cy:75,r:0.4,d:1.7,dl:1.6},{cx:38,cy:70,r:0.3,d:2.4,dl:0.9},{cx:5,cy:55,r:0.6,d:1.5,dl:1.4},
];

const LINES = [
  {i:0,j:1},{i:1,j:2},{i:0,j:2},
];

const ConstellationEducation = () => {
  const [active, setActive] = React.useState(null);
  const [linesOn, setLinesOn] = React.useState(false);
  const [starsOn, setStarsOn] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setTimeout(() => setStarsOn(true), 100);
        setTimeout(() => setLinesOn(true), 600);
      }
    }, { threshold: 0.25 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="education" ref={ref} style={{ padding: '100px 0', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
      {/* Dark starfield vignette */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,0,0,0.02) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="container" style={{ padding: '0 4rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <p style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
            Constellation
          </p>
          <h2 style={{ fontSize: '4.5rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.04em', lineHeight: 1 }}>
            My <span style={{ color: 'var(--text-secondary)' }}>Education</span>
          </h2>
          <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', fontSize: '1rem' }}>
            Each school is a star — hover to illuminate the path.
          </p>
        </motion.div>

        <div style={{ position: 'relative', maxWidth: '820px', margin: '0 auto' }}>
          <svg viewBox="0 0 100 100" style={{ width: '100%', aspectRatio: '4/3', overflow: 'visible' }}>
            <defs>
              <style>{`
                @keyframes tw { 0%,100%{opacity:.25;r:0.35;} 50%{opacity:1;r:0.7;} }
                @keyframes drawL { from{stroke-dashoffset:200} to{stroke-dashoffset:0} }
                @keyframes ringPulse { 0%{r:2;opacity:.8} 100%{r:6;opacity:0} }
                @keyframes starPop { from{opacity:0;r:0} to{opacity:1} }
                .bg-tw { animation: tw var(--d) var(--dl) ease-in-out infinite; }
                .cl { stroke-dasharray:200; animation: drawL 1.4s ease forwards; }
              `}</style>
              <filter id="glow"><feGaussianBlur stdDeviation="1.2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
              <filter id="bigGlow"><feGaussianBlur stdDeviation="2.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
            </defs>

            {/* Background twinkling stars */}
            {BGS.map((s, i) => (
              <circle key={i} className="bg-tw" cx={s.cx} cy={s.cy} r={s.r} fill="#111"
                style={{ '--d': `${s.d}s`, '--dl': `${s.dl}s` }} />
            ))}

            {/* Connection lines */}
            {LINES.map((l, i) => {
              const a = eduConstellationData[l.i], b = eduConstellationData[l.j];
              return (
                <line key={i}
                  className={linesOn ? 'cl' : ''}
                  x1={a.cx} y1={a.cy} x2={b.cx} y2={b.cy}
                  stroke="#000" strokeWidth="0.35" strokeLinecap="round"
                  strokeOpacity="0.25"
                  style={{ opacity: linesOn ? 1 : 0, animationDelay: `${i * 0.45}s` }}
                />
              );
            })}

            {/* Star nodes */}
            {eduConstellationData.map((edu, i) => {
              const isActive = active === i;
              return (
                <g key={i}
                  style={{ cursor: 'pointer', opacity: starsOn ? 1 : 0, transition: `opacity 0.6s ease ${i * 0.35 + 0.2}s` }}
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  onClick={() => setActive(active === i ? null : i)}
                >
                  {/* Pulsing ring */}
                  {isActive && <>
                    <circle cx={edu.cx} cy={edu.cy} r="3" fill="none" stroke="#000" strokeWidth="0.25"
                      style={{ animation: 'ringPulse 1.4s ease-out infinite' }} />
                    <circle cx={edu.cx} cy={edu.cy} r="3" fill="none" stroke="#000" strokeWidth="0.25"
                      style={{ animation: 'ringPulse 1.4s ease-out 0.6s infinite' }} />
                  </>}
                  {/* Glow halo */}
                  <circle cx={edu.cx} cy={edu.cy} r={isActive ? 3.5 : 2.2}
                    fill={isActive ? 'rgba(0,0,0,0.07)' : 'rgba(0,0,0,0.03)'}
                    style={{ transition: 'all 0.35s ease' }} />
                  {/* Main star */}
                  <circle cx={edu.cx} cy={edu.cy} r={isActive ? 2.2 : 1.6}
                    fill={isActive ? '#000' : '#222'}
                    filter={isActive ? 'url(#bigGlow)' : 'url(#glow)'}
                    style={{ transition: 'all 0.35s ease' }} />
                  {/* Bright core */}
                  <circle cx={edu.cx} cy={edu.cy} r={isActive ? 0.85 : 0.55}
                    fill="#fff"
                    style={{ transition: 'all 0.35s ease' }} />
                  {/* Label */}
                  <text
                    x={edu.labelSide === 'right' ? edu.cx + 3 : edu.cx - 3}
                    y={edu.cy - 0.5}
                    textAnchor={edu.labelSide === 'right' ? 'start' : 'end'}
                    fontSize="2.8" fontWeight="800" fill="#000" fontFamily="inherit"
                    style={{ opacity: isActive ? 1 : 0.7, transition: 'opacity 0.3s' }}
                  >{edu.label}</text>
                  <text
                    x={edu.labelSide === 'right' ? edu.cx + 3 : edu.cx - 3}
                    y={edu.cy + 2.8}
                    textAnchor={edu.labelSide === 'right' ? 'start' : 'end'}
                    fontSize="1.9" fill="#666" fontFamily="inherit"
                  >{edu.year}</text>
                </g>
              );
            })}
          </svg>

          {/* Floating Info Cards */}
          {eduConstellationData.map((edu, i) => {
            const isActive = active === i;
            const leftCalc = edu.labelSide === 'right'
              ? `calc(${edu.cx}% + 2.5%)`
              : `calc(${edu.cx}% - 43%)`;
            return (
              <motion.div key={i}
                initial={false}
                animate={isActive ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.88, y: 8 }}
                transition={{ duration: 0.3, ease: [0.2, 1, 0.3, 1] }}
                style={{
                  position: 'absolute',
                  top: `calc(${edu.cy}% - 72px)`,
                  left: leftCalc,
                  width: '250px',
                  pointerEvents: isActive ? 'auto' : 'none',
                  background: 'rgba(255,255,255,0.97)',
                  backdropFilter: 'blur(24px)',
                  border: '1px solid rgba(0,0,0,0.1)',
                  borderRadius: '20px',
                  padding: '1.25rem 1.5rem',
                  boxShadow: '0 24px 48px rgba(0,0,0,0.14)',
                  zIndex: 30,
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-secondary)' }}>
                    {edu.year}
                  </span>
                  <span style={{ background: '#000', color: '#fff', fontSize: '0.72rem', fontWeight: 900, padding: '3px 10px', borderRadius: '999px' }}>
                    {edu.grade}
                  </span>
                </div>
                <h3 style={{ fontSize: '0.92rem', fontWeight: 900, color: '#000', lineHeight: 1.3, marginBottom: '0.3rem' }}>
                  {edu.degree}
                </h3>
                <p style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', fontWeight: 700, marginBottom: '0.4rem' }}>
                  {edu.field}
                </p>
                <p style={{ fontSize: '0.76rem', color: '#777', lineHeight: 1.5 }}>
                  {edu.institution}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ delay: 1.8 }}
          style={{ textAlign: 'center', marginTop: '2.5rem', color: 'var(--text-secondary)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase' }}
        >
          ✦ &nbsp; Hover a star to reveal details &nbsp; ✦
        </motion.p>
      </div>
    </section>
  );
};

export const Education = ConstellationEducation;


// ==========================
// CONTACT
// ==========================
// ==========================
// CONTACT
// ==========================
export const Contact = () => (
  <section id="contact" style={{ padding: '100px 0', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <div className="container" style={{ padding: '0 4rem' }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="glass"
        style={{ maxWidth: '56rem', margin: '0 auto', padding: '4rem', borderRadius: '1.5rem', border: '4px solid black', textAlign: 'center' }}
      >
        <motion.h2
          variants={revealVariants}
          style={{ fontSize: '4.5rem', fontWeight: 900, marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '-0.04em', textAlign: 'center' }}
        >
          Let's <span style={{ color: 'var(--text-secondary)' }}>Talk</span>
        </motion.h2>

        <motion.p
          variants={revealVariants}
          style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '3rem' }}
        >
          Have a project in mind or just want to say hi?
        </motion.p>

        <motion.div
          variants={revealVariants}
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '3rem', marginBottom: '3rem' }}
        >
          {[{ icon: Mail, label: 'Email', href: 'mailto:sapravedika1234@gmail.com' }, { icon: Download, label: 'CV', href: '/resume.pdf' }, { icon: Phone, label: 'WhatsApp', href: 'https://wa.me/919988147402' }, { icon: Github, label: 'Github', href: 'https://github.com/VedikaSapra' }, { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/vedika-sapra-12' }].map(({ icon: Icon, label, href }) => (
            <a key={label} href={href} target={href.startsWith('http') || href.endsWith('.pdf') ? "_blank" : "_self"} rel={href.startsWith('http') ? "noopener noreferrer" : ""} download={href.endsWith('.pdf')} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.25rem', fontWeight: 700, color: 'inherit', textDecoration: 'none', transition: 'transform 0.3s' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
              <Icon size={28} /> {label}
            </a>
          ))}
        </motion.div>

        <motion.form
          variants={revealVariants}
          action="https://formsubmit.co/sapravedika1234@gmail.com"
          method="POST"
          style={{ marginTop: '2rem', textAlign: 'left' }}
        >
          {/* Honeypot & configuration for FormSubmit */}
          <input type="text" name="_honey" style={{ display: 'none' }} />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="box" />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
            <input type="text" name="name" required placeholder="Your Name" style={{ width: '100%', padding: '1.25rem', fontSize: '1rem', background: 'transparent', border: 'none', borderBottom: '3px solid black', outline: 'none', fontFamily: 'inherit' }} />
            <input type="email" name="email" required placeholder="Your Email" style={{ width: '100%', padding: '1.25rem', fontSize: '1rem', background: 'transparent', border: 'none', borderBottom: '3px solid black', outline: 'none', fontFamily: 'inherit' }} />
          </div>
          <textarea name="message" required placeholder="Your Message" rows="4" style={{ width: '100%', padding: '1.25rem', fontSize: '1rem', background: 'transparent', border: 'none', borderBottom: '3px solid black', outline: 'none', marginBottom: '2rem', fontFamily: 'inherit', resize: 'vertical' }}></textarea>
          <button type="submit" style={{ padding: '1rem 3rem', background: 'black', color: 'white', fontSize: '1rem', fontWeight: 700, border: 'none', borderRadius: '9999px', cursor: 'pointer', fontFamily: 'inherit', transition: 'transform 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
            Send Message
          </button>
        </motion.form>
      </motion.div>
    </div>
  </section>
);


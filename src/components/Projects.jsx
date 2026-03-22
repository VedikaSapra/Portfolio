import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { Github, ExternalLink, CheckSquare, ShoppingBag, Mic } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "LuminaTask",
    category: "Full Stack Task Management",
    icon: CheckSquare,
    problem: "Users struggled with fragmented task tracking and lack of real-time collaboration in existing solutions.",
    description: "Built a multi-tenant SaaS with real-time Django Channels + React Kanban boards, automated reminders, and role-based access.",
    tech: ["Django", "React", "PostgreSQL", "Redis", "WebSockets"],
    color: "#ffffff",
    accent: "#000000",
    github: "https://github.com/VedikaSapra/LuminaTask--task-managment-system",
    demo: "https://lumina-task-task-managment-system-v.vercel.app/",
  },
  {
    id: 2,
    title: "Super Furniture House",
    category: "E-Commerce Platform",
    icon: ShoppingBag,
    problem: "Furniture retailers lacked an engaging online presence with robust inventory management.",
    description: "Crafted a premium e-commerce site with product filtering, 3D-like cards, Stripe checkout, and a headless CMS for stock management.",
    tech: ["Node.js", "Express", "React", "MongoDB", "Stripe"],
    color: "#ffffff",
    accent: "#000000",
    github: "https://github.com/VedikaSapra/FullStackProject",
    demo: "https://full-stack-project-8jr2.vercel.app/",
  },
  {
    id: 3,
    title: "PodcastPro",
    category: "Podcast Hosting & Listening",
    icon: Mic,
    problem: "Podcasters needed a cost-effective hosting platform with real-time listener analytics.",
    description: "Developed an all-in-one platform with RSS feed generation, AWS S3 audio storage, live analytics dashboard, and a media player.",
    tech: ["React", "Fast-API", "AWS S3", "SQLite", "Python"],
    color: "#ffffff",
    accent: "#000000",
    github: "https://github.com/VedikaSapra/podcast-website",
    demo: "http://podcastpro.infinityfree.me/",
  },
];

const ProjectCard = ({ project, i, progress, range, targetScale }) => {
  // Theme logic: index 0 (black), 1 (white), 2 (black)...
  const isDark = i % 2 === 0;
  const theme = {
    bg: isDark ? '#000000' : '#ffffff',
    text: isDark ? '#ffffff' : '#000000',
    subText: isDark ? 'rgba(255,255,255,0.6)' : '#555',
    iconBg: isDark ? 'rgba(255,255,255,0.1)' : '#f1f1f1',
    iconBorder: isDark ? 'rgba(255,255,255,0.2)' : '#d1d5db',
    problemBg: isDark ? 'rgba(255,255,255,0.07)' : '#efefef',
    problemBorder: isDark ? 'rgba(255,255,255,0.2)' : '#555',
    pillBg: isDark ? 'rgba(255,255,255,0.1)' : '#eee',
    pillBorder: isDark ? 'rgba(255,255,255,0.3)' : '#111827',
    repoBg: isDark ? 'rgba(255,255,255,0.15)' : '#e8e8e8',
    repoText: isDark ? '#ffffff' : '#111',
    demoBg: isDark ? '#ffffff' : '#0f1a2b',
    demoText: isDark ? '#000000' : '#ffffff',
  };

  // 3D Tilt Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { damping: 20, stiffness: 300 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { damping: 20, stiffness: 300 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xc = x / width - 0.5;
    const yc = y / height - 0.5;
    mouseX.set(xc);
    mouseY.set(yc);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Transform scale/opacity based on progress
  const scale = useTransform(progress, range, [1, targetScale]);
  // Also fade the previous card slightly
  const opacity = useTransform(progress, range, [1, 0.8]);
  
  // Custom sticky tops
  const stickyTops = ['80px', '110px', '130px', '150px', '170px'];
  const topOffset = stickyTops[i] || '80px';

  const IconComponent = project.icon;

  return (
    <div style={{ 
      position: 'sticky', 
      top: topOffset, 
      zIndex: i + 1, 
      marginBottom: '200px',
      perspective: '1000px' // Crucial for 3D effect
    }}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          scale,
          opacity,
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          backgroundColor: theme.bg,
          width: '100%',
          maxWidth: '1250px',
          minHeight: '480px',
          maxHeight: '480px',
          borderRadius: '32px',
          padding: '50px 65px',
          boxShadow: isDark 
            ? '0 38px 95px rgba(0, 0, 0, 0.5)' 
            : '0 38px 95px rgba(0, 0, 0, 0.13)',
          marginLeft: 'auto',
          marginRight: 'auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '55px',
          overflow: 'hidden',
          border: isDark ? '1px solid rgba(255,255,255,0.1)' : 'none',
          transition: 'box-shadow 0.35s ease'
        }}
        whileHover={{ boxShadow: isDark ? '0 48px 115px rgba(0, 0, 0, 0.6)' : '0 48px 115px rgba(0, 0, 0, 0.18)' }}
      >
      {/* ── LEFT CONTENT ── */}
      <div style={{ maxWidth: '580px', flex: 1 }}>
        {/* Project Icon Box */}
        <div 
          style={{ 
            width: '52px', 
            height: '52px', 
            backgroundColor: theme.iconBg, 
            borderRadius: '15px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            marginBottom: '16px',
            border: `2px solid ${theme.iconBorder}`,
            transition: 'transform 0.3s ease, background 0.3s ease'
          }}
        >
          <IconComponent size={24} style={{ color: theme.text, transition: 'color 0.3s ease' }} />
        </div>

        {/* Title */}
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ 
            fontSize: '32px', 
            fontWeight: 800, 
            color: theme.text, 
            marginBottom: '10px', 
            letterSpacing: '-0.4px',
            margin: 0
          }}>
            {project.title}
          </h3>
          <div style={{ width: '50px', height: '3px', backgroundColor: theme.text, borderRadius: '4px' }} />
        </div>

        {/* Problem Box */}
        <div style={{ 
          backgroundColor: theme.problemBg, 
          border: `1px solid ${theme.problemBorder}`, 
          borderRadius: '16px', 
          padding: '20px', 
          marginBottom: '20px'
        }}>
          <span style={{ 
            color: isDark ? 'rgba(255,255,255,0.4)' : '#888', 
            fontSize: '12px', 
            letterSpacing: '2px', 
            display: 'block', 
            marginBottom: '6px',
            fontWeight: 700
          }}>PROBLEM</span>
          <p style={{ 
            color: theme.text, 
            fontSize: '14px', 
            lineHeight: 1.55,
            margin: 0
          }}>
            {project.problem}
          </p>
        </div>

        {/* Brief Description */}
        <p style={{ 
          color: theme.subText, 
          fontSize: '16px', 
          lineHeight: 1.6,
          marginBottom: '20px',
          margin: 0
        }}>
          {project.description}
        </p>

        {/* Tech stack pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
          {project.tech.map((skill, index) => (
            <motion.span 
              key={index} 
              whileHover={{ y: -2 }}
              style={{ 
                padding: '7px 14px', 
                backgroundColor: theme.pillBg, 
                border: `1px solid ${theme.pillBorder}`, 
                borderRadius: '18px', 
                color: theme.text, 
                fontSize: '13px', 
                cursor: 'default',
                transition: 'background 0.25s ease, color 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = theme.text;
                e.currentTarget.style.color = theme.bg;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = theme.pillBg;
                e.currentTarget.style.color = theme.text;
              }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>

      {/* ── RIGHT ACTIONS ── */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '30px', 
        alignItems: 'center',
        minWidth: '100px'
      }}>
        <motion.a
          href={project.github}
          whileHover={{ scale: 1.05, y: -6 }}
          whileTap={{ scale: 0.95 }}
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: '10px', 
            width: '95px', 
            height: '95px', 
            backgroundColor: theme.repoBg, 
            borderRadius: '24px', 
            boxShadow: '0 10px 24px rgba(0, 0, 0, 0.08)',
            textDecoration: 'none',
            color: theme.repoText,
            fontSize: '14px',
            fontWeight: 600
          }}
        >
          <Github size={26} />
          <span style={{ fontSize: '10px' }}>REPO</span>
        </motion.a>

        <motion.a
          href={project.demo}
          whileHover={{ scale: 1.06, y: -8 }}
          whileTap={{ scale: 0.95 }}
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: '10px', 
            width: '95px', 
            height: '95px', 
            backgroundColor: theme.demoBg, 
            borderRadius: '24px', 
            boxShadow: '0 20px 48px rgba(0, 0, 0, 0.25)',
            textDecoration: 'none',
            color: theme.demoText,
            fontSize: '14px',
            fontWeight: 600
          }}
        >
          <ExternalLink size={26} />
          <span style={{ fontSize: '10px' }}>DEMO</span>
        </motion.a>
      </div>
    </motion.div>
    </div>
  );
};

const Projects = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <section 
      id="projects" 
      ref={container} 
      style={{ 
        position: 'relative', 
        padding: '130px 0 200px', 
        minHeight: '400vh',
        overflow: 'visible'
      }}
    >
      

      <div style={{ 
        width: '90%', 
        maxWidth: '1250px', 
        margin: 'auto', 
        position: 'relative', 
        zIndex: 2 
      }}>
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           style={{ marginBottom: '100px' }}
        >
          <h2 style={{ fontSize: '4.5rem', fontWeight: 900, marginBottom: '1rem', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '-0.04em' }}>
        SELECTED <span style={{ color: 'var(--text-secondary)' }}>WORKS</span>
      </h2>
          
          <p style={{ maxWidth: '620px', fontSize: '17px', lineHeight: 1.7, textAlign: 'center', color: '#555', margin: 0 }}>
            A collection of digital products crafted with precision.
          </p>
        </motion.div>
        
        <div style={{ position: 'relative' }}>
          {projects.map((project, i) => {
            const isLast = i === projects.length - 1;
            const startRange = (i + 1) * (1 / projects.length);
            const targetScaleValue = 1 - ((projects.length - i) * 0.05);

            return (
              <ProjectCard 
                key={project.id} 
                project={project} 
                i={i}
                progress={scrollYProgress}
                range={[startRange, 1]} 
                targetScale={isLast ? 1 : targetScaleValue} 
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;

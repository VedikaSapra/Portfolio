import React from 'react';
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Milestones from '../components/Milestones';
import Achievements from '../components/Achievements';
import { About, Skills, Education, Contact } from '../components/Sections';
import PortfolioChatbot from '../components/PortfolioChatbot';

const Home = () => {
  return (
    <>
      {/* Animated background blobs from original css */}
      <div className="bg-blob bg-blob-1" />
      <div className="bg-blob bg-blob-2" />
      <div className="bg-blob bg-blob-3" />

      <Sidebar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Milestones />
        <Achievements />
        <Contact />
      </main>

      <PortfolioChatbot />

      <footer style={{ padding: '2.5rem 0', textAlign: 'center', color: 'var(--text-secondary)', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
        <div className="container">
          <p>© {new Date().getFullYear()} · <strong>Vedika</strong> · Built with Passion &amp; Code</p>
        </div>
      </footer>
    </>
  );
};

export default Home;

import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { loadFull } from "tsparticles";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import AllCertificates from './pages/AllCertificates';
import AllSkills from './pages/AllSkills';
import TopNavbar from './components/TopNavbar';

function App() {
  const [init, setInit] = useState(false);
  const location = useLocation();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <div className="App">
      <TopNavbar />
      {init && (
        <Particles
          id="tsparticles"
          options={{
            fullScreen: { enable: true, zIndex: 0 },
            background: { color: "transparent" },
            particles: {
              number: { value: 80, density: { enable: true, area: 800 } },
              color: { value: "#111111" },
              shape: { type: "circle" },
              opacity: { value: 0.2 },
              size: { value: { min: 1, max: 3 } },
              links: {
                enable: true,
                distance: 150,
                color: "#111111",
                opacity: 0.15,
                width: 1,
              },
              move: {
                enable: true,
                speed: 0.8,
                direction: "none",
                random: false,
                straight: false,
                outModes: { default: "out" },
              },
            },
            interactivity: {
              detectsOn: "window",
              events: {
                onHover: { enable: true, mode: "grab" },
                onClick: { enable: true, mode: "push" },
              },
              modes: {
                grab: { distance: 200, links: { opacity: 0.4 } },
                push: { quantity: 4 },
              },
            },
            retina_detect: true,
          }}
        />
      )}

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/certificates" element={<AllCertificates />} />
          <Route path="/skills" element={<AllSkills />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;

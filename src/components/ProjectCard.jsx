import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-10 mb-20 rounded-3xl glass transition-all hover:shadow-2xl"
      style={{ borderLeft: '8px solid black' }}
    >
      <div className="flex justify-between items-start mb-10">
        <div>
          <h3 className="text-4xl font-bold mb-2">{project.title}</h3>
          <p className="text-secondary font-medium tracking-wide uppercase">{project.category}</p>
        </div>
        <div className="flex gap-4">
          <motion.a href={project.github} whileHover={{ scale: 1.1 }} className="p-3 bg-black text-white rounded-full">
            <Github size={24} />
          </motion.a>
          {project.demo && (
            <motion.a href={project.demo} whileHover={{ scale: 1.1 }} className="p-3 border-2 border-black rounded-full">
              <ExternalLink size={24} />
            </motion.a>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h4 className="font-bold text-lg mb-4 underline decoration-4 underline-offset-8">THE PROBLEM</h4>
          <p className="text-secondary leading-relaxed">{project.problem}</p>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4 underline decoration-4 underline-offset-8">THE SOLUTION</h4>
          <p className="text-secondary leading-relaxed">{project.solution}</p>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4 underline decoration-4 underline-offset-8">TECH STACK</h4>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tech.map((t, i) => (
              <span key={i} className="px-4 py-2 bg-black text-white text-sm font-semibold rounded-lg">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

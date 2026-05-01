'use client';

import { projects } from '@/data/projects';
import { ExternalLink, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeInOnScroll, StaggerContainer, StaggerItem, ScaleOnScroll } from './AnimationWrappers';

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="bg-gradient-to-b from-slate-950 to-slate-900 py-24 px-6 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <FadeInOnScroll>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              Featured
            </motion.span>
            {' '}
            <motion.span
              className="inline-block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Projects
            </motion.span>
          </h2>
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.1}>
          <p className="text-xl text-slate-400 mb-16">Data-driven solutions and analytics systems</p>
        </FadeInOnScroll>

        {/* Projects Grid with stagger animations */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/60 rounded-xl overflow-hidden group duration-300 flex flex-col"
              variants={itemVariants}
              whileHover={{
                borderColor: 'rgba(34, 211, 238, 0.4)',
                boxShadow: '0 25px 50px rgba(34, 211, 238, 0.1)',
              }}
            >
              {/* Project image with parallax and overlay */}
              {project.image && (
                <motion.div
                  className="h-64 bg-gradient-to-br from-slate-700 to-slate-900 overflow-hidden relative"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.6 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              )}

              {/* Project content */}
              <motion.div
                className="p-8 flex flex-col flex-1"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.1 + 0.1 }}
                viewport={{ once: true }}
              >
                <motion.h3
                  className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition"
                  whileHover={{ x: 5 }}
                >
                  {project.title}
                </motion.h3>

                <motion.p
                  className="text-slate-300 mb-6 leading-relaxed flex-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 + 0.15 }}
                  viewport={{ once: true }}
                >
                  {project.description}
                </motion.p>

                {/* Tech stack with stagger */}
                <motion.div
                  className="flex flex-wrap gap-2 mb-6"
                  initial="hidden"
                  whileInView="visible"
                  transition={{ staggerChildren: 0.05, delayChildren: idx * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                >
                  {project.tech.map((tech) => (
                    <motion.span
                      key={tech}
                      className="text-xs bg-purple-900/40 text-purple-200 px-3 py-1.5 rounded-lg border border-purple-700/40 font-medium hover:border-purple-500/60 transition"
                      variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 },
                      }}
                      whileHover={{ scale: 1.08 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Links with hover effects */}
                <motion.div
                  className="flex gap-3 pt-4 border-t border-slate-700/40"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 + 0.25 }}
                  viewport={{ once: true }}
                >
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-lg transition duration-300"
                      whileHover={{ scale: 1.08, boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </motion.a>
                  )}
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 border-2 border-slate-600 hover:border-cyan-500 text-slate-300 hover:text-cyan-400 font-semibold rounded-lg transition duration-300"
                      whileHover={{ scale: 1.08, borderColor: 'rgba(34, 211, 238, 1)', color: 'rgb(34, 211, 238)' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Code2 size={18} />
                      Code
                    </motion.a>
                  )}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

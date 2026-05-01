'use client';

import { Download, FileText, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeInOnScroll, ScaleOnScroll, CountUpAnimation } from './AnimationWrappers';

export default function Resume() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="resume" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 px-6 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <FadeInOnScroll>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-20">
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              Resume
            </motion.span>
          </h2>
        </FadeInOnScroll>

        {/* Main grid layout */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* LEFT: CTA Section */}
          <motion.div
            className="lg:col-span-5 bg-gradient-to-br from-blue-900/40 to-blue-950/40 border border-blue-500/30 p-12 rounded-xl flex flex-col justify-between"
            variants={itemVariants}
            whileHover={{
              borderColor: 'rgba(59, 130, 246, 0.6)',
              boxShadow: '0 25px 50px rgba(59, 130, 246, 0.15)',
            }}
          >
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6"
                whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)' }}
              >
                <FileText size={32} className="text-white" />
              </motion.div>

              <motion.h3
                className="text-3xl font-bold text-white mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                viewport={{ once: true }}
              >
                My Resume
              </motion.h3>

              <motion.p
                className="text-slate-300 text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Complete professional history, education, certifications, and technical skills in one document.
              </motion.p>
            </motion.div>

            {/* Actions with stagger */}
            <motion.div
              className="flex flex-col gap-3"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: 0.25 },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold rounded-lg transition duration-300"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                whileHover={{ scale: 1.08, boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                Download PDF
              </motion.a>

              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950 font-bold rounded-lg transition duration-300"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                whileHover={{ scale: 1.08, borderColor: 'rgba(34, 211, 238, 1)' }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={20} />
                View Online
              </motion.a>
            </motion.div>
          </motion.div>

          {/* RIGHT: Quick Stats */}
          <motion.div
            className="lg:col-span-7"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="grid grid-cols-2 gap-6">
              {[
                { count: 4, label: 'Years Experience', sublabel: 'In analytics and data engineering', color: 'blue' },
                { count: 5, label: 'Key Roles', sublabel: 'Analytics & engineering positions', color: 'purple' },
                { count: 2, label: 'Certifications', sublabel: 'Professional credentials', color: 'cyan' },
                { count: 20, label: 'Technologies', sublabel: 'Tools and platforms mastered', color: 'pink' },
              ].map((stat, idx) => (
                <ScaleOnScroll key={idx} delay={idx * 0.1}>
                  <motion.div
                    className={`bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/60 p-8 rounded-xl text-center`}
                    variants={itemVariants}
                    whileHover={{
                      borderColor: `rgba(${
                        stat.color === 'blue'
                          ? '59, 130, 246'
                          : stat.color === 'purple'
                            ? '168, 85, 247'
                            : stat.color === 'cyan'
                              ? '34, 211, 238'
                              : '236, 72, 153'
                      }, 0.4)`,
                      scale: 1.05,
                      boxShadow: `0 15px 35px rgba(${
                        stat.color === 'blue'
                          ? '59, 130, 246'
                          : stat.color === 'purple'
                            ? '168, 85, 247'
                            : stat.color === 'cyan'
                              ? '34, 211, 238'
                              : '236, 72, 153'
                      }, 0.1)`,
                    }}
                  >
                    <motion.div
                      className={`text-5xl font-bold mb-3 ${
                        stat.color === 'blue'
                          ? 'text-blue-400'
                          : stat.color === 'purple'
                            ? 'text-purple-400'
                            : stat.color === 'cyan'
                              ? 'text-cyan-400'
                              : 'text-pink-400'
                      }`}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: idx * 0.1 + 0.2 }}
                      viewport={{ once: true }}
                    >
                      {stat.count}
                      {stat.count >= 2 && stat.count < 20 ? (stat.count === 4 ? '+' : '') : stat.count === 20 ? '+' : ''}
                    </motion.div>

                    <motion.p
                      className="text-slate-300 font-medium"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: idx * 0.1 + 0.25 }}
                      viewport={{ once: true }}
                    >
                      {stat.label}
                    </motion.p>

                    <motion.p
                      className="text-slate-500 text-sm mt-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: idx * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                    >
                      {stat.sublabel}
                    </motion.p>
                  </motion.div>
                </ScaleOnScroll>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

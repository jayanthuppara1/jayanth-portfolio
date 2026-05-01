'use client';

import { experiences } from '@/data/experience';
import { MapPin, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeInOnScroll, StaggerContainer, StaggerItem, SlideUpOnScroll } from './AnimationWrappers';

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="experience" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 px-6 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

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
              Experience
            </motion.span>
          </h2>
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.1}>
          <p className="text-xl text-slate-400 mb-20">4+ years in analytics and data engineering</p>
        </FadeInOnScroll>

        {/* Desktop timeline */}
        <div className="hidden lg:block">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {experiences.map((exp, idx) => (
              <motion.div key={exp.id} className="relative mb-20" variants={itemVariants}>
                {/* Animated timeline line */}
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-500 to-blue-500 -top-12"
                  initial={{ height: 0 }}
                  whileInView={{ height: '100%' }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                />

                {/* Animated timeline dot */}
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-cyan-500 rounded-full border-4 border-slate-950 top-0 z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: idx * 0.15 }}
                  whileHover={{ scale: 1.3, boxShadow: '0 0 20px rgba(34, 211, 238, 0.8)' }}
                  viewport={{ once: true }}
                />

                {/* Content grid */}
                <div className="grid grid-cols-12 gap-8">
                  {/* LEFT: Timeline info */}
                  <motion.div
                    className="col-span-5 text-right pr-8"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.15 + 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                      {exp.company}
                    </h3>
                    <p className="text-slate-400 text-sm mb-3 flex items-center justify-end gap-2">
                      <Calendar size={16} />
                      {exp.period}
                    </p>
                    <p className="text-slate-500 text-sm flex items-center justify-end gap-2">
                      <MapPin size={16} />
                      {exp.location}
                    </p>
                  </motion.div>

                  {/* RIGHT: Content card with hover effects */}
                  <motion.div
                    className="col-span-7 bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/60 p-10 rounded-xl transition duration-300"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.15 + 0.2 }}
                    whileHover={{
                      borderColor: 'rgba(34, 211, 238, 0.4)',
                      boxShadow: '0 20px 40px rgba(34, 211, 238, 0.1)',
                      y: -5,
                    }}
                    viewport={{ once: true }}
                  >
                    <motion.h4
                      className="text-2xl font-bold text-white mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: idx * 0.15 + 0.3 }}
                      viewport={{ once: true }}
                    >
                      {exp.title}
                    </motion.h4>

                    <motion.p
                      className="text-slate-300 mb-6 leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: idx * 0.15 + 0.35 }}
                      viewport={{ once: true }}
                    >
                      {exp.description}
                    </motion.p>

                    {/* Accomplishments with stagger */}
                    <div className="mb-6">
                      <motion.h5
                        className="text-sm font-bold text-blue-400 mb-4 uppercase tracking-wider"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: idx * 0.15 + 0.4 }}
                        viewport={{ once: true }}
                      >
                        Key Accomplishments
                      </motion.h5>
                      <motion.ul
                        className="space-y-3"
                        initial="hidden"
                        whileInView="visible"
                        transition={{ staggerChildren: 0.05, delayChildren: idx * 0.15 + 0.45 }}
                        viewport={{ once: true }}
                      >
                        {exp.accomplishments.map((acc, accIdx) => (
                          <motion.li
                            key={accIdx}
                            className="flex gap-3 text-slate-300 text-sm leading-relaxed group"
                            variants={{
                              hidden: { opacity: 0, x: -10 },
                              visible: { opacity: 1, x: 0 },
                            }}
                            whileHover={{ x: 5 }}
                          >
                            <span className="text-cyan-400 font-bold flex-shrink-0 mt-0.5">→</span>
                            <span>{acc}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </div>

                    {/* Skills with stagger */}
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      transition={{ staggerChildren: 0.05, delayChildren: idx * 0.15 + 0.6 }}
                      viewport={{ once: true }}
                    >
                      <motion.h5
                        className="text-sm font-bold text-purple-400 mb-3 uppercase tracking-wider"
                        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                      >
                        Technologies
                      </motion.h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <motion.span
                            key={skill}
                            className="px-3 py-2 bg-blue-900/40 border border-blue-500/40 text-blue-300 text-xs font-medium rounded-lg hover:border-blue-400/60 transition"
                            variants={{
                              hidden: { opacity: 0, scale: 0.8 },
                              visible: { opacity: 1, scale: 1 },
                            }}
                            whileHover={{ scale: 1.08, borderColor: 'rgba(96, 165, 250, 0.8)' }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile/Tablet layout */}
        <div className="lg:hidden">
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {experiences.map((exp) => (
              <motion.div
                key={exp.id}
                className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/60 p-8 rounded-xl hover:border-cyan-500/40 transition duration-300"
                variants={itemVariants}
                whileHover={{ y: -5, borderColor: 'rgba(34, 211, 238, 0.4)' }}
              >
                <motion.div className="mb-4">
                  <motion.h3
                    className="text-2xl font-bold text-white"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {exp.title}
                  </motion.h3>
                  <motion.p
                    className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold text-lg"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    {exp.company}
                  </motion.p>
                </motion.div>

                <motion.div
                  className="flex gap-4 text-sm text-slate-400 mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    {exp.location}
                  </div>
                </motion.div>

                <motion.p
                  className="text-slate-300 mb-4 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {exp.description}
                </motion.p>

                <motion.div
                  className="mb-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.h4
                    className="text-sm font-bold text-blue-400 mb-2 uppercase"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                  >
                    Key Accomplishments
                  </motion.h4>
                  <motion.ul
                    className="space-y-2"
                    variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                  >
                    {exp.accomplishments.map((acc, idx) => (
                      <motion.li
                        key={idx}
                        className="flex gap-2 text-slate-300 text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.25 + idx * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <span className="text-cyan-400">→</span>
                        <span>{acc}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-sm font-bold text-purple-400 mb-2 uppercase">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        className="px-2 py-1 bg-blue-900/40 border border-blue-500/40 text-blue-300 text-xs rounded"
                        whileHover={{ scale: 1.08 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

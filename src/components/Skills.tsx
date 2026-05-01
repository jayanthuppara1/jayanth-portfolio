'use client';

import { skills } from '@/data/skills';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeInOnScroll, CountUpAnimation, StaggerContainer, StaggerItem, ScaleOnScroll } from './AnimationWrappers';

export default function Skills() {
  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case 'Expert':
        return 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white';
      case 'Advanced':
        return 'bg-blue-500/60 text-blue-100';
      case 'Intermediate':
        return 'bg-slate-600/60 text-slate-200';
      default:
        return 'bg-slate-700/60 text-slate-300';
    }
  };

  const getStars = (proficiency: string) => {
    switch (proficiency) {
      case 'Expert':
        return 5;
      case 'Advanced':
        return 4;
      case 'Intermediate':
        return 3;
      default:
        return 2;
    }
  };

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

  const skillItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 px-6 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <FadeInOnScroll>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-3">
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              Skills &
            </motion.span>
            {' '}
            <motion.span
              className="inline-block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Expertise
            </motion.span>
          </h2>
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.1}>
          <p className="text-xl text-slate-400 mb-20">Comprehensive technical toolkit built over 4+ years</p>
        </FadeInOnScroll>

        {/* Skills Grid with staggered animations */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {skills.map((category, idx) => (
            <motion.div
              key={idx}
              className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/60 p-10 rounded-xl transition duration-300"
              variants={itemVariants}
              whileHover={{
                borderColor: 'rgba(34, 211, 238, 0.4)',
                boxShadow: '0 20px 40px rgba(34, 211, 238, 0.1)',
                y: -5,
              }}
            >
              {/* Category header with animation */}
              <motion.h3
                className="text-xl font-bold text-white mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 + 0.1 }}
                viewport={{ once: true }}
              >
                {category.category}
              </motion.h3>

              {category.description && (
                <motion.p
                  className="text-sm text-slate-400 mb-6 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 + 0.15 }}
                  viewport={{ once: true }}
                >
                  {category.description}
                </motion.p>
              )}

              {/* Skills list with stagger */}
              <motion.div
                className="space-y-4"
                initial="hidden"
                whileInView="visible"
                transition={{ staggerChildren: 0.05, delayChildren: idx * 0.1 + 0.2 }}
                viewport={{ once: true }}
              >
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    className="group"
                    variants={skillItemVariants}
                    whileHover={{ x: 4 }}
                  >
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2 flex-1">
                        <span className="text-slate-200 font-semibold text-sm group-hover:text-cyan-300 transition">
                          {skill.name}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-1">
                        {[...Array(getStars(skill.proficiency))].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                              delay: skillIdx * 0.05 + i * 0.05,
                              duration: 0.3,
                            }}
                            viewport={{ once: true }}
                          >
                            <Star
                              size={14}
                              className="fill-yellow-400 text-yellow-400 group-hover:scale-110 transition"
                            />
                          </motion.div>
                        ))}
                      </div>

                      <motion.span
                        className={`text-xs px-3 py-1 rounded-full font-semibold ${getProficiencyColor(skill.proficiency)}`}
                        whileHover={{ scale: 1.08 }}
                      >
                        {skill.proficiency}
                      </motion.span>
                    </div>

                    {skill.frequency && (
                      <motion.p
                        className="text-xs text-slate-500 mt-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: skillIdx * 0.05 + 0.2 }}
                        viewport={{ once: true }}
                      >
                        {skill.frequency}
                      </motion.p>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary stats with count-up animations */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {[
            { count: 20, label: 'Technologies', color: 'blue' },
            { count: 7, label: 'Skill Categories', color: 'purple' },
            { count: 4, label: 'Years Experience', color: 'cyan' },
            { count: 2, label: 'Certifications', color: 'pink' },
          ].map((stat, idx) => (
            <ScaleOnScroll key={idx} delay={idx * 0.1}>
              <motion.div
                className={`bg-gradient-to-br from-${stat.color}-900/40 to-${stat.color}-950/40 border border-${stat.color}-500/40 p-8 rounded-xl text-center hover:border-${stat.color}-400/60 transition`}
                whileHover={{
                  borderColor: `rgba(${
                    stat.color === 'blue'
                      ? '59, 130, 246'
                      : stat.color === 'purple'
                        ? '168, 85, 247'
                        : stat.color === 'cyan'
                          ? '34, 211, 238'
                          : '236, 72, 153'
                  }, 0.8)`,
                  scale: 1.05,
                  boxShadow: `0 15px 35px rgba(${
                    stat.color === 'blue'
                      ? '59, 130, 246'
                      : stat.color === 'purple'
                        ? '168, 85, 247'
                        : stat.color === 'cyan'
                          ? '34, 211, 238'
                          : '236, 72, 153'
                  }, 0.15)`,
                }}
              >
                <motion.div
                  className={`text-4xl font-bold text-${stat.color}-400 mb-3`}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                >
                  {stat.count}
                  {stat.count >= 4 && '+'}
                </motion.div>
                <motion.p
                  className="text-slate-300 font-medium"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {stat.label}
                </motion.p>
              </motion.div>
            </ScaleOnScroll>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

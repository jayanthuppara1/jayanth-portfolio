'use client';

import { Code2, BarChart3, Cloud, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeInOnScroll, CountUpAnimation, StaggerContainer, StaggerItem, ScaleOnScroll } from './AnimationWrappers';

export default function About() {
  const stats = [
    { label: '4', suffix: '+', description: 'Years Experience' },
    { label: '5', suffix: '', description: 'Key Roles' },
    { label: '20', suffix: '+', description: 'Technologies' },
  ];

  const highlights = [
    {
      icon: Code2,
      title: 'Data Engineering',
      description: 'Production ETL/ELT pipelines on AWS with Airflow, PySpark, and dimensional modeling',
    },
    {
      icon: BarChart3,
      title: 'BI & Analytics',
      description: 'End-to-end Power BI dashboards and analytics solutions for decision-making',
    },
    {
      icon: Cloud,
      title: 'Cloud Platforms',
      description: 'AWS (S3, Glue, Athena, Redshift), Snowflake, and modern data stack expertise',
    },
    {
      icon: Zap,
      title: 'AI-Assisted Development',
      description: 'Daily user of Claude, ChatGPT, and Copilot for productivity and code quality',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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
    <section id="about" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 px-6 relative overflow-hidden">
      {/* Background accent elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        {/* Section Title with animation */}
        <FadeInOnScroll>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-20">
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              About
            </motion.span>
            {' '}
            <motion.span
              className="inline-block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Me
            </motion.span>
          </h2>
        </FadeInOnScroll>

        {/* Main grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
          {/* LEFT: Text narrative */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.p
              className="text-xl text-slate-300 leading-relaxed"
              variants={itemVariants}
            >
              I'm a <span className="font-bold text-cyan-400">Data Analyst with 4+ years</span> of experience across analytics and data engineering. Currently at the State of California's Franchise Tax Board, I deliver compliance and audit reporting dashboards that support critical decision-making.
            </motion.p>

            <motion.p
              className="text-xl text-slate-300 leading-relaxed"
              variants={itemVariants}
            >
              I bring strong expertise in <span className="font-bold text-blue-400">T-SQL on large datasets</span>, <span className="font-bold text-blue-400">end-to-end Power BI ownership</span>, and <span className="font-bold text-blue-400">production data engineering on AWS</span>.
            </motion.p>

            <motion.p
              className="text-xl text-slate-300 leading-relaxed"
              variants={itemVariants}
            >
              I'm a daily user of AI tools—Claude, ChatGPT, and GitHub Copilot—for SQL drafting, exploratory data analysis, and stakeholder documentation. I thrive in collaborative environments where I can own projects end-to-end, solve complex data problems, and make a tangible business impact.
            </motion.p>

            {/* Highlights - staggered animations */}
            <motion.div
              className="pt-8 space-y-4"
              variants={containerVariants}
            >
              {highlights.slice(0, 2).map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    className="flex gap-4 items-start group"
                    variants={itemVariants}
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 group-hover:shadow-lg group-hover:shadow-cyan-500/30"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Icon size={20} className="text-white" />
                    </motion.div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* RIGHT: Stats cards with count-up animations */}
          <div className="lg:col-span-5">
            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              {stats.map((stat, idx) => (
                <ScaleOnScroll key={idx} delay={idx * 0.1}>
                  <motion.div
                    className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/60 p-8 rounded-xl hover:border-cyan-500/40 transition duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
                    whileHover={{
                      borderColor: 'rgba(34, 211, 238, 0.4)',
                      scale: 1.02,
                    }}
                  >
                    <motion.div
                      className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                    >
                      <CountUpAnimation
                        to={parseInt(stat.label)}
                        duration={2}
                        suffix={stat.suffix}
                        className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                      />
                    </motion.div>
                    <motion.p
                      className="text-slate-400 text-sm"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
                    >
                      {stat.description}
                    </motion.p>
                  </motion.div>
                </ScaleOnScroll>
              ))}

              {/* Additional highlights with stagger */}
              <motion.div
                className="pt-4 space-y-4"
                variants={containerVariants}
              >
                {highlights.slice(2, 4).map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={idx}
                      className="group cursor-pointer"
                      variants={itemVariants}
                      whileHover={{ x: 8 }}
                    >
                      <div className="flex gap-3 items-start">
                        <motion.div
                          className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-purple-500/30"
                          whileHover={{ scale: 1.15 }}
                        >
                          <Icon size={16} className="text-white" />
                        </motion.div>
                        <div>
                          <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                          <p className="text-slate-500 text-xs mt-1">{item.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

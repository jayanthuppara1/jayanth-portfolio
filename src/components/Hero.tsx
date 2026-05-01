'use client';

import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { FloatingElement, RevealText } from './AnimationWrappers';

export default function Hero() {
  const scrollToNext = () => {
    const element = document.getElementById('recruiter-quick-view');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // Floating background blob variants
  const blobVariants = {
    animate: {
      y: [0, 30, 0],
      x: [0, 20, 0],
    },
  };

  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Item animation
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Premium floating background elements with parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient blob - primary */}
        <motion.div
          className="absolute -right-40 top-1/4 w-[600px] h-[600px] bg-gradient-to-b from-cyan-500/30 to-blue-600/20 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut' as any,
          }}
        />

        {/* Secondary floating blob */}
        <motion.div
          className="absolute -right-60 bottom-1/4 w-[700px] h-[700px] bg-gradient-to-t from-purple-600/20 to-blue-500/15 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut' as any,
            delay: 1,
          }}
        />

        {/* Accent blob - left side */}
        <motion.div
          className="absolute -left-32 top-1/2 w-[400px] h-[400px] bg-gradient-to-r from-blue-500/15 to-cyan-500/10 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut' as any,
            delay: 0.5,
          }}
        />
      </div>

      {/* Premium grid lines effect */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(90deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="relative z-10 h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* LEFT COLUMN: Content with premium typography */}
            <motion.div
              className="lg:col-span-7 space-y-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Main heading - animated reveal */}
              <motion.div variants={itemVariants} className="space-y-4">
                <motion.h1
                  className="text-7xl lg:text-8xl font-bold text-white mb-2 leading-tight tracking-tight"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  Jayanth
                </motion.h1>
                <motion.h1
                  className="text-7xl lg:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6 leading-tight tracking-tight"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Uppara
                </motion.h1>

                {/* Decorative line */}
                <motion.div
                  className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: 80 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </motion.div>

              {/* Headline with animated reveal */}
              <motion.div variants={itemVariants} className="space-y-3">
                <p className="text-2xl lg:text-3xl text-blue-300 font-semibold">
                  <RevealText text="Data Analyst | BI Engineer | Data Engineer" delay={0.4} />
                </p>
                <p className="text-xl text-cyan-400 font-medium tracking-wide">
                  AI Analytics Builder
                </p>
              </motion.div>

              {/* Tagline with smooth fade-in */}
              <motion.p
                className="text-lg lg:text-xl text-slate-300 leading-relaxed max-w-xl font-light"
                variants={itemVariants}
              >
                I build data pipelines, dashboards, and AI-assisted analytics systems that turn raw
                data into business decisions.
              </motion.p>

              {/* CTA Buttons - staggered animation with hover effects */}
              <motion.div
                className="pt-4 space-y-4 lg:space-y-3 flex flex-col lg:flex-row lg:gap-4 lg:flex-wrap lg:w-fit"
                variants={containerVariants}
              >
                {/* View Projects Button */}
                <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="#projects"
                    className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold rounded-lg transition duration-300 text-center shadow-lg shadow-blue-500/25"
                  >
                    View Projects
                  </Link>
                </motion.div>

                {/* Download Resume Button */}
                <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-4 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-950 font-bold rounded-lg transition duration-300 text-center"
                  >
                    Download Resume
                  </a>
                </motion.div>

                {/* Ask Jay Button */}
                <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <button
                    onClick={() => {
                      const askJaySection = document.getElementById('ask-jay');
                      askJaySection?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-block px-8 py-4 border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-950 font-bold rounded-lg transition duration-300 text-center"
                  >
                    Ask Jay
                  </button>
                </motion.div>

                {/* LinkedIn Button */}
                <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <a
                    href="https://www.linkedin.com/in/jayanthu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-4 bg-slate-800/60 hover:bg-slate-700 text-white font-bold rounded-lg transition duration-300 text-center border border-slate-700 backdrop-blur-sm"
                  >
                    LinkedIn
                  </a>
                </motion.div>

                {/* GitHub Button */}
                <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <a
                    href="https://github.com/jayanthuppara"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-4 bg-slate-800/60 hover:bg-slate-700 text-white font-bold rounded-lg transition duration-300 text-center border border-slate-700 backdrop-blur-sm"
                  >
                    GitHub
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* RIGHT COLUMN: Floating visual elements */}
            <motion.div
              className="hidden lg:col-span-5 lg:flex items-center justify-center relative h-full min-h-96"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative w-full h-96">
                {/* Floating Card 1 - Top right */}
                <FloatingElement distance={15} duration={4} delay={0}>
                  <motion.div
                    className="absolute top-0 right-0 w-64 h-40 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 border border-cyan-400/40 rounded-2xl backdrop-blur-sm shadow-xl shadow-cyan-500/15"
                    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(34, 211, 238, 0.3)' }}
                    transition={{ duration: 0.3 }}
                  />
                </FloatingElement>

                {/* Floating Card 2 - Bottom left */}
                <FloatingElement distance={18} duration={4.5} delay={0.3}>
                  <motion.div
                    className="absolute bottom-0 left-0 w-56 h-32 bg-gradient-to-br from-purple-500/30 to-pink-500/30 border border-purple-400/40 rounded-2xl backdrop-blur-sm shadow-xl shadow-purple-500/15"
                    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(168, 85, 247, 0.3)' }}
                    transition={{ duration: 0.3 }}
                  />
                </FloatingElement>

                {/* Central Card - Years of Experience */}
                <FloatingElement distance={12} duration={3.5} delay={0.6}>
                  <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-blue-600/40 to-cyan-600/40 border border-blue-400/40 rounded-2xl backdrop-blur-md shadow-2xl shadow-blue-500/25 flex items-center justify-center"
                    whileHover={{ scale: 1.08, boxShadow: '0 0 50px rgba(59, 130, 246, 0.4)' }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="text-center"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 1 }}
                    >
                      <p className="text-5xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                        4+
                      </p>
                      <p className="text-sm text-slate-300 mt-3 font-medium">Years Experience</p>
                    </motion.div>
                  </motion.div>
                </FloatingElement>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Animated scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-cyan-400 transition duration-300 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <button
            onClick={scrollToNext}
            className="flex flex-col items-center gap-2"
          >
            <p className="text-sm font-medium">Scroll to explore</p>
            <ChevronDown size={24} className="animate-pulse" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

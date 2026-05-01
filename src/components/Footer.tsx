'use client';

import { Code2, Briefcase, Mail, ExternalLink, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeInOnScroll, StaggerContainer, StaggerItem } from './AnimationWrappers';

export default function Footer() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800/50 py-20 px-6 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        {/* Main footer grid with staggered animations */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {/* Column 1: Brand */}
          <motion.div variants={itemVariants}>
            <motion.h3
              className="text-2xl font-bold text-white mb-3"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Jayanth
            </motion.h3>
            <motion.p
              className="text-slate-400 text-sm leading-relaxed mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Data-driven problem solver building analytics systems at scale.
            </motion.p>
            <motion.div
              className="space-y-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.p
                className="text-slate-500 text-sm flex items-center gap-2 group"
                variants={linkVariants}
                whileHover={{ x: 5 }}
              >
                <MapPin size={16} className="text-cyan-400 group-hover:scale-110 transition" />
                Sacramento, CA
              </motion.p>
              <motion.p
                className="text-slate-500 text-sm flex items-center gap-2 group"
                variants={linkVariants}
                whileHover={{ x: 5 }}
              >
                <Phone size={16} className="text-cyan-400 group-hover:scale-110 transition" />
                656-203-4661
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Column 2: Quick Navigation */}
          <motion.div variants={itemVariants}>
            <motion.h4
              className="text-lg font-bold text-white mb-6 uppercase tracking-wider"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Explore
            </motion.h4>
            <motion.ul
              className="space-y-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {['About Me', 'Experience', 'Skills', 'Projects', 'Education'].map((item, idx) => (
                <motion.li key={idx} variants={linkVariants}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-slate-400 hover:text-cyan-400 transition duration-300 text-sm inline-flex items-center gap-2 group"
                  >
                    <span className="group-hover:translate-x-1 transition duration-300">→</span>
                    {item}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Column 3: Resources */}
          <motion.div variants={itemVariants}>
            <motion.h4
              className="text-lg font-bold text-white mb-6 uppercase tracking-wider"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Resources
            </motion.h4>
            <motion.ul
              className="space-y-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { label: 'Resume (PDF)', href: '/resume.pdf' },
                { label: 'GitHub', href: 'https://github.com/jayanthuppara' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jayanthu/' },
                { label: 'Email', href: 'mailto:upparajayanth999@gmail.com' },
              ].map((item, idx) => (
                <motion.li key={idx} variants={linkVariants}>
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') || item.href.startsWith('mailto') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-slate-400 hover:text-cyan-400 transition duration-300 text-sm inline-flex items-center gap-2 group"
                  >
                    <span className="group-hover:translate-x-1 transition duration-300">→</span>
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Column 4: Connect */}
          <motion.div variants={itemVariants}>
            <motion.h4
              className="text-lg font-bold text-white mb-6 uppercase tracking-wider"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Connect
            </motion.h4>
            <motion.p
              className="text-slate-400 text-sm mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Let's chat about data, analytics, or your next project.
            </motion.p>

            {/* Social icons with stagger */}
            <motion.div
              className="flex gap-3 flex-wrap"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { href: 'https://www.linkedin.com/in/jayanthu/', icon: Briefcase, color: 'blue', title: 'LinkedIn' },
                { href: 'https://github.com/jayanthuppara', icon: Code2, color: 'slate', title: 'GitHub' },
                { href: 'mailto:upparajayanth999@gmail.com', icon: Mail, color: 'orange', title: 'Email' },
                { href: '/resume.pdf', icon: ExternalLink, color: 'green', title: 'Resume' },
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`w-12 h-12 bg-slate-800/60 hover:bg-${social.color}-600 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition duration-300 border border-slate-700/60`}
                    title={social.title}
                    variants={{
                      hidden: { opacity: 0, scale: 0 },
                      visible: { opacity: 1, scale: 1 },
                    }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Divider with animation */}
        <motion.div
          className="border-t border-slate-800/50 pt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <motion.p
              className="text-slate-500 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              © {new Date().getFullYear()} Jayanth Uppara. All rights reserved.
            </motion.p>

            <motion.p
              className="text-slate-500 text-sm text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Built with Next.js 16 • React 19 • TypeScript • Tailwind CSS
            </motion.p>

            <motion.a
              href="https://github.com/jayanthuppara/jayanth-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition duration-300 flex items-center gap-2 text-sm group"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ x: 3 }}
              viewport={{ once: true }}
            >
              View Source{' '}
              <ExternalLink size={16} className="group-hover:rotate-45 transition duration-300" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

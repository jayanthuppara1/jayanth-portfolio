'use client';

import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToNext = () => {
    const element = document.getElementById('next-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Jayanth Uppara
        </h1>

        {/* Headline */}
        <p className="text-xl md:text-2xl text-blue-400 font-semibold mb-4">
          Data Analyst | BI Engineer | Data Engineer
        </p>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          4+ years building data pipelines, Power BI dashboards, and analytics systems at scale. Currently at California's Franchise Tax Board. Strong in T-SQL, AWS, Airflow, and Python.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 flex-wrap">
          <Link
            href="#projects"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition transform hover:scale-105"
          >
            View Projects
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-950 font-semibold rounded-lg transition transform hover:scale-105"
          >
            Download Resume
          </a>
          <button
            onClick={() => {
              const askJaySection = document.getElementById('ask-jay');
              askJaySection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3 border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-950 font-semibold rounded-lg transition transform hover:scale-105"
          >
            Ask Jay
          </button>
          <a
            href="https://www.linkedin.com/in/jayanthu/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition transform hover:scale-105"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/jayanthuppara"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition transform hover:scale-105"
          >
            GitHub
          </a>
          <a
            href="mailto:upparajayanth999@gmail.com"
            className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950 font-semibold rounded-lg transition transform hover:scale-105"
          >
            Email
          </a>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToNext}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-slate-300 hover:text-white transition animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
}

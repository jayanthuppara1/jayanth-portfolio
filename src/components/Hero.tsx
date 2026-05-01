'use client';

import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToNext = () => {
    const element = document.getElementById('recruiter-quick-view');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background elements - abstracted to the right side */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient blob on the right */}
        <div className="absolute -right-40 top-1/2 transform -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-b from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl"></div>
        {/* Accent blob */}
        <div className="absolute -right-20 bottom-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
          {/* Asymmetric grid: 60% left (content) | 40% right (visual) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* LEFT COLUMN: 60% - Content */}
            <div className="lg:col-span-7 space-y-8">
              {/* Main heading */}
              <div>
                <h1 className="text-6xl lg:text-8xl font-bold text-white mb-4 leading-tight tracking-tight">
                  Jayanth
                </h1>
                <h1 className="text-6xl lg:text-8xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6 leading-tight tracking-tight">
                  Uppara
                </h1>
              </div>

              {/* Headline */}
              <div>
                <p className="text-2xl lg:text-3xl text-blue-300 font-semibold mb-3">
                  Data Analyst | BI Engineer | Data Engineer
                </p>
                <p className="text-xl text-cyan-400 font-medium">AI Analytics Builder</p>
              </div>

              {/* Tagline - larger, more prominent */}
              <p className="text-lg lg:text-xl text-slate-300 leading-relaxed max-w-xl">
                I build data pipelines, dashboards, and AI-assisted analytics systems that turn raw data into business decisions.
              </p>

              {/* CTA Buttons - Stacked vertically on desktop */}
              <div className="pt-4 space-y-4 lg:space-y-3 flex flex-col lg:flex-row lg:gap-4 lg:flex-wrap lg:w-fit">
                <Link
                  href="#projects"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold rounded-lg transition transform hover:scale-105 duration-300 text-center"
                >
                  View Projects
                </Link>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-950 font-bold rounded-lg transition duration-300 text-center"
                >
                  Download Resume
                </a>
                <button
                  onClick={() => {
                    const askJaySection = document.getElementById('ask-jay');
                    askJaySection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-block px-8 py-4 border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-950 font-bold rounded-lg transition duration-300 text-center"
                >
                  Ask Jay
                </button>
                <a
                  href="https://www.linkedin.com/in/jayanthu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 bg-slate-800/60 hover:bg-slate-700 text-white font-bold rounded-lg transition duration-300 text-center border border-slate-700"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/jayanthuppara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 bg-slate-800/60 hover:bg-slate-700 text-white font-bold rounded-lg transition duration-300 text-center border border-slate-700"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN: 40% - Visual element (hidden on mobile) */}
            <div className="hidden lg:col-span-5 lg:flex items-center justify-center relative h-full min-h-96">
              {/* Geometric accent cards */}
              <div className="relative w-full h-96">
                {/* Card 1 - Top */}
                <div className="absolute top-0 right-0 w-64 h-40 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 border border-cyan-400/40 rounded-2xl backdrop-blur-sm shadow-xl shadow-cyan-500/10 transform hover:scale-105 transition duration-300"></div>
                
                {/* Card 2 - Bottom left */}
                <div className="absolute bottom-0 left-0 w-56 h-32 bg-gradient-to-br from-purple-500/30 to-pink-500/30 border border-purple-400/40 rounded-2xl backdrop-blur-sm shadow-xl shadow-purple-500/10 transform hover:scale-105 transition duration-300"></div>
                
                {/* Card 3 - Center */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-blue-600/40 to-cyan-600/40 border border-blue-400/40 rounded-2xl backdrop-blur-sm shadow-2xl shadow-blue-500/20 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-4xl font-bold text-cyan-300">4+</p>
                    <p className="text-sm text-slate-300 mt-2">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator - positioned at bottom */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-cyan-400 transition duration-300 cursor-pointer">
          <button
            onClick={scrollToNext}
            className="flex flex-col items-center gap-2 animate-bounce"
          >
            <p className="text-sm font-medium">Scroll to explore</p>
            <ChevronDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}

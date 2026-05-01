'use client';

import { Download, FileText, ExternalLink } from 'lucide-react';

export default function Resume() {
  return (
    <section id="resume" className="py-24 bg-slate-900 px-6">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-5xl lg:text-6xl font-bold text-white mb-20">Resume</h2>

        {/* Asymmetric layout: Button on left (40%), stats on right (60%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* LEFT: CTA Section (40%) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-blue-900/40 to-blue-950/40 border border-blue-500/30 p-12 rounded-xl flex flex-col justify-between">
            <div className="mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                <FileText size={32} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">My Resume</h3>
              <p className="text-slate-300 text-lg leading-relaxed">Complete professional history, education, certifications, and technical skills in one document.</p>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold rounded-lg transition transform hover:scale-105 duration-300"
              >
                <Download size={20} />
                Download PDF
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950 font-bold rounded-lg transition duration-300"
              >
                <ExternalLink size={20} />
                View Online
              </a>
            </div>
          </div>

          {/* RIGHT: Quick Stats (60%) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/60 p-8 rounded-xl text-center hover:border-blue-500/40 transition">
                <div className="text-5xl font-bold text-blue-400 mb-3">4+</div>
                <p className="text-slate-300 font-medium">Years Experience</p>
                <p className="text-slate-500 text-sm mt-2">In analytics and data engineering</p>
              </div>
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/60 p-8 rounded-xl text-center hover:border-purple-500/40 transition">
                <div className="text-5xl font-bold text-purple-400 mb-3">5</div>
                <p className="text-slate-300 font-medium">Key Roles</p>
                <p className="text-slate-500 text-sm mt-2">Analytics & engineering positions</p>
              </div>
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/60 p-8 rounded-xl text-center hover:border-cyan-500/40 transition">
                <div className="text-5xl font-bold text-cyan-400 mb-3">2</div>
                <p className="text-slate-300 font-medium">Certifications</p>
                <p className="text-slate-500 text-sm mt-2">Professional credentials</p>
              </div>
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/60 p-8 rounded-xl text-center hover:border-pink-500/40 transition">
                <div className="text-5xl font-bold text-pink-400 mb-3">20+</div>
                <p className="text-slate-300 font-medium">Technologies</p>
                <p className="text-slate-500 text-sm mt-2">Tools and platforms mastered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

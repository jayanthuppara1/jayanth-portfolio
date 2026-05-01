'use client';

import { Download, FileText, ExternalLink } from 'lucide-react';

export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-slate-900 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Resume</h2>
          <p className="text-slate-400 text-lg">Download or view my professional resume</p>
        </div>

        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 hover:border-blue-500/50 p-12 rounded-xl transition duration-300 hover:shadow-xl hover:shadow-blue-500/10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Resume icon */}
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <FileText size={48} className="text-white" />
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Jayanth Uppara - Resume</h3>
              <p className="text-slate-400 mb-6">Complete professional history, education, certifications, and technical skills</p>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition transform hover:scale-105"
                >
                  <Download size={20} />
                  Download PDF
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-950 font-semibold rounded-lg transition transform hover:scale-105"
                >
                  <ExternalLink size={20} />
                  View Online
                </a>
              </div>
            </div>
          </div>

          {/* Quick facts */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-12 border-t border-slate-700">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">4+</div>
              <p className="text-sm text-slate-400">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">5</div>
              <p className="text-sm text-slate-400">Roles Held</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">2</div>
              <p className="text-sm text-slate-400">Certifications</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">20+</div>
              <p className="text-sm text-slate-400">Technologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

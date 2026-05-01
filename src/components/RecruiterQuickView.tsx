'use client';

import { MapPin, Briefcase, Shield, Download } from 'lucide-react';

export default function RecruiterQuickView() {
  return (
    <section className="bg-slate-900 py-8 px-6 border-b border-slate-800">
      <div className="max-w-6xl mx-auto">
        {/* Recruiter Summary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Target Roles */}
          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-blue-500/50 transition">
            <div className="flex items-start gap-3">
              <Briefcase className="text-blue-400 mt-1" size={20} />
              <div>
                <h3 className="text-sm font-semibold text-slate-300 mb-2">Target Roles</h3>
                <ul className="space-y-1">
                  <li className="text-sm text-slate-100">Data Analyst</li>
                  <li className="text-sm text-slate-100">BI Engineer</li>
                  <li className="text-sm text-slate-100">Data Engineer</li>
                  <li className="text-sm text-slate-100">Analytics Engineer</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Location & Authorization */}
          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-blue-500/50 transition">
            <div className="flex items-start gap-3">
              <MapPin className="text-purple-400 mt-1" size={20} />
              <div>
                <h3 className="text-sm font-semibold text-slate-300 mb-2">Location & Auth</h3>
                <p className="text-sm text-slate-100 mb-1">US-based (Pacific)</p>
                <p className="text-sm text-green-400 font-medium">✓ Authorized to work</p>
              </div>
            </div>
          </div>

          {/* Core Skills */}
          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-blue-500/50 transition">
            <div className="flex items-start gap-3">
              <Shield className="text-cyan-400 mt-1" size={20} />
              <div>
                <h3 className="text-sm font-semibold text-slate-300 mb-2">Core Skills</h3>
                <div className="flex flex-wrap gap-1">
                  <span className="text-xs bg-blue-900 text-blue-200 px-2 py-1 rounded">SQL</span>
                  <span className="text-xs bg-blue-900 text-blue-200 px-2 py-1 rounded">Python</span>
                  <span className="text-xs bg-purple-900 text-purple-200 px-2 py-1 rounded">Tableau</span>
                  <span className="text-xs bg-cyan-900 text-cyan-200 px-2 py-1 rounded">dbt</span>
                </div>
              </div>
            </div>
          </div>

          {/* Resume Button */}
          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-blue-500/50 transition flex items-center justify-center">
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition transform hover:scale-105 w-full justify-center"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

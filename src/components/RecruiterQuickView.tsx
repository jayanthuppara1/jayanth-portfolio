'use client';

import { MapPin, Briefcase, Shield, Download, Mail, Phone, CheckCircle } from 'lucide-react';

export default function RecruiterQuickView() {
  return (
    <section className="bg-slate-900 py-8 px-6 border-b border-slate-800">
      <div className="max-w-6xl mx-auto">
        {/* Recruiter Summary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Target Roles */}
          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-blue-500/50 transition">
            <div className="flex items-start gap-3">
              <Briefcase className="text-blue-400 mt-1" size={20} />
              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-slate-300 mb-2">Target Roles</h3>
                <ul className="space-y-1">
                  <li className="text-sm text-slate-100">Data Analyst</li>
                  <li className="text-sm text-slate-100">BI Engineer</li>
                  <li className="text-sm text-slate-100">Data Engineer</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Location & Authorization */}
          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-purple-500/50 transition">
            <div className="flex items-start gap-3">
              <MapPin className="text-purple-400 mt-1" size={20} />
              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-slate-300 mb-2">Location</h3>
                <p className="text-sm text-slate-100 mb-1">Sacramento, CA</p>
                <p className="text-xs text-slate-400">Open to remote</p>
              </div>
            </div>
          </div>

          {/* Work Authorization */}
          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-green-500/50 transition">
            <div className="flex items-start gap-3">
              <CheckCircle className="text-green-400 mt-1" size={20} />
              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-slate-300 mb-2">Authorization</h3>
                <p className="text-sm text-green-400 font-medium">F-1 OPT</p>
                <p className="text-xs text-green-400">STEM Eligible</p>
              </div>
            </div>
          </div>

          {/* Core Skills */}
          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-cyan-500/50 transition">
            <div className="flex items-start gap-3">
              <Shield className="text-cyan-400 mt-1" size={20} />
              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-slate-300 mb-2">Core Skills</h3>
                <div className="flex flex-wrap gap-1">
                  <span className="text-xs bg-blue-900 text-blue-200 px-2 py-1 rounded">T-SQL</span>
                  <span className="text-xs bg-blue-900 text-blue-200 px-2 py-1 rounded">Python</span>
                  <span className="text-xs bg-purple-900 text-purple-200 px-2 py-1 rounded">Power BI</span>
                  <span className="text-xs bg-cyan-900 text-cyan-200 px-2 py-1 rounded">AWS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-orange-500/50 transition">
            <div className="flex items-start gap-3">
              <Mail className="text-orange-400 mt-1" size={20} />
              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-slate-300 mb-2">Contact</h3>
                <div className="space-y-1">
                  <p className="text-xs text-slate-100">
                    <a href="mailto:upparajayanth999@gmail.com" className="hover:text-blue-400 transition">
                      Email
                    </a>
                  </p>
                  <p className="text-xs text-slate-100">
                    <a href="tel:656-203-4661" className="hover:text-blue-400 transition">
                      656-203-4661
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

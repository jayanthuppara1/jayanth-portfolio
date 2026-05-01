'use client';

import { MapPin, Briefcase, Shield, Mail, CheckCircle } from 'lucide-react';

export default function RecruiterQuickView() {
  return (
    <section id="recruiter-quick-view" className="bg-gradient-to-b from-slate-900 to-slate-950 py-16 px-6 border-b border-slate-800/50">
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-12">Quick Overview</h2>
        
        {/* Desktop-first: 6 cards in a row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {/* Target Roles */}
          <div className="lg:col-span-1 bg-slate-800/40 rounded-xl p-8 border border-slate-700/60 hover:border-blue-500/60 transition duration-300 hover:shadow-lg hover:shadow-blue-500/10">
            <div className="flex flex-col items-start gap-4">
              <Briefcase className="text-blue-400" size={28} />
              <div>
                <h3 className="font-semibold text-slate-200 mb-3">Target Roles</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>Data Analyst</li>
                  <li>BI Engineer</li>
                  <li>Data Engineer</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="lg:col-span-1 bg-slate-800/40 rounded-xl p-8 border border-slate-700/60 hover:border-purple-500/60 transition duration-300 hover:shadow-lg hover:shadow-purple-500/10">
            <div className="flex flex-col items-start gap-4">
              <MapPin className="text-purple-400" size={28} />
              <div>
                <h3 className="font-semibold text-slate-200 mb-3">Location</h3>
                <p className="text-sm text-slate-300 mb-2">Sacramento, CA</p>
                <p className="text-xs text-slate-400">Open to remote</p>
              </div>
            </div>
          </div>

          {/* Work Authorization */}
          <div className="lg:col-span-1 bg-slate-800/40 rounded-xl p-8 border border-slate-700/60 hover:border-green-500/60 transition duration-300 hover:shadow-lg hover:shadow-green-500/10">
            <div className="flex flex-col items-start gap-4">
              <CheckCircle className="text-green-400" size={28} />
              <div>
                <h3 className="font-semibold text-slate-200 mb-3">Authorization</h3>
                <p className="text-sm text-green-300 font-medium mb-1">F-1 OPT</p>
                <p className="text-xs text-green-400">STEM Eligible</p>
              </div>
            </div>
          </div>

          {/* Core Skills */}
          <div className="lg:col-span-2 bg-slate-800/40 rounded-xl p-8 border border-slate-700/60 hover:border-cyan-500/60 transition duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
            <div className="flex flex-col items-start gap-4">
              <Shield className="text-cyan-400" size={28} />
              <div className="w-full">
                <h3 className="font-semibold text-slate-200 mb-3">Core Technologies</h3>
                <div className="grid grid-cols-2 gap-2">
                  <span className="text-xs bg-blue-900/60 text-blue-200 px-3 py-2 rounded-lg font-medium border border-blue-700/40">T-SQL</span>
                  <span className="text-xs bg-blue-900/60 text-blue-200 px-3 py-2 rounded-lg font-medium border border-blue-700/40">Python</span>
                  <span className="text-xs bg-purple-900/60 text-purple-200 px-3 py-2 rounded-lg font-medium border border-purple-700/40">Power BI</span>
                  <span className="text-xs bg-cyan-900/60 text-cyan-200 px-3 py-2 rounded-lg font-medium border border-cyan-700/40">AWS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-1 bg-slate-800/40 rounded-xl p-8 border border-slate-700/60 hover:border-orange-500/60 transition duration-300 hover:shadow-lg hover:shadow-orange-500/10">
            <div className="flex flex-col items-start gap-4">
              <Mail className="text-orange-400" size={28} />
              <div>
                <h3 className="font-semibold text-slate-200 mb-3">Contact</h3>
                <div className="space-y-2">
                  <p className="text-xs text-slate-300">
                    <a href="mailto:upparajayanth999@gmail.com" className="hover:text-blue-400 transition font-medium">
                      Email
                    </a>
                  </p>
                  <p className="text-xs text-slate-300">
                    <a href="tel:656-203-4661" className="hover:text-blue-400 transition font-medium">
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

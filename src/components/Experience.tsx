'use client';

import { experiences } from '@/data/experience';
import { MapPin, Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-950 px-6">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8">Experience</h2>
        <p className="text-xl text-slate-400 mb-20">4+ years in analytics and data engineering</p>

        {/* Desktop timeline: Left timeline + Right content */}
        <div className="hidden lg:block">
          {experiences.map((exp, idx) => (
            <div key={exp.id} className="relative mb-20">
              {/* Timeline line and dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-500 -top-12"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-cyan-500 rounded-full border-4 border-slate-950 top-0 z-10"></div>

              {/* Content grid: Left timeline info | Right content */}
              <div className="grid grid-cols-12 gap-8">
                {/* LEFT: Timeline info (25%) */}
                <div className="col-span-5 text-right pr-8">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-2">{exp.company}</h3>
                  <p className="text-slate-400 text-sm mb-3 flex items-center justify-end gap-2">
                    <Calendar size={16} />
                    {exp.period}
                  </p>
                  <p className="text-slate-500 text-sm flex items-center justify-end gap-2">
                    <MapPin size={16} />
                    {exp.location}
                  </p>
                </div>

                {/* RIGHT: Content (75%) */}
                <div className="col-span-7 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/60 hover:border-cyan-500/40 p-10 rounded-xl transition duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
                  <h4 className="text-2xl font-bold text-white mb-4">{exp.title}</h4>
                  <p className="text-slate-300 mb-6 leading-relaxed">{exp.description}</p>

                  {/* Accomplishments */}
                  <div className="mb-6">
                    <h5 className="text-sm font-bold text-blue-400 mb-4 uppercase tracking-wider">Key Accomplishments</h5>
                    <ul className="space-y-3">
                      {exp.accomplishments.map((acc, idx) => (
                        <li key={idx} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
                          <span className="text-cyan-400 font-bold flex-shrink-0 mt-0.5">→</span>
                          <span>{acc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div>
                    <h5 className="text-sm font-bold text-purple-400 mb-3 uppercase tracking-wider">Technologies</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-2 bg-blue-900/40 border border-blue-500/40 text-blue-300 text-xs font-medium rounded-lg hover:border-blue-400/60 transition"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet fallback */}
        <div className="lg:hidden space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/60 p-8 rounded-xl"
            >
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                <p className="text-cyan-400 font-semibold text-lg">{exp.company}</p>
              </div>
              <div className="flex gap-4 text-sm text-slate-400 mb-4">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  {exp.period}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  {exp.location}
                </div>
              </div>
              <p className="text-slate-300 mb-4 leading-relaxed">{exp.description}</p>
              <div className="mb-4">
                <h4 className="text-sm font-bold text-blue-400 mb-2 uppercase">Key Accomplishments</h4>
                <ul className="space-y-2">
                  {exp.accomplishments.map((acc, idx) => (
                    <li key={idx} className="flex gap-2 text-slate-300 text-sm">
                      <span className="text-cyan-400">→</span>
                      <span>{acc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold text-purple-400 mb-2 uppercase">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="px-2 py-1 bg-blue-900/40 border border-blue-500/40 text-blue-300 text-xs rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

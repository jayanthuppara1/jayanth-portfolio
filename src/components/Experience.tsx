'use client';

import { experiences } from '@/data/experience';
import { MapPin, Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-950 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Experience</h2>
          <p className="text-slate-400 text-lg">4+ years in analytics and data engineering</p>
        </div>
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div
              key={exp.id}
              className="group relative"
            >
              {/* Timeline connector */}
              {idx < experiences.length - 1 && (
                <div className="absolute left-6 top-24 w-0.5 h-20 bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block"></div>
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center hidden md:flex">
                <Briefcase size={20} className="text-white" />
              </div>

              {/* Card content */}
              <div className="md:ml-24 bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-slate-700 hover:border-blue-500/50 p-8 rounded-xl transition duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition">
                      {exp.title}
                    </h3>
                    <p className="text-blue-400 font-semibold text-lg">{exp.company}</p>
                  </div>
                  <div className="flex flex-col gap-2 text-right">
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                      <Calendar size={16} />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 text-sm justify-end">
                      <MapPin size={16} />
                      {exp.location}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 mb-6 leading-relaxed">{exp.description}</p>

                {/* Accomplishments */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-blue-400 mb-3 uppercase tracking-wide">Key Accomplishments</h4>
                  <ul className="space-y-2">
                    {exp.accomplishments.map((acc, idx) => (
                      <li key={idx} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
                        <span className="text-blue-400 font-bold mt-1">✓</span>
                        <span>{acc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="text-sm font-semibold text-purple-400 mb-3 uppercase tracking-wide">Skills Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-blue-900/20 border border-blue-500/30 text-blue-300 text-sm rounded-full hover:border-blue-400/60 transition"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

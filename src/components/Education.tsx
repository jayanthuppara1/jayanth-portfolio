'use client';

import { education, certifications } from '@/data/education';
import { Award, BookOpen, MapPin, Calendar } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-slate-950 px-6">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8">Education</h2>
        <p className="text-xl text-slate-400 mb-16">Continuous learning and professional credentials</p>

        {/* Degrees - 2 cards side by side on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Education Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                <BookOpen size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Degrees</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/60 hover:border-blue-500/40 p-8 rounded-xl transition duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
                      <p className="text-cyan-400 font-semibold">{edu.field}</p>
                    </div>
                    <span className="px-3 py-1 bg-blue-900/30 border border-blue-500/30 text-blue-300 text-xs rounded-full whitespace-nowrap font-medium">
                      {edu.period}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <p className="text-slate-300 font-medium">{edu.school}</p>
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                      <MapPin size={16} />
                      {edu.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                <Award size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Certifications</h3>
            </div>

            <div className="space-y-6">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/60 hover:border-purple-500/40 p-8 rounded-xl transition duration-300 hover:shadow-lg hover:shadow-purple-500/10"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex-shrink-0 mt-1 flex items-center justify-center flex-shrink-0">
                      <span className="text-slate-900 text-sm font-bold">✓</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white mb-1">{cert.name}</h4>
                      <p className="text-purple-400 font-medium text-sm mb-2">{cert.issuer}</p>
                      {cert.date && (
                        <div className="flex items-center gap-2 text-slate-400 text-xs">
                          <Calendar size={14} />
                          {cert.date}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Additional context */}
              <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/30 p-8 rounded-xl">
                <p className="text-slate-300 text-sm leading-relaxed">
                  <span className="font-semibold text-cyan-400">Pursuing:</span> AWS Certified Data Analytics Engineer Associate and AWS Certified Data Engineer Associate certifications to deepen cloud data platform expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

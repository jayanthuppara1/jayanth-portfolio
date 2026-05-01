'use client';

import { education, certifications } from '@/data/education';
import { Award, BookOpen, MapPin, Calendar } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-slate-950 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Education & Certifications</h2>
          <p className="text-slate-400 text-lg">Continuous learning and professional credentials</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <BookOpen size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Degrees</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-slate-700 hover:border-blue-500/50 p-6 rounded-lg transition duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                      <p className="text-blue-400 font-semibold">{edu.field}</p>
                    </div>
                    <span className="px-3 py-1 bg-blue-900/30 border border-blue-500/30 text-blue-300 text-xs rounded-full whitespace-nowrap">
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
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Award size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Certifications</h3>
            </div>

            <div className="space-y-6">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-slate-700 hover:border-purple-500/50 p-6 rounded-lg transition duration-300 hover:shadow-lg hover:shadow-purple-500/10"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex-shrink-0 mt-1 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{cert.name}</h4>
                      <p className="text-purple-400 font-medium">{cert.issuer}</p>
                      {cert.date && (
                        <div className="flex items-center gap-2 text-slate-400 text-sm mt-2">
                          <Calendar size={14} />
                          {cert.date}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Additional context */}
              <div className="bg-blue-900/20 border border-blue-500/30 p-6 rounded-lg mt-8">
                <p className="text-slate-300 text-sm leading-relaxed">
                  <span className="font-semibold text-blue-400">Currently pursuing:</span> AWS Certified Data Analytics Engineer Associate and AWS Certified Data Engineer Associate certifications to deepen cloud data platform expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

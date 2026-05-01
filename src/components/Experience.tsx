'use client';

import { experiences } from '@/data/experience';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="bg-slate-900 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">Professional Experience</h2>
        
        {/* Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative">
              {/* Timeline connector */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-[15px] top-20 w-1 h-12 bg-gradient-to-b from-blue-500 to-transparent"></div>
              )}
              
              {/* Card */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-blue-500/50 transition ml-0 md:ml-12">
                {/* Icon and header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <Briefcase size={16} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <p className="text-blue-400 font-semibold">{exp.company}</p>
                    <p className="text-sm text-slate-400 mt-1">{exp.period}</p>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-slate-300 mb-4 leading-relaxed">{exp.description}</p>
                
                {/* Skills tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs bg-blue-900/50 text-blue-200 px-3 py-1 rounded-full border border-blue-700/50"
                    >
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

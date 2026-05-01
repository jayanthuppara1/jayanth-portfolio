'use client';

import { skills } from '@/data/skills';
import { Star } from 'lucide-react';

export default function Skills() {
  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case 'Expert':
        return 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white';
      case 'Advanced':
        return 'bg-blue-500/60 text-blue-100';
      case 'Intermediate':
        return 'bg-slate-600/60 text-slate-200';
      default:
        return 'bg-slate-700/60 text-slate-300';
    }
  };

  const getStars = (proficiency: string) => {
    switch (proficiency) {
      case 'Expert':
        return 5;
      case 'Advanced':
        return 4;
      case 'Intermediate':
        return 3;
      default:
        return 2;
    }
  };

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 px-6">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">Skills & Expertise</h2>
        <p className="text-xl text-slate-400 mb-20">Comprehensive technical toolkit built over 4+ years</p>

        {/* Skills Grid: 3 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skills.map((category, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/60 hover:border-cyan-500/40 p-10 rounded-xl transition duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              {/* Category header */}
              <h3 className="text-xl font-bold text-white mb-2">{category.category}</h3>
              {category.description && (
                <p className="text-sm text-slate-400 mb-6 leading-relaxed">{category.description}</p>
              )}

              {/* Skills list - with better spacing */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="group">
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2 flex-1">
                        <span className="text-slate-200 font-semibold text-sm">{skill.name}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-1">
                        {[...Array(getStars(skill.proficiency))].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <span className={`text-xs px-3 py-1 rounded-full font-semibold ${getProficiencyColor(skill.proficiency)}`}>
                        {skill.proficiency}
                      </span>
                    </div>
                    {skill.frequency && (
                      <p className="text-xs text-slate-500 mt-2">{skill.frequency}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Summary stats - 4 cards in a row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-blue-900/40 to-blue-950/40 border border-blue-500/40 p-8 rounded-xl text-center hover:border-blue-400/60 transition">
            <div className="text-4xl font-bold text-blue-400 mb-3">20+</div>
            <p className="text-slate-300 font-medium">Technologies</p>
          </div>
          <div className="bg-gradient-to-br from-purple-900/40 to-purple-950/40 border border-purple-500/40 p-8 rounded-xl text-center hover:border-purple-400/60 transition">
            <div className="text-4xl font-bold text-purple-400 mb-3">7</div>
            <p className="text-slate-300 font-medium">Skill Categories</p>
          </div>
          <div className="bg-gradient-to-br from-cyan-900/40 to-cyan-950/40 border border-cyan-500/40 p-8 rounded-xl text-center hover:border-cyan-400/60 transition">
            <div className="text-4xl font-bold text-cyan-400 mb-3">4+</div>
            <p className="text-slate-300 font-medium">Years Experience</p>
          </div>
          <div className="bg-gradient-to-br from-pink-900/40 to-pink-950/40 border border-pink-500/40 p-8 rounded-xl text-center hover:border-pink-400/60 transition">
            <div className="text-4xl font-bold text-pink-400 mb-3">2</div>
            <p className="text-slate-300 font-medium">Certifications</p>
          </div>
        </div>
      </div>
    </section>
  );
}

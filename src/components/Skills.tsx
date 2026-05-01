'use client';

import { skills } from '@/data/skills';
import { Star } from 'lucide-react';

export default function Skills() {
  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case 'Expert':
        return 'bg-blue-600 text-white';
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
    <section id="skills" className="py-20 bg-slate-900 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Expertise</h2>
          <p className="text-slate-400 text-lg">Comprehensive technical toolkit built over 4+ years</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((category, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 hover:border-blue-500/50 p-8 rounded-xl transition duration-300 hover:shadow-xl hover:shadow-blue-500/10"
            >
              {/* Category header */}
              <h3 className="text-xl font-bold text-white mb-2">{category.category}</h3>
              {category.description && (
                <p className="text-sm text-slate-400 mb-6">{category.description}</p>
              )}

              {/* Skills list */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-slate-300 font-medium">{skill.name}</span>
                        <div className="flex gap-0.5">
                          {[...Array(getStars(skill.proficiency))].map((_, i) => (
                            <Star
                              key={i}
                              size={14}
                              className="fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                      </div>
                      <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${getProficiencyColor(skill.proficiency)}`}>
                        {skill.proficiency}
                      </span>
                    </div>
                    {skill.frequency && (
                      <p className="text-xs text-slate-500">{skill.frequency}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Summary stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="bg-gradient-to-br from-blue-900/30 to-blue-950/30 border border-blue-500/30 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">20+</div>
            <p className="text-slate-400 text-sm">Technologies</p>
          </div>
          <div className="bg-gradient-to-br from-purple-900/30 to-purple-950/30 border border-purple-500/30 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">7</div>
            <p className="text-slate-400 text-sm">Skill Categories</p>
          </div>
          <div className="bg-gradient-to-br from-cyan-900/30 to-cyan-950/30 border border-cyan-500/30 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">4+</div>
            <p className="text-slate-400 text-sm">Years Experience</p>
          </div>
          <div className="bg-gradient-to-br from-pink-900/30 to-pink-950/30 border border-pink-500/30 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-pink-400 mb-2">2</div>
            <p className="text-slate-400 text-sm">Certifications</p>
          </div>
        </div>
      </div>
    </section>
  );
}

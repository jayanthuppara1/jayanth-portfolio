'use client';

import { projects } from '@/data/projects';
import { ExternalLink, Code2 } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-950 py-24 px-6">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8">Featured Projects</h2>
        <p className="text-xl text-slate-400 mb-16">Data-driven solutions and analytics systems</p>
        
        {/* Projects Grid: 2 columns on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/60 rounded-xl overflow-hidden hover:border-cyan-500/40 transition group duration-300 hover:shadow-xl hover:shadow-cyan-500/10 flex flex-col"
            >
              {/* Project image or placeholder */}
              {project.image && (
                <div className="h-64 bg-gradient-to-br from-slate-700 to-slate-900 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-0 group-hover:opacity-60 transition duration-300"></div>
                </div>
              )}
              
              {/* Project content */}
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition">{project.title}</h3>
                <p className="text-slate-300 mb-6 leading-relaxed flex-1">{project.description}</p>
                
                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-purple-900/40 text-purple-200 px-3 py-1.5 rounded-lg border border-purple-700/40 font-medium hover:border-purple-500/60 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-slate-700/40">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-lg transition transform hover:scale-105 duration-300"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 border-2 border-slate-600 hover:border-cyan-500 text-slate-300 hover:text-cyan-400 font-semibold rounded-lg transition duration-300"
                    >
                      <Code2 size={18} />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

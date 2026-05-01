'use client';

import { Code2, BarChart3, Cloud, Zap } from 'lucide-react';

export default function About() {
  const stats = [
    { label: '4+', description: 'Years Experience' },
    { label: '5', description: 'Key Roles' },
    { label: '20+', description: 'Technologies' },
  ];

  const highlights = [
    {
      icon: Code2,
      title: 'Data Engineering',
      description: 'Production ETL/ELT pipelines on AWS with Airflow, PySpark, and dimensional modeling',
    },
    {
      icon: BarChart3,
      title: 'BI & Analytics',
      description: 'End-to-end Power BI dashboards and analytics solutions for decision-making',
    },
    {
      icon: Cloud,
      title: 'Cloud Platforms',
      description: 'AWS (S3, Glue, Athena, Redshift), Snowflake, and modern data stack expertise',
    },
    {
      icon: Zap,
      title: 'AI-Assisted Development',
      description: 'Daily user of Claude, ChatGPT, and Copilot for productivity and code quality',
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-950 px-6">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-5xl lg:text-6xl font-bold text-white mb-20">About Me</h2>

        {/* Asymmetric Layout: 60% left (text) | 40% right (stats) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
          {/* LEFT: Text narrative (60%) */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xl text-slate-300 leading-relaxed">
              I'm a <span className="font-bold text-cyan-400">Data Analyst with 4+ years</span> of experience across analytics and data engineering. Currently at the State of California's Franchise Tax Board, I deliver compliance and audit reporting dashboards that support critical decision-making.
            </p>
            <p className="text-xl text-slate-300 leading-relaxed">
              I bring strong expertise in <span className="font-bold text-blue-400">T-SQL on large datasets</span>, <span className="font-bold text-blue-400">end-to-end Power BI ownership</span>, and <span className="font-bold text-blue-400">production data engineering on AWS</span>.
            </p>
            <p className="text-xl text-slate-300 leading-relaxed">
              I'm a daily user of AI tools—Claude, ChatGPT, and GitHub Copilot—for SQL drafting, exploratory data analysis, and stakeholder documentation. I thrive in collaborative environments where I can own projects end-to-end, solve complex data problems, and make a tangible business impact.
            </p>

            {/* Highlights - below text */}
            <div className="pt-8 space-y-4">
              {highlights.slice(0, 2).map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Stats cards (40%) */}
          <div className="lg:col-span-5 space-y-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/60 p-8 rounded-xl hover:border-cyan-500/40 transition duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  {stat.label}
                </div>
                <p className="text-slate-400 text-sm">{stat.description}</p>
              </div>
            ))}

            {/* Additional highlights on the right */}
            <div className="pt-4">
              {highlights.slice(2, 4).map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="mb-4">
                    <div className="flex gap-3 items-start">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon size={16} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                        <p className="text-slate-500 text-xs mt-1">{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { Code2, BarChart3, Cloud, Zap } from 'lucide-react';

export default function About() {
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
    <section id="about" className="py-20 bg-slate-950 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Data professional passionate about building scalable systems and driving impact through analytics
          </p>
        </div>

        {/* Main bio */}
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-slate-700 p-8 rounded-xl mb-16">
          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            I'm a <span className="font-semibold text-blue-400">Data Analyst with 4+ years</span> across analytics and data engineering. Currently at the State of California's Franchise Tax Board, I deliver compliance and audit reporting dashboards that support critical decision-making. I bring strong expertise in <span className="font-semibold text-blue-400">T-SQL on large datasets</span>, <span className="font-semibold text-blue-400">end-to-end Power BI ownership</span>, and <span className="font-semibold text-blue-400">production data engineering on AWS</span>.
          </p>
          <p className="text-slate-300 text-lg leading-relaxed">
            I'm a daily user of AI tools—Claude, ChatGPT, and GitHub Copilot—for SQL drafting, exploratory data analysis, and stakeholder documentation. I thrive in collaborative environments where I can own projects end-to-end, solve complex data problems, and make a tangible business impact.
          </p>
        </div>

        {/* Highlights grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 hover:border-blue-500/50 p-6 rounded-lg transition duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-400">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Values */}
        <div className="mt-16 bg-blue-900/20 border border-blue-500/30 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-white mb-4">What Drives Me</h3>
          <ul className="space-y-3 text-slate-300">
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Building scalable systems that solve real problems and drive business value</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Creating analytics that are both rigorous and accessible to all stakeholders</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Continuous learning and mastering new tools and cloud platforms</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <span>Collaborating with cross-functional teams to turn data into decisions</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

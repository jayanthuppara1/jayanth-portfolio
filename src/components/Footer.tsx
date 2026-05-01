import { Code2, Briefcase, Mail, ExternalLink, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800/50 py-20 px-6">
      <div className="w-full max-w-7xl mx-auto">
        {/* Main footer grid: 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">Jayanth</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">Data-driven problem solver building analytics systems at scale.</p>
            <div className="space-y-3">
              <p className="text-slate-500 text-sm flex items-center gap-2">
                <MapPin size={16} className="text-cyan-400" />
                Sacramento, CA
              </p>
              <p className="text-slate-500 text-sm flex items-center gap-2">
                <Phone size={16} className="text-cyan-400" />
                656-203-4661
              </p>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Explore</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-slate-400 hover:text-cyan-400 transition duration-300 text-sm">
                  → About Me
                </a>
              </li>
              <li>
                <a href="#experience" className="text-slate-400 hover:text-cyan-400 transition duration-300 text-sm">
                  → Experience
                </a>
              </li>
              <li>
                <a href="#skills" className="text-slate-400 hover:text-cyan-400 transition duration-300 text-sm">
                  → Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-400 hover:text-cyan-400 transition duration-300 text-sm">
                  → Projects
                </a>
              </li>
              <li>
                <a href="#education" className="text-slate-400 hover:text-cyan-400 transition duration-300 text-sm">
                  → Education
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition duration-300 text-sm flex items-center gap-2">
                  → Resume (PDF)
                </a>
              </li>
              <li>
                <a href="https://github.com/jayanthuppara" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition duration-300 text-sm">
                  → GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/jayanthu/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition duration-300 text-sm">
                  → LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:upparajayanth999@gmail.com" className="text-slate-400 hover:text-cyan-400 transition duration-300 text-sm">
                  → Email
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Connect</h4>
            <p className="text-slate-400 text-sm mb-6">Let's chat about data, analytics, or your next project.</p>
            <div className="flex gap-3 flex-wrap">
              <a
                href="https://www.linkedin.com/in/jayanthu/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800/60 hover:bg-blue-600 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition duration-300 border border-slate-700/60 hover:border-blue-500/60"
                title="LinkedIn"
              >
                <Briefcase size={20} />
              </a>
              <a
                href="https://github.com/jayanthuppara"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800/60 hover:bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition duration-300 border border-slate-700/60 hover:border-slate-600/60"
                title="GitHub"
              >
                <Code2 size={20} />
              </a>
              <a
                href="mailto:upparajayanth999@gmail.com"
                className="w-12 h-12 bg-slate-800/60 hover:bg-orange-600 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition duration-300 border border-slate-700/60 hover:border-orange-500/60"
                title="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800/60 hover:bg-green-600 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition duration-300 border border-slate-700/60 hover:border-green-500/60"
                title="Resume"
              >
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800/50 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Jayanth Uppara. All rights reserved.
            </p>
            <p className="text-slate-500 text-sm text-center">
              Built with Next.js 16 • React 19 • TypeScript • Tailwind CSS
            </p>
            <a
              href="https://github.com/jayanthuppara/jayanth-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition duration-300 flex items-center gap-2 text-sm"
            >
              View Source <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

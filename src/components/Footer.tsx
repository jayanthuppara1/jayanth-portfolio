import { Code2, Briefcase, Mail, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Jayanth Uppara</h3>
            <p className="text-slate-400">Data Analyst | BI Engineer | Data Engineer</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-slate-400 hover:text-blue-400 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="text-slate-400 hover:text-blue-400 transition">
                  Experience
                </a>
              </li>
              <li>
                <a href="#skills" className="text-slate-400 hover:text-blue-400 transition">
                  Skills
                </a>
              </li>
              <li>
                <a href="#education" className="text-slate-400 hover:text-blue-400 transition">
                  Education
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/jayanthu/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition"
                title="LinkedIn"
              >
                <Briefcase size={20} />
              </a>
              <a
                href="https://github.com/jayanthuppara"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition"
                title="GitHub"
              >
                <Code2 size={20} />
              </a>
              <a
                href="mailto:upparajayanth999@gmail.com"
                className="w-10 h-10 bg-slate-800 hover:bg-orange-600 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition"
                title="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-green-600 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition"
                title="Resume"
              >
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Jayanth Uppara. All rights reserved.
            </p>
            <p className="text-slate-500 text-sm">
              Built with Next.js 16, React 19, TypeScript, and Tailwind CSS
            </p>
            <a
              href="https://github.com/jayanthuppara/jayanth-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition flex items-center gap-2 text-sm"
            >
              View Source <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

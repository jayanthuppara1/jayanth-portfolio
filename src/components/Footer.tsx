export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-slate-400 mb-4">
          © {new Date().getFullYear()} Jayanth Uppara. Built with Next.js, TypeScript, and Tailwind CSS.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="https://linkedin.com/in/jayanthuppara"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/jayanthuppara"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition"
          >
            GitHub
          </a>
          <a
            href="mailto:jayanth@example.com"
            className="text-slate-400 hover:text-blue-400 transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

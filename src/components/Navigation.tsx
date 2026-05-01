'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-b from-slate-950 to-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl text-white hover:text-blue-400 transition">
          Jayanth Uppara
        </Link>
        
        <div className="flex gap-8 items-center">
          <div className="hidden md:flex gap-6">
            <Link href="#projects" className="text-slate-300 hover:text-white transition">
              Projects
            </Link>
            <Link href="#experience" className="text-slate-300 hover:text-white transition">
              Experience
            </Link>
            <Link href="#about" className="text-slate-300 hover:text-white transition">
              About
            </Link>
          </div>
          
          <button
            onClick={toggleTheme}
            className="text-slate-300 hover:text-white transition p-2"
            aria-label="Toggle theme"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
}

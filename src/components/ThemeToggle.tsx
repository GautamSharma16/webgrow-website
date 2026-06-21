'use client';

import { useTheme } from './ThemeProvider';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-full glass border border-card-border hover:bg-brand-blue/10 hover:border-brand-blue/30 text-foreground transition-all duration-300 shadow-md cursor-pointer"
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5 text-yellow-400 hover:rotate-45 transition-transform duration-500" />
      ) : (
        <Moon className="h-5 w-5 text-slate-700 hover:-rotate-12 transition-transform duration-500" />
      )}
    </button>
  );
}

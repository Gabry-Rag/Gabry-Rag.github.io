import { Menu, X, Sun, Moon, Database } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  const navLinks = [
    { name: t('nav.expertise'), href: '#expertise' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.acdat'), href: '#acdat' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          <div className="flex-shrink-0 flex items-center gap-2">
            <Database className="h-6 w-6 text-brand" style={{ color: 'var(--color-brand)' }} />
            <span className="font-bold text-xl tracking-tight hidden sm:block">
              NAME SURNAME
            </span>
            <span className="font-bold text-xl tracking-tight sm:hidden">
              NS
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-brand dark:hover:text-[#0696D7] transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <div className="flex items-center gap-2 border-l border-slate-200 dark:border-slate-700 pl-4">
              <LanguageSwitcher />
              
              <button
                onClick={toggleTheme}
                className="p-2 rounded-md text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden gap-2">
            <LanguageSwitcher />
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ml-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Popup */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:text-brand dark:hover:text-[#0696D7] hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

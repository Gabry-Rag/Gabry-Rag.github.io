import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'it', label: 'Italiano', flag: '🇮🇹' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
  ];

  const currentLangObj = languages.find((l) => l.code === language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-2 rounded-md text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none"
        aria-label="Change language"
      >
        <span className="text-lg leading-none" aria-hidden="true">{currentLangObj.flag}</span>
        <span className="text-xs font-semibold uppercase tracking-wider hidden sm:block">{language}</span>
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white dark:bg-slate-800 ring-1 ring-black/5 focus:outline-none z-50 border border-slate-200 dark:border-slate-700">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  changeLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-sm flex items-center gap-3 transition-colors ${
                  language === lang.code 
                    ? 'bg-slate-100 dark:bg-slate-700 text-brand font-semibold' 
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

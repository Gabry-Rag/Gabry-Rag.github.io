import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../locales';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('language');
      // Defautl to 'it'
      return savedLang && translations[savedLang] ? savedLang : 'it';
    }
    return 'it';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    // Optional: update lang attribute on HTML element
    document.documentElement.lang = language;
  }, [language]);

  // Helper to split keys like "hero.title"
  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      if (value && value[k] !== undefined) {
        value = value[k];
      } else {
        return key; // return key itself if not found
      }
    }
    return value;
  };

  const changeLanguage = (newLang) => {
    if (translations[newLang]) {
      setLanguage(newLang);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

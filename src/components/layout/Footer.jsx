import { Globe, Mail } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          <div className="text-center md:text-left">
            <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100">Name Surname</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              {t('footer.role')}
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <a href="#" className="text-slate-400 hover:text-brand dark:hover:text-[#0696D7]">
              <span className="sr-only">Website</span>
              <Globe className="h-5 w-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-brand dark:hover:text-[#0696D7]">
              <span className="sr-only">Contact</span>
              <Mail className="h-5 w-5" />
            </a>
          </div>

        </div>
        <div className="mt-8 text-center text-xs text-slate-500 dark:text-slate-500 border-t border-slate-100 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between">
          <p>&copy; {currentYear} Name Surname. {t('footer.rights')}</p>
          <div className="mt-2 md:mt-0 space-x-4">
            <a href="#" className="hover:text-slate-700 dark:hover:text-slate-300">{t('footer.vat')}: 12345678901</a>
            <a href="#" className="hover:text-slate-700 dark:hover:text-slate-300 pointer-events-none opacity-50">{t('footer.privacy')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}


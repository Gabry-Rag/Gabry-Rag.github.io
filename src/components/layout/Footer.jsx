import { Globe, Mail, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-200/50 dark:border-slate-800/50 backdrop-blur-lg bg-white/50 dark:bg-slate-950/50 mt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand/5 dark:to-brand/10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center md:items-start text-center md:text-left">
          
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold font-outfit text-slate-800 dark:text-slate-100">Name Surname</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-xs">
              {t('footer.role')}
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start space-y-4">
             <h4 className="font-outfit font-semibold text-slate-700 dark:text-slate-200">Connect</h4>
             <div className="flex space-x-4">
              <a href="#" className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-white hover:bg-brand dark:hover:bg-brand transition-all duration-300 group">
                <span className="sr-only">Website</span>
                <Globe className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-white hover:bg-brand dark:hover:bg-brand transition-all duration-300 group">
                <span className="sr-only">Contact</span>
                <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
             </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end w-full">
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium hover:scale-105 transition-transform">
              Get in touch <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-200/50 dark:border-slate-800/50 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 dark:text-slate-400">
          <p>&copy; {currentYear} Name Surname. {t('footer.rights')}</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="hover:text-brand transition-colors">{t('footer.vat')}: 12345678901</a>
            <a href="#" className="hover:text-brand transition-colors pointer-events-none opacity-50 relative group">
              {t('footer.privacy')}
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Coming soon</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


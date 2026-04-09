import { ArrowRight, Download } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      {/* Decorative background grid pattern for technical feel */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05]" 
           style={{ backgroundImage: 'linear-gradient(var(--color-slate-grey) 1px, transparent 1px), linear-gradient(90deg, var(--color-slate-grey) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 relative z-10 flex flex-col md:flex-row items-center">
        
        <div className="w-full md:w-1/2 md:pr-12 text-center md:text-left mb-12 md:mb-0">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#0696D7]/10 text-[#0696D7] text-xs font-semibold uppercase tracking-wider mb-6">
            {t('hero.role')}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-slate-50 tracking-tight leading-tight mb-6 transition-colors">
            {t('hero.titleStart')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0696D7] to-[#EF5D3C]">{t('hero.titleHighlight')}</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto md:mx-0 mb-8 transition-colors">
            {t('hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#projects" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#0696D7] hover:bg-[#057db3] transition-colors gap-2 shadow-sm">
              {t('hero.viewWork')} <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 dark:border-slate-700 text-base font-medium rounded-md text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors gap-2 shadow-sm">
              {t('hero.downloadResume')} <Download className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 relative">
          <div className="aspect-square sm:aspect-[4/3] md:aspect-square bg-slate-200 dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-300 dark:border-slate-700 flex items-center justify-center overflow-hidden relative transition-colors">
            <div className="text-slate-400 dark:text-slate-500 font-mono text-sm uppercase tracking-widest text-center px-4">
              <span className="block mb-2">{t('hero.modelTitle')}</span>
              <span className="opacity-50">{t('hero.modelDesc')}</span>
            </div>
            
            {/* Example technical decoration inside the image placeholder */}
            <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-[#EF5D3C] animate-pulse"></div>
            <div className="absolute bottom-4 right-4 text-xs font-mono text-slate-400 opacity-50">COORD: X:14 Y:92 Z:41</div>
          </div>
        </div>
      </div>
    </section>
  );
}

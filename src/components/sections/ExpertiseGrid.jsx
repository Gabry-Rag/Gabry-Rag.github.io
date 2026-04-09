import { Building2, Box, ShieldAlert } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function ExpertiseGrid() {
  const { t } = useLanguage();
  const items = t('expertise.items') || [];
  
  const expertises = [
    {
      title: items[0]?.title || '',
      description: items[0]?.description || '',
      icon: Building2,
    },
    {
      title: items[1]?.title || '',
      description: items[1]?.description || '',
      icon: Box,
    },
    {
      title: items[2]?.title || '',
      description: items[2]?.description || '',
      icon: ShieldAlert,
    }
  ];

  return (
    <section id="expertise" className="py-24 bg-white dark:bg-[#151e2e] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-[#0696D7] uppercase tracking-wider">{t('expertise.sectionTitle')}</h2>
          <p className="mt-2 text-3xl font-extrabold text-slate-900 dark:text-slate-50 tracking-tight sm:text-4xl">
            {t('expertise.mainTitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertises.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="group relative p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-[#0696D7]/5 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-xl bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-700 mb-6 text-[#0696D7] group-hover:text-[#EF5D3C] transition-colors">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-3 group-hover:text-[#0696D7] transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                  {item.description}
                </p>
                {/* Decorative bottom line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#0696D7] transition-all duration-300 group-hover:w-full rounded-b-2xl"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

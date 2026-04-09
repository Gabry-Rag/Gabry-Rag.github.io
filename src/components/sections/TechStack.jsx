import { Code2, Zap, Layers, Cpu, Compass } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function TechStack() {
  const { t } = useLanguage();

  const tools = [
    { name: 'Revit', icon: Layers, color: 'text-blue-500' },
    { name: 'Navisworks', icon: Compass, color: 'text-green-600' },
    { name: 'Dynamo', icon: Zap, color: 'text-[#EF5D3C]' },
    { name: 'Enscape', icon: Cpu, color: 'text-indigo-400' },
    { name: 'Python / C#', icon: Code2, color: 'text-yellow-500' },
  ];

  return (
    <section className="py-12 border-y border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-8">
          {t('techStack.title')}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <div key={index} className="flex flex-col items-center group cursor-pointer">
                <Icon className={`h-10 w-10 md:h-12 md:w-12 text-slate-400 dark:text-slate-600 group-hover:${tool.color} transition-colors duration-300 mb-3`} />
                <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
                  {tool.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

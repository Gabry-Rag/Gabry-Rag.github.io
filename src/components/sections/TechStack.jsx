import { Code2, Zap, Layers, Cpu, Compass } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';

export default function TechStack() {
  const { t } = useLanguage();

  const tools = [
    { name: 'Revit', icon: Layers, color: 'text-blue-500 hover:text-blue-500' },
    { name: 'Navisworks', icon: Compass, color: 'text-green-600 hover:text-green-600' },
    { name: 'Dynamo', icon: Zap, color: 'text-brand-alt hover:text-brand-alt' },
    { name: 'Enscape', icon: Cpu, color: 'text-indigo-400 hover:text-indigo-400' },
    { name: 'Python / C#', icon: Code2, color: 'text-yellow-500 hover:text-yellow-500' },
  ];

  return (
    <section className="py-16 relative bg-white/30 dark:bg-slate-950/30 border-y border-slate-200/50 dark:border-slate-800/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-10">
          {t('techStack.title')}
        </p>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="flex flex-wrap justify-center items-center gap-10 md:gap-20"
        >
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <motion.div 
                key={index} 
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, type: "spring" } }
                }}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="relative p-4 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-700/50 shadow-sm group-hover:shadow-md transition-all duration-300 mb-4 group-hover:-translate-y-2">
                  <Icon className={`h-8 w-8 md:h-10 md:w-10 text-slate-400 dark:text-slate-500 transition-colors duration-300 ${tool.color}`} />
                </div>
                <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors">
                  {tool.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

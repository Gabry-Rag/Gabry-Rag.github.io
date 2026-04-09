import { Building2, Box, ShieldAlert } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';

export default function ExpertiseGrid() {
  const { t } = useLanguage();
  const items = t('expertise.items') || [];
  
  const expertises = [
    {
      title: items[0]?.title || 'BIM Management',
      description: items[0]?.description || 'Strategic implementation of BIM processes.',
      icon: Building2,
    },
    {
      title: items[1]?.title || 'Parametric Design',
      description: items[1]?.description || 'Algorithmic approaches to geometry.',
      icon: Box,
    },
    {
      title: items[2]?.title || 'Coordination',
      description: items[2]?.description || 'Clash detection and resolution.',
      icon: ShieldAlert,
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="expertise" className="py-32 relative bg-transparent">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-brand/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-brand/10 text-brand text-xs font-semibold uppercase tracking-widest mb-4">
            {t('expertise.sectionTitle')}
          </span>
          <h2 className="font-outfit text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t('expertise.mainTitle')}
          </h2>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-brand to-brand-alt mx-auto rounded-full"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {expertises.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div 
                variants={cardVariants}
                key={index}
                whileHover={{ y: -10 }}
                className="group relative p-8 glass-panel rounded-[2rem] transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-white/40 dark:from-slate-800 dark:to-slate-900/40 rounded-[2rem] z-[-1]"></div>
                
                <div className="w-14 h-14 inline-flex items-center justify-center rounded-2xl bg-slate-50 dark:bg-slate-900 shadow-inner border border-slate-200/50 dark:border-slate-700/50 mb-8 text-brand group-hover:text-brand-alt group-hover:scale-110 transition-all duration-300">
                  <Icon className="h-7 w-7" />
                </div>
                
                <h3 className="font-outfit text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-brand transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                  {item.description}
                </p>
                
                {/* Decorative border bottom */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-brand to-brand-alt transition-all duration-500 group-hover:w-full rounded-b-[2rem]"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

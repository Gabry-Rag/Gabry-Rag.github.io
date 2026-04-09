import { ArrowRight, Download } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';

export default function Hero() {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-16 overflow-hidden bg-transparent">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col md:flex-row items-center">
        
        {/* Left Column - Text Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full md:w-1/2 md:pr-12 text-center md:text-left mb-16 md:mb-0"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center px-4 py-2 rounded-full bg-brand/10 dark:bg-brand/20 text-brand text-sm font-semibold tracking-wide mb-8 border border-brand/20 shadow-sm backdrop-blur-sm">
            {t('hero.role')}
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="font-outfit text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-6">
            {t('hero.titleStart')}{' '}
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-brand via-[#00c6ff] to-brand-alt">
              {t('hero.titleHighlight')}
            </span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto md:mx-0 mb-10 leading-relaxed font-light">
            {t('hero.description')}
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
            <a href="#projects" className="group inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-white bg-slate-900 dark:bg-white dark:text-slate-900 shadow-xl shadow-brand/20 hover:scale-105 transition-all duration-300 gap-3">
              {t('hero.viewWork')} <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="group inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800/80 glass-panel hover:bg-slate-50 dark:hover:bg-slate-700/80 transition-all duration-300 gap-3">
              {t('hero.downloadResume')} <Download className="h-5 w-5 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column - Visual/Interactive Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="w-full md:w-1/2 relative"
        >
          <div className="relative aspect-square max-w-[500px] mx-auto md:ml-auto md:mr-0 group">
            {/* Soft backdrop glow */}
            <div className="absolute inset-0 bg-brand/20 dark:bg-brand/30 rounded-full blur-[80px] group-hover:blur-[100px] transition-all duration-700"></div>
            
            {/* The structural placeholder shape */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative w-full h-full glass-panel rounded-3xl overflow-hidden shadow-2xl border border-white/40 dark:border-white/10 flex flex-col items-center justify-center"
            >
              <div className="text-slate-400 dark:text-slate-500 font-mono text-sm uppercase tracking-widest text-center px-6">
                <span className="block mb-2 font-bold">{t('hero.modelTitle')}</span>
                <span className="opacity-50 text-xs">{t('hero.modelDesc')}</span>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-6 left-6 flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
              </div>
              
              {/* Dynamic grid inside */}
              <div className="absolute inset-0 z-[-1] opacity-[0.05] dark:opacity-[0.1]" 
                style={{ backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
              
              <div className="absolute bottom-6 right-6 text-xs font-mono text-slate-400/70 border border-slate-400/30 px-3 py-1 rounded-md backdrop-blur-sm">
                RENDER_READY: TRUE
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

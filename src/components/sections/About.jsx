import { Award, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';

export default function About() {
  const { t } = useLanguage();
  const certs = t('about.certs') || {};
  const skillsConfig = t('about.skills') || {};

  const skills = [
    { name: skillsConfig.coord || 'BIM Coordination', level: 95 },
    { name: skillsConfig.param || 'Parametric Modeling', level: 90 },
    { name: skillsConfig.sched || 'Data Extraction & Schedules', level: 95 },
    { name: skillsConfig.dynamo || 'Computational Design (Dynamo)', level: 85 },
    { name: skillsConfig.clash || 'Clash Detection', level: 90 },
  ];

  return (
    <section id="about" className="py-32 relative bg-transparent border-t border-slate-200/50 dark:border-slate-800/50">
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-brand/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center"
        >
          
          {/* Narrative & Certifications */}
          <div className="w-full lg:w-5/12">
            <span className="inline-block py-1 px-3 rounded-full bg-slate-200/50 dark:bg-slate-800/50 text-slate-800 dark:text-slate-200 text-xs font-semibold uppercase tracking-widest mb-6 backdrop-blur-sm border border-slate-300/50 dark:border-slate-700/50">
              Profile
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold font-outfit text-slate-900 dark:text-white tracking-tight mb-8">
              {t('about.title')}
            </h2>
            <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 mb-12 font-light leading-relaxed">
              <p>
                {t('about.p1')}
              </p>
              <p>
                {t('about.p2')}
              </p>
            </div>

            <h3 className="text-xs font-bold font-outfit text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-6">
              {t('about.certsTitle')}
            </h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 flex items-center gap-4 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 px-5 py-4 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                <div className="p-3 bg-brand/10 rounded-xl group-hover:bg-brand group-hover:text-white text-brand transition-colors">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold font-outfit text-slate-900 dark:text-white leading-tight mb-1">{(certs.acp || {}).title || 'Professional Cert'}</div>
                  <div className="text-xs text-slate-500 font-medium">{(certs.acp || {}).desc || 'Autodesk'}</div>
                </div>
              </div>
              <div className="flex-1 flex items-center gap-4 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 px-5 py-4 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                <div className="p-3 bg-green-500/10 rounded-xl group-hover:bg-green-500 group-hover:text-white text-green-500 transition-colors">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold font-outfit text-slate-900 dark:text-white leading-tight mb-1">{(certs.bim || {}).title || 'BIM Coord'}</div>
                  <div className="text-xs text-slate-500 font-medium">{(certs.bim || {}).desc || 'ICMQ'}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Graph */}
          <div className="w-full lg:w-7/12 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-brand/20 to-brand-alt/20 blur-[80px] rounded-full z-[-1]"></div>
            
            <div className="glass-panel border-slate-200/50 dark:border-slate-700/50 rounded-[2.5rem] p-10 md:p-14 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 dark:bg-white/5 rounded-bl-[100px] pointer-events-none"></div>
              
              <h3 className="text-2xl font-bold font-outfit text-slate-900 dark:text-white mb-10 flex items-center gap-3">
                {t('about.skillsTitle')}
              </h3>
              
              <div className="space-y-8">
                {skills.map((skill, idx) => (
                  <div key={idx} className="group">
                    <div className="flex justify-between text-sm font-semibold font-outfit mb-3 text-slate-700 dark:text-slate-200">
                      <span>{skill.name}</span>
                      <span className="font-mono text-brand dark:text-brand-alt">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200/50 dark:bg-slate-800/50 rounded-full h-3 overflow-hidden backdrop-blur-sm border border-black/5 dark:border-white/5">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 1, delay: idx * 0.1, ease: "easeOut" }}
                        className="bg-gradient-to-r from-brand to-brand-alt h-full rounded-full relative"
                      >
                        <div className="absolute top-0 right-0 bottom-0 w-10 bg-white/20 animate-[pulse_2s_ease-in-out_infinite]"></div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

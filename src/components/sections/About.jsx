import { Award, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

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
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Narrative & Certifications */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-slate-50 tracking-tight mb-6">
            {t('about.title')}
          </h2>
          <div className="space-y-4 text-lg text-slate-600 dark:text-slate-400 mb-10">
            <p>
              {t('about.p1')}
            </p>
            <p>
              {t('about.p2')}
            </p>
          </div>

          <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-200 uppercase tracking-widest mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">
            {t('about.certsTitle')}
          </h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-3 rounded-lg shadow-sm">
              <Award className="w-8 h-8 text-[#0696D7]" />
              <div>
                <div className="text-sm font-bold text-slate-900 dark:text-slate-100">{(certs.acp || {}).title || ''}</div>
                <div className="text-xs text-slate-500">{(certs.acp || {}).desc || ''}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-3 rounded-lg shadow-sm">
              <CheckCircle2 className="w-8 h-8 text-green-500" />
              <div>
                <div className="text-sm font-bold text-slate-900 dark:text-slate-100">{(certs.bim || {}).title || ''}</div>
                <div className="text-xs text-slate-500">{(certs.bim || {}).desc || ''}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Graph */}
        <div className="w-full lg:w-1/2 bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-8">{t('about.skillsTitle')}</h3>
          <div className="space-y-6">
            {skills.map((skill, idx) => (
              <div key={idx}>
                <div className="flex justify-between text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
                  <span>{skill.name}</span>
                  <span className="font-mono text-slate-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-900 rounded-full h-2.5 overflow-hidden">
                  <div 
                    className="bg-[#0696D7] h-2.5 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

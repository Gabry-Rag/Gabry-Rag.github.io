import { FileSpreadsheet, Layers, Maximize, AlertCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';

export default function Projects() {
  const { t } = useLanguage();
  const items = t('projects.items') || [];
  const meta = t('projects.metadata') || {};
  const ph = t('projects.placeholders') || {};

  const projects = [
    {
      title: items[0]?.title || 'BIM Integration Hub',
      metadata: { 
        [meta.location || 'Location']: items[0]?.locationStr || 'Milan, Italy', 
        [meta.year || 'Year']: '2025', 
        [meta.lod || 'LOD']: 'LOD 400', 
        [meta.software || 'Software']: 'Revit, Dynamo, Navisworks',
        [meta.role || 'Role']: items[0]?.roleStr || 'Lead BIM Coordinator'
      },
      images: [
        ph.wireframe || 'Architectural Wireframe',
        ph.schedule || 'Construction Schedule'
      ],
      problem: items[0]?.problemName || 'Inconsistent model parameters causing clash detection failures in preliminary stages.',
      solution: items[0]?.solutionName || 'Developed a custom Dynamo script to automate parameter propagation and standardized the naming convention across disciplines.'
    },
    {
      title: items[1]?.title || 'Parametric Facade Optimization',
      metadata: { 
        [meta.location || 'Location']: items[1]?.locationStr || 'London, UK', 
        [meta.year || 'Year']: '2024', 
        [meta.lod || 'LOD']: 'LOD 350', 
        [meta.software || 'Software']: 'Revit, Rhino, Grasshopper',
        [meta.role || 'Role']: items[1]?.roleStr || 'Computational Designer'
      },
      images: [
        ph.navisworks || 'Clash Detection Output',
        ph.family || 'Parametric Node Detail'
      ],
      problem: items[1]?.problemName || 'Solar gain metrics exceeded standards due to generic facade paneling.',
      solution: items[1]?.solutionName || 'Implemented a parametric logic integrating environmental analysis to auto-adjust louver angles dynamically.'
    }
  ];

  return (
    <section id="projects" className="py-32 relative bg-transparent border-t border-slate-200/50 dark:border-slate-800/50">
      <div className="absolute top-1/4 left-0 w-1/2 h-1/3 bg-brand-alt/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-left mb-20 md:w-2/3"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-brand-alt/10 text-brand-alt text-xs font-semibold uppercase tracking-widest mb-4">
            Case Studies
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold font-outfit text-slate-900 dark:text-white tracking-tight mb-6">
            {t('projects.title')}
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        <div className="space-y-32">
          {projects.map((proj, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center group"
            >
              
              {/* Left Column: Metadata & Narrative */}
              <div className={`w-full lg:w-5/12 ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <h3 className="text-3xl font-bold font-outfit text-slate-900 dark:text-white mb-8 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand group-hover:to-brand-alt transition-all duration-300">
                  {proj.title}
                </h3>
                
                <div className="overflow-hidden rounded-2xl border border-slate-200/50 dark:border-slate-700/50 mb-10 shadow-sm glass-panel backdrop-blur-md">
                  <table className="min-w-full text-sm divide-y divide-slate-200/50 dark:divide-slate-700/50">
                    <tbody className="divide-y divide-slate-200/50 dark:divide-slate-700/50 bg-white/20 dark:bg-slate-900/20">
                      {Object.entries(proj.metadata).map(([key, val]) => (
                        <tr key={key} className="hover:bg-white/40 dark:hover:bg-slate-800/40 transition-colors duration-150">
                          <td className="px-5 py-4 font-semibold font-outfit text-slate-800 dark:text-slate-200 uppercase tracking-wider text-xs w-1/3">
                            {key}
                          </td>
                          <td className="px-5 py-4 text-slate-600 dark:text-slate-400 font-medium">
                            {val}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="space-y-8 pl-4 border-l-2 border-brand/20">
                  <div className="relative">
                    <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-brand-alt border-2 border-slate-50 dark:border-slate-900"></div>
                    <h4 className="flex items-center gap-2 font-bold font-outfit text-slate-900 dark:text-white mb-2">
                      <AlertCircle className="w-5 h-5 text-brand-alt" /> {t('projects.problemTitle')}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">{proj.problem}</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-brand border-2 border-slate-50 dark:border-slate-900"></div>
                    <h4 className="flex items-center gap-2 font-bold font-outfit text-slate-900 dark:text-white mb-2">
                      <Layers className="w-5 h-5 text-brand" /> {t('projects.solutionTitle')}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">{proj.solution}</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Process Gallery */}
              <div className={`w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-6 ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                {proj.images.map((img, i) => (
                  <motion.div 
                    whileHover={{ scale: 1.02, y: -5 }}
                    key={i} 
                    className={`bg-slate-100 dark:bg-slate-800/50 rounded-3xl relative overflow-hidden group/img aspect-[4/3] flex items-center justify-center border border-slate-200/50 dark:border-slate-700/50 glass-panel cursor-pointer ${i === 0 ? 'mt-0 sm:mt-12' : 'mt-0'}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300"></div>
                    <div className="text-center p-8 transition-transform duration-500 group-hover/img:scale-110">
                      {i % 2 === 0 ? <Maximize className="w-10 h-10 mx-auto mb-4 text-brand opacity-60" /> : <FileSpreadsheet className="w-10 h-10 mx-auto mb-4 text-brand-alt opacity-60" />}
                      <span className="text-xs font-mono font-bold text-slate-800 dark:text-slate-200 uppercase tracking-widest bg-white/70 dark:bg-slate-900/70 py-1 px-3 rounded-full backdrop-blur-sm">
                        {img}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { FileSpreadsheet, Layers, Maximize, AlertCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function Projects() {
  const { t } = useLanguage();
  const items = t('projects.items') || [];
  const meta = t('projects.metadata') || {};
  const ph = t('projects.placeholders') || {};

  const projects = [
    {
      title: items[0]?.title || '',
      metadata: { 
        [meta.location || 'Location']: items[0]?.locationStr || '', 
        [meta.year || 'Year']: '2025', 
        [meta.lod || 'LOD']: 'LOD 400', 
        [meta.software || 'Software']: 'Revit, Dynamo, Navisworks',
        [meta.role || 'Role']: items[0]?.roleStr || ''
      },
      images: [
        ph.wireframe || '',
        ph.schedule || ''
      ],
      problem: items[0]?.problemName || '',
      solution: items[0]?.solutionName || ''
    },
    {
      title: items[1]?.title || '',
      metadata: { 
        [meta.location || 'Location']: items[1]?.locationStr || '', 
        [meta.year || 'Year']: '2024', 
        [meta.lod || 'LOD']: 'LOD 350', 
        [meta.software || 'Software']: 'Revit, Navisworks',
        [meta.role || 'Role']: items[1]?.roleStr || ''
      },
      images: [
        ph.navisworks || '',
        ph.family || ''
      ],
      problem: items[1]?.problemName || '',
      solution: items[1]?.solutionName || ''
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-slate-50 tracking-tight">{t('projects.title')}</h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">{t('projects.subtitle')}</p>
        </div>

        <div className="space-y-24">
          {projects.map((proj, idx) => (
            <div key={idx} className="flex flex-col lg:flex-row gap-12 bg-white dark:bg-slate-800 rounded-3xl p-8 lg:p-12 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
              
              {/* Left Column: Metadata & Narrative */}
              <div className="w-full lg:w-1/3">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6">{proj.title}</h3>
                
                <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 mb-8 max-w-sm">
                  <table className="min-w-full divide-y text-sm divide-slate-200 dark:divide-slate-700">
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-700 bg-white dark:bg-slate-800">
                      {Object.entries(proj.metadata).map(([key, val]) => (
                        <tr key={key}>
                          <td className="px-4 py-3 font-medium text-slate-900 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/50 capitalize w-1/3">
                            {key}
                          </td>
                          <td className="px-4 py-3 text-slate-600 dark:text-slate-400">
                            {val}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="flex items-center gap-2 font-semibold text-[#EF5D3C] mb-2"><AlertCircle className="w-4 h-4" /> {t('projects.problemTitle')}</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{proj.problem}</p>
                  </div>
                  <div>
                    <h4 className="flex items-center gap-2 font-semibold text-[#0696D7] mb-2"><Layers className="w-4 h-4" /> {t('projects.solutionTitle')}</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{proj.solution}</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Process Gallery */}
              <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {proj.images.map((img, i) => (
                  <div key={i} className="bg-slate-100 dark:bg-slate-900 rounded-xl relative overflow-hidden group aspect-[4/3] flex items-center justify-center border border-slate-200 dark:border-slate-700">
                    <div className="text-center p-6 opacity-60 group-hover:opacity-100 transition-opacity">
                      {i % 2 === 0 ? <Maximize className="w-8 h-8 mx-auto mb-3 text-slate-400" /> : <FileSpreadsheet className="w-8 h-8 mx-auto mb-3 text-slate-400" />}
                      <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">{img}</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

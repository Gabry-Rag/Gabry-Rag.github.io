import { FolderTree, ShieldCheck, Mail } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import DriveExplorer from '../features/DriveExplorer';

export default function ACdat() {
  const { t } = useLanguage();
  
  // CONFIGURATION - Replace with your real Google Apps Script URL and Root Folder ID
  // For now, these are dummy strings that will trigger the error state in the UI.
  const SCRIPT_URL = ''; // E.g. https://script.google.com/macros/s/AKfycb.../exec
  const ROOT_FOLDER_ID = 'root'; // E.g. 1a2b3c4d5e6f7g8h9i0j

  return (
    <section id="acdat" className="py-24 bg-white dark:bg-[#151e2e] transition-colors duration-300 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-slate-50 tracking-tight">{t('acdat.title')}</h2>
            <p className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
              {t('acdat.subtitle')}
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex items-center gap-2 text-sm text-[#0696D7] font-medium bg-[#0696D7]/10 px-4 py-2 rounded-full cursor-not-allowed">
            <ShieldCheck className="w-4 h-4" /> 
            {t('acdat.readOnly')}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Information & Context */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-6">
              <div className="flex items-center gap-2 text-slate-900 dark:text-slate-100 font-bold mb-4">
                <FolderTree className="w-5 h-5 text-slate-500" /> Metodologia CDE
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                L'ambiente di condivisione dati (ACdat) è strutturato secondo la norma <strong>ISO 19650</strong>. 
                Questa interfaccia permette di navigare in tempo reale tra i file pubblicati e i template standardizzati.
              </p>
              
              <div className="space-y-3">
                {['01_WIP', '02_SHARED', '03_PUBLISHED', '04_ARCHIVED'].map((status) => (
                  <div key={status} className="flex items-center gap-3 text-xs font-mono font-bold text-slate-400 dark:text-slate-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700"></span>
                    {status}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#0696D7]/5 border border-[#0696D7]/20 rounded-2xl p-6">
              <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0696D7]" /> Richiesta Accesso
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Hai bisogno di permessi di scrittura o accesso a cartelle di progetto specifiche? 
                Contattami tramite il form sottostante.
              </p>
            </div>
          </div>

          {/* Dynamic Explorer */}
          <div className="lg:col-span-8 h-[600px]">
            <DriveExplorer 
              scriptUrl={SCRIPT_URL}
              rootFolderId={ROOT_FOLDER_ID}
            />
          </div>

        </div>
      </div>
    </section>
  );
}

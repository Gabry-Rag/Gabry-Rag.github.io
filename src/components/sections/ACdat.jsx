import { FolderTree, ShieldCheck, Mail, FileIcon, Search, MoreHorizontal } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import DriveExplorer from '../features/DriveExplorer';
import { motion } from 'framer-motion';

export default function ACdat() {
  const { t } = useLanguage();
  
  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwQx4enGlp5Amjit7GvS_iUE4Qw6JnxT8d6ySL6FsGzlJLspFIjhI_4i_FKwa9Z0_o-Cw/exec'; 
  const ROOT_FOLDER_ID = '1osWHl2z2Kmagdiz3qipkXIGukMDumP-E'; 
  const DIRECT_DRIVE_LINK = 'https://drive.google.com/drive/folders/1osWHl2z2Kmagdiz3qipkXIGukMDumP-E?usp=drive_link';

  return (
    <section id="acdat" className="py-32 relative bg-transparent border-t border-slate-200/50 dark:border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <div>
            <span className="inline-block py-1 px-3 rounded-full bg-brand/10 text-brand text-xs font-semibold uppercase tracking-widest mb-4">
              CDE Environment
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold font-outfit text-slate-900 dark:text-white tracking-tight">
              {t('acdat.title')}
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400 font-light">
              {t('acdat.subtitle')}
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex items-center gap-2 text-sm text-[#0696D7] font-medium bg-[#0696D7]/10 px-4 py-2 rounded-full cursor-not-allowed border border-[#0696D7]/20 backdrop-blur-sm">
            <ShieldCheck className="w-4 h-4" /> 
            {t('acdat.readOnly')}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Information & Context */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4 space-y-6"
          >
            <div className="glass-panel border border-slate-200/50 dark:border-slate-700/50 rounded-3xl p-8">
              <div className="flex items-center gap-3 text-slate-900 dark:text-slate-100 font-bold mb-6 font-outfit text-xl">
                <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
                  <FolderTree className="w-6 h-6 text-brand" /> 
                </div>
                Metodologia CDE
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 font-light">
                L'ambiente di condivisione dati (ACdat) è strutturato secondo la norma <strong>ISO 19650</strong>. 
                Questa interfaccia permette di navigare in tempo reale tra i file pubblicati e i template standardizzati.
              </p>
              
              <div className="space-y-4">
                {['01_WIP', '02_SHARED', '03_PUBLISHED', '04_ARCHIVED'].map((status, i) => (
                  <div key={status} className="flex items-center gap-3 text-sm font-mono font-semibold text-slate-600 dark:text-slate-400 group cursor-default">
                    <span className={`w-2.5 h-2.5 rounded-full ${i===0?'bg-yellow-400':i===1?'bg-blue-400':i===2?'bg-green-400':'bg-slate-400'} group-hover:scale-150 transition-transform`}></span>
                    {status}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-brand/5 border border-brand/20 rounded-3xl p-8 backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <Mail className="w-24 h-24" />
              </div>
              <h4 className="font-bold font-outfit text-xl text-slate-900 dark:text-white mb-3 flex items-center gap-2 relative z-10">
                Accesso Diretto & Permessi
              </h4>
              <p className="text-slate-600 dark:text-slate-400 font-light relative z-10 mb-6">
                Hai bisogno di permessi di scrittura o accesso a cartelle di progetto specifiche? 
                Contattami tramite il <a href="#contact" className="text-brand font-medium hover:underline">form sottostante</a>, oppure esplora la cartella pubblica.
              </p>
              
              <a 
                href={DIRECT_DRIVE_LINK} 
                target="_blank" 
                rel="noreferrer"
                className="relative z-10 inline-flex items-center justify-center w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-brand dark:hover:text-brand hover:border-brand/30 transition-all shadow-sm group"
              >
                Apri in Google Drive
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Dynamic Explorer - OS Window Style */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-8 h-[600px] flex flex-col"
          >
            <div className="w-full h-full rounded-3xl flex flex-col overflow-hidden glass-panel border border-slate-200/50 dark:border-slate-700/50 shadow-2xl">
              {/* Fake OS Header */}
              <div className="h-14 bg-slate-100/50 dark:bg-slate-900/50 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-700/50 flex items-center px-4 justify-between select-none">
                <div className="flex gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-red-400/80 border border-slate-900/10"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-yellow-400/80 border border-slate-900/10"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-green-400/80 border border-slate-900/10"></div>
                </div>
                <div className="flex items-center justify-center bg-white/50 dark:bg-slate-800/50 rounded-md px-32 py-1.5 text-xs text-slate-500 font-medium font-mono min-w-[200px] border border-slate-200/50 dark:border-slate-700/50">
                  <Search className="w-3 h-3 mr-2" /> /ISO19650/Projects
                </div>
                <div className="flex gap-2 text-slate-400">
                  <MoreHorizontal className="w-5 h-5" />
                </div>
              </div>
              
              {/* Explorer Content Placeholder Area */}
              <div className="flex-grow bg-white/30 dark:bg-slate-950/30 overflow-hidden p-2 relative">
                <DriveExplorer 
                  scriptUrl={SCRIPT_URL}
                  rootFolderId={ROOT_FOLDER_ID}
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

import { Send, Hexagon } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const formStr = t('contact.form') || {};
  const opts = formStr.subjectOptions || {};
  const viewerStr = t('contact.viewer') || {};

  return (
    <section id="contact" className="py-24 bg-white dark:bg-[#151e2e] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-slate-50 tracking-tight mb-4">
              {t('contact.title')}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              {t('contact.subtitle')}
            </p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{formStr.name}</label>
                  <input type="text" id="name" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#0696D7] focus:border-transparent transition-shadow" placeholder="Jane Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{formStr.email}</label>
                  <input type="email" id="email" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#0696D7] focus:border-transparent transition-shadow" placeholder="jane@example.com" />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{formStr.subject}</label>
                <select id="subject" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#0696D7] focus:border-transparent transition-shadow appearance-none">
                  <option value="proj">{opts.proj || 'Project Inquiry'}</option>
                  <option value="collab">{opts.collab || 'Freelance Collaboration'}</option>
                  <option value="files">{opts.files || 'File/Template Request'}</option>
                  <option value="other">{opts.other || 'Other'}</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{formStr.message}</label>
                <textarea id="message" rows={4} className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#0696D7] focus:border-transparent transition-shadow" placeholder={formStr.messagePlaceholder || 'Describe your BIM requirements...'}></textarea>
              </div>

              <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-[#1A202C] dark:bg-[#0696D7] hover:bg-slate-800 dark:hover:bg-[#057db3] transition-colors gap-2 shadow-sm">
                {formStr.submit || 'Send Message'} <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* 3D Viewer Placeholder (Stretch Goal) */}
          <div className="flex flex-col h-full h-[400px] lg:h-auto">
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
              <Hexagon className="w-5 h-5 text-[#EF5D3C]" /> {viewerStr.title}
            </h3>
            <div className="flex-grow bg-slate-100 dark:bg-slate-900 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-2xl flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 p-8 text-center relative overflow-hidden group hover:border-[#0696D7] transition-colors cursor-pointer">
              
              <div className="absolute inset-0 opacity-10 dark:opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
              
              <div className="relative z-10 space-y-4">
                <BoxIcon className="w-16 h-16 mx-auto opacity-50 group-hover:opacity-100 group-hover:text-[#0696D7] transition-all duration-300 animate-pulse" />
                <div>
                  <p className="font-semibold text-slate-700 dark:text-slate-300 mb-1">{viewerStr.status}</p>
                  <p className="text-sm max-w-xs mx-auto">{viewerStr.desc}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Custom simple box icon for local use to prevent missing import issues
function BoxIcon(props) {
  return (
    <svg
      {...props}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
    </svg>
  );
}

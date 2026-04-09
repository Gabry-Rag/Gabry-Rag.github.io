import { Send, Hexagon } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';

export default function Contact() {
  const { t } = useLanguage();
  const formStr = t('contact.form') || {};
  const opts = formStr.subjectOptions || {};
  const viewerStr = t('contact.viewer') || {};

  return (
    <section id="contact" className="py-32 relative bg-transparent border-t border-slate-200/50 dark:border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24"
        >
          
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <span className="inline-block py-1 px-3 rounded-full bg-slate-200/50 dark:bg-slate-800/50 text-slate-800 dark:text-slate-200 text-xs font-semibold uppercase tracking-widest mb-4 backdrop-blur-sm">
              Let's Connect
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold font-outfit text-slate-900 dark:text-white tracking-tight mb-6">
              {t('contact.title')}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 font-light">
              {t('contact.subtitle')}
            </p>
            
            <form className="space-y-6 form-premium">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 pl-1">{formStr.name}</label>
                  <input type="text" id="name" className="w-full bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/80 rounded-xl px-5 py-4 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-300 backdrop-blur-sm" placeholder="Jane Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 pl-1">{formStr.email}</label>
                  <input type="email" id="email" className="w-full bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/80 rounded-xl px-5 py-4 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-300 backdrop-blur-sm" placeholder="jane@example.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 pl-1">{formStr.subject}</label>
                <select id="subject" className="w-full bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/80 rounded-xl px-5 py-4 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-300 backdrop-blur-sm appearance-none cursor-pointer">
                  <option value="proj">{opts.proj || 'Project Inquiry'}</option>
                  <option value="collab">{opts.collab || 'Freelance Collaboration'}</option>
                  <option value="files">{opts.files || 'File/Template Request'}</option>
                  <option value="other">{opts.other || 'Other'}</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 pl-1">{formStr.message}</label>
                <textarea id="message" rows={5} className="w-full bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/80 rounded-xl px-5 py-4 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-300 backdrop-blur-sm resize-none" placeholder={formStr.messagePlaceholder || 'Describe your BIM requirements...'}></textarea>
              </div>

              <button type="submit" className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl text-white bg-brand hover:bg-brand-hover transition-all duration-300 gap-3 shadow-lg shadow-brand/20 hover:-translate-y-1">
                <span className="font-outfit font-semibold tracking-wide">{formStr.submit || 'Send Message'}</span> 
                <Send className="w-5 h-5 group-hover:-mt-1 group-hover:ml-1 transition-all" />
              </button>
            </form>
          </div>

          {/* 3D Viewer Placeholder (Stretch Goal) */}
          <div className="order-1 lg:order-2 flex flex-col h-[400px] lg:h-auto pb-10 lg:pb-0">
            <h3 className="text-2xl font-bold font-outfit text-slate-900 dark:text-white mb-6 flex items-center gap-3">
              <div className="p-2 bg-brand-alt/10 rounded-lg">
                <Hexagon className="w-6 h-6 text-brand-alt" /> 
              </div>
              {viewerStr.title || 'Interactive 3D Viewer'}
            </h3>
            <div className="flex-grow glass-panel border border-slate-200/50 dark:border-slate-700/50 rounded-3xl flex flex-col items-center justify-center text-center relative overflow-hidden group cursor-pointer shadow-xl">
              
              {/* Complex background grid for premium feel */}
              <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[size:40px_40px]"></div>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand/10 blur-[60px] rounded-full group-hover:bg-brand/20 transition-all duration-700"></div>

              <div className="relative z-10 space-y-6 px-6">
                <div className="relative w-24 h-24 mx-auto perspective-1000">
                  {/* CSS 3D Box Placeholder */}
                  <motion.div 
                    animate={{ rotateY: 360, rotateX: 360 }}
                    transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                    className="w-full h-full relative preserve-3d"
                  >
                    <BoxIcon className="w-full h-full text-brand opacity-80" />
                  </motion.div>
                </div>
                
                <div>
                  <p className="font-bold font-outfit text-xl text-slate-800 dark:text-slate-100 mb-2">{viewerStr.status || 'Viewer Offline'}</p>
                  <p className="text-sm font-light text-slate-500 max-w-xs mx-auto">{viewerStr.desc || 'Awaiting 3D model data to render structural details.'}</p>
                </div>
                
                <div className="mt-4 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 text-xs font-mono text-slate-500 inline-block backdrop-blur-md">
                  CLICK TO INITIALIZE
                </div>
              </div>
            </div>
          </div>

        </motion.div>
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
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
    </svg>
  );
}

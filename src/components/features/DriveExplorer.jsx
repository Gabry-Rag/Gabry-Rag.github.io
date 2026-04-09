import React, { useState, useEffect } from 'react';
import { Folder, FileText, Download, Eye, ArrowLeft, ChevronRight, Loader2, AlertCircle } from 'lucide-react';

/**
 * DriveExplorer Component
 * 
 * Logic:
 * 1. Fetches folder content from a Google Apps Script web app.
 * 2. Manages navigation stack (history) for folder traversal.
 * 3. Handles file previews via Google Drive preview URLs.
 */
export default function DriveExplorer({ rootFolderId, scriptUrl }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [history, setHistory] = useState([{ id: rootFolderId, name: 'ACdat' }]);
  const [previewFile, setPreviewFile] = useState(null);

  const currentFolder = history[history.length - 1];

  useEffect(() => {
    if (scriptUrl && currentFolder.id) {
      fetchFolderContent(currentFolder.id);
    }
  }, [currentFolder.id, scriptUrl]);

  const fetchFolderContent = async (folderId) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${scriptUrl}?id=${folderId}`);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      const loadedFolders = (data.folders || []).map(f => ({ 
        ...f, 
        isFolder: true, 
        mimeType: 'application/vnd.google-apps.folder' 
      }));
      const loadedFiles = (data.files || []).map(f => ({ 
        ...f, 
        isFolder: false 
      }));
      setItems([...loadedFolders, ...loadedFiles]);
    } catch (err) {
      console.error('Error fetching drive content:', err);
      setError('Impossibile caricare i file. Verifica la connessione o la configurazione dello script.');
    } finally {
      setLoading(false);
    }
  };

  const navigateToFolder = (folderId, folderName) => {
    setHistory([...history, { id: folderId, name: folderName }]);
  };

  const navigateBack = () => {
    if (history.length > 1) {
      setHistory(history.slice(0, -1));
    }
  };

  const navigateToBreadcrumb = (index) => {
    setHistory(history.slice(0, index + 1));
  };

  const formatSize = (bytes) => {
    if (!bytes || bytes === '0') return '---';
    const s = ['B', 'KB', 'MB', 'GB', 'TB'];
    const e = Math.floor(Math.log(bytes) / Math.log(1024));
    return (bytes / Math.pow(1024, e)).toFixed(1) + ' ' + s[e];
  };

  const getFileIcon = (mimeType) => {
    if (mimeType === 'application/vnd.google-apps.folder') return <Folder className="w-5 h-5 text-blue-500 fill-blue-500/10" />;
    if (mimeType.includes('pdf')) return <FileText className="w-5 h-5 text-red-500" />;
    if (mimeType.includes('spreadsheet') || mimeType.includes('excel')) return <FileText className="w-5 h-5 text-green-600" />;
    if (mimeType.includes('presentation') || mimeType.includes('powerpoint')) return <FileText className="w-5 h-5 text-orange-500" />;
    return <FileText className="w-5 h-5 text-slate-400" />;
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
      
      {/* Explorer Header / Breadcrumbs */}
      <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700 flex items-center gap-4">
        {history.length > 1 && (
          <button 
            onClick={navigateBack}
            className="p-1.5 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-slate-600 dark:text-slate-400" />
          </button>
        )}
        <nav className="flex items-center text-sm font-medium overflow-x-auto no-scrollbar whitespace-nowrap">
          {history.map((folder, idx) => (
            <React.Fragment key={folder.id}>
              {idx > 0 && <ChevronRight className="w-4 h-4 text-slate-400 mx-1 flex-shrink-0" />}
              <button
                onClick={() => navigateToBreadcrumb(idx)}
                className={`${idx === history.length - 1 ? 'text-slate-900 dark:text-slate-100 font-bold' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
              >
                {folder.name}
              </button>
            </React.Fragment>
          ))}
        </nav>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto min-h-[400px] relative">
        {loading ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-slate-400">
            <Loader2 className="w-8 h-8 animate-spin text-[#0696D7]" />
            <span className="text-sm font-medium">Caricamento risorse...</span>
          </div>
        ) : error ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center gap-4">
            <AlertCircle className="w-12 h-12 text-red-500/50" />
            <div>
              <p className="text-slate-900 dark:text-slate-100 font-semibold">{error}</p>
              <p className="text-sm text-slate-500 mt-1">Assicurati che lo script sia attivo e che la cartella sia pubblica.</p>
            </div>
            <button 
              onClick={() => fetchFolderContent(currentFolder.id)}
              className="px-4 py-2 bg-slate-800 dark:bg-slate-700 text-white rounded-lg text-sm transition-transform active:scale-95"
            >
              Riprova
            </button>
          </div>
        ) : items.length === 0 ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-slate-400 gap-2">
            <Folder className="w-12 h-12 opacity-20" />
            <span className="text-sm">La cartella è vuota</span>
          </div>
        ) : (
          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {items.map((item) => (
              <div 
                key={item.id}
                className="group flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-default"
              >
                <div 
                  className="flex items-center gap-4 flex-1 min-w-0"
                  onClick={() => item.isFolder ? navigateToFolder(item.id, item.name) : setPreviewFile(item)}
                >
                  <div className="flex-shrink-0">
                    {getFileIcon(item.mimeType)}
                  </div>
                  <div className="min-w-0 pr-4 cursor-pointer">
                    <h4 className="text-sm font-medium text-slate-900 dark:text-slate-200 truncate group-hover:text-[#0696D7] transition-colors">
                      {item.name}
                    </h4>
                    <div className="text-xs text-slate-500 flex gap-2">
                      {!item.isFolder && <span>{formatSize(item.size)}</span>}
                      {item.modifiedTime && <span>• Modificato: {new Date(item.modifiedTime).toLocaleDateString()}</span>}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {!item.isFolder && (
                    <>
                      <button 
                        onClick={() => setPreviewFile(item)}
                        className="p-2 text-slate-400 hover:text-[#0696D7] hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
                        title="Visualizza"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <a 
                        href={item.downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-slate-400 hover:text-[#0696D7] hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
                        title="Scarica"
                      >
                        <Download className="w-4 h-4" />
                      </a>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Preview Modal */}
      {previewFile && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-slate-950/80 backdrop-blur-sm"
          onClick={() => setPreviewFile(null)}
        >
          <div 
            className="relative w-full max-w-5xl h-full max-h-[90vh] bg-white dark:bg-slate-900 rounded-2xl overflow-hidden flex flex-col shadow-2xl transition-all"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                {getFileIcon(previewFile.mimeType)}
                <h3 className="font-bold text-slate-900 dark:text-slate-100 truncate max-w-md">{previewFile.name}</h3>
              </div>
              <button 
                onClick={() => setPreviewFile(null)}
                className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
              >
                <ArrowLeft className="rotate-90 w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 bg-slate-100 dark:bg-slate-950">
              <iframe 
                src={previewFile.previewUrl ? previewFile.previewUrl.replace(/\/view.*$/, '/preview') : ''}
                className="w-full h-full border-0"
                allow="autoplay"
              ></iframe>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex justify-end gap-3">
               <a 
                href={previewFile.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2 bg-[#0696D7] hover:bg-[#0585bf] text-white rounded-xl font-bold transition-all shadow-lg shadow-[#0696D7]/20"
              >
                <Download className="w-4 h-4" /> Scarica Adesso
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

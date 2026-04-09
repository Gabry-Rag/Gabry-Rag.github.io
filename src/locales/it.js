export const it = {
  nav: {
    expertise: 'Competenze',
    projects: 'Progetti',
    acdat: 'Archivio CDE',
    about: 'Chi Sono',
    contact: 'Contatti',
  },
  hero: {
    role: 'BIM Specialist & Revit Designer',
    titleStart: 'Ottimizzazione della complessità tramite ',
    titleHighlight: "l'information modeling.",
    description: "Trasformo le sfide architettoniche e ingegneristiche in ambienti 3D precisi e guidati dai dati. Standardizzazione del processo secondo la norma ISO 19650 per un'esecuzione impeccabile.",
    viewWork: 'Vedi i Lavori',
    downloadResume: 'Scarica CV',
    modelTitle: '[ Modello Strutturale ]',
    modelDesc: 'Placeholder render isometrico 3D. Inserire una vista concettuale Revit ad alto contrasto qui.',
  },
  expertise: {
    sectionTitle: 'Metodologia',
    mainTitle: 'Competenze Principali',
    items: [
      {
        title: 'Modellazione Architettonica & MEP',
        description: 'Modellazione ad alto LOD di elementi architettonici e sistemi MEP garantendo la costruibilità e il coordinamento spaziale.',
      },
      {
        title: 'Famiglie Parametriche',
        description: 'Creazione di famiglie Revit altamente flessibili e ricche di dati personalizzate per specifiche esigenze dei produttori e standard di progetto.',
      },
      {
        title: 'BIM Management & Clash Detection',
        description: 'Gestione di modelli federati, controllo delle interferenze tramite Navisworks e risoluzione proattiva dei conflitti spaziali.',
      }
    ]
  },
  techStack: {
    title: 'Stack Tecnico',
  },
  projects: {
    title: 'Casi Studio',
    subtitle: "Profondità tecnica oltre l'estetica. Dimostrazione delle metodologie di problem-solving.",
    metadata: {
      location: 'Luogo',
      year: 'Anno',
      lod: 'LOD',
      role: 'Ruolo',
      software: 'Software',
    },
    problemTitle: 'Il Problema',
    solutionTitle: 'La Soluzione BIM',
    placeholders: {
      wireframe: '[ Placeholder Wireframe ]',
      schedule: '[ Placeholder Abaco Revit ]',
      navisworks: '[ Placeholder Clash Navisworks ]',
      family: '[ Placeholder Famiglia Parametrica ]',
    },
    items: [
      {
        title: 'Grattacielo a Geometria Complessa',
        locationStr: 'Milano, IT',
        roleStr: 'BIM Coordinator',
        problemName: 'Gestione della geometria complessa del nucleo ritorto che causava costanti fallimenti nelle famiglie di facciate continue standard per abachi e render.',
        solutionName: 'Sviluppato uno script Dynamo per posizionare in modo adattivo e parametrizzare pannelli di facciata customizzati, completamente documentati negli abachi.',
      },
      {
        title: 'Ospedale - Coordinamento MEP',
        locationStr: 'Roma, IT',
        roleStr: 'MEP Modeler / Clash Detective',
        problemName: "Altissima densità di tubazioni HVAC e gas medicali nei controsoffitti con oltre 500 clash visive e 'hard clash'.",
        solutionName: 'Federato i modelli in Navisworks, creata una matrice di clash detection e risolto il 95% dei conflitti prima del cantiere ottimizzando i tracciati.',
      }
    ]
  },
  acdat: {
    title: 'ACdat / Archivio CDE',
    subtitle: 'Strutturato secondo UNI 11337 / ISO 19650. Risorse accessibili per flussi standardizzati.',
    readOnly: 'Sola Lettura',
    repositoryTitle: 'Struttura Repository',
    folders: [
      { name: '01_WIP', desc: 'Work In Progress (Locale)' },
      { name: '02_SHARED', desc: 'In Condivisione / Coordinamento' },
      { name: '03_PUBLISHED', desc: 'Pubblicato per Costruzione' },
      { name: '04_ARCHIVED', desc: 'Archivio Storico' },
    ],
    accessArchive: 'Accedi ad Archivio (Drive)',
    resourcesTitle: 'Risorse In Evidenza',
    files: [
      { title: 'Template BIM Execution Plan' },
      { title: 'Revit Architecture Template v25' },
      { title: 'Famiglia Parametrica Porta' },
      { title: 'Script Dynamo Rinumerazione' },
    ]
  },
  about: {
    title: 'La mentalità del "Modello come Database"',
    p1: 'Credo che un modello 3D sia valido quanto i dati che contiene. Lestetica visiva è solo il sottoprodotto di informazioni rigorose e strutturate logicamente.',
    p2: 'Il mio approccio isola la complessità, standardizza i componenti tramite famiglie Revit robuste e automatizza i compiti ripetitivi garantendo la totale integrità del dato lungo il ciclo di vita.',
    certsTitle: 'Certificazioni',
    certs: {
      acp: { title: 'Autodesk Certified Professional', desc: 'Revit per la progettazione Architettonica' },
      bim: { title: 'BIM Specialist', desc: 'UNI 11337 / ISO 19650' },
    },
    skillsTitle: 'Competenza Tecnica',
    skills: {
      coord: 'Coordinamento BIM',
      param: 'Modellazione Parametrica',
      sched: 'Estrazione Dati & Abachi',
      dynamo: 'Design Computazionale (Dynamo)',
      clash: 'Clash Detection',
    }
  },
  contact: {
    title: 'Avvia Collaborazione',
    subtitle: 'Che tu abbia bisogno di famiglie ricche di parametri, di coordinamento MEP complesso o una strategia BIM completa, sono pronto a integrarmi nel tuo flusso di lavoro.',
    form: {
      name: 'Nome',
      email: 'Email',
      subject: 'Oggetto',
      subjectOptions: {
        proj: 'Richiesta Progetto',
        collab: 'Collaborazione Freelance',
        files: 'Richiesta File/Template',
        other: 'Altro',
      },
      message: 'Messaggio',
      messagePlaceholder: 'Descrivi le tue necessità BIM...',
      submit: 'Invia Messaggio',
    },
    viewer: {
      title: 'Visualizzatore Modelli Interattivo',
      status: 'Pronto',
      desc: 'Questo container è strutturalmente pronto per incorporare un `<iframe>` tramite Autodesk Viewer o Speckle.',
    }
  },
  footer: {
    role: 'BIM Specialist & Revit Designer',
    rights: 'Tutti i diritti riservati.',
    vat: 'P. IVA',
    privacy: 'Privacy Policy'
  }
};

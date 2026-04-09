export const en = {
  nav: {
    expertise: 'Expertise',
    projects: 'Projects',
    acdat: 'CDE Archive',
    about: 'About',
    contact: 'Contact',
  },
  hero: {
    role: 'BIM Specialist & Revit Designer',
    titleStart: 'Optimizing complexity through ',
    titleHighlight: 'information modeling.',
    description: 'Turning architectural and engineering challenges into precise, data-driven 3D environments. Standardizing the process to ISO 19650 for flawless execution.',
    viewWork: 'View Work',
    downloadResume: 'Download Resume',
    modelTitle: '[ Hero Structural Model ]',
    modelDesc: 'Isometric 3D rendering placeholder. Insert a high-contrast conceptual Revit view here.',
  },
  expertise: {
    sectionTitle: 'Methodology',
    mainTitle: 'Core Competencies',
    items: [
      {
        title: 'Architecture & MEP Modeling',
        description: 'High-LOD modeling of architectural elements and MEP systems ensuring constructability and spatial coordination.',
      },
      {
        title: 'Parametric Families',
        description: 'Creation of highly flexible, data-rich Revit families tailored for specific manufacturer needs and project standards.',
      },
      {
        title: 'BIM Management & Clash Detection',
        description: 'Federated model management, interference checking via Navisworks, and resolving spatial conflicts proactively.',
      }
    ]
  },
  techStack: {
    title: 'Technical Stack',
  },
  projects: {
    title: 'Case Studies',
    subtitle: 'Technical depth over pure aesthetics. Demonstrating problem-solving methodologies.',
    metadata: {
      location: 'Location',
      year: 'Year',
      lod: 'LOD',
      role: 'Role',
      software: 'Software',
    },
    problemTitle: 'The Problem',
    solutionTitle: 'BIM Solution',
    placeholders: {
      wireframe: '[ Wireframe View Placeholder ]',
      schedule: '[ Revit Schedule Placeholder ]',
      navisworks: '[ Navisworks Clash Image Placeholder ]',
      family: '[ Parametric Family Detail Placeholder ]',
    },
    items: [
      {
        title: 'Complex Geometry Skyscraper',
        locationStr: 'Milan, IT',
        roleStr: 'BIM Coordinator',
        problemName: 'Handling twisted core geometry which caused standard curtain wall families to fail consistently in scheduling and rendering.',
        solutionName: 'Developed a Dynamo script to adaptively place and parameterize custom curtain wall panels based on intersecting reference planes, fully documented in automated schedules.',
      },
      {
        title: 'Hospital MEP Coordination',
        locationStr: 'Rome, IT',
        roleStr: 'MEP Modeler / Clash Detective',
        problemName: 'High density of HVAC and medical gas piping in false ceiling gaps causing >500 hard clashes.',
        solutionName: 'Federated models in Navisworks, established a clash detection matrix, and resolved 95% of conflicts in pre-construction via coordinate-adjusted routing.',
      }
    ]
  },
  acdat: {
    title: 'ACdat / CDE Archive',
    subtitle: 'Structured according to ISO 19650. Accessible resources for standardized workflows.',
    readOnly: 'ReadOnly Access',
    repositoryTitle: 'Repository Structure',
    folders: [
      { name: '01_WIP', desc: 'Work In Progress (Local Modeler)' },
      { name: '02_SHARED', desc: 'Shared for Coordination' },
      { name: '03_PUBLISHED', desc: 'Authorized for Construction' },
      { name: '04_ARCHIVED', desc: 'Historical Data' },
    ],
    accessArchive: 'Access Full Archive (Drive)',
    resourcesTitle: 'Featured Resources',
    files: [
      { title: 'BIM Execution Plan Template' },
      { title: 'Revit Architecture Template v25' },
      { title: 'Parametric Door Family' },
      { title: 'Dynamo Renumbering Script' },
    ]
  },
  about: {
    title: 'The "Model as a Database" Mindset',
    p1: 'I believe that a 3D model is only as good as the data it holds. Visual aesthetics are a byproduct of rigorous, logically structured information.',
    p2: 'My approach isolates complexity, standardizes components via robust Revit families, and automates repetitive tasks to ensure zero data-loss across the AEC lifecycle.',
    certsTitle: 'Certifications',
    certs: {
      acp: { title: 'Autodesk Certified Professional', desc: 'Revit for Architectural Design' },
      bim: { title: 'BIM Specialist', desc: 'UNI 11337 / ISO 19650' },
    },
    skillsTitle: 'Technical Proficiency',
    skills: {
      coord: 'BIM Coordination',
      param: 'Parametric Modeling',
      sched: 'Data Extraction & Schedules',
      dynamo: 'Computational Design (Dynamo)',
      clash: 'Clash Detection',
    }
  },
  contact: {
    title: 'Initiate Collaboration',
    subtitle: "Whether you need parameter-rich families, complex MEP coordination, or a complete BIM strategy, I'm ready to integrate into your workflow.",
    form: {
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      subjectOptions: {
        proj: 'Project Inquiry',
        collab: 'Freelance Collaboration',
        files: 'File/Template Request',
        other: 'Other',
      },
      message: 'Message',
      messagePlaceholder: 'Describe your BIM requirements...',
      submit: 'Send Message',
    },
    viewer: {
      title: 'Interactive Model Viewer',
      status: 'Model Viewer Ready',
      desc: 'This container is technically structured to embed an `<iframe>` via Autodesk Viewer or Speckle.',
    }
  },
  footer: {
    role: 'BIM Specialist & Revit Designer',
    rights: 'All rights reserved.',
    vat: 'VAT',
    privacy: 'Privacy Policy'
  }
};

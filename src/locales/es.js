export const es = {
  nav: {
    expertise: 'Experiencia',
    projects: 'Proyectos',
    acdat: 'Archivo CDE',
    about: 'Sobre mí',
    contact: 'Contacto',
  },
  hero: {
    role: 'BIM Specialist & Revit Designer',
    titleStart: 'Optimizando la complejidad mediante ',
    titleHighlight: 'el information modeling.',
    description: 'Transformo los desafíos arquitectónicos e ingenieriles en entornos 3D precisos y basados en datos. Estandarización del proceso según la norma ISO 19650 para una ejecución impecable.',
    viewWork: 'Ver Trabajos',
    downloadResume: 'Descargar CV',
    modelTitle: '[ Modelo Estructural ]',
    modelDesc: 'Placeholder render isométrico 3D. Inserte una vista conceptual de Revit de alto contraste aquí.',
  },
  expertise: {
    sectionTitle: 'Metodología',
    mainTitle: 'Competencias Principales',
    items: [
      {
        title: 'Modelado Arquitectónico y MEP',
        description: 'Modelado de alto LOD de elementos arquitectónicos y sistemas MEP asegurando la constructibilidad y coordinación espacial.',
      },
      {
        title: 'Familias Paramétricas',
        description: 'Creación de familias Revit altamente flexibles y ricas en datos, adaptadas a necesidades específicas de los fabricantes y estándares del proyecto.',
      },
      {
        title: 'BIM Management / Clash Detection',
        description: 'Gestión de modelos federados, verificación de interferencias a través de Navisworks y resolución proactiva de conflictos espaciales.',
      }
    ]
  },
  techStack: {
    title: 'Stack Técnico',
  },
  projects: {
    title: 'Casos de Estudio',
    subtitle: 'Profundidad técnica sobre estética pura. Demostrando metodologías de resolución de problemas.',
    metadata: {
      location: 'Ubicación',
      year: 'Año',
      lod: 'LOD',
      role: 'Rol',
      software: 'Software',
    },
    problemTitle: 'El Problema',
    solutionTitle: 'Solución BIM',
    placeholders: {
      wireframe: '[ Placeholder Vista Wireframe ]',
      schedule: '[ Placeholder Tabla Revit ]',
      navisworks: '[ Placeholder Clash Navisworks ]',
      family: '[ Placeholder Detalle Familia ]',
    },
    items: [
      {
        title: 'Rascacielos de Geometría Compleja',
        locationStr: 'Milán, IT',
        roleStr: 'BIM Coordinator',
        problemName: 'Manejo de la geometría compleja del núcleo torcido que provocaba fallos constantes en las familias de muros cortina estándar.',
        solutionName: 'Se desarrolló un script de Dynamo para colocar y parametrizar adaptativamente paneles de muro cortina, completamente documentados en tablas automatizadas.',
      },
      {
        title: 'Coordinación MEP de Hospital',
        locationStr: 'Roma, IT',
        roleStr: 'MEP Modeler / Clash Detective',
        problemName: 'Alta densidad de tuberías HVAC y gases médicos en falsos techos con más de 500 "hard clashes".',
        solutionName: 'Se federaron modelos en Navisworks, se creó una matriz de detección y se resolvió el 95% de los conflictos antes de la construcción optimizando rutas.',
      }
    ]
  },
  acdat: {
    title: 'ACdat / Archivo CDE',
    subtitle: 'Estructurado según ISO 19650. Recursos accesibles para flujos de trabajo estandarizados.',
    readOnly: 'Solo Lectura',
    repositoryTitle: 'Estructura del Repositorio',
    folders: [
      { name: '01_WIP', desc: 'Work In Progress (Local)' },
      { name: '02_SHARED', desc: 'Compartido para Coordinación' },
      { name: '03_PUBLISHED', desc: 'Publicado para Construcción' },
      { name: '04_ARCHIVED', desc: 'Archivo Histórico' },
    ],
    accessArchive: 'Acceso al Archivo Completo (Drive)',
    resourcesTitle: 'Recursos Destacados',
    files: [
      { title: 'Template BIM Execution Plan' },
      { title: 'Revit Architecture Template v25' },
      { title: 'Familia Paramétrica de Puerta' },
      { title: 'Script Dynamo Renumeración' },
    ]
  },
  about: {
    title: 'La mentalidad del "Modelo como Base de Datos"',
    p1: 'Creo que un modelo 3D es tan bueno como los datos que contiene. La estética visual es un subproducto de información rigurosa y lógicamente estructurada.',
    p2: 'Mi enfoque aísla la complejidad, estandariza componentes a través de familias Revit robustas y automatiza tareas repetitivas para garantizar la integridad completa de los datos.',
    certsTitle: 'Certificaciones',
    certs: {
      acp: { title: 'Autodesk Certified Professional', desc: 'Revit para el Diseño Arquitectónico' },
      bim: { title: 'BIM Specialist', desc: 'UNI 11337 / ISO 19650' },
    },
    skillsTitle: 'Competencia Técnica',
    skills: {
      coord: 'Coordinación BIM',
      param: 'Modelado Paramétrico',
      sched: 'Extracción de Datos y Tablas',
      dynamo: 'Diseño Computacional (Dynamo)',
      clash: 'Clash Detection',
    }
  },
  contact: {
    title: 'Iniciar Colaboración',
    subtitle: 'Ya sea que necesites familias ricas en parámetros, coordinación MEP compleja o una estrategia BIM completa, estoy listo para integrarme en tu flujo de trabajo.',
    form: {
      name: 'Nombre',
      email: 'Email',
      subject: 'Asunto',
      subjectOptions: {
        proj: 'Consulta de Proyecto',
        collab: 'Colaboración Freelance',
        files: 'Solicitud de Archivo/Plantilla',
        other: 'Otro',
      },
      message: 'Mensaje',
      messagePlaceholder: 'Describe tus requerimientos BIM...',
      submit: 'Enviar Mensaje',
    },
    viewer: {
      title: 'Visor de Modelos Interactivo',
      status: 'Visor de Modelos Listo',
      desc: 'Este contenedor está estructurado técnicamente para incrustar un `<iframe>` a través de Autodesk Viewer o Speckle.',
    }
  },
  footer: {
    role: 'BIM Specialist & Revit Designer',
    rights: 'Todos los derechos reservados.',
    vat: 'IVA',
    privacy: 'Política de Privacidad'
  }
};

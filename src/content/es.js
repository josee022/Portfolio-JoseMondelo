const es = {
  lang: "es",
  locale: "es_ES",
  meta: {
    title: "José Mondelo | Desarrollador full-stack: Flutter, Firebase y web",
    description:
      "Desarrollador full-stack y único responsable técnico de KNC, una plataforma SaaS en producción para web, Android e iOS. Flutter, Firebase, AWS, React y Next.js.",
    ogTitle: "José Mondelo, desarrollador full-stack",
    ogSubtitle: "Llevo KNC de la idea a la App Store: web, Android e iOS con un solo código.",
  },

  nav: {
    skip: "Saltar al contenido",
    knc: "KNC",
    experience: "Experiencia",
    projects: "Proyectos",
    skills: "Tecnologías",
    about: "Sobre mí",
    contact: "Contacto",
    cv: "Descargar CV",
    menu: "Abrir menú",
    close: "Cerrar menú",
    theme: "Cambiar tema claro u oscuro",
    langLabel: "English",
    langShort: "EN",
  },

  hero: {
    hello: "Hola, soy José Mondelo.",
    title: "Construyo apps que la gente usa cada día, de la primera línea a la App Store.",
    intro:
      "Soy desarrollador full-stack y el único responsable técnico de KNC, una plataforma que usan decenas de centros y miles de familias en web, Android e iOS. Me encargo de todo: arquitectura, código, servidor, pagos y publicación.",
    ctaPrimary: "Ver el proyecto KNC",
    ctaCv: "Descargar CV",
    ctaContact: "Contactar",
    location: "Sanlúcar de Barrameda, Cádiz. Trabajo en remoto o híbrido.",
    deviceAlt: "Pantallas reales de la app KNC con datos de un centro de demostración",
  },

  knc: {
    label: "Proyecto principal",
    period: "Julio de 2025 a hoy",
    title: "KNC: una plataforma para centros y familias",
    intro:
      "KNC conecta escuelas infantiles, residencias y clubes deportivos con las familias: agenda diaria, mensajería, fotos, documentos, control de accesos, fichaje y cobros. Una sola base de código Flutter para web, Android e iOS, y yo soy quien la lleva.",
    specTitle: "Ficha técnica",
    facts: [
      { value: "~214.000", label: "líneas de Dart en 16 módulos" },
      { value: "132", label: "pantallas y 6 tipos de usuario" },
      { value: "61", label: "Cloud Functions en Node.js" },
      { value: "+5.000", label: "descargas en Google Play" },
    ],
    links: {
      web: "Web de KNC",
      appStore: "App Store",
      googlePlay: "Google Play",
    },
    screensNote: "Todas las capturas son de centros de demostración con datos ficticios.",

    storyTitle: "Cuatro problemas reales y cómo los resolví",
    storyIntro: "Cada caso sigue el mismo orden: el problema, lo que construí, la decisión técnica y el resultado.",
    labels: { problem: "Problema", solution: "Solución", decision: "Decisión técnica", result: "Resultado" },
    cases: [
      {
        id: "multicentro",
        title: "Un usuario, varios centros",
        screen: "agenda",
        problem:
          "El modelo de datos asumía un centro por usuario. Las familias con hijos en dos centros y los responsables de varias sedes no encajaban.",
        solution:
          "Migré el modelo a varios centros por usuario, con un selector de centro y una pantalla de inicio distinta según el rol y el tipo de centro.",
        decision:
          "Seis roles (dirección, co-dirección, profesorado, familia, alumno y patrocinador) y permisos por co-administrador para limitar a qué centros accede cada uno.",
        result: "El mismo producto sirve hoy a escuelas infantiles, residencias de mayores y clubes deportivos.",
      },
      {
        id: "mensajeria",
        title: "Mensajería que llega cuando debe",
        screen: "chats",
        problem:
          "Los centros necesitaban hablar con cada familia, con un aula entera o con todo el centro, y avisar fuera de horario sin molestar.",
        solution:
          "Chats individuales, de aula, de centro y de profesorado en tiempo real, con contador de no leídos, modo solo lectura y mensajes programados.",
        decision:
          "Una función en el servidor revisa cada 2 minutos los envíos programados. Las notificaciones van por grupo y por dispositivo, con varios dispositivos por cuenta y el retraso del token de iOS resuelto.",
        result: "Mensajes, encuestas, autorizaciones y eventos se pueden programar y llegan a todos los dispositivos de la familia.",
      },
      {
        id: "ficheros",
        title: "Fotos y vídeos a escala",
        screen: "galeria",
        problem:
          "Cada día se suben cientos de fotos y vídeos de los niños. Tenían que llegar rápido, ocupar poco y no quedar nunca expuestos.",
        solution:
          "Subida directa a AWS S3 con URL prefirmada, compresión en el propio dispositivo y entrega por CloudFront con enlaces que caducan. Un visor tipo galería con zoom y vídeo.",
        decision:
          "Descarga nativa en cada plataforma: MediaStore en Android 10 o superior, Fotos y Archivos en iOS, Blob en web y el menú de compartir como plan B en Android antiguo.",
        result: "Elimina un proxy de servidor que servía ficheros sin autenticación.",
      },
      {
        id: "accesos",
        title: "Entrar rápido y con seguridad",
        screen: "login",
        problem: "Las familias entran varias veces al día y los centros necesitan controlar quién accede a sus instalaciones.",
        solution:
          "Inicio de sesión con Face ID o huella, y un carnet digital con código QR dinámico que caduca a los 5 minutos y se regenera solo.",
        decision:
          "El servidor valida y registra cada escaneo. Una tarea programada limpia los códigos caducados para que no se puedan reutilizar.",
        result: "Acceso en un toque para las familias y un registro fiable de entradas para el centro.",
      },
    ],

    panelTitle: "El panel del centro",
    panelIntro:
      "La dirección gestiona el centro desde la web o la tablet: alumnos y familias, aulas, fichaje del personal y cobros.",
    panels: [
      { screen: "panelAlumnos", title: "Altas y carga masiva", text: "Registro de familias en varios pasos, carga de alumnos desde Excel y correo de bienvenida automático." },
      { screen: "panelAgenda", title: "Agenda a medida", text: "Cada centro elige sus secciones y cómo se envía la agenda: al momento, a mano o a una hora fija." },
      { screen: "panelFichaje", title: "Fichaje del personal", text: "Registro laboral con búsqueda por fechas y exportación a Excel y PDF." },
      { screen: "panelCobros", title: "Cobros y facturación", text: "Del centro a las familias, recibos en PDF y remesas SEPA en XML. De KNC a los centros, facturas emitidas en Holded a través de su API." },
    ],

    archTitle: "Cómo está construido",
    archIntro:
      "Clean Architecture y MVVM: cada pantalla habla con un provider, el provider con un repositorio y el repositorio con Firebase o con las APIs externas. Así cada capa se puede cambiar y probar por separado.",
    arch: {
      clients: { title: "Clientes", items: ["Web", "Android", "iOS"], note: "Flutter 3 y Dart 3, un solo código" },
      app: { title: "App", items: ["Pantallas (120 rutas, go_router)", "Providers (Riverpod)", "Repositorios"], note: "16 módulos por funcionalidad" },
      backend: { title: "Firebase", items: ["Auth", "Firestore (~60 colecciones)", "Cloud Functions v2 (61)", "Cloud Messaging", "Crashlytics y Analytics"], note: "Reglas de seguridad propias" },
      services: { title: "Servicios", items: ["AWS S3 y CloudFront", "Holded (facturas)", "Remesas SEPA", "Google Drive API", "SendGrid y SMTP"], note: "URLs firmadas que caducan" },
    },

    toursTitle: "Tours en 3D para vender el producto",
    toursIntro:
      "Hice con Three.js tres recorridos interactivos, uno por tipo de centro: un móvil o una tablet en 3D con pantallas reales y puntos que explican cada función. Ábrelos, funcionan en el navegador.",
    tours: [
      { id: "infantil", title: "Escuelas infantiles", screen: "agenda" },
      { id: "mayores", title: "Residencias de mayores", screen: "mayores" },
      { id: "deportivo", title: "Clubes deportivos", screen: "deportivo" },
    ],
    tourCta: "Abrir el tour",

    opsTitle: "Lo que no se ve, pero sostiene el producto",
    ops: [
      { title: "Publicación de versiones", text: "Pruebas en TestFlight y en Google Play, y salida a producción desde App Store Connect y Google Play Console. Hoy en la versión 4.0." },
      { title: "Datos en producción", text: "Más de 100 scripts de auditoría y corrección. Siempre con prueba en seco, confirmación, copia de seguridad y nueva auditoría." },
      { title: "Calidad y plataformas", text: "Android con API 36 y pantalla completa en Android 15 y 16, reglas de Firestore, rutas y enlaces protegidos, Crashlytics y tests." },
      { title: "Métricas para el negocio", text: "Uso de cada centro calculado en el servidor los días 1, 10 y 20, con un panel interno de filtros y seguimiento comercial." },
    ],

    aiTitle: "Desarrollo asistido por IA, con método",
    aiText:
      "Trabajo con Claude Code y skills propias del proyecto: mapa del código, recetas para funcionalidades nuevas, verificación, scripts de producción y reglas de Firestore. Hooks que me recuerdan actualizar la documentación y plugins oficiales de Flutter, Firebase y Context7. La IA me hace más rápido; las decisiones y la revisión siguen siendo mías.",
  },

  experience: {
    title: "Experiencia",
    intro: "De las prácticas a llevar en solitario un producto en producción.",
    items: [
      {
        role: "Desarrollador Full-Stack y Responsable Técnico",
        company: "KNC (Kids and Clouds), Visasur Sistemas",
        period: "Jul 2025 – hoy",
        place: "Remoto",
        current: true,
        points: [
          "Único desarrollador de la plataforma: frontend, backend, base de datos, servidor y publicación en tiendas.",
          "Arquitectura multi-centro, mensajería en tiempo real, ficheros en S3 y CloudFront, cobros SEPA y facturación con Holded.",
          "Login biométrico, control de accesos con QR dinámico y tours comerciales en 3D.",
        ],
        stack: ["Flutter", "Dart", "Riverpod", "Firebase", "Node.js", "AWS", "Three.js"],
      },
      {
        role: "Desarrollador Backend",
        company: "GAZC",
        period: "Sep 2025",
        place: "Sevilla",
        points: ["Proyecto de un mes con Python y Django sobre datos de maquinaria y sistemas IoT."],
        stack: ["Python", "Django", "SQL"],
      },
      {
        role: "Desarrollador Full-Stack en prácticas",
        company: "Grupo Gartelecom",
        period: "Oct 2024 – Feb 2025",
        place: "Jerez de la Frontera",
        points: ["Funcionalidades en React y APIs REST en Laravel para aplicaciones en producción, con pruebas en Jest."],
        stack: ["React", "Laravel", "SQL", "Docker", "Jest"],
      },
    ],
    educationTitle: "Formación",
    education: [
      { title: "Técnico Superior en Desarrollo de Aplicaciones Web", place: "I.E.S. Doñana, Sanlúcar de Barrameda", period: "2022 – 2024" },
      { title: "Prompt engineering: creación de prompts para IA", place: "Agencia Digital de Andalucía, 10 horas", period: "Jul 2025" },
    ],
  },

  projects: {
    title: "Proyectos personales",
    intro: "Antes de KNC construí estos proyectos para aprender stacks distintos. Elige uno para ver qué hace y probarlo.",
    status: {
      live: "Demo en vivo",
      paused: "Backend en pausa",
      video: "Vídeo y código",
    },
    pausedNote: "El servidor de este proyecto está apagado para no pagar alojamiento. Puedes ver la interfaz y el código completo.",
    credentialsTitle: "Usuario de prueba",
    user: "Usuario",
    password: "Contraseña",
    copy: "Copiar",
    copied: "Copiado",
    openDemo: "Abrir demo",
    watchVideo: "Ver vídeo",
    features: "Qué incluye",
    stack: "Tecnologías",
    items: {
      english: {
        type: "Aprendizaje de inglés",
        summary: "Plataforma para aprender y repasar inglés con tu propio vocabulario: carpetas, traducciones, flashcards con dificultad progresiva, gramática y juegos.",
        features: ["Panel con estadísticas de progreso", "Vocabulario con traducciones, ejemplos y notas", "Flashcards y juegos con tus palabras", "Traducciones y sinónimos con WordsAPI"],
      },
      gym: {
        type: "Proyecto final del ciclo DAW",
        summary: "Plataforma completa para gimnasios: clases y entrenadores, dietas, tienda con recompensas, blog y foro, chatbot y panel de administración con gráficas.",
        features: ["Clases, entrenadores y reservas", "Dietas y diario de entrenamiento", "Tienda, suscripciones y puntos", "Chatbot con la API de OpenAI"],
      },
      cinefinder: {
        type: "Catálogo de cine y series",
        summary: "Buscador de películas y series con fichas completas: reparto, sagas, temporadas, tráilers, plataformas de streaming y reseñas.",
        features: ["Datos en tiempo real de TheMovieDB", "Varios idiomas", "Carga diferida de módulos", "Instalable como PWA"],
      },
      techhub: {
        type: "Gestión de dispositivos IoT",
        summary: "Panel para supervisar dispositivos conectados: métricas en tiempo real, gráficos, alertas, usuarios e informes. Frontend y backend separados.",
        features: ["Panel en tiempo real con WebSockets", "Gráficos interactivos", "Alertas y notificaciones", "Autenticación con JWT"],
      },
      tasks: {
        type: "Productividad",
        summary: "Aplicación para organizar tareas con estados, etiquetas, carpetas, fechas y un calendario interactivo.",
        features: ["Tareas con estados y etiquetas", "Carpetas y calendario", "API REST con Laravel Sanctum", "Frontend y backend desplegados por separado"],
      },
      uikit: {
        type: "Herramienta para desarrolladores",
        summary: "Generador de componentes de interfaz: los diseñas, los personalizas y copias el código en React con Tailwind CSS.",
        features: ["Editor visual con arrastrar y soltar", "Botones, tarjetas, modales y degradados", "Código listo para copiar", "Componentes accesibles con Radix UI"],
      },
    },
  },

  skills: {
    title: "Tecnologías, con dónde las uso",
    intro: "Sin barras de porcentaje: cada grupo enlaza al proyecto donde lo puedes ver.",
    usedIn: "Dónde",
    groups: [
      { title: "Móvil y frontend", items: ["Flutter", "Dart", "Riverpod", "go_router", "React", "Next.js", "TypeScript", "Angular", "Tailwind CSS", "Three.js"], where: [{ label: "KNC", href: "#knc" }, { label: "EnglishLearnedHub", href: "#proyectos" }, { label: "CineFinder", href: "#proyectos" }] },
      { title: "Backend y cloud", items: ["Firebase (Auth, Firestore, Functions, Messaging)", "Node.js", "AWS S3", "CloudFront", "Laravel", "Django"], where: [{ label: "KNC", href: "#knc" }, { label: "TechHub", href: "#proyectos" }, { label: "TheGymMondelo", href: "#proyectos" }] },
      { title: "Datos", items: ["Modelado NoSQL multi-centro", "Reglas de seguridad de Firestore", "PostgreSQL", "MySQL", "Exportación a Excel y PDF"], where: [{ label: "KNC", href: "#knc" }, { label: "Gestor de Tareas", href: "#proyectos" }] },
      { title: "DevOps y operación", items: ["App Store Connect y TestFlight", "Google Play Console", "Crashlytics", "Scripts de migración y auditoría", "Git y GitHub", "Vercel, Netlify y Firebase Hosting"], where: [{ label: "KNC", href: "#knc" }] },
      { title: "IA aplicada al desarrollo", items: ["Claude Code", "Skills y hooks propios", "Context7", "Prompt engineering"], where: [{ label: "Cómo trabajo", href: "#ia" }] },
      { title: "Producto", items: ["Tours comerciales en 3D", "Onboarding de centros", "Métricas de uso", "Integraciones de pago: Holded, SEPA, Stripe y Fiskaly"], where: [{ label: "Tours 3D", href: "#tours" }] },
    ],
  },

  about: {
    title: "Sobre mí",
    paragraphs: [
      "Empecé en el desarrollo web con el ciclo DAW en Sanlúcar y en poco más de un año pasé de las prácticas a llevar en solitario un producto con miles de usuarios. Lo que más me gusta es ver una función salir de mi editor y llegar al móvil de una familia esa misma semana.",
      "Me muevo cómodo en todo el recorrido: hablar con el equipo comercial, diseñar la base de datos, escribir la función del servidor, pulir la pantalla y publicar la versión.",
      "Fuera del código entreno casi a diario, viajo siempre que puedo y no paro de aprender. La constancia del gimnasio es la misma que aplico a un proyecto largo.",
    ],
    photoAlt: "José Mondelo",
    facts: [
      { label: "Base", value: "Sanlúcar de Barrameda, Cádiz" },
      { label: "Modalidad", value: "Remoto o híbrido" },
      { label: "Idiomas", value: "Español nativo, inglés A2" },
      { label: "Otros", value: "Carnet B y vehículo propio" },
    ],
  },

  contact: {
    title: "¿Hablamos?",
    intro: "Si tienes un proyecto, una oferta o una pregunta técnica, escríbeme.",
    email: "Escribir un correo",
    copyEmail: "Copiar correo",
    copied: "Correo copiado",
    whatsapp: "WhatsApp",
    cvEs: "CV en español (PDF)",
    cvEn: "CV en inglés (PDF)",
    form: {
      title: "O déjame un mensaje",
      name: "Nombre",
      email: "Tu correo",
      message: "Mensaje",
      messagePlaceholder: "Cuéntame en qué puedo ayudarte",
      send: "Enviar mensaje",
      sending: "Enviando…",
      sent: "Mensaje enviado. Te respondo en tu correo.",
      error: "No se ha podido enviar. Escríbeme directamente a",
      subject: "Nuevo mensaje desde el portfolio",
    },
  },

  footer: {
    made: "Diseñado y programado por José Mondelo con Next.js.",
    source: "Código en GitHub",
    top: "Volver arriba",
  },

  cv: {
    title: "Desarrollador Full-Stack, Flutter, Firebase y web",
    location: "Sanlúcar de Barrameda (Cádiz), remoto o híbrido",
    profileTitle: "Perfil",
    profile:
      "Desarrollador full-stack y <b>único responsable técnico de KNC</b>, una plataforma SaaS en producción para escuelas infantiles, residencias y clubes deportivos que usan decenas de centros y miles de familias. Llevo de principio a fin una sola base de código Flutter para web, Android e iOS y su backend en Firebase y AWS: arquitectura, desarrollo, pagos, despliegues y publicación en tiendas. Me importa que el software funcione en producción y que el equipo no técnico pueda entenderlo y venderlo.",
    experienceTitle: "Experiencia",
    kncContext: "Visasur Sistemas. La plataforma hoy: ~214.000 líneas de Dart, 132 pantallas, 61 Cloud Functions y más de 5.000 descargas en Google Play.",
    kncTour: "Tour 3D interactivo",
    kncPoints: [
      "Gestiono el <b>ciclo completo de publicación</b>: pruebas en TestFlight y Google Play, y salida a producción en App Store Connect y Google Play Console.",
      "Rediseñé el modelo de datos <b>de un centro por usuario a varios centros por usuario</b>, con permisos por co-administrador, sobre Clean Architecture + MVVM.",
      "Diseñé la gestión de fotos y vídeos a escala con <b>subida directa a S3 y entrega por CloudFront con enlaces que caducan</b>, y la descarga nativa en web, Android e iOS, eliminando un proxy de servidor sin autenticación.",
      "Implementé los <b>cobros a familias con remesas SEPA</b> y la <b>facturación a centros a través de la API de Holded</b>; dejé preparadas las integraciones de Stripe y Fiskaly.",
      "Construí la mensajería en tiempo real con envíos programados, el <b>control de accesos con QR dinámico</b> validado en servidor y el inicio de sesión biométrico con Face ID y huella.",
      "Creé los <b>tours comerciales en 3D con Three.js</b> para los tres tipos de centro y mantengo los datos de producción con más de 100 scripts de auditoría y migración.",
    ],
    gartelecomPoint: "Funcionalidades en React y APIs REST en Laravel para aplicaciones en producción, con pruebas en Jest.",
    gazc: "GAZC, Sevilla. Proyecto de un mes con Python y Django sobre datos IoT.",
    skillsTitle: "Tecnologías",
    skills: [
      ["Móvil y web", "Flutter, Dart, Riverpod, React, Next.js, TypeScript, Tailwind CSS, Three.js"],
      ["Backend y cloud", "Firebase (Auth, Firestore, Cloud Functions, Messaging), Node.js, AWS S3 y CloudFront, Laravel"],
      ["Integraciones", "Holded, remesas SEPA, Stripe, Fiskaly, Google Drive API, SendGrid"],
      ["Forma de trabajar", "Git, Crashlytics, tests unitarios y de widgets, reglas de seguridad, desarrollo con IA (Claude Code)"],
    ],
    projectsTitle: "Proyectos personales",
    projectsLines: [
      ["EnglishLearnedHub", "React 19, TypeScript y Firebase.", "Plataforma para aprender inglés con flashcards y juegos."],
      ["TheGymMondelo", "Laravel, React y PostgreSQL.", "Gestión completa de gimnasios; proyecto final del ciclo DAW. <span class=\"sub\">Más proyectos con demo en el portfolio.</span>"],
    ],
    educationTitle: "Formación",
    otherTitle: "Otros datos",
    other: "Español nativo, inglés A2, carnet de conducir B, experiencia en teletrabajo",
  },
};

export default es;

// Datos que no dependen del idioma. Los textos traducibles están en es.js / en.js.

export const SITE_URL = "https://portfolio-jose-mondelo.vercel.app";

export const person = {
  name: "José Mondelo Álvarez",
  shortName: "José Mondelo",
  email: "josemondelo022@gmail.com",
  phone: "+34 622 33 18 27",
  phoneHref: "tel:+34622331827",
  whatsapp: "https://wa.me/34622331827",
  github: "https://github.com/josee022",
  linkedin: "https://www.linkedin.com/in/jose-mondelo/",
  instagram: "https://www.instagram.com/josee022/",
  photo: "/img/jose.webp",
  locality: "Sanlúcar de Barrameda",
  region: "Cádiz",
  country: "ES",
};

export const knc = {
  web: "https://kidsnclouds.es",
  appStore: "https://apps.apple.com/es/app/knc/id6747173978",
  googlePlay: "https://play.google.com/store/apps/details?id=com.knc.kncapp",
  tours: {
    infantil: "https://kids-and-clouds-app.web.app/tour/index.html",
    mayores: "https://kids-and-clouds-app.web.app/tour/mayores/index.html",
    deportivo: "https://kids-and-clouds-app.web.app/tour/deportivo/index.html",
  },
};

// Pantallas de centros DEMO (datos ficticios) sacadas de los tours públicos.
export const kncScreens = {
  login: "/knc/login.webp",
  agenda: "/knc/agenda.webp",
  agendaDetalle: "/knc/agenda-detalle.webp",
  chat: "/knc/chat.webp",
  chats: "/knc/chats.webp",
  autorizacion: "/knc/autorizacion.webp",
  calendario: "/knc/calendario.webp",
  galeria: "/knc/galeria.webp",
  asistencia: "/knc/asistencia.webp",
  menu: "/knc/menu.webp",
  mensajeProgramado: "/knc/mensaje-programado.webp",
  mayores: "/knc/mayores-agenda.webp",
  deportivo: "/knc/deportivo-agenda.webp",
  panelInicio: "/knc/panel-inicio.webp",
  panelAlumnos: "/knc/panel-alumnos.webp",
  panelAgenda: "/knc/panel-agenda.webp",
  panelFichaje: "/knc/panel-fichaje.webp",
  panelCobros: "/knc/panel-cobros.webp",
};

// Proyectos personales: datos técnicos. Descripciones en los diccionarios (clave = id).
export const projects = [
  {
    id: "english",
    name: "EnglishLearnedHub",
    year: "2025",
    status: "live",
    image: "/projects/english-2.webp",
    images: ["/projects/english-2.webp", "/projects/english.webp"],
    stack: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Zustand", "React Query", "Firebase Auth", "Firestore", "WordsAPI"],
    demo: "https://english-learned-hub.web.app",
    repo: [{ label: "GitHub", href: "https://github.com/josee022/EnglishLearnedHub" }],
    credentials: { user: "prueba@gmail.com", password: "123456" },
  },
  {
    id: "gym",
    name: "TheGymMondelo",
    year: "2024",
    status: "video",
    image: "/projects/gym-1.webp",
    images: ["/projects/gym-1.webp", "/projects/gym-2.webp", "/projects/gym-4.webp", "/projects/gym-5.webp", "/projects/gym-6.webp"],
    stack: ["React 18", "Laravel 10", "PostgreSQL", "Tailwind CSS", "OpenAI API"],
    video: "https://drive.google.com/file/d/1zVkuuxueTcxPXdH73mqljOjnTkrhUnCF/view",
    repo: [{ label: "GitHub", href: "https://github.com/josee022/TheGymMondelo" }],
  },
  {
    id: "cinefinder",
    name: "CineFinder",
    year: "2025",
    status: "live",
    image: "/projects/cinefinder.webp",
    images: ["/projects/cinefinder.webp"],
    stack: ["Angular 19", "Signals", "RxJS", "TheMovieDB API", "Angular Material", "SCSS", "i18n", "PWA"],
    demo: "https://cinefinderweb.netlify.app",
    repo: [{ label: "GitHub", href: "https://github.com/josee022/CineFinder" }],
  },
  {
    id: "techhub",
    name: "TechHub",
    year: "2025",
    status: "paused",
    image: "/projects/techhub.webp",
    images: ["/projects/techhub.webp"],
    stack: ["React", "Vite", "Django REST", "PostgreSQL", "Redux Toolkit", "Chart.js", "WebSockets", "JWT"],
    demo: "https://techhubjm.netlify.app",
    repo: [
      { label: "Frontend", href: "https://github.com/josee022/TechHub_frontend" },
      { label: "Backend", href: "https://github.com/josee022/TechHub_backend" },
    ],
  },
  {
    id: "tasks",
    name: "Gestor de Tareas",
    nameEn: "Task Manager",
    year: "2025",
    status: "paused",
    image: "/projects/gestor-tareas.webp",
    images: ["/projects/gestor-tareas.webp"],
    stack: ["React", "Laravel", "Sanctum", "PostgreSQL", "Tailwind CSS", "API REST"],
    demo: "https://gestor-tareas-beige.vercel.app",
    repo: [
      { label: "Frontend", href: "https://github.com/josee022/gestor-tareas-frontend" },
      { label: "Backend", href: "https://github.com/josee022/gestor-tareas-backend" },
    ],
  },
  {
    id: "uikit",
    name: "UI Kit Generator",
    year: "2025",
    status: "live",
    image: "/projects/uikit.webp",
    images: ["/projects/uikit.webp"],
    stack: ["Next.js", "Tailwind CSS", "Zustand", "React DnD", "Framer Motion", "Radix UI", "Prism.js"],
    demo: "https://ui-kit-generator.vercel.app",
    repo: [{ label: "GitHub", href: "https://github.com/josee022/UI-Kit-Generator" }],
  },
];

export const languages = ["es", "en"];

// Generados con `npm run cv` desde la ruta /[lang]/cv.
export const CV_FILES = {
  es: "/cv/CV_JoseMondelo_ES.pdf",
  en: "/cv/CV_JoseMondelo_EN.pdf",
};

const en = {
  lang: "en",
  locale: "en_GB",
  meta: {
    title: "José Mondelo | Full-stack developer: Flutter, Firebase and web",
    description:
      "Full-stack developer and sole technical lead of KNC, a SaaS platform in production on web, Android and iOS. Flutter, Firebase, AWS, React and Next.js.",
    ogTitle: "José Mondelo, full-stack developer",
    ogSubtitle: "I take KNC from idea to App Store: web, Android and iOS from one codebase.",
  },

  nav: {
    skip: "Skip to content",
    knc: "KNC",
    experience: "Experience",
    projects: "Projects",
    skills: "Tech",
    about: "About",
    contact: "Contact",
    cv: "Download CV",
    menu: "Open menu",
    close: "Close menu",
    theme: "Switch between light and dark theme",
    langLabel: "Español",
    langShort: "ES",
  },

  hero: {
    hello: "Hi, I'm José Mondelo.",
    title: "I build apps people use every day, from the first line of code to the App Store.",
    intro:
      "I'm a full-stack developer and the sole technical lead of KNC, a platform used by dozens of centres and thousands of families on web, Android and iOS. I handle all of it: architecture, code, servers, payments and releases.",
    ctaPrimary: "See the KNC project",
    ctaCv: "Download CV",
    ctaContact: "Get in touch",
    location: "Based in Sanlúcar de Barrameda, Spain. Working remote or hybrid.",
    deviceAlt: "Real KNC app screens showing a demo centre",
  },

  knc: {
    label: "Main project",
    period: "July 2025 to today",
    title: "KNC: one platform for centres and families",
    intro:
      "KNC connects nurseries, senior care homes and sports clubs with families: daily reports, messaging, photos, documents, access control, staff time tracking and payments. One Flutter codebase for web, Android and iOS, and I'm the one who runs it.",
    specTitle: "Tech specs",
    facts: [
      { value: "~214,000", label: "lines of Dart across 16 modules" },
      { value: "132", label: "screens and 6 user types" },
      { value: "61", label: "Cloud Functions in Node.js" },
      { value: "5,000+", label: "downloads on Google Play" },
    ],
    links: {
      web: "KNC website",
      appStore: "App Store",
      googlePlay: "Google Play",
    },
    screensNote: "Every screenshot comes from a demo centre with fictional data.",

    storyTitle: "Four real problems and how I solved them",
    storyIntro: "Each case follows the same order: the problem, what I built, the technical decision and the result.",
    labels: { problem: "Problem", solution: "Solution", decision: "Technical decision", result: "Result" },
    cases: [
      {
        id: "multicentro",
        title: "One user, many centres",
        screen: "agenda",
        problem:
          "The data model assumed one centre per user. Families with children in two centres, and managers running several sites, didn't fit.",
        solution:
          "I migrated the model to many centres per user, with a centre switcher and a different home screen for each role and type of centre.",
        decision:
          "Six roles (admin, co-admin, teacher, family, student and sponsor) plus per-co-admin permissions that limit which centres each person can reach.",
        result: "The same product now serves nurseries, senior care homes and sports clubs.",
      },
      {
        id: "mensajeria",
        title: "Messages that arrive on time",
        screen: "chats",
        problem:
          "Centres needed to talk to one family, a whole class or the entire centre, and to send notices outside school hours without disturbing anyone.",
        solution:
          "Real-time one-to-one, class, centre and staff chats, with unread counters, read-only mode and scheduled messages.",
        decision:
          "A server function checks scheduled sends every 2 minutes. Push notifications go out per group and per device, with several devices per account and the iOS token delay solved.",
        result: "Messages, polls, permission slips and events can all be scheduled and reach every device a family uses.",
      },
      {
        id: "ficheros",
        title: "Photos and videos at scale",
        screen: "galeria",
        problem:
          "Centres upload hundreds of photos and videos of children every day. They had to arrive fast, take little space and never be exposed.",
        solution:
          "Direct uploads to AWS S3 with presigned URLs, compression on the device, and delivery through CloudFront with expiring links. A gallery-style viewer with zoom and video.",
        decision:
          "Native downloads on every platform: MediaStore on Android 10 and later, Photos and Files on iOS, Blob on the web, and the share sheet as a fallback on older Android.",
        result: "Removed a server proxy that served files without authentication.",
      },
      {
        id: "accesos",
        title: "Fast, secure sign-in and entry",
        screen: "login",
        problem: "Families open the app several times a day, and centres need to control who enters their buildings.",
        solution:
          "Sign-in with Face ID or fingerprint, and a digital card with a dynamic QR code that expires after 5 minutes and renews itself.",
        decision:
          "The server validates and logs every scan. A scheduled job cleans up expired codes so they can't be reused.",
        result: "One-tap access for families and a reliable entry log for centres.",
      },
    ],

    panelTitle: "The centre dashboard",
    panelIntro:
      "Centre managers run everything from the web or a tablet: students and families, classes, staff time tracking and payments.",
    panels: [
      { screen: "panelAlumnos", title: "Sign-ups and bulk import", text: "Multi-step family registration, student import from Excel and an automatic welcome email." },
      { screen: "panelAgenda", title: "A daily report that fits", text: "Each centre picks its own sections and how the report is sent: instantly, manually or at a set time." },
      { screen: "panelFichaje", title: "Staff time tracking", text: "Work-hours log with date search and export to Excel and PDF." },
      { screen: "panelCobros", title: "Payments and invoicing", text: "From centres to families: PDF receipts and SEPA direct debit files in XML. From KNC to centres: invoices issued in Holded through its API." },
    ],

    archTitle: "How it's built",
    archIntro:
      "Clean Architecture and MVVM: each screen talks to a provider, the provider to a repository, and the repository to Firebase or an external API. Every layer can be changed and tested on its own.",
    arch: {
      clients: { title: "Clients", items: ["Web", "Android", "iOS"], note: "Flutter 3 and Dart 3, one codebase" },
      app: { title: "App", items: ["Screens (120 routes, go_router)", "Providers (Riverpod)", "Repositories"], note: "16 feature modules" },
      backend: { title: "Firebase", items: ["Auth", "Firestore (~60 collections)", "Cloud Functions v2 (61)", "Cloud Messaging", "Crashlytics and Analytics"], note: "Custom security rules" },
      services: { title: "Services", items: ["AWS S3 and CloudFront", "Holded (invoicing)", "SEPA direct debits", "Google Drive API", "SendGrid and SMTP"], note: "Signed URLs that expire" },
    },

    toursTitle: "3D tours that sell the product",
    toursIntro:
      "I built three interactive tours in Three.js, one per type of centre: a 3D phone or tablet showing real screens, with hotspots that explain each feature. Open them, they run in your browser.",
    tours: [
      { id: "infantil", title: "Nurseries", screen: "agenda" },
      { id: "mayores", title: "Senior care homes", screen: "mayores" },
      { id: "deportivo", title: "Sports clubs", screen: "deportivo" },
    ],
    tourCta: "Open the tour",

    opsTitle: "The invisible work that keeps it running",
    ops: [
      { title: "Releases", text: "Testing on TestFlight and Google Play, then production through App Store Connect and Google Play Console. Currently on version 4.0." },
      { title: "Production data", text: "More than 100 audit and repair scripts. Always with a dry run, confirmation, backup and a second audit." },
      { title: "Quality and platforms", text: "Android API 36 and edge-to-edge on Android 15 and 16, Firestore rules, protected routes and deep links, Crashlytics and tests." },
      { title: "Metrics for the business", text: "Usage for every centre computed on the server on the 1st, 10th and 20th, feeding an internal dashboard with filters and sales follow-up." },
    ],

    aiTitle: "AI-assisted development, with a method",
    aiText:
      "I work with Claude Code and project-specific skills: a code map, recipes for new features, verification, production scripts and Firestore rules. Hooks remind me to update the docs, and official plugins cover Flutter, Firebase and Context7. AI makes me faster; the decisions and the review are still mine.",
  },

  experience: {
    title: "Experience",
    intro: "From internship to running a production product on my own.",
    items: [
      {
        role: "Full-Stack Developer and Technical Lead",
        company: "KNC (Kids and Clouds), Visasur Sistemas",
        period: "Jul 2025 – today",
        place: "Remote",
        current: true,
        points: [
          "Sole developer on the platform: frontend, backend, database, servers and app store releases.",
          "Multi-centre architecture, real-time messaging, files on S3 and CloudFront, SEPA payments and invoicing with Holded.",
          "Biometric sign-in, access control with dynamic QR codes and 3D sales tours.",
        ],
        stack: ["Flutter", "Dart", "Riverpod", "Firebase", "Node.js", "AWS", "Three.js"],
      },
      {
        role: "Backend Developer",
        company: "GAZC",
        period: "Sep 2025",
        place: "Seville",
        points: ["One-month project with Python and Django on machinery and IoT data."],
        stack: ["Python", "Django", "SQL"],
      },
      {
        role: "Full-Stack Developer Intern",
        company: "Grupo Gartelecom",
        period: "Oct 2024 – Feb 2025",
        place: "Jerez de la Frontera",
        points: ["Built React features and Laravel REST APIs for production applications, tested with Jest."],
        stack: ["React", "Laravel", "SQL", "Docker", "Jest"],
      },
    ],
    educationTitle: "Education",
    education: [
      { title: "Higher Technical Diploma in Web Application Development", place: "I.E.S. Doñana, Sanlúcar de Barrameda", period: "2022 – 2024" },
      { title: "Prompt engineering for AI", place: "Andalusian Digital Agency, 10 hours", period: "Jul 2025" },
    ],
  },

  projects: {
    title: "Personal projects",
    intro: "Before KNC I built these to learn different stacks. Pick one to see what it does and try it.",
    status: {
      live: "Live demo",
      paused: "Backend paused",
      video: "Video and code",
    },
    pausedNote: "This project's server is switched off to avoid hosting costs. You can still see the interface and the full source code.",
    credentialsTitle: "Test account",
    user: "User",
    password: "Password",
    copy: "Copy",
    copied: "Copied",
    openDemo: "Open demo",
    watchVideo: "Watch video",
    features: "What it includes",
    stack: "Tech",
    items: {
      english: {
        type: "English learning",
        summary: "A platform to learn and review English with your own vocabulary: folders, translations, flashcards with progressive difficulty, grammar and games.",
        features: ["Dashboard with progress stats", "Vocabulary with translations, examples and notes", "Flashcards and games with your own words", "Translations and synonyms from WordsAPI"],
      },
      gym: {
        type: "Final diploma project",
        summary: "A complete platform for gyms: classes and trainers, diets, a store with rewards, blog and forum, a chatbot and an admin dashboard with charts.",
        features: ["Classes, trainers and bookings", "Diets and training diary", "Store, subscriptions and points", "Chatbot using the OpenAI API"],
      },
      cinefinder: {
        type: "Film and TV catalogue",
        summary: "Search films and series with full detail pages: cast, collections, seasons, trailers, streaming platforms and reviews.",
        features: ["Live data from TheMovieDB", "Multiple languages", "Lazy-loaded modules", "Installable as a PWA"],
      },
      techhub: {
        type: "IoT device management",
        summary: "A dashboard to monitor connected devices: real-time metrics, charts, alerts, users and reports. Separate frontend and backend.",
        features: ["Real-time dashboard with WebSockets", "Interactive charts", "Alerts and notifications", "JWT authentication"],
      },
      tasks: {
        type: "Productivity",
        summary: "An app to organise tasks with statuses, tags, folders, dates and an interactive calendar.",
        features: ["Tasks with statuses and tags", "Folders and calendar", "REST API with Laravel Sanctum", "Frontend and backend deployed separately"],
      },
      uikit: {
        type: "Developer tool",
        summary: "A UI component generator: design components, customise them and copy the React and Tailwind CSS code.",
        features: ["Visual drag-and-drop editor", "Buttons, cards, modals and gradients", "Code ready to copy", "Accessible components with Radix UI"],
      },
    },
  },

  skills: {
    title: "Tech, and where I use it",
    intro: "No percentage bars: each group links to the project where you can see it.",
    usedIn: "Where",
    groups: [
      { title: "Mobile and frontend", items: ["Flutter", "Dart", "Riverpod", "go_router", "React", "Next.js", "TypeScript", "Angular", "Tailwind CSS", "Three.js"], where: [{ label: "KNC", href: "#knc" }, { label: "EnglishLearnedHub", href: "#proyectos" }, { label: "CineFinder", href: "#proyectos" }] },
      { title: "Backend and cloud", items: ["Firebase (Auth, Firestore, Functions, Messaging)", "Node.js", "AWS S3", "CloudFront", "Laravel", "Django"], where: [{ label: "KNC", href: "#knc" }, { label: "TechHub", href: "#proyectos" }, { label: "TheGymMondelo", href: "#proyectos" }] },
      { title: "Data", items: ["Multi-tenant NoSQL modelling", "Firestore security rules", "PostgreSQL", "MySQL", "Excel and PDF export"], where: [{ label: "KNC", href: "#knc" }, { label: "Task Manager", href: "#proyectos" }] },
      { title: "DevOps and operations", items: ["App Store Connect and TestFlight", "Google Play Console", "Crashlytics", "Migration and audit scripts", "Git and GitHub", "Vercel, Netlify and Firebase Hosting"], where: [{ label: "KNC", href: "#knc" }] },
      { title: "AI for development", items: ["Claude Code", "Custom skills and hooks", "Context7", "Prompt engineering"], where: [{ label: "How I work", href: "#ia" }] },
      { title: "Product", items: ["3D sales tours", "Centre onboarding", "Usage metrics", "Payment integrations: Holded, SEPA, Stripe and Fiskaly"], where: [{ label: "3D tours", href: "#tours" }] },
    ],
  },

  about: {
    title: "About me",
    paragraphs: [
      "I got into web development through a two-year diploma in Sanlúcar, and in just over a year I went from intern to running a product with thousands of users on my own. My favourite part is watching a feature leave my editor and reach a family's phone that same week.",
      "I'm comfortable across the whole journey: talking to the sales team, designing the database, writing the server function, polishing the screen and shipping the release.",
      "Away from code I train almost every day, travel whenever I can and keep learning. The consistency I bring to the gym is the same I bring to a long project.",
    ],
    photoAlt: "José Mondelo",
    facts: [
      { label: "Based in", value: "Sanlúcar de Barrameda, Spain" },
      { label: "Work", value: "Remote or hybrid" },
      { label: "Languages", value: "Spanish (native), English (A2)" },
      { label: "Other", value: "Driving licence and own car" },
    ],
  },

  contact: {
    title: "Let's talk",
    intro: "If you have a project, a job offer or a technical question, write to me.",
    email: "Send an email",
    copyEmail: "Copy email",
    copied: "Email copied",
    whatsapp: "WhatsApp",
    cvEs: "CV in Spanish (PDF)",
    cvEn: "CV in English (PDF)",
    form: {
      title: "Or leave me a message",
      name: "Name",
      email: "Your email",
      message: "Message",
      messagePlaceholder: "Tell me how I can help",
      send: "Send message",
      sending: "Sending…",
      sent: "Message sent. I'll reply to your email.",
      error: "It couldn't be sent. Write to me directly at",
      subject: "New message from the portfolio",
    },
  },

  footer: {
    made: "Designed and built by José Mondelo with Next.js.",
    source: "Source on GitHub",
    top: "Back to top",
  },

  cv: {
    title: "Full-Stack Developer, Flutter, Firebase and web",
    location: "Sanlúcar de Barrameda (Cádiz), Spain, remote or hybrid",
    profileTitle: "Profile",
    profile:
      "Full-stack developer and <b>sole technical lead of KNC</b>, a SaaS platform in production for nurseries, senior care centres and sports clubs, used by dozens of centres and thousands of families. I own a single Flutter codebase for web, Android and iOS end to end, plus its Firebase and AWS backend: architecture, development, payments, deployments and app store releases. I care about software that holds up in production and that non-technical teams can understand and sell.",
    experienceTitle: "Experience",
    kncContext: "Visasur Sistemas. The platform today: ~214,000 lines of Dart, 132 screens, 61 Cloud Functions and 5,000+ downloads on Google Play.",
    kncTour: "Interactive 3D tour",
    kncPoints: [
      "Own the <b>full release cycle</b>: TestFlight and Google Play testing through to production on App Store Connect and Google Play Console.",
      "Redesigned the data model <b>from one centre per user to many centres per user</b>, with per-co-admin permissions, on Clean Architecture + MVVM.",
      "Designed photo and video handling at scale with <b>direct S3 uploads and CloudFront delivery through expiring signed URLs</b>, plus native downloads on web, Android and iOS, removing an unauthenticated server proxy.",
      "Built <b>family payments with SEPA direct debits</b> and <b>centre invoicing through the Holded API</b>; prepared the Stripe and Fiskaly integrations.",
      "Built real-time messaging with scheduled sends, <b>access control with server-validated dynamic QR codes</b> and biometric sign-in with Face ID and fingerprint.",
      "Created the <b>3D sales tours in Three.js</b> for the three types of centre, and keep production data healthy with 100+ audit and migration scripts.",
    ],
    gartelecomPoint: "Built React features and Laravel REST APIs for production applications, tested with Jest.",
    gazc: "GAZC, Seville. One-month project with Python and Django on IoT data.",
    skillsTitle: "Technologies",
    skills: [
      ["Mobile & web", "Flutter, Dart, Riverpod, React, Next.js, TypeScript, Tailwind CSS, Three.js"],
      ["Backend & cloud", "Firebase (Auth, Firestore, Cloud Functions, Messaging), Node.js, AWS S3 & CloudFront, Laravel"],
      ["Integrations", "Holded, SEPA direct debits, Stripe, Fiskaly, Google Drive API, SendGrid"],
      ["How I work", "Git, Crashlytics, unit and widget tests, security rules, AI-assisted development (Claude Code)"],
    ],
    projectsTitle: "Personal projects",
    projectsLines: [
      ["EnglishLearnedHub", "React 19, TypeScript, Firebase.", "English-learning platform with flashcards and games."],
      ["TheGymMondelo", "Laravel, React, PostgreSQL.", "Full gym management platform; final diploma project. <span class=\"sub\">More projects with live demos in the portfolio.</span>"],
    ],
    educationTitle: "Education",
    otherTitle: "Other",
    other: "Spanish (native), English (A2), driving licence (B), experienced remote worker",
  },
};

export default en;

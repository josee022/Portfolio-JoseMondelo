"use client";
import { motion } from "framer-motion";
import {
  FaReact,
  FaAngular,
  FaLaravel,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPhp,
  FaDocker,
  FaGitAlt,
  FaFigma,
  FaGithub,
  FaJava,
  FaPython,
  FaCode,
  FaServer,
  FaCloud,
  FaTools,
  FaDesktop,
  FaMobileAlt,
  FaCheckCircle,
  FaRocket,
  FaLaptopCode,
  FaBrain,
  FaUsers
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiAstro,
  SiInertia,
  SiTypescript,
  SiPostman,
  SiDbeaver,
  SiJest,
  SiTestinglibrary,
  SiEslint,
  SiCypress,
  SiSonarqube,
  SiAmazonaws,
  SiMicrosoftazure,
  SiKubernetes,
  SiGraphql,
  SiRedux,
  SiVuedotjs,
  SiExpress,
  SiNodedotjs,
  SiNestjs,
  SiPrisma,
  SiFirebase,
  SiJenkins,
  SiGitlab,
  SiTrello,
  SiJira,
  SiBootstrap,
  SiSass,
  SiStyledcomponents,
  SiPostcss,
  SiWebpack,
  SiVite,
  SiNginx,
  SiApache,
  SiLinux,
  SiWindows,
  SiAndroid,
  SiApple,
  SiGooglecloud,
  SiDigitalocean,
  SiVercel,
  SiNetlify,
  SiHeroku,
  SiSlack,
  SiGit,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiNotion,
  SiVisualstudiocode,
  SiDocker,
  SiSwagger,
  SiRabbitmq
} from "react-icons/si";
import { TbBrandNextjs, TbApi } from "react-icons/tb";
import { DiVisualstudio, DiDjango } from "react-icons/di";

export default function Habilidades() {
  // Definir categorías de habilidades
  const skillCategories = [
    {
      name: "Frontend",
      icon: <FaDesktop className="text-blue-400" />,
      color: "from-blue-600/20 to-blue-700/20 border-blue-500/20",
      skills: [
        { name: "React", icon: FaReact, level: 90, color: "text-cyan-400" },
        { name: "Angular", icon: FaAngular, level: 85, color: "text-red-500" },
        { name: "Next.js", icon: TbBrandNextjs, level: 80, color: "text-white" },
        { name: "TypeScript", icon: SiTypescript, level: 85, color: "text-blue-500" },
        { name: "JavaScript", icon: FaJsSquare, level: 95, color: "text-yellow-400" },
        { name: "HTML5", icon: FaHtml5, level: 95, color: "text-orange-500" },
        { name: "CSS3", icon: FaCss3Alt, level: 90, color: "text-blue-500" },
        { name: "Tailwind CSS", icon: SiTailwindcss, level: 90, color: "text-cyan-400" },
        { name: "Redux", icon: SiRedux, level: 80, color: "text-purple-500" },
        { name: "Vue.js", icon: SiVuedotjs, level: 70, color: "text-green-500" },
        { name: "Bootstrap", icon: SiBootstrap, level: 85, color: "text-purple-500" },
        { name: "Sass", icon: SiSass, level: 80, color: "text-pink-500" },
        { name: "Styled Components", icon: SiStyledcomponents, level: 75, color: "text-pink-400" },
      ],
    },
    {
      name: "Backend",
      icon: <FaServer className="text-green-400" />,
      color: "from-green-600/20 to-green-700/20 border-green-500/20",
      skills: [
        { name: "Laravel", icon: FaLaravel, level: 90, color: "text-red-500" },
        { name: "PHP", icon: FaPhp, level: 85, color: "text-indigo-400" },
        { name: "Node.js", icon: SiNodedotjs, level: 80, color: "text-green-500" },
        { name: "Express", icon: SiExpress, level: 80, color: "text-gray-400" },
        { name: "NestJS", icon: SiNestjs, level: 75, color: "text-red-500" },
        { name: "Java", icon: FaJava, level: 75, color: "text-red-500" },
        { name: "Python", icon: FaPython, level: 70, color: "text-yellow-300" },
        { name: "Django", icon: DiDjango, level: 65, color: "text-green-600" },
        { name: "GraphQL", icon: SiGraphql, level: 70, color: "text-pink-500" },
        { name: "RESTful APIs", icon: TbApi, level: 90, color: "text-blue-400" },
        { name: "Prisma", icon: SiPrisma, level: 75, color: "text-blue-600" },
      ],
    },
    {
      name: "Bases de Datos",
      icon: <FaDatabase className="text-yellow-400" />,
      color: "from-yellow-600/20 to-yellow-700/20 border-yellow-500/20",
      skills: [
        { name: "PostgreSQL", icon: SiPostgresql, level: 85, color: "text-blue-400" },
        { name: "MySQL", icon: SiMysql, level: 90, color: "text-blue-600" },
        { name: "MongoDB", icon: SiMongodb, level: 80, color: "text-green-500" },
        { name: "Firebase", icon: SiFirebase, level: 75, color: "text-yellow-500" },
      ],
    },
    {
      name: "DevOps & Cloud",
      icon: <FaCloud className="text-purple-400" />,
      color: "from-purple-600/20 to-purple-700/20 border-purple-500/20",
      skills: [
        { name: "Docker", icon: SiDocker, level: 85, color: "text-blue-500" },
        { name: "Kubernetes", icon: SiKubernetes, level: 75, color: "text-blue-600" },
        { name: "AWS", icon: SiAmazonaws, level: 80, color: "text-yellow-500" },
        { name: "Azure", icon: SiMicrosoftazure, level: 75, color: "text-blue-500" },
        { name: "Google Cloud", icon: SiGooglecloud, level: 70, color: "text-red-400" },
        { name: "Vercel", icon: SiVercel, level: 85, color: "text-white" },
        { name: "Netlify", icon: SiNetlify, level: 80, color: "text-teal-400" },
        { name: "Digital Ocean", icon: SiDigitalocean, level: 75, color: "text-blue-500" },
        { name: "CI/CD", icon: SiJenkins, level: 80, color: "text-red-500" },
        { name: "Linux", icon: SiLinux, level: 80, color: "text-yellow-500" },
        { name: "Nginx", icon: SiNginx, level: 75, color: "text-green-500" },
      ],
    },
    {
      name: "Herramientas",
      icon: <FaTools className="text-red-400" />,
      color: "from-red-600/20 to-red-700/20 border-red-500/20",
      skills: [
        { name: "Git", icon: SiGit, level: 90, color: "text-orange-500" },
        { name: "GitHub", icon: FaGithub, level: 90, color: "text-white" },
        { name: "GitLab", icon: SiGitlab, level: 85, color: "text-orange-600" },
        { name: "VS Code", icon: SiVisualstudiocode, level: 95, color: "text-blue-500" },
        { name: "Postman", icon: SiPostman, level: 90, color: "text-orange-500" },
        { name: "Swagger", icon: SiSwagger, level: 85, color: "text-green-500" },
        { name: "Figma", icon: FaFigma, level: 80, color: "text-purple-400" },
        { name: "Jira", icon: SiJira, level: 85, color: "text-blue-500" },
        { name: "Trello", icon: SiTrello, level: 90, color: "text-blue-400" },
        { name: "Notion", icon: SiNotion, level: 85, color: "text-gray-200" },
      ],
    },
    {
      name: "Testing & QA",
      icon: <FaCheckCircle className="text-teal-400" />,
      color: "from-teal-600/20 to-teal-700/20 border-teal-500/20",
      skills: [
        { name: "Jest", icon: SiJest, level: 85, color: "text-red-500" },
        { name: "Testing Library", icon: SiTestinglibrary, level: 80, color: "text-red-400" },
        { name: "Cypress", icon: SiCypress, level: 80, color: "text-gray-400" },
        { name: "Pest (PHP)", icon: FaPhp, level: 85, color: "text-indigo-400" },
        { name: "ESLint", icon: SiEslint, level: 90, color: "text-purple-500" },
        { name: "SonarQube", icon: SiSonarqube, level: 75, color: "text-blue-500" },
      ],
    },
  ];

  const softSkills = [
    { name: "Trabajo en equipo", icon: FaUsers, description: "Colaboración efectiva y adaptación a diferentes dinámicas de grupo." },
    { name: "Resolución de problemas", icon: FaBrain, description: "Análisis de situaciones complejas y desarrollo de soluciones creativas." },
    { name: "Comunicación efectiva", icon: FaRocket, description: "Capacidad para expresar ideas técnicas de manera clara y comprensible." },
    { name: "Aprendizaje continuo", icon: FaLaptopCode, description: "Curiosidad constante y búsqueda de nuevos conocimientos y tecnologías." },
    { name: "Gestión del tiempo", icon: FaUsers, description: "Priorización de tareas y cumplimiento de plazos en proyectos complejos." },
    { name: "Adaptabilidad", icon: FaBrain, description: "Flexibilidad para adaptarse a nuevas tecnologías y entornos de trabajo cambiantes." },
  ];

  // Renderizado condicional para manejar posibles iconos undefined
  const renderSkillIcon = (IconComponent, colorClass) => {
    if (!IconComponent) {
      return <FaCode className={colorClass} />;
    }
    return <IconComponent className={colorClass} />;
  };

  // Animación para el contenedor de habilidades
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Animación para cada categoría
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="habilidades" className="py-12 bg-transparent text-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Encabezado con animación */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block bg-blue-500/10 rounded-full px-4 py-2 mb-3">
            <h2 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 tracking-wide flex items-center justify-center gap-3">
              <span className="bg-blue-500 p-2 rounded-full">
                <FaCode className="text-white text-xl" />
              </span>
              Habilidades Técnicas
            </h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-3"></div>
          <p className="text-base text-gray-300 max-w-3xl mx-auto">
            Stack tecnológico completo para el desarrollo web moderno, desde el frontend hasta la infraestructura en la nube.
          </p>
        </motion.div>

        {/* Categorías de habilidades técnicas - Diseño fluido */}
        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Mostrar cada categoría en un flujo continuo */}
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.name} 
              className="mb-6"
              variants={itemVariants}
            >
              <div className={`bg-gradient-to-r from-gray-900/80 to-gray-900/40 rounded-lg mb-3 py-2 px-3 border-l-4 ${category.color.replace("from-", "border-").split(" ")[0]}`}>
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.name}</h3>
                  <span className="ml-auto text-xs bg-gray-800 rounded-full px-3 py-1 text-gray-300">
                    {category.skills.length} tecnologías
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className={`bg-gradient-to-b from-gray-900/90 to-gray-950/90 p-2 rounded-lg border ${category.color} shadow-sm`}
                    whileHover={{ y: -3, boxShadow: "0 5px 10px -3px rgba(0, 0, 0, 0.3)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex flex-col items-center text-center gap-1">
                      {renderSkillIcon(skill.icon, `text-2xl ${skill.color}`)}
                      <h4 className="text-sm font-medium text-white">{skill.name}</h4>
                      <div className="w-full bg-gray-700/50 rounded-full h-1.5">
                        <motion.div 
                          className={`h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500`}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                        ></motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Habilidades blandas */}
        <div className="mt-16 mb-10">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-purple-500/10 rounded-full px-5 py-2 mb-4">
              <h2 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 tracking-wide flex items-center justify-center gap-3">
                <span className="bg-purple-500 p-2 rounded-full">
                  <FaUsers className="text-white text-xl" />
                </span>
                Habilidades Profesionales
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-4"></div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-gradient-to-b from-gray-900/90 to-gray-950/90 p-4 rounded-lg border border-purple-500/20 shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -3, boxShadow: "0 8px 12px -3px rgba(0, 0, 0, 0.3)" }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-purple-500/10 rounded-lg">
                    {renderSkillIcon(skill.icon, "text-lg text-purple-400")}
                  </div>
                  <h3 className="text-base font-semibold text-white">{skill.name}</h3>
                </div>
                <p className="text-gray-300 text-xs leading-tight">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Estadísticas */}
        <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Stat number="3+" text="Años aprendiendo y desarrollando en el sector " icon={<FaCode />} color="blue" />
          <Stat number="30+" text="Tecnologías con conocimiento" icon={<FaLaptopCode />} color="purple" />
          <Stat number="10+" text="Proyectos realizados o colaborados" icon={<FaRocket />} color="green" />
          <Stat number="100%" text="Compromiso profesional y serio" icon={<FaCheckCircle />} color="red" />
        </motion.div>
      </div>
    </section>
  );
}

// Componente de estadística
const Stat = ({ number, text, icon, color }) => {
  const colorClasses = {
    blue: "from-blue-600/20 to-blue-700/20 border-blue-500/20",
    purple: "from-purple-600/20 to-purple-700/20 border-purple-500/20",
    green: "from-green-600/20 to-green-700/20 border-green-500/20",
    red: "from-red-600/20 to-red-700/20 border-red-500/20",
  };
  
  const iconColorClasses = {
    blue: "text-blue-400",
    purple: "text-purple-400",
    green: "text-green-400",
    red: "text-red-400",
  };

  return (
    <motion.div 
      className={`bg-gradient-to-b from-gray-900/90 to-gray-950/90 p-4 rounded-lg border ${colorClasses[color]} shadow-md text-center`}
      whileHover={{ y: -3 }}
    >
      <div className="flex justify-center mb-2">
        <div className={`p-2 rounded-full bg-gradient-to-r ${colorClasses[color]}`}>
          <div className={`text-lg ${iconColorClasses[color]}`}>{icon}</div>
        </div>
      </div>
      <h3 className="text-2xl font-bold text-white mb-1">{number}</h3>
      <p className="text-gray-400 text-xs">{text}</p>
    </motion.div>
  );
};

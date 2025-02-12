"use client";
import { motion } from "framer-motion";
import {
  FaReact,
  FaAngular,
  FaLaravel,
  FaDatabase,
  FaHtml5 ,
  FaCss3Alt,
  FaJsSquare,
  FaPhp,
  FaDocker,
  FaGitAlt,
  FaFigma,
  FaGithub,
  FaJava,
  FaPython,
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
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";

export default function Habilidades() {
  return (
    <section id="habilidades" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.h2
          className="text-4xl font-bold text-blue-400 mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Habilidades Técnicas
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            { icon: FaReact, name: "React" },
            { icon: FaAngular, name: "Angular" },
            { icon: FaLaravel, name: "Laravel" },
            { icon: FaDatabase, name: "SQL & NoSQL" },
            { icon: FaHtml5, name: "HTML" },
            { icon: FaCss3Alt, name: "CSS" },
            { icon: SiPostgresql, name: "PostgreSQL" },
            { icon: SiMysql, name: "MySQL" },
            { icon: SiMongodb, name: "MongoDB" },
            { icon: SiTailwindcss, name: "Tailwind CSS" },
            { icon: FaJsSquare, name: "JavaScript" },
            { icon: SiTypescript, name: "TypeScript" },
            { icon: FaPhp, name: "PHP" },
            { icon: FaJava, name: "Java" },
            { icon: FaPython, name: "Python" },
            { icon: FaDocker, name: "Docker" },
            { icon: SiAstro, name: "Astro.build" },
            { icon: SiInertia, name: "Inertia.js" },
          ].map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <skill.icon className="text-5xl text-blue-400 mb-2" />
              <p className="text-lg">{skill.name}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <motion.h2
              className="text-4xl font-bold text-blue-400 mb-10"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Herramientas de Trabajo
            </motion.h2>
            <div className="grid grid-cols-3 gap-6">
              {[
                { icon: FaGitAlt, name: "Git" },
                { icon: FaGithub, name: "GitHub" },
                { icon: DiVisualstudio, name: "VS Code" },
                { icon: FaFigma, name: "Figma" },
                { icon: SiPostman, name: "Postman" },
                { icon: SiDbeaver, name: "DBeaver" },
              ].map((tool, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <tool.icon className="text-5xl text-green-400 mb-2" />
                  <p className="text-lg">{tool.name}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <motion.h2
              className="text-4xl font-bold text-blue-400 mb-10"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Testing y Calidad de Código
            </motion.h2>
            <div className="grid grid-cols-3 gap-6">
              {[
                { icon: SiJest, name: "Jest" },
                { icon: SiTestinglibrary, name: "Testing Library" },
                { icon: FaPhp, name: "Pest (PHP Testing)" },
                { icon: SiCypress, name: "Cypress" },
                { icon: SiSonarqube, name: "SonarQube" },
                { icon: SiEslint, name: "ESLint" },
              ].map((tool, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <tool.icon className="text-5xl text-red-400 mb-2" />
                  <p className="text-lg">{tool.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.h2
          className="text-4xl font-bold text-blue-400 mt-16 mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Habilidades Personales
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            "Trabajo en equipo",
            "Comunicación efectiva",
            "Resolución de problemas",
            "Innovación y creatividad",
            "Aprendizaje continuo",
            "Responsabilidad y compromiso",
          ].map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-lg flex items-center justify-center text-lg font-semibold"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

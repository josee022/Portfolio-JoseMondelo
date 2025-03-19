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
import { DiVisualstudio, DiDjango  } from "react-icons/di";
import { RiNextjsFill } from "react-icons/ri";

const hoverEffect = {
  hover: {
    scale: 1.1,
    rotate: 5,
    boxShadow: "0px 0px 20px rgba(0, 255, 255, 0.8)",
    transition: { duration: 0.2 },
  },
};

export default function Habilidades() {
  return (
    <section id="habilidades" className="py-20 bg-transparent text-white">
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
            { icon: FaReact, name: "React", color: "text-cyan-400" },
            { icon: FaAngular, name: "Angular", color: "text-red-400" },
            { icon: FaLaravel, name: "Laravel", color: "text-orange-400" },
            { icon: FaDatabase, name: "SQL & NoSQL", color: "text-green-400" },
            { icon: FaHtml5, name: "HTML", color: "text-orange-500" },
            { icon: FaCss3Alt, name: "CSS", color: "text-blue-500" },
            { icon: SiPostgresql, name: "PostgreSQL", color: "text-blue-300" },
            { icon: SiMysql, name: "MySQL", color: "text-blue-600" },
            { icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
            { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-cyan-400" },
            { icon: FaJsSquare, name: "JavaScript", color: "text-yellow-400" },
            { icon: SiTypescript, name: "TypeScript", color: "text-blue-400" },
            { icon: FaPhp, name: "PHP", color: "text-indigo-400" },
            { icon: FaJava, name: "Java", color: "text-red-500" },
            { icon: FaPython, name: "Python", color: "text-yellow-300" },
            { icon: FaDocker, name: "Docker", color: "text-blue-400" },
            { icon: DiDjango, name: "Django", color: "text-purple-400" },
            { icon: RiNextjsFill, name: "Next.js", color: "text-pink-400" },
          ].map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center
                        border border-gray-700 transition-all"
              variants={hoverEffect}
              whileHover="hover"
            >
              <skill.icon className={`text-5xl ${skill.color} mb-2`} />
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
                { icon: FaGitAlt, name: "Git", color: "text-orange-500" },
                { icon: FaGithub, name: "GitHub", color: "text-gray-400" },
                { icon: DiVisualstudio, name: "VS Code", color: "text-blue-500" },
                { icon: FaFigma, name: "Figma", color: "text-pink-400" },
                { icon: SiPostman, name: "Postman", color: "text-orange-400" },
                { icon: SiDbeaver, name: "DBeaver", color: "text-green-400" },
              ].map((tool, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center
                            border border-gray-700 transition-all"
                  variants={hoverEffect}
                  whileHover="hover"
                >
                  <tool.icon className={`text-5xl ${tool.color} mb-2`} />
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
                { icon: SiJest, name: "Jest", color: "text-red-500" },
                { icon: SiTestinglibrary, name: "Testing Library", color: "text-orange-500" },
                { icon: FaPhp, name: "Pest (PHP Testing)", color: "text-indigo-400" },
                { icon: SiCypress, name: "Cypress", color: "text-green-500" },
                { icon: SiSonarqube, name: "SonarQube", color: "text-blue-400" },
                { icon: SiEslint, name: "ESLint", color: "text-purple-500" },
              ].map((tool, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center
                            border border-gray-700 transition-all"
                  variants={hoverEffect}
                  whileHover="hover"
                >
                  <tool.icon className={`text-5xl ${tool.color} mb-2`} />
                  <p className="text-lg">{tool.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.h2 className="text-4xl font-bold text-blue-400 mt-16 mb-10">Habilidades Personales</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Trabajo en equipo", "Comunicación efectiva", "Resolución de problemas", "Innovación y creatividad", "Aprendizaje continuo", "Responsabilidad y compromiso"].map((skill, index) => (
            <motion.div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center justify-center text-lg font-semibold border border-gray-700 transition-all" variants={hoverEffect} whileHover="hover">
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

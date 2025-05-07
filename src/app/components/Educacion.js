"use client";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCode, FaBook, FaCertificate, FaLaptopCode, FaDatabase, FaServer, FaMobile, FaFreeCodeCamp } from "react-icons/fa";
import { SiUdemy, SiPlatzi, SiCss3, SiAngular } from "react-icons/si";

export default function Educacion() {
  return (
    <section id="educacion" className="py-12 text-white">
      <div className="container mx-auto px-6 md:px-12">
        {/* Encabezado con animación */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block bg-blue-500/10 rounded-full px-5 py-2 mb-4">
            <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 tracking-wide flex items-center justify-center gap-3">
              <span className="bg-blue-500 p-2 rounded-full">
                <FaGraduationCap className="text-white text-xl" />
              </span>
              Formación Académica
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
        </motion.div>

        {/* Contenido principal - Layout compacto */}
        <div className="max-w-6xl mx-auto">
          {/* Grid de dos columnas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Columna 1: Formación Reglada */}
            <motion.div
              className="bg-gradient-to-b from-gray-900/80 to-gray-950/80 rounded-xl border border-blue-500/30 shadow-xl overflow-hidden"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-gradient-to-r from-blue-600/20 to-blue-800/30 p-4 border-b border-blue-500/20">
                <h3 className="text-xl font-bold text-blue-400 flex items-center gap-2">
                  <span className="bg-blue-600 p-2 rounded-lg"><FaGraduationCap className="text-white" /></span>
                  Formación Académica
                </h3>
              </div>

              <div className="p-4 space-y-4">
                {/* DAW */}
                <div className="bg-gray-800/40 p-4 rounded-lg border-l-4 border-blue-500">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-semibold text-white">Técnico Superior en <br /> Desarrollo de Aplicaciones Web</h4>
                      <p className="text-blue-400">I.E.S. Doñana, Sanlúcar de Barrameda</p>
                    </div>
                    <div className="text-right text-sm text-gray-400">
                      2022 - 2024
                    </div>
                  </div>
                  
                  {/* Conocimientos adquiridos */}
                  <div className="mt-3">
                    <h5 className="text-sm font-medium text-blue-300 mb-2">Conocimientos destacados:</h5>
                    <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-sm">
                      <div className="flex items-center gap-1.5">
                        <FaCode className="text-blue-400 text-xs" />
                        <span>Desarrollo Full-Stack</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <FaServer className="text-blue-400 text-xs" />
                        <span>Arquitecturas MVC</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <FaDatabase className="text-blue-400 text-xs" />
                        <span>Diseño de bases de datos</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <FaMobile className="text-blue-400 text-xs" />
                        <span>Diseño web adaptativo</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Tecnologías */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    <span className="text-xs bg-gray-700 px-2 py-0.5 rounded-full text-gray-300">Python</span>
                    <span className="text-xs bg-gray-700 px-2 py-0.5 rounded-full text-gray-300">PHP</span>
                    <span className="text-xs bg-gray-700 px-2 py-0.5 rounded-full text-gray-300">JavaScript</span>
                    <span className="text-xs bg-gray-700 px-2 py-0.5 rounded-full text-gray-300">Java</span>
                    <span className="text-xs bg-gray-700 px-2 py-0.5 rounded-full text-gray-300">Laravel</span>
                    <span className="text-xs bg-gray-700 px-2 py-0.5 rounded-full text-gray-300">React</span>
                    <span className="text-xs bg-gray-700 px-2 py-0.5 rounded-full text-gray-300">SQL</span>
                    <span className="text-xs bg-gray-700 px-2 py-0.5 rounded-full text-gray-300">Docker</span>
                    <span className="text-xs bg-gray-700 px-2 py-0.5 rounded-full text-gray-300">CI/CD</span>
                  </div>
                </div>
                
                {/* Bachillerato */}
                <div className="bg-gray-800/40 p-4 rounded-lg border-l-4 border-purple-500">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-semibold text-white">Bachillerato en Humanidades y Ciencias Sociales</h4>
                      <p className="text-purple-400">I.E.S. Doñana, Sanlúcar de Barrameda</p>
                    </div>
                    <div className="text-right text-sm text-gray-400">
                      2020 - 2022
                    </div>
                  </div>
                  
                  {/* Habilidades adquiridas */}
                  <div className="mt-3">
                    <h5 className="text-sm font-medium text-purple-300 mb-2">Habilidades adquiridas:</h5>
                    <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-sm">
                      <div className="flex items-center gap-1.5">
                        <FaBook className="text-purple-400 text-xs" />
                        <span>Análisis crítico</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <FaBook className="text-purple-400 text-xs" />
                        <span>Resolución de problemas</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <FaBook className="text-purple-400 text-xs" />
                        <span>Aprendizaje y disciplina contínua</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <FaBook className="text-purple-400 text-xs" />
                        <span>Responsabilidad y desarrollo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Columna 2: Cursos y Certificaciones */}
            <motion.div
              className="bg-gradient-to-b from-gray-900/80 to-gray-950/80 rounded-xl border border-green-500/30 shadow-xl overflow-hidden"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-gradient-to-r from-green-600/20 to-green-800/30 p-4 border-b border-green-500/20">
                <h3 className="text-xl font-bold text-green-400 flex items-center gap-2">
                  <span className="bg-green-600 p-2 rounded-lg"><FaCertificate className="text-white" /></span>
                  Formación Complementaria
                </h3>
              </div>

              <div className="p-4 space-y-3">
                {/* Curso 1 */}
                <div className="bg-gray-800/40 p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <SiUdemy className="text-red-400 text-lg" />
                      <h4 className="font-medium text-white">Microservicios con Spring Boot y Spring Cloud</h4>
                    </div>
                    <div className="text-xs bg-green-600/60 px-2 py-0.5 rounded text-white">2024</div>
                  </div>
                  <p className="text-sm text-gray-300 mt-1">Arquitecturas de microservicios, API REST, Docker, Kubernetes y despliegues en AWS</p>
                </div>
                
                {/* Curso 2 */}
                <div className="bg-gray-800/40 p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <SiAngular className="text-red-500 text-lg" />
                      <h4 className="font-medium text-white">Desarrollo avanzado con Angular 18+</h4>
                    </div>
                    <div className="text-xs bg-green-600/60 px-2 py-0.5 rounded text-white">2024</div>
                  </div>
                  <p className="text-sm text-gray-300 mt-1">Patrón Redux, Signals, Lazy loading, SSR, Optimización de rendimiento y testing</p>
                </div>
                
                {/* Curso 3 */}
                <div className="bg-gray-800/40 p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <SiPlatzi className="text-green-500 text-lg" />
                      <h4 className="font-medium text-white">DevOps & CI/CD con GitHub Actions</h4>
                    </div>
                    <div className="text-xs bg-green-600/60 px-2 py-0.5 rounded text-white">2023</div>
                  </div>
                  <p className="text-sm text-gray-300 mt-1">Automatización de procesos, integración y despliegue continuo, testing automatizado</p>
                </div>
                
                {/* Curso 4 */}
                <div className="bg-gray-800/40 p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <SiCss3 className="text-blue-500 text-lg" />
                      <h4 className="font-medium text-white">Diseño UI/UX Avanzado con TailwindCSS</h4>
                    </div>
                    <div className="text-xs bg-green-600/60 px-2 py-0.5 rounded text-white">2023</div>
                  </div>
                  <p className="text-sm text-gray-300 mt-1">Diseño de interfaces, componentes reutilizables, animaciones y accesibilidad</p>
                </div>
                
                {/* Curso 5 */}
                <div className="bg-gray-800/40 p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <FaFreeCodeCamp className="text-white text-lg" />
                      <h4 className="font-medium text-white">Testing Avanzado en JavaScript</h4>
                    </div>
                    <div className="text-xs bg-green-600/60 px-2 py-0.5 rounded text-white">2023</div>
                  </div>
                  <p className="text-sm text-gray-300 mt-1">Jest, Testing Library, Cypress, pruebas unitarias, integración y E2E</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Banner de habilidades en desarrollo */}
          <motion.div 
            className="mt-5 bg-gradient-to-r from-purple-600/20 to-blue-600/20 p-3 rounded-xl border border-purple-500/30 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <FaLaptopCode className="text-purple-400" />
                Aprendizaje continuo
              </h3>
              <p className="text-sm text-gray-300 text-center md:text-right">
                Actualmente cursando certificaciones en Cloud Computing (AWS) y Desarrollo de aplicaciones móviles con Flutter
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

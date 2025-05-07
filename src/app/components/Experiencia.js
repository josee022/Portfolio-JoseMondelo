"use client";
import { motion } from "framer-motion";
import { FaBriefcase, FaClipboardCheck, FaAward, FaChartLine, FaCode, FaUsers, FaDotCircle, FaAws, FaCloudversify } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { SiPostgresql, SiReact, SiLaravel, SiDocker, SiGit } from "react-icons/si";

export default function Experiencia() {
  return (
    <section id="experiencia" className="py-16 text-white">
      <div className="container mx-auto px-6 md:px-12">
        {/* Encabezado con animación */}
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block bg-blue-500/10 rounded-full px-6 py-2 mb-4">
            <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 tracking-wide flex items-center justify-center gap-3">
              <span className="bg-blue-500 p-2 rounded-full">
                <FaBriefcase className="text-white text-xl" />
              </span>
              Experiencia Profesional
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Trayectoria profesional destacando mis contribuciones y logros en entornos de desarrollo
          </p>
        </motion.div>

        {/* Contenido principal - Layout mejorado */}
        <div className="max-w-6xl mx-auto">
          {/* Experiencia y competencias en layout de dos columnas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Columna 1: Experiencia profesional */}
            <motion.div
              className="bg-gradient-to-b from-gray-900/80 to-gray-950/80 rounded-xl border border-blue-500/30 shadow-xl overflow-hidden"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Encabezado con detalles de la empresa */}
              <div className="bg-gradient-to-r from-blue-600/20 to-blue-800/30 p-4 border-b border-blue-500/20 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <FaCode className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Full-Stack Developer</h3>
                    <p className="text-blue-400">Grupo Gartelecom SL</p>
                  </div>
                </div>
                <div className="text-right">
                  <h3 className="text-md font-bold text-blue-400">Oct 2024 - Feb 2025</h3>
                  <p className="text-gray-400 text-sm">Jerez de la Frontera</p>
                </div>
              </div>

              <div className="p-5">
                {/* Responsabilidades */}
                <div className="mb-5">
                  <h4 className="text-md font-semibold text-blue-400 mb-2 flex items-center gap-2">
                    <FaClipboardCheck className="text-base" /> Responsabilidades
                  </h4>
                  <ul className="grid grid-cols-1 gap-2">
                    <li className="flex items-start gap-2 text-sm">
                      <FaDotCircle className="text-blue-400 text-xs mt-1 flex-shrink-0" />
                      <span>Desarrollo full-stack con React y Laravel</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <FaDotCircle className="text-blue-400 text-xs mt-1 flex-shrink-0" />
                      <span>Optimización del rendimiento de aplicaciones</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <FaDotCircle className="text-blue-400 text-xs mt-1 flex-shrink-0" />
                      <span>Integración de APIs REST y PostgreSQL</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <FaDotCircle className="text-blue-400 text-xs mt-1 flex-shrink-0" />
                      <span>Implementación de CI/CD y despliegue automatizado</span>
                    </li>
                  </ul>
                </div>

                {/* Logros */}
                <div className="mb-5">
                  <h4 className="text-md font-semibold text-green-400 mb-2 flex items-center gap-2">
                    <FaAward className="text-base" /> Logros Destacados
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="bg-gray-800/60 p-3 rounded-lg flex items-center gap-2">
                      <div className="bg-green-600/30 p-1.5 rounded-full">
                        <FaChartLine className="text-green-400 text-sm" />
                      </div>
                      <div>
                        <p className="font-semibold text-white text-sm">Mejora rendimiento 30%</p>
                      </div>
                    </div>
                    <div className="bg-gray-800/60 p-3 rounded-lg flex items-center gap-2">
                      <div className="bg-green-600/30 p-1.5 rounded-full">
                        <BiCodeAlt className="text-green-400 text-sm" />
                      </div>
                      <div>
                        <p className="font-semibold text-white text-sm">Reducción errores 20%</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tecnologías utilizadas */}
                <div>
                  <h4 className="text-md font-semibold text-purple-400 mb-2">Tecnologías:</h4>
                  <div className="flex flex-wrap gap-2">
                    <div className="bg-gray-800 px-2 py-1 rounded-lg flex items-center gap-1 text-sm">
                      <SiReact className="text-blue-400 text-xs" /> React
                    </div>
                    <div className="bg-gray-800 px-2 py-1 rounded-lg flex items-center gap-1 text-sm">
                      <SiLaravel className="text-red-400 text-xs" /> Laravel
                    </div>
                    <div className="bg-gray-800 px-2 py-1 rounded-lg flex items-center gap-1 text-sm">
                      <SiPostgresql className="text-blue-300 text-xs" /> PostgreSQL
                    </div>
                    <div className="bg-gray-800 px-2 py-1 rounded-lg flex items-center gap-1 text-sm">
                      <SiDocker className="text-blue-500 text-xs" /> Docker
                    </div>
                    <div className="bg-gray-800 px-2 py-1 rounded-lg flex items-center gap-1 text-sm">
                      <SiGit className="text-orange-500 text-xs" /> Git
                    </div>
                    <div className="bg-gray-800 px-2 py-1 rounded-lg flex items-center gap-1 text-sm">
                      <FaAws className="text-yellow-400 text-xs" /> AWS
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Columna 2: Competencias profesionales */}
            <motion.div
              className="bg-gradient-to-b from-gray-900/80 to-gray-950/80 rounded-xl border border-purple-500/30 shadow-xl overflow-hidden"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="bg-gradient-to-r from-purple-600/20 to-purple-800/30 p-4 border-b border-purple-500/20">
                <h3 className="text-xl font-bold text-purple-400 flex items-center gap-2">
                  <span className="bg-purple-600 p-2 rounded-lg"><FaUsers className="text-white" /></span>
                  Competencias Profesionales
                </h3>
              </div>

              <div className="p-5 grid grid-cols-1 gap-4">
                {/* Desarrollo Web */}
                <div className="bg-gray-800/40 p-3 rounded-lg">
                  <h4 className="text-md font-semibold text-purple-300 mb-1 flex items-center gap-2">
                    <span className="bg-purple-600/30 p-1.5 rounded-full"><FaCode className="text-sm" /></span> 
                    Desarrollo Web
                  </h4>
                  <div className="grid grid-cols-2 gap-1 text-sm">
                    <div className="flex items-start gap-1">
                      <FaDotCircle className="text-purple-400 text-xs mt-1 flex-shrink-0" />
                      <span>Aplicaciones escalables</span>
                    </div>
                    <div className="flex items-start gap-1">
                      <FaDotCircle className="text-purple-400 text-xs mt-1 flex-shrink-0" />
                      <span>Optimización front/back</span>
                    </div>
                    <div className="flex items-start gap-1">
                      <FaDotCircle className="text-purple-400 text-xs mt-1 flex-shrink-0" />
                      <span>Seguridad web (OWASP)</span>
                    </div>
                    <div className="flex items-start gap-1">
                      <FaDotCircle className="text-purple-400 text-xs mt-1 flex-shrink-0" />
                      <span>APIs y microservicios</span>
                    </div>
                  </div>
                </div>

                {/* Trabajo en Equipo */}
                <div className="bg-gray-800/40 p-3 rounded-lg">
                  <h4 className="text-md font-semibold text-purple-300 mb-1 flex items-center gap-2">
                    <span className="bg-purple-600/30 p-1.5 rounded-full"><FaUsers className="text-sm" /></span> 
                    Trabajo en Equipo
                  </h4>
                  <div className="grid grid-cols-2 gap-1 text-sm">
                    <div className="flex items-start gap-1">
                      <FaDotCircle className="text-purple-400 text-xs mt-1 flex-shrink-0" />
                      <span>Metodologías ágiles</span>
                    </div>
                    <div className="flex items-start gap-1">
                      <FaDotCircle className="text-purple-400 text-xs mt-1 flex-shrink-0" />
                      <span>Comunicación efectiva</span>
                    </div>
                    <div className="flex items-start gap-1">
                      <FaDotCircle className="text-purple-400 text-xs mt-1 flex-shrink-0" />
                      <span>Code reviews</span>
                    </div>
                    <div className="flex items-start gap-1">
                      <FaDotCircle className="text-purple-400 text-xs mt-1 flex-shrink-0" />
                      <span>Herramientas colaborativas</span>
                    </div>
                  </div>
                </div>

                {/* Impacto Empresarial */}
                <div className="bg-gray-800/40 p-3 rounded-lg">
                  <h4 className="text-md font-semibold text-purple-300 mb-1 flex items-center gap-2">
                    <span className="bg-purple-600/30 p-1.5 rounded-full"><FaChartLine className="text-sm" /></span> 
                    Impacto Empresarial
                  </h4>
                  <div className="grid grid-cols-2 gap-1 text-sm">
                    <div className="flex items-start gap-1">
                      <FaDotCircle className="text-purple-400 text-xs mt-1 flex-shrink-0" />
                      <span>Enfoque en resultados</span>
                    </div>
                    <div className="flex items-start gap-1">
                      <FaDotCircle className="text-purple-400 text-xs mt-1 flex-shrink-0" />
                      <span>Soluciones escalables</span>
                    </div>
                    <div className="flex items-start gap-1">
                      <FaDotCircle className="text-purple-400 text-xs mt-1 flex-shrink-0" />
                      <span>Optimización de costos</span>
                    </div>
                    <div className="flex items-start gap-1">
                      <FaDotCircle className="text-purple-400 text-xs mt-1 flex-shrink-0" />
                      <span>Adaptación al cambio</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>


          {/* Banner de disponibilidad */}
          <motion.div 
            className="mt-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-4 rounded-xl border border-blue-500/30 shadow-lg flex flex-col md:flex-row items-center justify-between gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="md:flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-white">Disponibilidad Laboral</h3>
              <p className="text-gray-300 text-sm mt-1">
                Disponible para trabajar presencialmente en toda España o en remoto, con flexibilidad horaria.
              </p>
            </div>
            <div className="flex gap-2">
              <div className="flex items-center gap-1 bg-green-500 px-3 py-1.5 rounded-lg text-white font-medium text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                Disponible ahora
              </div>
              <div className="bg-blue-600 px-3 py-1.5 rounded-lg text-white font-medium text-sm">
                Incorporación inmediata
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

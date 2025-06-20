"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { FaGithub, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { GoRocket } from "react-icons/go";
import { BiCodeAlt } from "react-icons/bi";
import { TbBrain } from "react-icons/tb";
import { MdCategory, MdQuiz, MdAutoGraph, MdStyle } from "react-icons/md";

export default function ProyectosEnDesarrollo() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="py-16 bg-transparent text-white">
      <div className="container mx-auto px-6 md:px-12">
        {/* Encabezado de la sección con animación */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block bg-gradient-to-r from-teal-500/20 to-indigo-500/20 rounded-full px-6 py-2 mb-4">
            <h2 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-indigo-400 tracking-wide flex items-center justify-center gap-3">
              <span className="bg-gradient-to-r from-teal-500 to-indigo-500 p-2 rounded-full">
                <GoRocket className="text-white text-2xl" />
              </span>
              Proyecto en Desarrollo
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-indigo-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            Descubre mi proyecto más ambicioso actualmente en desarrollo. 
            <br />Una plataforma innovadora para el aprendizaje, dominio y gestión del idioma mas demandado en el mundo, el inglés.
          </p>
        </motion.div>

        {/* Tarjeta principal con efecto "coming soon" */}
        <motion.div 
          className="relative overflow-hidden rounded-2xl border border-teal-500/30 shadow-2xl mb-20 bg-gradient-to-b from-gray-900/95 to-gray-950/95"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Elementos decorativos de fondo */}
          <div className="absolute inset-0 overflow-hidden opacity-40 pointer-events-none">
            <div className="absolute top-0 left-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -top-20 right-20 rotate-45 w-40 h-60 bg-gradient-to-r from-teal-500/10 to-indigo-500/10 rounded-full blur-2xl"></div>
          </div>

          {/* Contenido principal - Siempre visible */}
          <div className="relative z-10">
            {/* Banner superior "En Desarrollo" */}
            <div className="bg-gradient-to-r from-teal-500 to-indigo-500 text-white py-3 px-6 flex justify-center items-center gap-2">
              <div className="animate-pulse w-3 h-3 rounded-full bg-white"></div>
              <span className="font-bold tracking-wider uppercase text-sm">Proyecto en Desarrollo Activo</span>
              <div className="animate-pulse w-3 h-3 rounded-full bg-white"></div>
            </div>
            
            {/* Contenido del proyecto */}
            <div className="p-8 md:p-12">
              <div className="flex flex-col lg:flex-row gap-10">
                {/* Imagen y logo */}
                <div className="w-full lg:w-2/5">
                  <div className="relative rounded-xl overflow-hidden shadow-2xl border border-teal-500/20">
                    <Image
                      src="/image/EnglishLearnedHub.png"
                      alt="EnglishLearnedHub - Plataforma para aprendizaje de inglés"
                      width={800}
                      height={500}
                      className="w-full h-auto rounded-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex flex-col justify-end p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="h-10 w-10 bg-gradient-to-r from-teal-500 to-indigo-500 rounded-lg flex items-center justify-center">
                          <span className="text-2xl font-bold text-white">E</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white">EnglishLearnedHub</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="badge bg-gradient-to-r from-teal-500/20 to-teal-500/40 text-teal-400 px-3 py-1 rounded-full text-xs font-medium border border-teal-500/20">
                          Lanzamiento Próximo
                        </span>
                        <span className="badge bg-gradient-to-r from-indigo-500/20 to-indigo-500/40 text-indigo-400 px-3 py-1 rounded-full text-xs font-medium border border-indigo-500/20">
                          Beta Privada
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Información del proyecto */}
                <div className="w-full lg:w-3/5 text-left space-y-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-indigo-400">
                        EnglishLearnedHub
                      </h2>
                      <span className="bg-gradient-to-r from-teal-500 to-indigo-500 text-white text-xs px-3 py-1 rounded-full uppercase font-bold tracking-wider">
                        En Desarrollo
                      </span>
                    </div>
                    <p className="text-xl text-gray-300 leading-relaxed">
                      Una plataforma completa para el aprendizaje y gestión de vocabulario en inglés, diseñada para ayudarte a dominar el idioma de manera efectiva con un sistema inteligente de seguimiento de progreso.
                    </p>
                  </div>

                  {/* Tecnologías */}
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-gray-300">Tecnologías:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-gray-800 text-teal-400 px-3 py-1 rounded-full text-sm">React + Vite</span>
                      <span className="bg-gray-800 text-teal-400 px-3 py-1 rounded-full text-sm">TailwindCSS</span>
                      <span className="bg-gray-800 text-teal-400 px-3 py-1 rounded-full text-sm">API de Diccionarios</span>
                      <span className="bg-gray-800 text-teal-400 px-3 py-1 rounded-full text-sm">API de Traducciones</span>
                      <span className="bg-gray-800 text-teal-400 px-3 py-1 rounded-full text-sm">Firebase</span>
                      <span className="bg-gray-800 text-teal-400 px-3 py-1 rounded-full text-sm">Chart.js</span>
                    </div>
                  </div>

                  {/* Características principales - siempre visibles */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-gray-300">Características destacadas:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-gradient-to-r from-teal-500/20 to-teal-500/10 p-2 rounded-lg text-teal-400">
                          <BiCodeAlt size={24} />
                        </div>
                        <div>
                          <h5 className="font-semibold text-teal-400">Dashboard Intuitivo</h5>
                          <p className="text-gray-400">Panel central con toda tu información y progreso personalizado.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-500/10 p-2 rounded-lg text-indigo-400">
                          <MdCategory size={24} />
                        </div>
                        <div>
                          <h5 className="font-semibold text-indigo-400">Organización por Categorías</h5>
                          <p className="text-gray-400">Organiza tu vocabulario en carpetas y categorías personalizadas.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-gradient-to-r from-teal-500/20 to-teal-500/10 p-2 rounded-lg text-teal-400">
                          <MdStyle size={24} />
                        </div>
                        <div>
                          <h5 className="font-semibold text-teal-400">Sistema Flashcard</h5>
                          <p className="text-gray-400">Aprende con tarjetas de memoria y sistema adaptativo de repetición.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-500/10 p-2 rounded-lg text-indigo-400">
                          <MdQuiz size={24} />
                        </div>
                        <div>
                          <h5 className="font-semibold text-indigo-400">Quizzes Personalizados</h5>
                          <p className="text-gray-400">Tests adaptados a tu nivel de conocimiento y categorías seleccionadas.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Botón de GitHub (cuando esté disponible) */}
                  <div className="pt-4 flex items-center justify-between">
                    <div className="flex flex-col gap-2">
                      <span className="text-gray-400">Repositorio disponible próximamente</span>
                      <div className="flex gap-3">
                        <button 
                          disabled
                          className="px-4 py-2 bg-gray-800/50 rounded-lg flex items-center gap-2 cursor-not-allowed opacity-60"
                        >
                          <FaGithub /> GitHub (Próximamente)
                        </button>
                      </div>
                    </div>

                    <motion.button 
                      onClick={toggleExpanded}
                      className="flex items-center gap-1 text-gray-400 hover:text-white transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isExpanded ? (
                        <>
                          <span>Ver menos</span>
                          <FaChevronUp />
                        </>
                      ) : (
                        <>
                          <span>Ver más detalles</span>
                          <FaChevronDown />
                        </>
                      )}
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Detalles expandibles */}
            <motion.div 
              initial={false}
              animate={{
                height: isExpanded ? 'auto' : 0,
                opacity: isExpanded ? 1 : 0
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                opacity: { duration: 0.2 }
              }}
              className="px-8 md:px-12 overflow-hidden"
            >
              <motion.div 
                initial={{ y: 20 }}
                animate={{ y: isExpanded ? 0 : 20 }}
                transition={{ delay: 0.1 }}
                className="border-t border-gray-800 pt-8 mt-2 pb-8"
              >
                <div className="space-y-10">
                  {/* Características avanzadas */}
                  <div>
                    <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-indigo-400">
                      Características detalladas
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Primera columna */}
                      <div className="space-y-6">
                        <div className="bg-gray-900/70 rounded-xl p-6 border border-teal-500/20">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="bg-gradient-to-r from-teal-500 to-teal-600 p-2 rounded-lg">
                              <TbBrain className="text-white text-xl" />
                            </div>
                            <h4 className="text-xl font-semibold text-teal-400">Gestión de Vocabulario</h4>
                          </div>
                          <ul className="space-y-2 text-gray-300">
                            <li className="flex items-start gap-2">
                              <span className="text-teal-400 font-bold">•</span>
                              <span>Almacenamiento completo con definiciones, ejemplos y pronunciación</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-teal-400 font-bold">•</span>
                              <span>Categorización personalizada por temas, niveles o contextos</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-teal-400 font-bold">•</span>
                              <span>Función de marcado para palabras difíciles o prioritarias</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-teal-400 font-bold">•</span>
                              <span>Sistema de notas personales para cada contenido</span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-gray-900/70 rounded-xl p-6 border border-indigo-500/20">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 p-2 rounded-lg">
                              <MdStyle className="text-white text-xl" />
                            </div>
                            <h4 className="text-xl font-semibold text-indigo-400">Sistema de Organización</h4>
                          </div>
                          <ul className="space-y-2 text-gray-300">
                            <li className="flex items-start gap-2">
                              <span className="text-indigo-400 font-bold">•</span>
                              <span>Método de organización con carpetas y categorías personalizadas</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-indigo-400 font-bold">•</span>
                              <span>Sistema de etiquetas para contenido específico</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-indigo-400 font-bold">•</span>
                              <span>Puntuación de contenido que se adapta a tus necesidades</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-indigo-400 font-bold">•</span>
                              <span>Filtros por carpetas o categorías para sesiones específicas</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* Segunda columna */}
                      <div className="space-y-6">
                        <div className="bg-gray-900/70 rounded-xl p-6 border border-teal-500/20">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="bg-gradient-to-r from-teal-500 to-teal-600 p-2 rounded-lg">
                              <MdQuiz className="text-white text-xl" />
                            </div>
                            <h4 className="text-xl font-semibold text-teal-400">Sistema de Evaluación</h4>
                          </div>
                          <ul className="space-y-2 text-gray-300">
                            <li className="flex items-start gap-2">
                              <span className="text-teal-400 font-bold">•</span>
                              <span>Diversos tipos de evaluaciones: opción múltiple, completar, describir</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-teal-400 font-bold">•</span>
                              <span>Niveles progresivos con dificultad adaptativa</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-teal-400 font-bold">•</span>
                              <span>Evaluaciones de rellenar párrafos para contextualización</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-teal-400 font-bold">•</span>
                              <span>Retroalimentación instantánea con explicaciones detalladas</span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-gray-900/70 rounded-xl p-6 border border-indigo-500/20">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 p-2 rounded-lg">
                              <MdAutoGraph className="text-white text-xl" />
                            </div>
                            <h4 className="text-xl font-semibold text-indigo-400">Seguimiento y Estadísticas</h4>
                          </div>
                          <ul className="space-y-2 text-gray-300">
                            <li className="flex items-start gap-2">
                              <span className="text-indigo-400 font-bold">•</span>
                              <span>Dashboard con visualización de progreso por niveles y categorías</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-indigo-400 font-bold">•</span>
                              <span>Gráficos de evolución del contenido aprendido con el tiempo</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-indigo-400 font-bold">•</span>
                              <span>Análisis de áreas de fortaleza y debilidad por temas</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-indigo-400 font-bold">•</span>
                              <span>Sistema de logros y objetivos de aprendizaje personalizados</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Roadmap */}
                  <div>
                    <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-indigo-400">
                      Roadmap del proyecto
                    </h3>
                    <div className="relative">
                      {/* Línea de tiempo vertical */}
                      <div className="absolute left-4 top-1 bottom-1 w-0.5 bg-gradient-to-b from-teal-500 to-indigo-500"></div>
                      
                      <div className="space-y-8 pl-16">
                        {/* Fase 1 - Completada */}
                        <div className="relative">
                          <div className="absolute -left-12 top-0 w-8 h-8 bg-gradient-to-r from-teal-500 to-teal-400 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold">1</span>
                          </div>
                          <div className="bg-gray-900/80 rounded-xl p-5 border border-teal-500/30">
                            <h4 className="text-lg font-bold text-teal-400 mb-2">Fase 1: Gestión de Vocabulario</h4>
                            <p className="text-gray-300 mb-2">Sistema base para la gestión de vocabulario con categorización y almacenamiento</p>
                            <span className="inline-block bg-teal-500/20 text-teal-400 px-3 py-1 rounded-full text-xs font-medium">
                              Completado ✓
                            </span>
                          </div>
                        </div>

                        {/* Fase 2 - En desarrollo */}
                        <div className="relative">
                          <div className="absolute -left-12 top-0 w-8 h-8 bg-gradient-to-r from-indigo-400 to-indigo-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold">2</span>
                          </div>
                          <div className="bg-gray-900/80 rounded-xl p-5 border border-indigo-500/30">
                            <h4 className="text-lg font-bold text-indigo-400 mb-2">Fase 2: Sistema de Flashcards</h4>
                            <p className="text-gray-300 mb-2">Implementación del sistema de tarjetas de memoria con puntuación adaptativa</p>
                            <span className="inline-block bg-indigo-500/20 text-indigo-400 px-3 py-1 rounded-full text-xs font-medium">
                              En desarrollo 🔄
                            </span>
                          </div>
                        </div>

                        {/* Fase 3 - Pendiente */}
                        <div className="relative">
                          <div className="absolute -left-12 top-0 w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold">3</span>
                          </div>
                          <div className="bg-gray-900/80 rounded-xl p-5 border border-gray-700/30">
                            <h4 className="text-lg font-bold text-gray-300 mb-2">Fase 3: Sistema de Quizzes</h4>
                            <p className="text-gray-400 mb-2">Desarrollo de diversos tipos de ejercicios categorizados por niveles</p>
                            <span className="inline-block bg-gray-700/20 text-gray-400 px-3 py-1 rounded-full text-xs font-medium">
                              Planificado 📋
                            </span>
                          </div>
                        </div>

                        {/* Fase 4 - Pendiente */}
                        <div className="relative">
                          <div className="absolute -left-12 top-0 w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold">4</span>
                          </div>
                          <div className="bg-gray-900/80 rounded-xl p-5 border border-gray-700/30">
                            <h4 className="text-lg font-bold text-gray-300 mb-2">Fase 4: Estadísticas y Dashboard</h4>
                            <p className="text-gray-400 mb-2">Implementación de gráficos y sistema de seguimiento completo</p>
                            <span className="inline-block bg-gray-700/20 text-gray-400 px-3 py-1 rounded-full text-xs font-medium">
                              Planificado 📋
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Footer con llamada a la acción */}
            <div className="bg-gradient-to-r from-gray-900/80 to-gray-900/80 px-8 py-6 border-t border-gray-800">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-gray-300 text-lg">
                  ¿Interesado en participar en la beta privada?
                </p>
                <button disabled className="bg-gradient-to-r from-teal-500 to-indigo-500 text-white px-6 py-3 rounded-lg font-medium transition-all cursor-not-allowed opacity-70">
                  Regístrate para la Beta (Próximamente)
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

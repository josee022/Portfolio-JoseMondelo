"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaChevronDown, FaChevronUp } from "react-icons/fa";
import GestorTareas from "@/app/components/GestorTareas";
import UIkitGenerator from "@/app/components/UIKitGenerator";
import TechHub from "@/app/components/TechHub";
import CineFinder from "@/app/components/CineFinder";
import EnglishLearnedHub from "@/app/components/EnglishLearnedHub";

export default function ListaProyectos({ expandedProjects, toggleDetails }) {
  return (
    <section className="py-24 bg-transparent text-white">
      <div className="container mx-auto px-6 md:px-12">
        {/* Encabezado de la sección con animación */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block bg-blue-500/10 rounded-full px-6 py-2 mb-4">
            <h2 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 tracking-wide flex items-center justify-center gap-3">
              <span className="bg-blue-500 p-2 rounded-full">
                <span role="img" aria-label="Laptop" className="text-white text-2xl">
                  💻
                </span>
              </span>
              + Proyectos Desarrollados
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            Explora mis proyectos web que demuestran mi experiencia técnica y capacidad para crear soluciones completas y escalables.
          </p>
          
          {/* Barra de navegación visual */}
          <div className="flex flex-wrap justify-center gap-4 mt-8 mb-12">
            <a 
              href="#CineFinder"
              className="px-5 py-3 bg-gradient-to-r from-blue-500/20 to-blue-700/20 rounded-lg border border-blue-500/30 hover:bg-blue-500/30 transition-all flex items-center gap-2 text-blue-400 font-medium"
            >
              <span className="w-3 h-3 rounded-full bg-blue-500"></span>
              CineFinder
            </a>
            <a 
              href="#TechHub"
              className="px-5 py-3 bg-gradient-to-r from-purple-500/20 to-purple-700/20 rounded-lg border border-purple-500/30 hover:bg-purple-500/30 transition-all flex items-center gap-2 text-purple-400 font-medium"
            >
              <span className="w-3 h-3 rounded-full bg-purple-500"></span>
              TechHub
            </a>
            <a 
              href="#GestorTareas"
              className="px-5 py-3 bg-gradient-to-r from-green-500/20 to-green-700/20 rounded-lg border border-green-500/30 hover:bg-green-500/30 transition-all flex items-center gap-2 text-green-400 font-medium"
            >
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
              Gestor de Tareas
            </a>
            <a 
              href="#UIkitGenerator"
              className="px-5 py-3 bg-gradient-to-r from-amber-500/20 to-amber-700/20 rounded-lg border border-amber-500/30 hover:bg-amber-500/30 transition-all flex items-center gap-2 text-amber-400 font-medium"
            >
              <span className="w-3 h-3 rounded-full bg-amber-500"></span>
              UI Kit Generator
            </a>
            <a 
              href="#EnglishLearnedHub"
              className="px-5 py-3 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-lg border border-blue-400/30 hover:bg-blue-400/30 transition-all flex items-center gap-2 text-blue-300 font-medium"
            >
              <span className="w-3 h-3 rounded-full bg-blue-400"></span>
              EnglishLearnedHub
            </a>
          </div>
        </motion.div>

        {/* Contenedor de proyectos - todos visibles secuencialmente */}
        <div className="space-y-10 mb-10">
          {/* Proyecto CineFinder */}
          <div id="CineFinder">
            <motion.div 
              key="cinefinder"
              className="bg-gradient-to-b from-gray-900/80 to-gray-950/80 rounded-xl border border-blue-500/20 shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              layout
            >
              {/* Resumen del proyecto - siempre visible */}
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="w-full md:w-1/3 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/image/cinefinder.png"
                      alt="CineFinder - Plataforma de cine"
                      width={700}
                      height={450}
                      className="w-full h-auto rounded-lg transition-all duration-300 hover:scale-105"
                    />
                  </div>
                  
                  <div className="w-full md:w-2/3 text-left space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-3xl font-bold text-blue-400">CineFinder</h3>
                      <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full uppercase font-bold tracking-wider">Angular 19</span>
                    </div>
                    
                    <p className="text-gray-300 text-lg">
                      Plataforma completa de cine con diseño premium que permite descubrir y explorar películas, series y todo el universo cinematográfico con una interfaz moderna y totalmente responsive.
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-1">
                      <span className="bg-gray-800 text-blue-400 px-3 py-1 rounded-full text-sm">Angular 19</span>
                      <span className="bg-gray-800 text-blue-400 px-3 py-1 rounded-full text-sm">TheMovieDB API</span>
                      <span className="bg-gray-800 text-blue-400 px-3 py-1 rounded-full text-sm">Material UI</span>
                      <span className="bg-gray-800 text-blue-400 px-3 py-1 rounded-full text-sm">SCSS</span>
                      <span className="bg-gray-800 text-blue-400 px-3 py-1 rounded-full text-sm">Framer Motion</span>
                    </div>
                    
                    <div className="flex justify-between items-center pt-2">
                      <div className="flex gap-3">
                        <a 
                          href="https://github.com/josee022/CineFinder" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-gray-800 rounded-lg flex items-center gap-2 hover:bg-gray-700 transition-all"
                        >
                          <FaGithub /> GitHub
                        </a>
                        <a 
                          href="https://cinefinderweb.netlify.app" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-blue-600 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-all"
                        >
                          URL Project
                        </a>
                      </div>
                      
                      <motion.button 
                        onClick={() => toggleDetails('CineFinder')}
                        className="flex items-center gap-1 text-gray-400 hover:text-white transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {expandedProjects.CineFinder ? (
                          <>
                            <span>Ver menos</span>
                            <FaChevronUp />
                          </>
                        ) : (
                          <>
                            <span>Ver más</span>
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
                  height: expandedProjects.CineFinder ? 'auto' : 0,
                  opacity: expandedProjects.CineFinder ? 1 : 0
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  opacity: { duration: 0.2 }
                }}
                className="px-6 md:px-8 overflow-hidden"
              >
                <motion.div 
                  initial={{ y: 20 }}
                  animate={{ y: expandedProjects.CineFinder ? 0 : 20 }}
                  transition={{ delay: 0.1 }}
                  className="border-t border-gray-800 pt-6 mt-2 pb-8"
                >
                  <CineFinder />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Proyecto TechHub */}
          <div id="TechHub">
            <motion.div 
              key="techhub"
              className="bg-gradient-to-b from-gray-900/80 to-gray-950/80 rounded-xl border border-purple-500/20 shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              layout
            >
              {/* Resumen del proyecto - siempre visible */}
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="w-full md:w-1/3 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/image/techub.png"
                      alt="TechHub - Plataforma IoT"
                      width={700}
                      height={450}
                      className="w-full h-auto rounded-lg transition-all duration-300 hover:scale-105"
                    />
                  </div>
                  
                  <div className="w-full md:w-2/3 text-left space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-3xl font-bold text-purple-400">TechHub</h3>
                      <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full uppercase font-bold tracking-wider">Full Stack</span>
                    </div>
                    
                    <p className="text-gray-300 text-lg">
                      Plataforma de gestión IoT que permite supervisar y controlar dispositivos conectados a Internet, visualizar datos en tiempo real y crear automatizaciones personalizadas.
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-1">
                      <span className="bg-gray-800 text-purple-400 px-3 py-1 rounded-full text-sm">React+Vite</span>
                      <span className="bg-gray-800 text-purple-400 px-3 py-1 rounded-full text-sm">Django REST</span>
                      <span className="bg-gray-800 text-purple-400 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
                      <span className="bg-gray-800 text-purple-400 px-3 py-1 rounded-full text-sm">WebSockets</span>
                      <span className="bg-gray-800 text-purple-400 px-3 py-1 rounded-full text-sm">Chart.js</span>
                    </div>
                    
                    <div className="flex justify-between items-center pt-2">
                      <div className="flex gap-3">
                        <a 
                          href="https://github.com/josee022/TechHub_frontend" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-gray-800 rounded-lg flex items-center gap-2 hover:bg-gray-700 transition-all"
                        >
                          <FaGithub /> GitHub Front
                        </a>
                        <a 
                          href="https://github.com/josee022/TechHub_backend" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-gray-800 rounded-lg flex items-center gap-2 hover:bg-gray-700 transition-all"
                        >
                          <FaGithub /> GitHub Back
                        </a>
                        <a 
                          href="https://techhubjm.netlify.app/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-purple-600 rounded-lg flex items-center gap-2 hover:bg-purple-700 transition-all"
                        >
                          URL Project
                        </a>
                      </div>
                      
                      <motion.button 
                        onClick={() => toggleDetails('TechHub')}
                        className="flex items-center gap-1 text-gray-400 hover:text-white transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {expandedProjects.TechHub ? (
                          <>
                            <span>Ver menos</span>
                            <FaChevronUp />
                          </>
                        ) : (
                          <>
                            <span>Ver más</span>
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
                  height: expandedProjects.TechHub ? 'auto' : 0,
                  opacity: expandedProjects.TechHub ? 1 : 0
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  opacity: { duration: 0.2 }
                }}
                className="px-6 md:px-8 overflow-hidden"
              >
                <motion.div 
                  initial={{ y: 20 }}
                  animate={{ y: expandedProjects.TechHub ? 0 : 20 }}
                  transition={{ delay: 0.1 }}
                  className="border-t border-gray-800 pt-6 mt-2 pb-8"
                >
                  <TechHub />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Proyecto Gestor de Tareas */}
          <div id="GestorTareas">
            <motion.div 
              key="gestortareas"
              className="bg-gradient-to-b from-gray-900/80 to-gray-950/80 rounded-xl border border-green-500/20 shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              layout
            >
              {/* Resumen del proyecto - siempre visible */}
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="w-full md:w-1/3 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/image/gestorTareas.png"
                      alt="Gestor de Tareas"
                      width={700}
                      height={450}
                      className="w-full h-auto rounded-lg transition-all duration-300 hover:scale-105"
                    />
                  </div>
                  
                  <div className="w-full md:w-2/3 text-left space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-3xl font-bold text-green-400">Gestor de Tareas</h3>
                      <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full uppercase font-bold tracking-wider">Full Stack</span>
                    </div>
                    
                    <p className="text-gray-300 text-lg">
                      Aplicación completa de organización personal que permite gestionar tareas, proyectos y hábitos con un diseño intuitivo y funcionalidades avanzadas de productividad.
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-1">
                      <span className="bg-gray-800 text-green-400 px-3 py-1 rounded-full text-sm">React</span>
                      <span className="bg-gray-800 text-green-400 px-3 py-1 rounded-full text-sm">Laravel</span>
                      <span className="bg-gray-800 text-green-400 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
                      <span className="bg-gray-800 text-green-400 px-3 py-1 rounded-full text-sm">Redux</span>
                      <span className="bg-gray-800 text-green-400 px-3 py-1 rounded-full text-sm">TailwindCSS</span>
                    </div>
                    
                    <div className="flex justify-between items-center pt-2">
                      <div className="flex gap-3">
                        <a 
                          href="https://github.com/josee022/gestor-tareas-frontend" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-gray-800 rounded-lg flex items-center gap-2 hover:bg-gray-700 transition-all"
                        >
                          <FaGithub /> GitHub Front
                        </a>
                        <a 
                          href="https://github.com/josee022/gestor-tareas-backend" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-gray-800 rounded-lg flex items-center gap-2 hover:bg-gray-700 transition-all"
                        >
                          <FaGithub /> GitHub Back
                        </a>
                        <a 
                          href="https://gestor-tareas-beige.vercel.app/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-green-600 rounded-lg flex items-center gap-2 hover:bg-green-700 transition-all"
                        >
                          URL Project
                        </a>
                      </div>
                      
                      <motion.button 
                        onClick={() => toggleDetails('GestorTareas')}
                        className="flex items-center gap-1 text-gray-400 hover:text-white transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {expandedProjects.GestorTareas ? (
                          <>
                            <span>Ver menos</span>
                            <FaChevronUp />
                          </>
                        ) : (
                          <>
                            <span>Ver más</span>
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
                  height: expandedProjects.GestorTareas ? 'auto' : 0,
                  opacity: expandedProjects.GestorTareas ? 1 : 0
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  opacity: { duration: 0.2 }
                }}
                className="px-6 md:px-8 overflow-hidden"
              >
                <motion.div 
                  initial={{ y: 20 }}
                  animate={{ y: expandedProjects.GestorTareas ? 0 : 20 }}
                  transition={{ delay: 0.1 }}
                  className="border-t border-gray-800 pt-6 mt-2 pb-8"
                >
                  <GestorTareas />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Proyecto UI Kit Generator */}
          <div id="UIkitGenerator">
            <motion.div 
              key="uikitgenerator"
              className="bg-gradient-to-b from-gray-900/80 to-gray-950/80 rounded-xl border border-amber-500/20 shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              layout
            >
              {/* Resumen del proyecto - siempre visible */}
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="w-full md:w-1/3 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/image/uikitgenerator.png"
                      alt="UI Kit Generator"
                      width={700}
                      height={450}
                      className="w-full h-auto rounded-lg transition-all duration-300 hover:scale-105"
                    />
                  </div>
                  
                  <div className="w-full md:w-2/3 text-left space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-3xl font-bold text-amber-400">UI Kit Generator</h3>
                      <span className="bg-amber-600 text-white text-xs px-2 py-1 rounded-full uppercase font-bold tracking-wider">Frontend</span>
                    </div>
                    
                    <p className="text-gray-300 text-lg">
                      Herramienta de diseño que permite generar componentes UI personalizados y exportarlos como código reutilizable para diferentes frameworks y bibliotecas de diseño.
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-1">
                      <span className="bg-gray-800 text-amber-400 px-3 py-1 rounded-full text-sm">Next.js</span>
                      <span className="bg-gray-800 text-amber-400 px-3 py-1 rounded-full text-sm">TailwindCSS</span>
                      <span className="bg-gray-800 text-amber-400 px-3 py-1 rounded-full text-sm">TypeScript</span>
                      <span className="bg-gray-800 text-amber-400 px-3 py-1 rounded-full text-sm">Framer Motion</span>
                      <span className="bg-gray-800 text-amber-400 px-3 py-1 rounded-full text-sm">Figma API</span>
                    </div>
                    
                    <div className="flex justify-between items-center pt-2">
                      <div className="flex gap-3">
                        <a 
                          href="https://github.com/josee022/UI-Kit-Generator" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-gray-800 rounded-lg flex items-center gap-2 hover:bg-gray-700 transition-all"
                        >
                          <FaGithub /> GitHub
                        </a>
                        <a 
                          href="https://ui-kit-generator.vercel.app/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-amber-600 rounded-lg flex items-center gap-2 hover:bg-amber-700 transition-all"
                        >
                          URL Project
                        </a>
                      </div>
                      
                      <motion.button 
                        onClick={() => toggleDetails('UIkitGenerator')}
                        className="flex items-center gap-1 text-gray-400 hover:text-white transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {expandedProjects.UIkitGenerator ? (
                          <>
                            <span>Ver menos</span>
                            <FaChevronUp />
                          </>
                        ) : (
                          <>
                            <span>Ver más</span>
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
                  height: expandedProjects.UIkitGenerator ? 'auto' : 0,
                  opacity: expandedProjects.UIkitGenerator ? 1 : 0
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  opacity: { duration: 0.2 }
                }}
                className="px-6 md:px-8 overflow-hidden"
              >
                <motion.div 
                  initial={{ y: 20 }}
                  animate={{ y: expandedProjects.UIkitGenerator ? 0 : 20 }}
                  transition={{ delay: 0.1 }}
                  className="border-t border-gray-800 pt-6 mt-2 pb-8"
                >
                  <UIkitGenerator />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        {/* Proyecto EnglishLearnedHub */}
        <div id="EnglishLearnedHub">
          <motion.div 
            key="englishlearnedhub"
            className="bg-gradient-to-b from-gray-900/80 to-gray-950/80 rounded-xl border border-blue-500/20 shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            layout
          >
            {/* Resumen del proyecto - siempre visible */}
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="w-full md:w-1/3 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/image/englishProyecto.png"
                    alt="EnglishLearnedHub - Plataforma de inglés"
                    width={700}
                    height={450}
                    className="w-full h-auto rounded-lg transition-all duration-300 hover:scale-105"
                  />
                </div>
                <div className="w-full md:w-2/3 text-left space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-3xl font-bold text-blue-400">EnglishLearnedHub</h3>
                    <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full uppercase font-bold tracking-wider">React 19 + TypeScript</span>
                  </div>
                  <p className="text-gray-300 text-lg">
                    Plataforma web para aprender y reforzar inglés de forma lógica, interactiva y totalmente personalizada. Incluye dashboard, gestor de vocabulario, flashcards, zona de gramática, juegos y más.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <span className="bg-gray-800 text-blue-400 px-3 py-1 rounded-full text-sm">React 19</span>
                    <span className="bg-gray-800 text-blue-400 px-3 py-1 rounded-full text-sm">TypeScript</span>
                    <span className="bg-gray-800 text-blue-400 px-3 py-1 rounded-full text-sm">Vite</span>
                    <span className="bg-gray-800 text-blue-400 px-3 py-1 rounded-full text-sm">TailwindCSS</span>
                    <span className="bg-gray-800 text-blue-400 px-3 py-1 rounded-full text-sm">Firebase</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <div className="flex gap-3">
                      <a 
                        href="https://github.com/josee022/EnglishLearnedHub" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gray-800 rounded-lg flex items-center gap-2 hover:bg-gray-700 transition-all"
                      >
                        <FaGithub /> GitHub
                      </a>
                      <a 
                        href="https://english-learned-hub.web.app" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-600 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-all"
                      >
                        URL Project
                      </a>
                    </div>
                    <motion.button 
                      onClick={() => toggleDetails('EnglishLearnedHub')}
                      className="flex items-center gap-1 text-gray-400 hover:text-white transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {expandedProjects.EnglishLearnedHub ? (
                        <>
                          <span>Ver menos</span>
                          <FaChevronUp />
                        </>
                      ) : (
                        <>
                          <span>Ver más</span>
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
                height: expandedProjects.EnglishLearnedHub ? 'auto' : 0,
                opacity: expandedProjects.EnglishLearnedHub ? 1 : 0
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                opacity: { duration: 0.2 }
              }}
              className="px-6 md:px-8 overflow-hidden"
            >
              <motion.div 
                initial={{ y: 20 }}
                animate={{ y: expandedProjects.EnglishLearnedHub ? 0 : 20 }}
                transition={{ delay: 0.1 }}
                className="border-t border-gray-800 pt-6 mt-2 pb-8"
              >
                <EnglishLearnedHub />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        </div>
      </div>
    </section>
  );
}

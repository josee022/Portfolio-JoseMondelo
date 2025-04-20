"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { BsPlayCircle } from "react-icons/bs";
import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import GestorTareas from "@/app/components/GestorTareas";
import UIkitGenerator from "@/app/components/UIKitGenerator";
import TechHub from "@/app/components/TechHub";
import CineFinder from "@/app/components/CineFinder";

const images = [
  "/image/carrusel/1welcome.png",
  "/image/carrusel/2homeGym.png",
  "/image/carrusel/3dietas.png",
  "/image/carrusel/4clases.png",
  "/image/carrusel/5programas.png",
  "/image/carrusel/6recompensas.png",
  "/image/carrusel/7suscripcion.png",
  "/image/carrusel/8tienda.png",
  "/image/carrusel/9formBlog.png",
  "/image/carrusel/11diario.png",
  "/image/carrusel/12registros.png",
  "/image/carrusel/13contacto.png",
  "/image/carrusel/14chatbot.png",
  "/image/carrusel/15perfil.png",
  "/image/carrusel/17facturas.png",
  "/image/carrusel/18panel.png",
  "/image/carrusel/19userAdmin.png",
  "/image/carrusel/21mensajesAdmin.png",
  "/image/carrusel/22graficasAdmin.png",
];

export default function Destacado() { // Mantenemos el nombre de la función pero cambiamos el ID y contenido
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section
      id="proyectos"
      className="py-20 bg-transparent text-white text-center relative overflow-hidden"
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[5%] w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[10%] right-[5%] w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-6 md:px-12">
        {/* Encabezado de Proyectos con Animación */}
        <motion.div
          className="mb-16 relative z-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="inline-block bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl px-8 py-4 mb-6 border border-blue-500/20 shadow-xl">
            <motion.span 
              className="text-sm font-medium text-blue-400 uppercase tracking-widest mb-2 block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Portfolio Profesional
            </motion.span>
            <h2 className="text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Mis Proyectos</span>
            </h2>
          </div>
          
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Explora mi portfolio de proyectos web que demuestran mi experiencia técnica y capacidad para crear soluciones completas y escalables.
          </motion.p>
        </motion.div>

        {/* Proyecto Principal con Badge de Destacado */}
        <div className="relative mb-20">
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-bold z-10 shadow-lg flex items-center gap-2 border border-white/10">
            <span className="animate-pulse">⭐</span> PROYECTO DESTACADO <span className="animate-pulse">⭐</span>
          </div>
          
          <motion.div 
            className="bg-gradient-to-b from-gray-900/90 to-gray-950/90 backdrop-blur-sm p-10 rounded-2xl shadow-2xl border border-blue-500/30 relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {/* Elementos decorativos */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
            <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">TheGymMondelo</span>
              <span className="bg-gradient-to-r from-green-600 to-emerald-500 text-white text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">Full Stack</span>
            </h2>
            
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
              Plataforma integral para la gestión de gimnasios con múltiples
              herramientas, como clases personalizadas, planificación de dietas,
              tienda fitness, foros, chatbots y mucho más.
            </p>

            {/* Carrusel de imágenes con controles mejorados */}
            <div className="relative flex items-center justify-center w-full max-w-4xl mx-auto mb-10">
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800/80 px-4 py-1 rounded-full text-sm text-gray-300 z-10">
                {currentIndex + 1} / {images.length}
              </div>
              
              <button
                onClick={prevSlide}
                className="absolute left-0 z-10 p-3 bg-gray-800/80 rounded-full hover:bg-blue-500 transition-all transform hover:scale-110"
              >
                <BiSolidLeftArrow size={24} />
              </button>

              <div className="overflow-hidden rounded-xl shadow-2xl border border-gray-700">
                <Image
                  src={images[currentIndex]}
                  alt="Captura de TheGymMondelo"
                  width={800}
                  height={400}
                  className="rounded-lg shadow-lg transition-all duration-500 hover:scale-105"
                />
              </div>
              
              <button
                onClick={nextSlide}
                className="absolute right-0 z-10 p-3 bg-gray-800/80 rounded-full hover:bg-blue-500 transition-all transform hover:scale-110"
              >
                <BiSolidRightArrow size={24} />
              </button>
            </div>

            {/* Secciones de características y tecnologías */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 relative z-10">
              <motion.div
                className="p-6 bg-gray-800/90 rounded-xl shadow-lg text-left flex flex-col border-l-4 border-blue-500"
                whileHover={{ scale: 1.03, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-xl font-semibold text-blue-400 flex items-center gap-2 mb-4">
                  <span className="bg-blue-500 p-2 rounded-full"><span className="text-lg">🚀</span></span> Funcionalidades Clave
                </h3>
                <div className="grid grid-cols-2 gap-4 text-gray-300">
                  <p className="flex items-center gap-2"><span className="text-green-400">✓</span> Gestión de clases y entrenadores</p>
                  <p className="flex items-center gap-2"><span className="text-green-400">✓</span> Planes de dietas personalizados</p>
                  <p className="flex items-center gap-2"><span className="text-green-400">✓</span> Diario de entrenamiento interactivo</p>
                  <p className="flex items-center gap-2"><span className="text-green-400">✓</span> Tienda fitness con recompensas</p>
                  <p className="flex items-center gap-2"><span className="text-green-400">✓</span> Blog y foro de la comunidad</p>
                  <p className="flex items-center gap-2"><span className="text-green-400">✓</span> Chatbot para asistencia</p>
                  <p className="flex items-center gap-2"><span className="text-green-400">✓</span> Perfil con suscripciones y compras</p>
                  <p className="flex items-center gap-2"><span className="text-green-400">✓</span> Sistema de puntos y recompensas</p>
                </div>
              </motion.div>

              <motion.div
                className="p-6 bg-gray-800/90 rounded-xl shadow-lg text-left flex flex-col border-l-4 border-purple-500"
                whileHover={{ scale: 1.03, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-xl font-semibold text-purple-400 flex items-center gap-2 mb-4">
                  <span className="bg-purple-500 p-2 rounded-full"><span className="text-lg">🛠️</span></span> Stack Tecnológico
                </h3>
                <div className="grid grid-cols-2 gap-4 text-gray-300">
                  <p className="flex items-center gap-2"><span className="text-purple-400">✓</span> React.js, JavaScript</p>
                  <p className="flex items-center gap-2"><span className="text-purple-400">✓</span> Laravel, PHP</p>
                  <p className="flex items-center gap-2"><span className="text-purple-400">✓</span> HTML, CSS, TailwindCSS</p>
                  <p className="flex items-center gap-2"><span className="text-purple-400">✓</span> Inertia.js, Axios</p>
                  <p className="flex items-center gap-2"><span className="text-purple-400">✓</span> Comunicación asíncrona, hooks</p>
                  <p className="flex items-center gap-2"><span className="text-purple-400">✓</span> Manejo del DOM, Ajax</p>
                  <p className="flex items-center gap-2"><span className="text-purple-400">✓</span> Gestión de estados, Validaciones</p>
                  <p className="flex items-center gap-2"><span className="text-purple-400">✓</span> PostgreSQL</p>
                </div>
              </motion.div>
            </div>

            {/* Botones de acción */}
            <div className="mt-10 flex flex-col md:flex-row gap-6 justify-center">
              <motion.a
                href="https://github.com/josee022/TheGymMondelo"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg text-lg font-bold hover:from-blue-700 hover:to-blue-800 transition flex items-center gap-2 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub size={24} /> Ver en GitHub
              </motion.a>

              <motion.button
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg text-lg font-bold hover:from-purple-700 hover:to-purple-800 transition flex items-center gap-2 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <BsPlayCircle size={24} /> Ver Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative bg-gray-900 rounded-lg shadow-lg p-6 w-11/12 md:w-3/4 lg:w-1/2">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-white text-2xl hover:text-red-500"
            >
              <IoClose />
            </button>
            <iframe
              src="https://drive.google.com/file/d/1zVkuuxueTcxPXdH73mqljOjnTkrhUnCF/preview"
              width="100%"
              height="500px"
              allow="autoplay"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      )}
      {/* Sección de Otros Proyectos con Diseño Mejorado */}
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
                Proyectos Destacados
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Explora mi portfolio de proyectos web que demuestran mi experiencia técnica y capacidad para crear soluciones completas y escalables.
            </p>
          </motion.div>

          {/* Navegación de proyectos con pestañas */}
          <div className="flex justify-center mb-12 overflow-x-auto pb-2 hide-scrollbar">
            <div className="flex space-x-2 bg-gray-800/50 p-1 rounded-full">
              <motion.button 
                className="px-6 py-2 rounded-full bg-gray-700/50 text-gray-300 font-medium text-sm hover:bg-gray-700 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                CineFinder
              </motion.button>
              <motion.button 
                className="px-6 py-2 rounded-full bg-gray-700/50 text-gray-300 font-medium text-sm hover:bg-gray-700 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                TechHub
              </motion.button>
              <motion.button 
                className="px-6 py-2 rounded-full bg-gray-700/50 text-gray-300 font-medium text-sm hover:bg-gray-700 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Gestor de Tareas
              </motion.button>
              <motion.button 
                className="px-6 py-2 rounded-full bg-gray-700/50 text-gray-300 font-medium text-sm hover:bg-gray-700 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                UI Kit Generator
              </motion.button>
            </div>
          </div>

          {/* Contenedor de proyectos con efecto de profundidad */}
          <div className="space-y-16">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex justify-center">
                <CineFinder />
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex justify-center">
                <TechHub />
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex justify-center">
                <GestorTareas />
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex justify-center">
                <UIkitGenerator />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </section>
  );
}

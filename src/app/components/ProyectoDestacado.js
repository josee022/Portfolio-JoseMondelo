"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { BsPlayCircle } from "react-icons/bs";
import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { FiGithub, FiChevronDown, FiChevronUp } from "react-icons/fi";

// Imágenes del carrusel
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

export default function ProyectoDestacado({ currentIndex, setCurrentIndex, isModalOpen, setIsModalOpen }) {
  const [expandedDetails, setExpandedDetails] = useState(false);
  const [expandedTech, setExpandedTech] = useState(false);
  
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
    <div className="relative mb-16">
      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-bold z-10 shadow-lg flex items-center gap-2 border border-white/10">
        <span className="animate-pulse">⭐</span> PROYECTO DESTACADO <span className="animate-pulse">⭐</span>
      </div>
      
      <motion.div 
        className="bg-gradient-to-b from-gray-900/90 to-gray-950/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-blue-500/30 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        {/* Elementos decorativos */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
        
        {/* Cabecera del proyecto */}
        <div className="flex flex-col md:flex-row items-start gap-8 mb-8">
          {/* Columna izquierda - Imagen destacada y carrusel */}
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <div className="relative rounded-xl overflow-hidden border border-gray-700 shadow-lg mb-4">
              <div className="absolute top-2 right-2 z-10 bg-gray-800/80 px-2 py-1 rounded text-xs text-gray-300">
                {currentIndex + 1} / {images.length}
              </div>
              
              <Image
                src={images[currentIndex]}
                alt="Captura de TheGymMondelo"
                width={800}
                height={450}
                className="rounded-lg"
              />
              
              <div className="absolute bottom-0 left-0 right-0 flex justify-between p-2">
                <motion.button
                  onClick={prevSlide}
                  className="p-2 bg-gray-800/80 rounded-full hover:bg-blue-500 transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <BiSolidLeftArrow size={18} />
                </motion.button>
                
                <motion.button
                  onClick={nextSlide}
                  className="p-2 bg-gray-800/80 rounded-full hover:bg-blue-500 transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <BiSolidRightArrow size={18} />
                </motion.button>
              </div>
            </div>
            
            {/* Botones de acción */}
            <div className="flex justify-between gap-3">
              <motion.a
                href="https://github.com/josee022/TheGymMondelo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center gap-2 border border-gray-700 transition-all"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <FiGithub />
                <span>Repositorio</span>
              </motion.a>
              
              <motion.button
                onClick={() => setIsModalOpen(true)}
                className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center gap-2"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <BsPlayCircle />
                <span>Demo</span>
              </motion.button>
            </div>
          </div>
          
          {/* Columna derecha - Información del proyecto */}
          <div className="w-full md:w-1/2 text-left">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">TheGymMondelo</h2>
              <span className="bg-gradient-to-r from-green-600 to-emerald-500 text-white text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">Full Stack</span>
            </div>
            
            <p className="text-gray-300 mb-6 text-lg">
              Plataforma integral para la gestión de gimnasios con múltiples herramientas: clases personalizadas, planificación de dietas, tienda fitness, foros, chatbots y sistema de recompensas.
            </p>
            
            {/* Stack tecnológico expandible */}
            <motion.div 
              className="bg-gray-800/40 rounded-lg p-4 border-l-4 border-purple-500 mb-6 relative cursor-pointer hover:bg-gray-800/60 transition-colors"
              onClick={() => setExpandedTech(!expandedTech)}
              whileHover={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.995 }}
            >
              <div className="absolute top-2 right-3 z-10">
                <span className="text-xs text-gray-400 bg-gray-700/80 px-2 py-1 rounded-md mr-2 animate-pulse">
                  {expandedTech ? "Click para minimizar" : "Click para expandir"}
                </span>
                <motion.span
                  className="text-gray-400 inline-block"
                  animate={{ rotate: expandedTech ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiChevronDown />
                </motion.span>
              </div>
              
              <div className="flex justify-between items-center mb-3 mt-1">
                <h3 className="text-xl font-medium text-purple-400">Stack tecnológico completo</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-gray-800 text-purple-400 px-3 py-1 rounded-full text-sm">React 18</span>
                <span className="bg-gray-800 text-purple-400 px-3 py-1 rounded-full text-sm">Laravel 10</span>
                <span className="bg-gray-800 text-purple-400 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
                <span className="bg-gray-800 text-purple-400 px-3 py-1 rounded-full text-sm">TailwindCSS</span>
                <span className="bg-gray-800 text-purple-400 px-3 py-1 rounded-full text-sm">OpenAI API</span>
              </div>
              
              <motion.div 
                className="grid grid-cols-2 gap-2 text-sm text-gray-300 overflow-hidden"
                initial={false}
                animate={{ height: expandedTech ? 'auto' : '0px', opacity: expandedTech ? 1 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <p className="flex items-center gap-1"><span className="text-purple-400">✦</span> React 18 con React Router 6</p>
                <p className="flex items-center gap-1"><span className="text-purple-400">✦</span> TailwindCSS + Framer Motion</p>
                <p className="flex items-center gap-1"><span className="text-purple-400">✦</span> Laravel 10 con Sanctum</p>
                <p className="flex items-center gap-1"><span className="text-purple-400">✦</span> PostgreSQL & Redis</p>
                <p className="flex items-center gap-1"><span className="text-purple-400">✦</span> Stripe Payments & Webhooks</p>
                <p className="flex items-center gap-1"><span className="text-purple-400">✦</span> Algolia Search</p>
                <p className="flex items-center gap-1"><span className="text-purple-400">✦</span> Next Auth</p>
                <p className="flex items-center gap-1"><span className="text-purple-400">✦</span> OpenAI API</p>
              </motion.div>
            </motion.div>
            
            {/* Sección de características */}
            <motion.div 
              className="bg-gray-800/40 rounded-lg p-4 border-l-4 border-blue-500 relative cursor-pointer hover:bg-gray-800/60 transition-colors"
              onClick={() => setExpandedDetails(!expandedDetails)}
              whileHover={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.995 }}
            >
              <div className="absolute top-2 right-3 z-10">
                <span className="text-xs text-gray-400 bg-gray-700/80 px-2 py-1 rounded-md mr-2 animate-pulse">
                  {expandedDetails ? "Click para minimizar" : "Click para expandir"}
                </span>
                <motion.span
                  className="text-gray-400 inline-block"
                  animate={{ rotate: expandedDetails ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiChevronDown />
                </motion.span>
              </div>
              
              <div className="flex justify-between items-center mb-3 mt-1">
                <h3 className="text-xl font-medium text-blue-400">Funcionalidades clave</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                <p className="flex items-center gap-1"><span className="text-green-400">✓</span> Gestión de clases</p>
                <p className="flex items-center gap-1"><span className="text-green-400">✓</span> Planes de dietas</p>
              </div>
              
              <motion.div 
                className="grid grid-cols-2 gap-2 text-sm text-gray-300 overflow-hidden mt-2"
                initial={false}
                animate={{ height: expandedDetails ? 'auto' : '0px', opacity: expandedDetails ? 1 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <p className="flex items-center gap-1"><span className="text-green-400">✓</span> Gestión de clases y entrenadores</p>
                <p className="flex items-center gap-1"><span className="text-green-400">✓</span> Planes de dietas personalizados</p>
                <p className="flex items-center gap-1"><span className="text-green-400">✓</span> Diario de entrenamiento interactivo</p>
                <p className="flex items-center gap-1"><span className="text-green-400">✓</span> Tienda fitness con recompensas</p>
                <p className="flex items-center gap-1"><span className="text-green-400">✓</span> Blog y foro de la comunidad</p>
                <p className="flex items-center gap-1"><span className="text-green-400">✓</span> Chatbot para asistencia</p>
                <p className="flex items-center gap-1"><span className="text-green-400">✓</span> Perfil con suscripciones y compras</p>
                <p className="flex items-center gap-1"><span className="text-green-400">✓</span> Sistema de puntos y recompensas</p>
                <p className="flex items-center gap-1"><span className="text-green-400">✓</span> Panel de administración completo</p>
                <p className="flex items-center gap-1"><span className="text-green-400">✓</span> Sistema de notificaciones</p>
                <p className="flex items-center gap-1"><span className="text-green-400">✓</span> Métricas y análisis estadísticos</p>
                <p className="flex items-center gap-1"><span className="text-green-400">✓</span> Integración con calendario</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Modal de Video */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <motion.div 
            className="bg-gray-900 rounded-xl overflow-hidden w-full max-w-5xl relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-white text-2xl hover:text-red-500 z-10"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <IoClose />
            </motion.button>
            <iframe
              src="https://drive.google.com/file/d/1zVkuuxueTcxPXdH73mqljOjnTkrhUnCF/preview"
              width="100%"
              height="500px"
              allow="autoplay"
              className="w-full rounded-lg"
            />
          </motion.div>
        </div>
      )}
    </div>
  );
}

"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaFileDownload,
  FaUser,
  FaExternalLinkAlt
} from "react-icons/fa";

export default function Contacto() {
  const frases = [
    "¡Construyamos algo juntos!",
    "La innovación empieza con una idea.",
    "Tu proyecto, mi pasión.",
    "Código, creatividad, resultados.",
    "Listo para nuevos retos.",
    "Hablemos de tecnología."
  ];

  const [fraseActual, setFraseActual] = useState(0);

  // Cambio de frases
  useEffect(() => {
    const intervalo = setInterval(() => {
      setFraseActual((prev) => (prev + 1) % frases.length);
    }, 5000);

    return () => clearInterval(intervalo);
  }, [frases.length]);

  return (
    <section id="contacto" className="py-16 bg-transparent text-white relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[5%] w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-[60%] left-[40%] w-64 h-64 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Encabezado con animación */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block bg-purple-500/10 rounded-full px-5 py-2 mb-4">
            <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 tracking-wide flex items-center justify-center gap-3">
              <span className="bg-purple-500 p-2 rounded-full">
                <FaEnvelope className="text-white text-xl" />
              </span>
              Contacto
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6"></div>
          
          <motion.p 
            className="text-lg text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            ¿Tienes un proyecto interesante o una oportunidad laboral? ¡Hablemos! Estoy disponible para colaborar en soluciones digitales innovadoras.
          </motion.p>
        </motion.div>

        {/* Contenedor principal con diseño centrado */}
        <div className="max-w-4xl mx-auto">
          {/* Tarjeta principal de contacto */}
          <motion.div 
            className="bg-gradient-to-b from-gray-900/90 to-gray-950/90 rounded-2xl border border-purple-500/20 shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Cabecera */}
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 p-5 border-b border-purple-500/20">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="bg-purple-600/30 p-1.5 rounded-lg"><FaUser /></span>
                Información de Contacto
              </h3>
            </div>
            
            {/* Contenido dividido en 2 columnas en versión desktop */}
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Columna 1: Información de contacto */}
              <div className="space-y-6">
                {/* Email con enlace para contacto directo */}
                <motion.div 
                  className="flex items-start gap-4 bg-gradient-to-r from-blue-900/20 to-blue-800/10 p-4 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all"
                  whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.1)" }}
                >
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-lg shadow-lg">
                    <FaEnvelope className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=josemondelo022@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-1"
                    >
                      josemondelo022@gmail.com
                      <FaExternalLinkAlt className="text-xs opacity-70" />
                    </a>
                    <p className="text-sm text-blue-400 mt-1">Haz clic para contactar por email</p>
                  </div>
                </motion.div>
                
                {/* Teléfono/WhatsApp con enlace para contacto directo */}
                <motion.div 
                  className="flex items-start gap-4 bg-gradient-to-r from-green-900/20 to-green-800/10 p-4 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all"
                  whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(16, 185, 129, 0.1)" }}
                >
                  <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-lg shadow-lg">
                    <FaPhoneAlt className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Teléfono</h4>
                    <a
                      href="https://wa.me/34622331827"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-green-400 transition-colors flex items-center gap-1"
                    >
                      +34 622 33 18 27
                      <FaExternalLinkAlt className="text-xs opacity-70" />
                    </a>
                    <p className="text-sm text-green-400 mt-1">Haz clic para contactar por WhatsApp</p>
                  </div>
                </motion.div>
                
                {/* Ubicación */}
                <motion.div 
                  className="flex items-start gap-4 bg-gradient-to-r from-yellow-900/20 to-yellow-800/10 p-4 rounded-xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all"
                  whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(245, 158, 11, 0.1)" }}
                >
                  <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-3 rounded-lg shadow-lg">
                    <FaMapMarkerAlt className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Ubicación</h4>
                    <p className="text-gray-300">
                      Sanlúcar de Barrameda<br/>
                      <span className="text-sm text-gray-400">Cádiz, España</span>
                    </p>
                  </div>
                </motion.div>
              </div>
              
              {/* Columna 2: Redes sociales y CV */}
              <div className="space-y-6">
                {/* Redes sociales */}
                <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 p-5 rounded-xl border border-blue-500/20">
                  <h4 className="text-lg font-semibold text-white mb-4">Redes Sociales</h4>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <motion.a
                      href="https://www.instagram.com/josee022/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-gradient-to-r from-pink-600/20 to-purple-600/20 p-3 rounded-xl border border-pink-500/20 hover:border-pink-500/40 transition-all"
                      whileHover={{ y: -3 }}
                    >
                      <FaInstagram className="text-pink-400 text-xl" />
                      <span className="text-white font-medium">Instagram</span>
                    </motion.a>

                    <motion.a
                      href="https://github.com/josee022"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-gradient-to-r from-gray-700/20 to-gray-800/20 p-3 rounded-xl border border-gray-500/20 hover:border-gray-500/40 transition-all"
                      whileHover={{ y: -3 }}
                    >
                      <FaGithub className="text-white text-xl" />
                      <span className="text-white font-medium">GitHub</span>
                    </motion.a>

                    <motion.a
                      href="https://www.linkedin.com/in/jos%C3%A9-mondelo-%C3%A1lvarez-0868a634a/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-gradient-to-r from-blue-600/20 to-blue-700/20 p-3 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all"
                      whileHover={{ y: -3 }}
                    >
                      <FaLinkedin className="text-blue-400 text-xl" />
                      <span className="text-white font-medium">LinkedIn</span>
                    </motion.a>

                    <motion.a
                      href="https://wa.me/34622331827"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-gradient-to-r from-green-600/20 to-green-700/20 p-3 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all"
                      whileHover={{ y: -3 }}
                    >
                      <FaWhatsapp className="text-green-400 text-xl" />
                      <span className="text-white font-medium">WhatsApp</span>
                    </motion.a>
                  </div>
                </div>
                
                {/* CV Descarga - llamativo */}
                <motion.div
                  className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 p-5 rounded-xl border border-purple-500/20"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <h4 className="text-lg font-semibold text-white mb-3">Descarga mi CV</h4>
                  <p className="text-gray-300 text-sm mb-4">Accede a mi currículum completo con toda mi formación y experiencia profesional</p>
                  
                  <a
                    href="/docs/CVJoseMondelo.pdf"
                    download="cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-xl shadow-lg hover:shadow-blue-500/20 transition-all font-medium text-center flex items-center justify-center gap-2"
                  >
                    <FaFileDownload className="text-lg" />
                    Descargar CV
                  </a>
                </motion.div>
                
                {/* Indicador de disponibilidad */}
                <div className="bg-gradient-to-r from-green-600/10 to-green-600/20 rounded-xl p-4 border border-green-500/20">
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="text-green-400 font-medium">Disponible para nuevos proyectos</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Frase inspiradora rotativa */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 border-t border-blue-500/10">
              <motion.div
                key={fraseActual}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-center"
              >
                <p className="text-xl text-gray-300 italic text-center">{frases[fraseActual]}</p>
              </motion.div>
              
              <div className="flex justify-center mt-3">
                {frases.map((_, index) => (
                  <span 
                    key={index} 
                    className={`inline-block w-2 h-2 rounded-full mx-1 ${
                      index === fraseActual ? 'bg-blue-500' : 'bg-gray-600'
                    }`}
                  ></span>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Mensaje final */}
          <motion.div 
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-gray-400">
              Disponible para proyectos freelance y oportunidades laborales
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

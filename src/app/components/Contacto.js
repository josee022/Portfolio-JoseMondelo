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
} from "react-icons/fa";

export default function Contacto() {
  const neonEffect =
    "shadow-lg shadow-blue-400 hover:shadow-blue-600 transition duration-300";

  const frases = [
    "¡Construyamos algo juntos!",
    "La innovación empieza con una idea.",
    "Tu proyecto, mi pasión.",
    "Código, creatividad, resultados.",
    "Listo para nuevos retos.",
    "Hablemos de tecnología."
  ];

  const [fraseActual, setFraseActual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setFraseActual((prev) => (prev + 1) % frases.length);
    }, 5000);

    return () => clearInterval(intervalo);
  }, [frases.length]);

  return (
    <section id="contacto" className="py-20 bg-transparent text-white relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[30%] left-[5%] w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[20%] right-[5%] w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Encabezado con animación y diseño mejorado */}
        <motion.div 
          className="text-center mb-16"
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
              ¿Hablamos?
            </motion.span>
            <h2 className="text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Contacto</span>
            </h2>
          </div>
          
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="font-semibold text-white">¿Listo para llevar tus ideas al siguiente nivel?</span>{" "}
            <span className="text-gray-300">Estoy disponible para colaborar en proyectos innovadores y desafiantes que requieran soluciones técnicas creativas.</span>
          </motion.p>
        </motion.div>

        {/* Tarjeta principal de contacto con efecto de profundidad */}
        <motion.div
          className="bg-gradient-to-b from-gray-900/90 to-gray-950/90 backdrop-blur-sm p-10 rounded-2xl shadow-2xl max-w-5xl mx-auto border border-blue-500/20 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Elementos decorativos */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
          {/* Información de contacto en diseño de tarjetas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Tarjeta de Email */}
            <motion.div 
              className="bg-gray-800/90 p-6 rounded-xl shadow-lg flex flex-col items-center justify-center gap-4 hover:bg-gray-800 transition-all border-t border-blue-500/30"
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)" }}
            >
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-full">
                <FaEnvelope className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-white">Email</h3>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=josemondelo022@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors text-center group"
              >
                josemondelo022@gmail.com
                <div className="text-sm text-blue-400 group-hover:text-blue-300 mt-1">
                  Contactar por Email
                </div>
              </a>
            </motion.div>

            {/* Tarjeta de Teléfono */}
            <motion.div 
              className="bg-gray-800/90 p-6 rounded-xl shadow-lg flex flex-col items-center justify-center gap-4 hover:bg-gray-800 transition-all border-t border-green-500/30"
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)" }}
            >
              <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-full">
                <FaPhoneAlt className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-white">Teléfono</h3>
              <a
                href="https://wa.me/34622331827"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors text-center group"
              >
                +34 622 33 18 27
                <div className="text-sm text-green-400 group-hover:text-green-300 mt-1">
                  Contactar por WhatsApp
                </div>
              </a>
            </motion.div>

            {/* Tarjeta de Ubicación */}
            <motion.div 
              className="bg-gray-800/90 p-6 rounded-xl shadow-lg flex flex-col items-center justify-center gap-4 hover:bg-gray-800 transition-all border-t border-yellow-500/30"
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)" }}
            >
              <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-4 rounded-full">
                <FaMapMarkerAlt className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-white">Ubicación</h3>
              <p className="text-gray-300 text-center">
                Sanlúcar de Barrameda<br/>
                <span className="text-sm text-gray-400">Cádiz, España</span>
              </p>
            </motion.div>
          </div>

          {/* Sección de redes sociales y frases inspiradoras */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-xl shadow-lg border border-blue-500/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              {/* Redes sociales */}
              <div className="mt-12 grid grid-cols-2 gap-6 max-w-xs mx-auto">
                <motion.a
                  href="https://www.instagram.com/josee022/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gradient-to-br from-pink-600 to-purple-600 rounded-full text-white hover:shadow-lg hover:shadow-pink-500/20 transition-all border border-white/10"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaInstagram className="text-2xl" />
                </motion.a>

                <motion.a
                  href="https://github.com/josee022"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full text-white hover:shadow-lg hover:shadow-gray-500/20 transition-all border border-white/10"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="text-2xl" />
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/jos%C3%A9-mondelo-%C3%A1lvarez-0868a634a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full text-white hover:shadow-lg hover:shadow-blue-500/20 transition-all border border-white/10"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedin className="text-2xl" />
                </motion.a>

                <motion.a
                  href="https://wa.me/34644280896"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gradient-to-br from-green-600 to-green-700 rounded-full text-white hover:shadow-lg hover:shadow-green-500/20 transition-all border border-white/10"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaWhatsapp className="text-2xl" />
                </motion.a>
              </div>
              
              {/* Badge de disponibilidad */}
              <div className="mt-10 flex justify-center">
                <div className="bg-gray-800/80 rounded-full px-4 py-2 inline-flex items-center gap-2 border border-green-500/20 shadow-lg">
                  <span className="inline-block h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-gray-300 text-sm font-medium">Disponible para nuevos proyectos</span>
                </div>
              </div>

              {/* Frases inspiradoras con animación */}
              <div className="mt-12 text-center relative overflow-hidden py-8 bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-xl border border-blue-500/10">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
                
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-1 h-12 bg-gradient-to-b from-blue-500 to-purple-500 rounded-r-full"></div>
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-1 h-12 bg-gradient-to-b from-purple-500 to-blue-500 rounded-l-full"></div>
                
                <motion.div
                  key={fraseActual}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="h-20 flex items-center justify-center px-8"
                >
                  <p className="text-base md:text-lg text-gray-300 italic leading-relaxed line-clamp-3 overflow-hidden">{frases[fraseActual]}</p>
                </motion.div>
                
                <div className="flex justify-center mt-4">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mx-1 animate-pulse"></span>
                  <span className="inline-block w-2 h-2 rounded-full bg-purple-500 mx-1 animate-pulse delay-100"></span>
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mx-1 animate-pulse delay-200"></span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mensaje final */}
          <div className="mt-10 text-center">
            <p className="text-gray-400 text-lg">
              Disponible para proyectos freelance y oportunidades laborales
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

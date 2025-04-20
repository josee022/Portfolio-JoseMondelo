"use client";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import Particulas from "./components/Particulas";
import "./globals.css";

export default function RootLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <html lang="es">
      <body className="relative bg-gray-900 text-white">
        <Particulas />

        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled 
            ? "py-5 bg-gradient-to-b from-gray-900 to-gray-950 border-b border-blue-500/20 shadow-lg shadow-blue-500/5" 
            : "py-6 bg-gradient-to-b from-gray-900 to-gray-950 border-b border-blue-500/10"}`}
        >
          {/* Elementos decorativos de fondo */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-[10%] w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute top-1/3 right-[15%] w-24 h-24 bg-purple-500/5 rounded-full blur-3xl"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20"></div>
          </div>
          
          <div className="container mx-auto px-6 md:px-12 flex justify-between items-center relative">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <Link to="inicio" smooth={true} duration={800} className="cursor-pointer flex items-center">
                <div className="mr-2 text-blue-400 text-xl md:text-2xl">
                  <span className="inline-block w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 mr-1"></span>
                </div>
                <span className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  {"<JMondelo />"}
                </span>
              </Link>
            </motion.div>

            {/* Navegación para pantallas medianas y grandes */}
            <div className="hidden md:flex items-center space-x-12">
              <ul className="flex gap-10 text-base font-medium">
                {
                  [
                  "Inicio",
                  "Sobre Mí",
                  "Habilidades",
                  "Proyectos",
                  "Contacto",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to={item.toLowerCase().replace(" ", "-")}
                      smooth={true}
                      duration={500}
                      offset={-90}
                      className="relative cursor-pointer group transition-all duration-300 px-3 py-2 text-lg"
                    >
                      <span className="relative z-10 text-gray-300 group-hover:text-white transition-colors duration-300">{item}</span>
                      <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300"></span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
              
              {/* Redes sociales */}
              <div className="flex space-x-5">
                <motion.a 
                  href="https://github.com/josee022"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800/70 p-2.5 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300 border border-gray-700/30 hover:border-blue-500/30 hover:shadow-md hover:shadow-blue-500/10"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="text-xl" />
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/in/jos%C3%A9-mondelo-%C3%A1lvarez-0868a634a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800/70 p-2.5 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300 border border-gray-700/30 hover:border-blue-500/30 hover:shadow-md hover:shadow-blue-500/10"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedin className="text-xl" />
                </motion.a>
              </div>
            </div>

            {/* Botón de menú móvil */}
            <motion.button
              className="md:hidden focus:outline-none bg-gray-800/70 p-3 rounded-lg border border-gray-700/30 hover:border-blue-500/30 hover:shadow-md hover:shadow-blue-500/10 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? (
                <FaTimes className="text-2xl text-blue-400" />
              ) : (
                <FaBars className="text-2xl text-gray-300" />
              )}
            </motion.button>
          </div>

          {/* Menú móvil */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="bg-gray-900/95 backdrop-blur-md border-t border-blue-500/10 px-6 py-6">
                <div className="flex flex-col space-y-5">
                  {[
                    "Inicio",
                    "Sobre Mí",
                    "Habilidades",
                    "Proyectos",
                    "Contacto",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                    >
                      <Link
                        to={item.toLowerCase().replace(" ", "-")}
                        smooth={true}
                        duration={500}
                        className="block py-2 text-lg font-medium text-gray-300 hover:text-blue-400 transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="border-l-2 border-blue-500/50 pl-3">{item}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
                
                {/* Redes sociales en móvil */}
                <motion.div 
                  className="mt-8 pt-5 border-t border-gray-700/50 flex justify-center space-x-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.a 
                    href="https://github.com/josee022"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-all"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <FaGithub className="text-xl" />
                  </motion.a>
                  <motion.a 
                    href="https://www.linkedin.com/in/jos%C3%A9-mondelo-%C3%A1lvarez-0868a634a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-all"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <FaLinkedin className="text-xl" />
                  </motion.a>
                  <motion.a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=josemondelo022@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-all"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <FaEnvelope className="text-xl" />
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </motion.nav>

        <main className="mt-28">{children}</main>
      </body>
    </html>
  );
}

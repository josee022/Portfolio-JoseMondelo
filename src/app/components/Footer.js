"use client";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaCode,
} from "react-icons/fa";
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <motion.footer
      className="bg-gradient-to-b from-gray-900 to-gray-950 text-white py-12 mt-8 border-t border-blue-500/20 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"></div>
      <div className="absolute top-0 left-1/4 w-8 h-8 rounded-full bg-blue-500/10 blur-xl"></div>
      <div className="absolute bottom-0 right-1/3 w-12 h-12 rounded-full bg-purple-500/10 blur-xl"></div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
          {/* Logo y descripción */}
          <div className="text-center md:text-left">
            <motion.h2
              className="text-3xl font-bold mb-3 inline-block"
              whileHover={{ scale: 1.05 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                {"<JMondelo />"}
              </span>
              <span className="text-white ml-2">Portfolio</span>
            </motion.h2>

            <p className="text-gray-400 text-sm md:text-base">
              Desarrollador web especializado en crear experiencias digitales atractivas y funcionales con tecnologías modernas.
            </p>

            <div className="mt-4 hidden md:block">
              <p className="text-gray-400 text-sm">
                Desarrollado con{" "}
                <span className="text-blue-400 font-semibold">Next.js</span> y{" "}
                <span className="text-blue-400 font-semibold">Tailwind CSS</span>
              </p>
            </div>
          </div>

          {/* Navegación */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-white mb-4 relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Navegación Rápida
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"></span>
            </h3>

            <div className="flex flex-col items-center gap-4">
              {/* Primera fila: Inicio, Sobre Mí, Habilidades */}
              <div className="flex justify-center gap-4 text-gray-400 text-base">
                {[
                  "Inicio",
                  "Sobre Mí",
                  "Habilidades",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to={item.toLowerCase().replace(" ", "-")}
                      smooth={true}
                      duration={500}
                      offset={-90}
                      className="relative cursor-pointer group hover:text-blue-400 transition-all duration-300 px-2 py-1"
                    >
                      {item}
                      <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300"></span>
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              {/* Segunda fila: Proyectos, Contacto */}
              <div className="flex justify-center gap-4 text-gray-400 text-base">
                {[
                  "Proyectos",
                  "Contacto",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to={item.toLowerCase().replace(" ", "-")}
                      smooth={true}
                      duration={500}
                      offset={-90}
                      className="relative cursor-pointer group hover:text-blue-400 transition-all duration-300 px-2 py-1"
                    >
                      {item}
                      <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300"></span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Redes sociales */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold text-white mb-4 relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Conecta Conmigo
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"></span>
            </h3>

            <div className="flex justify-center md:justify-end gap-4">
              <motion.a
                href="https://www.instagram.com/josee022/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-pink-600 to-purple-600 p-2 rounded-full text-white hover:shadow-lg hover:shadow-pink-500/20 transition-all"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaInstagram className="text-xl" />
              </motion.a>

              <motion.a
                href="https://github.com/josee022"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-gray-700 to-gray-800 p-2 rounded-full text-white hover:shadow-lg hover:shadow-gray-500/20 transition-all"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub className="text-xl" />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/jos%C3%A9-mondelo-%C3%A1lvarez-0868a634a/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-blue-600 to-blue-700 p-2 rounded-full text-white hover:shadow-lg hover:shadow-blue-500/20 transition-all"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin className="text-xl" />
              </motion.a>

              <motion.a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=josemondelo022@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-red-500 to-red-600 p-2 rounded-full text-white hover:shadow-lg hover:shadow-red-500/20 transition-all"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaEnvelope className="text-xl" />
              </motion.a>
            </div>

            <div className="mt-6">
              <motion.a
                href="https://github.com/josee022/Portfolio-JoseMondelo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-800/80 px-4 py-2 rounded-lg hover:bg-gray-700/80 transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
              >
                <FaCode className="text-blue-400 group-hover:rotate-12 transition-all duration-300" />
                <span className="text-gray-300 group-hover:text-white">
                  Ver código fuente
                </span>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent my-6"></div>

        {/* Pie de página */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} José Mondelo. Todos los derechos
            reservados.
          </p>

          <div className="mt-2 md:mt-0 flex items-center">
            <span className="inline-block h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
            <span>Disponible para nuevas oportunidades</span>
          </div>

          <p className="mt-2 md:mt-0 text-center md:text-right hidden md:block">
            Desarrollado con{" "}
            <span className="text-blue-400">Next.js</span> y{" "}
            <span className="text-blue-400">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </motion.footer>
  );
}

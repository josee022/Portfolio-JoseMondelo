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
      className="bg-gray-800 text-white py-8 mt-16 border-t border-gray-700"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl font-bold text-blue-400 mb-3">
          {"<JMondelo />"} Portfolio
        </h2>

        <p className="text-gray-400 mb-4 text-sm md:text-base">
          Desarrollado con <span className="text-blue-400">Next.js</span> y{" "}
          <span className="text-blue-400">Tailwind CSS</span>.
        </p>

        <ul className="flex justify-center space-x-6 text-gray-400 text-lg">
          {["Inicio", "Sobre Mí", "Habilidades", "Destacado", "Contacto"].map(
            (item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  to={item.toLowerCase().replace(" ", "-")}
                  smooth={true}
                  duration={500}
                  offset={-90}
                  className="relative cursor-pointer group hover:text-blue-400 transition"
                >
                  {item}
                  <span className="absolute left-0 w-0 group-hover:w-full h-1 bg-blue-400 transition-all duration-300"></span>
                </Link>
              </motion.li>
            )
          )}
        </ul>

        <div className="flex justify-center mt-6 space-x-6">
          <a
            href="https://www.instagram.com/josee022/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-2xl transition"
          >
            <FaInstagram />
          </a>

          <a
            href="https://github.com/josee022"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-2xl transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/jos%C3%A9-mondelo-%C3%A1lvarez-0868a634a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-2xl transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=josemondelo022@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-2xl transition"
          >
            <FaEnvelope />
          </a>
        </div>

        <div className="mt-6">
          <a
            href="https://github.com/josee022/Portfolio-JoseMondelo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-gray-400 hover:text-blue-400 transition duration-300 transform hover:scale-105"
          >
            <FaCode className="mr-2 text-blue-400 transition duration-300 transform hover:rotate-12" />
            <span className="text-blue-400">Código fuente del portfolio</span>
          </a>
        </div>

        <p className="mt-6 text-gray-500 text-sm">
          © {new Date().getFullYear()} José Mondelo Álvarez. Todos los derechos
          reservados.
        </p>
      </div>
    </motion.footer>
  );
}

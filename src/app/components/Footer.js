"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      className="bg-gray-800 text-white py-6 mt-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-2xl font-bold text-blue-400 mb-2">
          <span className="text-white">{"<JM />"}</span> Portfolio
        </h2>

        <ul className="flex justify-center space-x-6 text-gray-400 text-lg">
          {["Inicio", "Sobre Mí", "Habilidades", "Proyectos", "Contacto"].map(
            (item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <a
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="hover:text-blue-400 transition"
                >
                  {item}
                </a>
              </motion.li>
            )
          )}
        </ul>

        <div className="flex justify-center mt-4 space-x-6">
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

        <p className="mt-4 text-gray-500 text-sm">
          © {new Date().getFullYear()} José Mondelo Álvarez. Todos los derechos
          reservados.
        </p>
      </div>
    </motion.footer>
  );
}

"use client";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Animation from "./animacion"; // Ruta correcta a la animación

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative h-[85vh] flex flex-col justify-center items-center text-center px-8"
    >
      {/* Animación más a la izquierda */}
      <div className="absolute top-10 right-[12%] w-[140px] md:w-[180px]">
        <Animation />
      </div>

      {/* Contenido principal más arriba */}
      <motion.h1
        className="text-7xl md:text-8xl font-extrabold text-blue-400 mt-[-20px]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <span className="text-white">¡Hola! Soy</span> José Mondelo Álvarez
      </motion.h1>

      <motion.p
        className="mt-4 text-2xl md:text-3xl text-gray-300 max-w-4xl leading-relaxed"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Desarrollador Web especializado en{" "}
        <span className="text-blue-400">Front-end y Back-end</span>.
        <br />
        Apasionado por crear
        <span className="text-blue-400"> interfaces modernas</span> y
        <span className="text-blue-400"> soluciones escalables</span> con
        tecnologías como{" "}
        <span className="text-blue-400">React, Laravel, PostgreSQL, etc</span>.
      </motion.p>

      {/* Botones (sin modificar) */}
      <motion.div
        className="mt-8 flex gap-8 flex-wrap justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <a
          target="_blank"
          href="https://github.com/josee022?tab=repositories"
          className="px-8 py-4 bg-blue-500 text-white rounded-lg text-xl font-bold hover:bg-blue-600 transition shadow-lg flex items-center gap-2"
        >
          🚀 Ver Proyectos
        </a>

        <Link
          to="contacto"
          smooth={true}
          duration={500}
          offset={-90}
          className="px-8 py-4 border border-blue-500 text-blue-400 rounded-lg text-xl font-bold hover:bg-blue-500 hover:text-white transition shadow-lg cursor-pointer flex items-center gap-2"
        >
          ✉️ Contacto
        </Link>

        <a
          href="/docs/cv.pdf"
          download="cv.pdf"
          className="px-8 py-4 bg-gray-800 text-white rounded-lg text-xl font-bold hover:bg-gray-700 transition shadow-lg flex items-center gap-2"
        >
          📄 Descargar CV
        </a>
      </motion.div>
    </section>
  );
}

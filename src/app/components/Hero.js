"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="h-[90vh] flex flex-col justify-center items-center text-center px-8"
    >
      <motion.h1
        className="text-7xl md:text-8xl font-extrabold text-blue-400"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <span className="text-white">¡Hola! Soy</span> José Mondelo
      </motion.h1>

      <motion.p
        className="mt-6 text-2xl md:text-3xl text-gray-300 max-w-4xl leading-relaxed"
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

      <motion.div
        className="mt-10 flex gap-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <a
          href="#proyectos"
          className="px-10 py-5 bg-blue-500 text-white rounded-lg text-2xl font-bold hover:bg-blue-600 transition shadow-lg"
        >
          🚀 Ver Proyectos
        </a>
        <a
          href="#contacto"
          className="px-10 py-5 border border-blue-500 text-blue-400 rounded-lg text-2xl font-bold hover:bg-blue-500 hover:text-white transition shadow-lg"
        >
          ✉️ Contacto
        </a>
      </motion.div>
    </section>
  );
}

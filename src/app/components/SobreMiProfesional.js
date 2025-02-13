"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const fotoPerfil = "/image/img.jpg";

export default function SobreMi() {
  return (
    <section
      id="sobre-mí"
      className="py-16 bg-gray-900 text-white scroll-mt-20"
    >
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
        <motion.div
          className="w-full md:w-1/3 flex justify-start md:justify-center mb-8 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={fotoPerfil}
            alt="Foto de José Mondelo"
            width={400}
            height={400}
            className="rounded-full shadow-lg w-80 h-80 object-cover"
          />
        </motion.div>

        <motion.div
          className="w-full md:w-2/3 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2 className="text-5xl font-bold text-blue-400 mb-6">Sobre Mí (Entorno Profesional)</h2>

          <p className="text-lg text-gray-300 leading-relaxed">
            Soy un{" "}
            <span className="text-blue-400">desarrollador web Full Stack</span>{" "}
            apasionado por crear soluciones digitales modernas y eficientes.
            Manejo tanto{" "}
            <span className="text-blue-400">Front-end como Back-end</span>, con
            especial interés en tecnologías innovadoras y optimización de
            rendimiento.
          </p>

          <h3 className="text-2xl font-semibold text-blue-300 mt-8 flex items-center">
            🚀 Tecnologías y Especialización
          </h3>
          <p className="text-gray-300">
            Experto en{" "}
            <span className="text-blue-400">
              React, Laravel, PostgreSQL y Tailwind CSS
            </span>
            . Actualmente en proceso de aprendizaje y profundización en{" "}
            <span className="text-blue-400">Angular</span>.
          </p>

          <h3 className="text-2xl font-semibold text-blue-300 mt-8 flex items-center">
            💼 Experiencia y Proyectos
          </h3>
          <p className="text-gray-300">
            He desarrollado múltiples proyectos, incluyendo{" "}
            <span className="text-blue-400">TheGymMondelo</span>, una plataforma
            para la gestión de gimnasios con funcionalidades avanzadas y un
            diseño moderno. 📌
            <a
              href="https://github.com/josee022/TheGymMondelo"
              target="_blank"
              className="text-blue-400 underline"
            >
              {" "}
              Ver en GitHub
            </a>
            .
          </p>
          <p className="text-gray-300 mt-2">
            Además, realicé prácticas en{" "}
            <span className="text-blue-400">Grupo Gartelecom SL</span>,
            participando en el desarrollo de funcionalidades Front-end y
            Back-end, optimización de rendimiento y mejora de software.
          </p>

          <h3 className="text-2xl font-semibold text-blue-300 mt-8 flex items-center">
            🤝 Filosofía de Trabajo
          </h3>
          <p className="text-gray-300">
            Me considero un profesional{" "}
            <span className="text-blue-400">
              resolutivo, innovador y en constante aprendizaje
            </span>
            . Disfruto trabajar en equipo, mantener una comunicación clara y
            aportar valor en cada proyecto en el que participo.
          </p>

          <h3 className="text-2xl font-semibold text-blue-300 mt-8 flex items-center">
            📍 Disponibilidad
          </h3>
          <p className="text-gray-300">
            Disponible para trabajo{" "}
            <span className="text-blue-400">
              remoto o presencial en toda España
            </span>
            . Poseo{" "}
            <span className="text-blue-400">carnet de conducir tipo B</span> y
            vehículo propio para desplazamientos.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

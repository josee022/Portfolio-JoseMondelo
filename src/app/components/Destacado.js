"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { BsPlayCircle } from "react-icons/bs";
import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

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

export default function Destacado() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <section
      id="destacado"
      className="py-16 bg-gray-900 text-white text-center"
    >
      <div className="container mx-auto px-6 md:px-12">
        <motion.h2
          className="text-5xl font-bold text-blue-400 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          🚀 Proyecto Destacado: TheGymMondelo
        </motion.h2>

        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
          Plataforma integral para la gestión de gimnasios con múltiples
          herramientas, como clases personalizadas, planificación de dietas,
          tienda fitness, foros, chatbots y mucho más.
        </p>

        <div className="relative flex items-center justify-center w-full max-w-4xl mx-auto">
          <button
            onClick={prevSlide}
            className="absolute left-0 z-10 p-3 bg-gray-800 rounded-full hover:bg-blue-500 transition"
          >
            <BiSolidLeftArrow size={24} />
          </button>

          <Image
            src={images[currentIndex]}
            alt="Captura de TheGymMondelo"
            width={800}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <button
            onClick={nextSlide}
            className="absolute right-0 z-10 p-3 bg-gray-800 rounded-full hover:bg-blue-500 transition"
          >
            <BiSolidRightArrow size={24} />
          </button>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            className="p-6 bg-gray-800 rounded-lg shadow-lg text-left flex flex-col"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-blue-400">
              🚀 Algunas de las Funcionalidades
            </h3>
            <div className="grid grid-cols-2 gap-4 mt-3 text-gray-300">
              <p>✔️ Gestión de clases y entrenadores</p>
              <p>✔️ Planes de dietas personalizados</p>
              <p>✔️ Diario de entrenamiento interactivo</p>
              <p>✔️ Tienda fitness con recompensas</p>
              <p>✔️ Blog y foro de la comunidad</p>
              <p>✔️ Chatbot para asistencia</p>
              <p>✔️ Perfil con suscripciones y compras</p>
              <p>✔️ Sistema de puntos y recompensas</p>
            </div>
          </motion.div>

          <motion.div
            className="p-6 bg-gray-800 rounded-lg shadow-lg text-left flex flex-col"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-blue-400">
              🛠️ Algunas de las Tecnologías y técnicas de Desarrollo
            </h3>
            <div className="grid grid-cols-2 gap-4 mt-3 text-gray-300">
              <p>✔️ React.js, JavaScript</p>
              <p>✔️ Laravel, PHP</p>
              <p>✔️ HTML, CSS, TailwindCSS</p>
              <p>✔️ Inertia.js, Axios</p>
              <p>✔️ Comunicación asíncrona, hooks</p>
              <p>✔️ Manejo del DOM, Ajax</p>
              <p>✔️ Gestión de estados, Validaciones</p>
              <p>✔️ PostgreSQL</p>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row gap-6 justify-center">
          <a
            href="https://github.com/josee022/TheGymMondelo"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg text-lg font-bold hover:bg-blue-600 transition flex items-center gap-2"
          >
            <FaGithub size={24} /> Ver en GitHub
          </a>

          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 bg-gray-800 text-white rounded-lg text-lg font-bold hover:bg-gray-700 transition flex items-center gap-2"
          >
            <BsPlayCircle size={24} /> Ver Demo
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative bg-gray-900 rounded-lg shadow-lg p-6 w-11/12 md:w-3/4 lg:w-1/2">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-white text-2xl hover:text-red-500"
            >
              <IoClose />
            </button>
            <video
              className="w-full rounded-lg"
              autoPlay
              loop
              playsInline
              controls
            >
              <source src="/video/videoGym.mp4" type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>
        </div>
      )}
    </section>
  );
}

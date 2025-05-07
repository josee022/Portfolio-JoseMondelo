"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaUser, FaHeart, FaGraduationCap, FaCode, FaLaptopCode, FaGlobe, FaMusic, FaMountain, FaUsers, FaBook } from "react-icons/fa";

const fotoPerfil = "/image/img.jpg";

export default function SobreMi() {
  const [activeTab, setActiveTab] = useState("profesional");

  return (
    <section
      id="sobre-mí"
      className="py-12 bg-transparent text-white scroll-mt-20"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Encabezado con animación */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block bg-purple-500/10 rounded-full px-5 py-2 mb-4">
            <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 tracking-wide flex items-center justify-center gap-3">
              <span className="bg-purple-500 p-2 rounded-full">
                <FaUser className="text-white text-xl" />
              </span>
              Sobre Mí
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-4"></div>
        </motion.div>

        {/* Tabs para cambiar entre profesional y personal */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-800/50 rounded-full p-1 flex">
            <button
              onClick={() => setActiveTab("profesional")}
              className={`px-6 py-2 rounded-full font-medium text-sm flex items-center gap-2 transition duration-300 ${
                activeTab === "profesional"
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              <FaCode className="text-sm" />
              Perfil Profesional
            </button>
            <button
              onClick={() => setActiveTab("personal")}
              className={`px-6 py-2 rounded-full font-medium text-sm flex items-center gap-2 transition duration-300 ${
                activeTab === "personal"
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              <FaHeart className="text-sm" />
              Perfil Personal
            </button>
          </div>
        </div>

        {/* Contenido de Perfil Profesional */}
        {activeTab === "profesional" && (
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Foto de perfil */}
              <motion.div
                className="w-full md:w-1/3 max-w-xs flex justify-center mb-8 md:mb-0 md:sticky md:top-24"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-1 shadow-xl">
                    <Image
                      src={fotoPerfil}
                      alt="Foto de José Mondelo"
                      width={400}
                      height={400}
                      className="rounded-full w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-gray-900 px-4 py-1 rounded-full border border-purple-500/30 text-sm font-medium text-purple-400 whitespace-nowrap shadow-xl">
                    Desarrollador Web Full Stack
                  </div>
                </div>
              </motion.div>

              {/* Información profesional */}
              <motion.div
                className="w-full md:w-2/3 bg-gradient-to-b from-gray-900/80 to-gray-950/80 rounded-xl border border-purple-500/20 shadow-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="space-y-6">
                  {/* Introducción */}
                  <div>
                    <h3 className="text-2xl font-bold text-purple-400 mb-3 flex items-center gap-2">
                      <span className="bg-purple-600/30 p-1.5 rounded-lg"><FaCode /></span>
                      Perfil Profesional
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Soy un <span className="text-purple-400 font-medium">desarrollador web Full Stack</span> apasionado por crear soluciones digitales modernas y eficientes.
                      Manejo tanto <span className="text-purple-400 font-medium">Front-end como Back-end</span>, con especial interés en tecnologías innovadoras y optimización de
                      rendimiento.
                    </p>
                  </div>

                  {/* Tecnologías */}
                  <div>
                    <h3 className="text-xl font-semibold text-purple-300 mb-2 flex items-center gap-2">
                      <span className="bg-purple-600/30 p-1.5 rounded-lg"><FaLaptopCode /></span>
                      Tecnologías y Especialización
                    </h3>
                    <p className="text-gray-300">
                      Alto conocimiento en <span className="text-purple-400 font-medium">React, Laravel, PostgreSQL y Tailwind CSS</span>. 
                      Actualmente profundizando más en <span className="text-purple-400 font-medium">Angular</span> y explorando 
                      soluciones de <span className="text-purple-400 font-medium">Cloud Computing</span>.
                    </p>
                    
                    {/* Tags de tecnologías */}
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="bg-blue-900/40 text-blue-300 px-3 py-1 rounded-full text-sm">React</span>
                      <span className="bg-red-900/40 text-red-300 px-3 py-1 rounded-full text-sm">Laravel</span>
                      <span className="bg-blue-900/40 text-blue-300 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
                      <span className="bg-sky-900/40 text-sky-300 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
                      <span className="bg-red-900/40 text-red-300 px-3 py-1 rounded-full text-sm">Angular</span>
                      <span className="bg-yellow-900/40 text-yellow-300 px-3 py-1 rounded-full text-sm">JavaScript</span>
                      <span className="bg-indigo-900/40 text-indigo-300 px-3 py-1 rounded-full text-sm">TypeScript</span>
                      <span className="bg-blue-900/40 text-blue-300 px-3 py-1 rounded-full text-sm">Next.js</span>
                    </div>
                  </div>

                  {/* Experiencia */}
                  <div>
                    <h3 className="text-xl font-semibold text-purple-300 mb-2 flex items-center gap-2">
                      <span className="bg-purple-600/30 p-1.5 rounded-lg"><FaGraduationCap /></span>
                      Experiencia y Proyectos
                    </h3>
                    <p className="text-gray-300">
                      He desarrollado múltiples proyectos, incluyendo <span className="text-purple-400 font-medium">TheGymMondelo</span>, una plataforma
                      para la gestión de gimnasios con funcionalidades avanzadas y un diseño moderno.{" "}
                      <a href="https://github.com/josee022/TheGymMondelo" target="_blank" className="text-blue-400 underline hover:text-blue-300 transition-colors">
                        Ver en GitHub
                      </a>.
                    </p>
                    <p className="text-gray-300 mt-2">
                      Trabajé en <span className="text-purple-400 font-medium">Grupo Gartelecom SL</span>, participando en el desarrollo de funcionalidades Front-end y
                      Back-end, optimizando el rendimiento y mejorando el software con buenas prácticas y código limpio.
                    </p>
                  </div>

                  {/* Filosofía */}
                  <div>
                    <h3 className="text-xl font-semibold text-purple-300 mb-2 flex items-center gap-2">
                      <span className="bg-purple-600/30 p-1.5 rounded-lg"><FaUsers /></span>
                      Filosofía de Trabajo
                    </h3>
                    <p className="text-gray-300">
                      Me considero un profesional <span className="text-purple-400 font-medium">resolutivo, innovador y en constante aprendizaje</span>.
                      Disfruto trabajar en equipo, mantener una comunicación clara y aportar valor en cada proyecto en el que participo.
                    </p>
                  </div>

                  {/* Disponibilidad */}
                  <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-4 rounded-lg border border-blue-500/30">
                    <h3 className="text-xl font-semibold text-white mb-1 flex items-center gap-2">
                      Disponibilidad
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Disponible para trabajo <span className="text-blue-400 font-medium">presencial en toda España o remoto</span>, con flexibilidad horaria e incorporación inmediata.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}

        {/* Contenido de Perfil Personal */}
        {activeTab === "personal" && (
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="bg-gradient-to-b from-gray-900/80 to-gray-950/80 rounded-xl border border-blue-500/20 shadow-xl p-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                No todo es código en mi vida. Me encanta mantener un <span className="text-blue-400 font-medium">estilo de vida activo</span>, 
                viajar, conocer nuevas experiencias y seguir creciendo tanto física como mentalmente. 
                Equilibrar mi vida profesional con mis pasiones personales me permite mantener la creatividad 
                y la energía en todos los aspectos.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <Card
                icon={<FaMountain />}
                img="/image/gym.JPG"
                title="Fitness & Disciplina"
                description="Entreno regularmente combinando fuerza y cardio. La disciplina en el gimnasio se refleja en mi enfoque profesional: constancia, superación y atención al detalle."
                customClass="object-[0px_-100px]"
                color="purple"
              />

              <Card
                icon={<FaGlobe />}
                img="/image/tenerife.jpg"
                title="Explorando el Mundo"
                description="Viajar me abre la mente y me permite conocer nuevas culturas y formas de pensar. Cada viaje me aporta perspectivas que aplico tanto en mi vida como en mi trabajo."
                color="blue"
              />

              <Card
                icon={<FaMusic />}
                img="/image/concierto.jpg"
                title="Música & Motivación"
                description="La música forma parte esencial de mi vida. Desde sonidos relajantes para concentrarme hasta festivales en vivo. Me ayuda a desconectar y a encontrar nuevas fuentes de inspiración."
                color="indigo"
              />

              <Card
                icon={<FaUsers />}
                img="/image/amigos.JPG"
                title="Amigos & Conexiones"
                description="Valoro el tiempo con amigos, compartiendo experiencias y aprendiendo de cada uno de ellos. Las relaciones personales son tan importantes como las profesionales."
                color="pink"
              />

              <Card
                icon={<FaHeart />}
                img="/image/familia.jpg"
                title="Mi Familia"
                description="Mi familia es mi pilar fundamental, brindándome apoyo en cada paso y enseñándome valores que aplico diariamente. Son mi mayor motivación para seguir creciendo."
                color="red"
              />

              <Card
                icon={<FaBook />}
                img="/image/tituloDAW.jpg"
                title="Aprendizaje Constante"
                description="Estudio inglés, leo libros de desarrollo personal y tecnología. Creo firmemente que nunca se deja de aprender, tanto en lo profesional como en lo personal."
                color="green"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

const Card = ({ icon, img, title, description, customClass = "", color = "blue" }) => {
  // Configuración de colores según el parámetro
  const colorClasses = {
    blue: "from-blue-600/20 to-blue-800/20 border-blue-500/30",
    purple: "from-purple-600/20 to-purple-800/20 border-purple-500/30",
    indigo: "from-indigo-600/20 to-indigo-800/20 border-indigo-500/30",
    pink: "from-pink-600/20 to-pink-800/20 border-pink-500/30",
    red: "from-red-600/20 to-red-800/20 border-red-500/30",
    green: "from-green-600/20 to-green-800/20 border-green-500/30",
  };

  return (
    <motion.div
      className={`bg-gradient-to-b ${colorClasses[color]} p-5 rounded-xl shadow-lg border flex flex-col h-full`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative mb-4 overflow-hidden rounded-lg h-48">
        <Image
          src={img}
          alt={title}
          width={400}
          height={300}
          className={`object-cover w-full h-full transition-transform duration-300 hover:scale-110 ${customClass}`}
        />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
        <span className={`text-${color}-400`}>
          {icon}
        </span>
        {title}
      </h3>
      <p className="text-gray-300 text-sm flex-grow">{description}</p>
    </motion.div>
  );
};

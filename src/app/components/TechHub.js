import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaCode, FaCheckCircle, FaBrain, FaGlobe } from "react-icons/fa";

const TechHubProject = () => {
  return (
    <section className="py-16 text-white text-center">
      {/* Contenedor Principal */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-gray-900 p-12 rounded-xl shadow-lg max-w-[90%] mx-auto w-full">
        {/* Información del Proyecto - COLUMNA IZQUIERDA */}
        <div className="flex-1 text-left space-y-6">
          <div className="flex items-center gap-3">
            <h3 className="text-4xl font-bold text-blue-400">TechHub</h3>
            <span className="bg-orange-600 text-white text-xs px-2 py-1 rounded-full uppercase font-bold tracking-wider">React + Django</span>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">
            Plataforma completa para la gestión de dispositivos IoT con dashboard en tiempo real,
            gráficos interactivos, sistema de alertas, gestión de usuarios y dispositivos,
            análisis de datos y generación de informes. Desarrollada con arquitectura frontend-backend
            separada y diseño responsive para todos los dispositivos.
          </p>
          <div className="flex items-center gap-2 text-orange-400">
            <FaCheckCircle className="text-xl" />
            <p className="font-medium">Proyecto fullstack con enfoque en IoT y visualización de datos</p>
          </div>

          {/* Tecnologías utilizadas con descripción */}
          <div className="bg-gray-800 p-4 rounded-lg text-sm text-gray-300 grid grid-cols-2 gap-3">
            <div>
              <span className="text-orange-400 font-bold">React + Vite:</span>{" "}
              Frontend optimizado y rápido.
            </div>
            <div>
              <span className="text-orange-400 font-bold">Django REST:</span>{" "}
              API robusta y escalable.
            </div>
            <div>
              <span className="text-orange-400 font-bold">PostgreSQL:</span>{" "}
              Base de datos relacional.
            </div>
            <div>
              <span className="text-orange-400 font-bold">Redux Toolkit:</span>{" "}
              Gestión de estado avanzada.
            </div>
            <div>
              <span className="text-orange-400 font-bold">Chart.js:</span>{" "}
              Visualización de datos dinámica.
            </div>
            <div>
              <span className="text-orange-400 font-bold">Tailwind CSS:</span>{" "}
              Diseño responsive y moderno.
            </div>
            <div>
              <span className="text-orange-400 font-bold">JWT:</span>{" "}
              Autenticación segura.
            </div>
            <div>
              <span className="text-orange-400 font-bold">WebSockets:</span>{" "}
              Comunicación en tiempo real.
            </div>
          </div>

          {/* Características principales */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="text-orange-400 font-bold mb-2 flex items-center gap-2">✨ Características destacadas</h4>
            <ul className="grid grid-cols-2 gap-2 text-sm text-gray-300">
              <li className="flex items-start gap-1"><span className="text-orange-400 font-bold">•</span> Dashboard en tiempo real con métricas</li>
              <li className="flex items-start gap-1"><span className="text-orange-400 font-bold">•</span> Gestión completa de dispositivos IoT</li>
              <li className="flex items-start gap-1"><span className="text-orange-400 font-bold">•</span> Gráficos interactivos de rendimiento</li>
              <li className="flex items-start gap-1"><span className="text-orange-400 font-bold">•</span> Sistema de alertas y notificaciones</li>
              <li className="flex items-start gap-1"><span className="text-orange-400 font-bold">•</span> Autenticación y autorización seguras</li>
              <li className="flex items-start gap-1"><span className="text-orange-400 font-bold">•</span> Generación de informes personalizados</li>
              <li className="flex items-start gap-1"><span className="text-orange-400 font-bold">•</span> Interfaz adaptable a todos los dispositivos</li>
              <li className="flex items-start gap-1"><span className="text-orange-400 font-bold">•</span> Modo oscuro/claro integrado</li>
            </ul>
          </div>

          {/* Logros y habilidades demostradas */}
          <div className="bg-gradient-to-r from-orange-900 to-red-800 p-4 rounded-lg">
            <h4 className="text-white font-bold mb-2 flex items-center gap-2">
              <FaBrain /> Competencias técnicas demostradas
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm text-gray-200">
              <li className="flex items-start gap-1"><span className="text-yellow-400 font-bold">→</span> Desarrollo fullstack completo</li>
              <li className="flex items-start gap-1"><span className="text-yellow-400 font-bold">→</span> Arquitectura de APIs REST</li>
              <li className="flex items-start gap-1"><span className="text-yellow-400 font-bold">→</span> Gestión de datos en tiempo real</li>
              <li className="flex items-start gap-1"><span className="text-yellow-400 font-bold">→</span> Seguridad y autenticación</li>
              <li className="flex items-start gap-1"><span className="text-yellow-400 font-bold">→</span> Visualización de datos avanzada</li>
              <li className="flex items-start gap-1"><span className="text-yellow-400 font-bold">→</span> Optimización de rendimiento</li>
            </ul>
          </div>
        </div>

        {/* Imagen del Proyecto con enlace - COLUMNA DERECHA */}
        <div className="flex-1 flex flex-col items-center">
          <a
            href="https://techhubjm.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative rounded-lg overflow-hidden shadow-md hover:opacity-90 transition w-full max-w-[700px]"
          >
            <Image
              src="/image/techub.png"
              alt="TechHub"
              width={700}
              height={450}
              className="w-full h-auto rounded-lg"
            />
          </a>
          <div className="flex flex-col gap-2 mt-2">
            <p className="text-gray-400 text-sm">
              💡 Haz clic en la imagen para visitar el proyecto en vivo.
            </p>
            <div className="flex flex-col gap-1">
              <span className="bg-orange-600 text-white text-xs px-3 py-1 rounded-full font-medium inline-block w-fit mx-auto">Ideal para roles fullstack</span>
              <span className="text-orange-400 text-xs flex items-center justify-center gap-1 mt-1">
                <FaCheckCircle className="text-xs" /> Plataforma IoT con React y Django
              </span>
            </div>
          </div>

          {/* Credenciales y Enlaces */}
          <div className="bg-gray-800 p-4 rounded-lg mt-4 w-full">
            <h4 className="text-orange-400 font-bold mb-2">🔑 Credenciales de Prueba</h4>
            <div className="flex flex-col gap-1 mb-3 text-sm text-gray-300">
              <p>
                <strong>Usuario:</strong> Prueba
              </p>
              <p>
                <strong>Contraseña:</strong> 123456
              </p>
            </div>
            
            <h4 className="text-orange-400 font-bold mb-3">Enlaces del proyecto</h4>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <a
                  href="https://github.com/josee022/TechHub_frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-700 px-5 py-3 rounded-lg hover:bg-gray-600 transition font-bold flex-1 justify-center"
                >
                  <FaGithub /> Frontend
                </a>
                <a
                  href="https://github.com/josee022/TechHub_backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-700 px-5 py-3 rounded-lg hover:bg-gray-600 transition font-bold flex-1 justify-center"
                >
                  <FaGithub /> Backend
                </a>
              </div>
              <a
                href="https://techhubjm.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-orange-700 px-5 py-3 rounded-lg hover:bg-orange-600 transition font-bold w-full justify-center"
              >
                <FaGlobe className="text-xl" /> Visitar sitio web
              </a>
            </div>
          </div>

          {/* Tecnologías destacadas */}
          <div className="bg-gray-800 p-4 rounded-lg mt-4 w-full">
            <h4 className="text-orange-400 font-bold mb-2">Tecnologías destacadas</h4>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full">React</span>
              <span className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full">Django REST</span>
              <span className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full">PostgreSQL</span>
              <span className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full">Redux</span>
              <span className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full">Chart.js</span>
              <span className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full">WebSockets</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechHubProject;

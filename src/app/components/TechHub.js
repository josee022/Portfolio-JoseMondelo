import Image from "next/image";
import { FaGithub } from "react-icons/fa";

const TechHubProject = () => {
  return (
    <section className="py-16 text-white text-center">
      {/* Contenedor Principal */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-gray-900 p-12 rounded-xl shadow-lg max-w-[90%] mx-auto w-full">
        {/* Información del Proyecto */}
        <div className="flex-1 text-left space-y-6">
          <h3 className="text-4xl font-bold text-blue-400">TechHub</h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            Plataforma web avanzada para la gestión integral de dispositivos IoT, 
            que permite monitorizar, controlar y analizar en tiempo real todo tu 
            ecosistema de dispositivos conectados con análisis inteligente y 
            visualización de datos mediante gráficos interactivos.
          </p>

          {/* Tecnologías utilizadas con descripción */}
          <div className="bg-gray-800 p-4 rounded-lg text-sm text-gray-300 grid grid-cols-2 gap-3">
            <div>
              <span className="text-blue-400 font-bold">React + Vite:</span>{" "}
              Frontend rápido y optimizado.
            </div>
            <div>
              <span className="text-blue-400 font-bold">Django REST:</span>{" "}
              API robusta y escalable.
            </div>
            <div>
              <span className="text-blue-400 font-bold">PostgreSQL:</span>{" "}
              Base de datos relacional.
            </div>
            <div>
              <span className="text-blue-400 font-bold">TailwindCSS:</span>{" "}
              Diseño responsive y moderno.
            </div>
            <div>
              <span className="text-blue-400 font-bold">Material UI:</span>{" "}
              Componentes elegantes y funcionales.
            </div>
            <div>
              <span className="text-blue-400 font-bold">Chart.js:</span>{" "}
              Visualización de datos y estadísticas.
            </div>
            <div>
              <span className="text-blue-400 font-bold">Framer Motion:</span>{" "}
              Animaciones fluidas y profesionales.
            </div>
            <div>
              <span className="text-blue-400 font-bold">Cloudinary:</span>{" "}
              Gestión optimizada de imágenes.
            </div>
          </div>

          {/* Características principales */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="text-blue-400 font-bold mb-2">✨ Características principales</h4>
            <ul className="grid grid-cols-2 gap-2 text-sm text-gray-300">
              <li>• Gestión completa de dispositivos IoT</li>
              <li>• Sistema de autenticación seguro</li>
              <li>• Perfil de usuario personalizable</li>
              <li>• Activación/desactivación de dispositivos</li>
              <li>• Sistema de reseñas con puntuación</li>
              <li>• Informes y gráficos estadísticos</li>
              <li>• Filtros avanzados de búsqueda</li>
              <li>• Paginación optimizada</li>
            </ul>
          </div>

          {/* Credenciales de Prueba + Enlaces a GitHub */}
          <div className="flex flex-col md:flex-row items-start justify-between gap-6">
            {/* Credenciales */}
            <div className="bg-gray-800 p-4 rounded-lg w-fit text-left text-sm text-gray-300">
              <p className="text-blue-400 font-bold mb-1">
                🔑 Credenciales de Prueba
              </p>
              <p>
                <strong>Usuario:</strong> Prueba
              </p>
              <p>
                <strong>Contraseña:</strong> 123456
              </p>
            </div>

            {/* Enlaces de GitHub */}
            <div className="flex gap-4">
              <a
                href="https://github.com/josee022/TechHub_frontend"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 px-5 py-3 rounded-lg hover:bg-gray-700 transition font-bold"
              >
                <FaGithub /> Frontend
              </a>
              <a
                href="https://github.com/josee022/TechHub_backend"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 px-5 py-3 rounded-lg hover:bg-gray-700 transition font-bold"
              >
                <FaGithub /> Backend
              </a>
            </div>
          </div>
        </div>

        {/* Imagen del Proyecto con enlace */}
        <div className="flex-1 flex flex-col items-center">
          <a
            href="https://techhubjm.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative rounded-lg overflow-hidden shadow-md hover:opacity-90 transition w-full max-w-[700px]"
          >
            <Image
              src="/image/techub.png"
              alt="TechHub - Plataforma de gestión IoT"
              width={700}
              height={450}
              className="w-full h-auto rounded-lg"
            />
          </a>
          <p className="text-gray-400 text-sm mt-2">
            💡 Haz clic en la imagen para visitar el proyecto en vivo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechHubProject;

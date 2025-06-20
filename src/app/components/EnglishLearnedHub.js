import Image from "next/image";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaBrain,
  FaGlobe,
} from "react-icons/fa";

const EnglishLearnedHubProject = () => {
  return (
    <section className="py-16 text-white text-center" id="EnglishLearnedHub">
      {/* Contenedor Principal */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-gray-900 p-12 rounded-xl shadow-lg max-w-[90%] mx-auto w-full">
        {/* Información del Proyecto - COLUMNA IZQUIERDA */}
        <div className="flex-1 text-left space-y-6">
          <div className="flex items-center gap-3">
            <h3 className="text-4xl font-bold text-blue-400">
              EnglishLearnedHub
            </h3>
            <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full uppercase font-bold tracking-wider">
              React 19 + TypeScript
            </span>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">
            Plataforma web para aprender y reforzar inglés de forma lógica,
            interactiva y totalmente personalizada. Desarrollada para ofrecer
            una experiencia de usuario práctica, moderna y motivadora.
          </p>
          <div className="flex items-center gap-2 text-blue-400">
            <FaCheckCircle className="text-xl" />
            <p className="font-medium">
              Proyecto fullstack con enfoque en aprendizaje personalizado y
              gamificación
            </p>
          </div>

          {/* Tecnologías utilizadas con descripción */}
          <div className="bg-gray-800 p-4 rounded-lg text-sm text-gray-300 grid grid-cols-2 gap-3">
            <div>
              <span className="text-teal-400 font-bold">React 19 + Vite:</span>{" "}
              Frontend moderno, rápido y modular.
            </div>
            <div>
              <span className="text-teal-400 font-bold">TypeScript:</span>{" "}
              Tipado seguro y mantenible.
            </div>
            <div>
              <span className="text-teal-400 font-bold">TailwindCSS:</span>{" "}
              Diseño responsive y visual atractivo.
            </div>
            <div>
              <span className="text-teal-400 font-bold">React Router:</span>{" "}
              Navegación avanzada SPA.
            </div>
            <div>
              <span className="text-teal-400 font-bold">Zustand:</span> Gestión
              de estado global.
            </div>
            <div>
              <span className="text-teal-400 font-bold">React Query:</span>{" "}
              Manejo eficiente de datos remotos.
            </div>
            <div>
              <span className="text-teal-400 font-bold">
                Firebase Auth + Firestore:
              </span>{" "}
              Backend seguro y escalable.
            </div>
            <div>
              <span className="text-teal-400 font-bold">WordsAPI:</span>{" "}
              Potenciador de vocabulario y traducciones.
            </div>
            <div>
              <span className="text-teal-400 font-bold">Node.js:</span>{" "}
              Herramientas y scripts de soporte.
            </div>
          </div>

          {/* Características principales */}
          <div className="bg-gray-800 p-4 rounded-lg mt-4">
            <h4 className="text-teal-400 font-bold mb-2 flex items-center gap-2">
              ✨ Características destacadas
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm text-gray-300">
              <li className="flex items-start gap-1">
                <span className="text-teal-400 font-bold">•</span> Dashboard con
                estadísticas y evolución del aprendizaje
              </li>
              <li className="flex items-start gap-1">
                <span className="text-teal-400 font-bold">•</span> Gestor de
                vocabulario inteligente: carpetas, traducciones, ejemplos, notas
              </li>
              <li className="flex items-start gap-1">
                <span className="text-teal-400 font-bold">•</span> Flashcards
                personalizables y sistema de dificultad progresiva
              </li>
              <li className="flex items-start gap-1">
                <span className="text-teal-400 font-bold">•</span> Explorador
                WordsAPI: traducciones, sinónimos, pronunciación, contexto
              </li>
              <li className="flex items-start gap-1">
                <span className="text-teal-400 font-bold">•</span> Zona de
                gramática interactiva y consejos útiles
              </li>
              <li className="flex items-start gap-1">
                <span className="text-teal-400 font-bold">•</span> Juegos
                interactivos con vocabulario propio
              </li>
              <li className="flex items-start gap-1">
                <span className="text-teal-400 font-bold">•</span> Perfil de
                usuario: progreso, seguridad y personalización
              </li>
            </ul>
          </div>

          {/* Logros y habilidades demostradas */}
          <div className="bg-gradient-to-r from-teal-900 to-blue-800 p-4 rounded-lg mt-4">
            <h4 className="text-white font-bold mb-2 flex items-center gap-2">
              <FaBrain /> Competencias técnicas demostradas
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm text-gray-200">
              <li className="flex items-start gap-1">
                <span className="text-yellow-400 font-bold">→</span> Desarrollo
                fullstack completo
              </li>
              <li className="flex items-start gap-1">
                <span className="text-yellow-400 font-bold">→</span> Integración
                de APIs externas
              </li>
              <li className="flex items-start gap-1">
                <span className="text-yellow-400 font-bold">→</span> Seguridad y
                autenticación avanzada
              </li>
              <li className="flex items-start gap-1">
                <span className="text-yellow-400 font-bold">→</span> Experiencia
                de usuario y gamificación
              </li>
              <li className="flex items-start gap-1">
                <span className="text-yellow-400 font-bold">→</span> Gestión
                eficiente del estado y datos
              </li>
              <li className="flex items-start gap-1">
                <span className="text-yellow-400 font-bold">→</span> Despliegue
                y mantenimiento en producción
              </li>
            </ul>
          </div>


        </div>

        {/* Imagen del Proyecto con enlace - COLUMNA DERECHA */}
        <div className="flex-1 flex flex-col items-center">
          <a
            href="https://english-learned-hub.web.app"
            target="_blank"
            rel="noopener noreferrer"
            className="relative rounded-lg overflow-hidden shadow-md hover:opacity-90 transition w-full max-w-[500px]"
          >
            <Image
              src="/image/englishProyecto.png"
              alt="EnglishLearnedHub - Mockup"
              width={500}
              height={350}
              className="w-full h-auto rounded-lg"
              style={{ objectFit: "cover" }}
            />
          </a>
          <div className="flex flex-col gap-2 mt-2">
            <p className="text-gray-400 text-sm">
              💡 Haz clic en la imagen para visitar el proyecto en vivo.
            </p>
            <div className="flex flex-col gap-1">
              <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-medium inline-block w-fit mx-auto">
                Ideal para EdTech, e-learning, frontend
              </span>
              <span className="text-blue-400 text-xs flex items-center justify-center gap-1 mt-1">
                <FaCheckCircle className="text-xs" /> Plataforma de aprendizaje
                de inglés personalizada
              </span>
            </div>
          </div>

          {/* Enlaces y Credenciales */}
          <div className="bg-gray-800 p-4 rounded-lg mt-4 w-full">
            <h4 className="text-blue-400 font-bold mb-3">
              Enlaces del proyecto
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://github.com/josee022/englishlearnedhub"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-700 px-5 py-3 rounded-lg hover:bg-gray-600 transition font-bold w-full justify-center"
              >
                <FaGithub /> Ver código fuente
              </a>
              <a
                href="https://english-learned-hub.web.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-700 px-5 py-3 rounded-lg hover:bg-blue-600 transition font-bold w-full justify-center"
              >
                <FaGlobe className="text-xl" /> Visitar sitio web
              </a>
            </div>
            {/* Credenciales de Prueba */}
            <div className="bg-gray-700 p-3 rounded-lg mt-4 text-sm text-gray-200">
              <h4 className="text-blue-400 font-bold mb-2 flex items-center gap-2">🔑 Credenciales de Prueba</h4>
              <div className="flex flex-col gap-1 mb-1">
                <span><strong>Email:</strong> prueba@gmail.com</span>
                <span><strong>Contraseña:</strong> 123456</span>
              </div>
            </div>
          </div>

          {/* Tecnologías destacadas */}
          <div className="bg-gray-800 p-4 rounded-lg mt-4 w-full">
            <h4 className="text-blue-400 font-bold mb-2">
              Tecnologías destacadas
            </h4>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full">
                React 19
              </span>
              <span className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full">
                Vite
              </span>
              <span className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full">
                TypeScript
              </span>
              <span className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full">
                TailwindCSS
              </span>
              <span className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full">
                React Router
              </span>
              <span className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full">
                Zustand
              </span>
              <span className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full">
                React Query
              </span>
              <span className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full">
                Firebase Auth
              </span>
              <span className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full">
                Firestore
              </span>
              <span className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full">
                WordsAPI
              </span>
              <span className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full">
                Node.js
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnglishLearnedHubProject;

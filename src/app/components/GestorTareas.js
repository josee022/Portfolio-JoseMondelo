import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaCode, FaCheckCircle, FaBrain, FaGlobe } from "react-icons/fa";

const TaskManagerProject = () => {
  return (
    <section className="py-16 text-white text-center">
      {/* Contenedor Principal */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-gray-900 p-12 rounded-xl shadow-lg max-w-[90%] mx-auto w-full">
        {/* Información del Proyecto - COLUMNA IZQUIERDA */}
        <div className="flex-1 text-left space-y-6">
          <div className="flex items-center gap-3">
            <h3 className="text-4xl font-bold text-blue-400">Gestor de Tareas</h3>
            <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full uppercase font-bold tracking-wider">React + Laravel</span>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">
            Aplicación web completa para la organización y gestión profesional de tareas con múltiples herramientas:
            creación, edición, eliminación, asignación de fechas, estados
            personalizados, etiquetas, carpetas y un calendario interactivo. Diseñada con enfoque en la productividad empresarial.
          </p>
          <div className="flex items-center gap-2 text-green-400">
            <FaCheckCircle className="text-xl" />
            <p className="font-medium">Solución completa con arquitectura frontend-backend separada</p>
          </div>

          {/* Tecnologías utilizadas con descripción */}
          <div className="bg-gray-800 p-4 rounded-lg text-sm text-gray-300 grid grid-cols-2 gap-3">
            <div>
              <span className="text-purple-400 font-bold">React:</span> Interfaz
              dinámica con hooks avanzados.
            </div>
            <div>
              <span className="text-purple-400 font-bold">Laravel:</span> Backend
              robusto con autenticación Sanctum.
            </div>
            <div>
              <span className="text-purple-400 font-bold">TailwindCSS:</span>{" "}
              UI responsive con diseño personalizado.
            </div>
            <div>
              <span className="text-purple-400 font-bold">PostgreSQL:</span> Base
              de datos optimizada con relaciones.
            </div>
            <div>
              <span className="text-purple-400 font-bold">Vercel:</span> CI/CD
              automatizado para el frontend.
            </div>
            <div>
              <span className="text-purple-400 font-bold">Railway:</span> Despliegue
              escalable de backend y BD.
            </div>
            <div>
              <span className="text-purple-400 font-bold">API REST:</span>{" "}
              Endpoints seguros y optimizados.
            </div>
            <div>
              <span className="text-purple-400 font-bold">JWT:</span>{" "}
              Autenticación segura entre servicios.
            </div>
          </div>

          {/* Características principales */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="text-purple-400 font-bold mb-2 flex items-center gap-2">✨ Características destacadas</h4>
            <ul className="grid grid-cols-2 gap-2 text-sm text-gray-300">
              <li className="flex items-start gap-1"><span className="text-purple-400 font-bold">•</span> Sistema de etiquetas personalizable</li>
              <li className="flex items-start gap-1"><span className="text-purple-400 font-bold">•</span> Calendario interactivo con arrastrar y soltar</li>
              <li className="flex items-start gap-1"><span className="text-purple-400 font-bold">•</span> Filtros avanzados por estado y prioridad</li>
              <li className="flex items-start gap-1"><span className="text-purple-400 font-bold">•</span> Notificaciones y recordatorios</li>
              <li className="flex items-start gap-1"><span className="text-purple-400 font-bold">•</span> Organización por carpetas y proyectos</li>
              <li className="flex items-start gap-1"><span className="text-purple-400 font-bold">•</span> Estadísticas de productividad</li>
              <li className="flex items-start gap-1"><span className="text-purple-400 font-bold">•</span> Modo oscuro/claro adaptable</li>
              <li className="flex items-start gap-1"><span className="text-purple-400 font-bold">•</span> Experiencia de usuario optimizada</li>
            </ul>
          </div>

          {/* Logros y habilidades demostradas */}
          <div className="bg-gradient-to-r from-purple-900 to-indigo-800 p-4 rounded-lg">
            <h4 className="text-white font-bold mb-2 flex items-center gap-2">
              <FaBrain /> Competencias técnicas demostradas
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm text-gray-200">
              <li className="flex items-start gap-1"><span className="text-yellow-400 font-bold">→</span> Arquitectura MVC completa</li>
              <li className="flex items-start gap-1"><span className="text-yellow-400 font-bold">→</span> Gestión de estado con React</li>
              <li className="flex items-start gap-1"><span className="text-yellow-400 font-bold">→</span> Diseño de API RESTful</li>
              <li className="flex items-start gap-1"><span className="text-yellow-400 font-bold">→</span> Seguridad y autenticación</li>
              <li className="flex items-start gap-1"><span className="text-yellow-400 font-bold">→</span> Diseño responsive avanzado</li>
              <li className="flex items-start gap-1"><span className="text-yellow-400 font-bold">→</span> Despliegue en múltiples plataformas</li>
            </ul>
          </div>
        </div>

        {/* Imagen del Proyecto con enlace - COLUMNA DERECHA */}
        <div className="flex-1 flex flex-col items-center">
          <a
            href="https://gestor-tareas-beige.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative rounded-lg overflow-hidden shadow-md hover:opacity-90 transition w-full max-w-[700px]"
          >
            <Image
              src="/image/gestorTareas.png"
              alt="Gestor de Tareas"
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
              <span className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full font-medium inline-block w-fit mx-auto">Ideal para roles de desarrollo web</span>
              <span className="text-green-400 text-xs flex items-center justify-center gap-1 mt-1">
                <FaCheckCircle className="text-xs" /> Arquitectura frontend-backend separada
              </span>
            </div>
          </div>

          {/* Credenciales y Enlaces */}
          <div className="bg-gray-800 p-4 rounded-lg mt-4 w-full">
            <h4 className="text-purple-400 font-bold mb-2">🔑 Credenciales de Prueba</h4>
            <div className="flex flex-col gap-1 mb-3 text-sm text-gray-300">
              <p>
                <strong>Usuario:</strong> pruebas@gmail.com
              </p>
              <p>
                <strong>Contraseña:</strong> 12345678
              </p>
            </div>
            
            <h4 className="text-purple-400 font-bold mb-3">Enlaces del proyecto</h4>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <a
                  href="https://github.com/josee022/gestor-tareas-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-700 px-5 py-3 rounded-lg hover:bg-gray-600 transition font-bold flex-1 justify-center"
                >
                  <FaGithub /> Frontend
                </a>
                <a
                  href="https://github.com/josee022/gestor-tareas-backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-700 px-5 py-3 rounded-lg hover:bg-gray-600 transition font-bold flex-1 justify-center"
                >
                  <FaGithub /> Backend
                </a>
              </div>
              <a
                href="https://gestor-tareas-beige.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-purple-700 px-5 py-3 rounded-lg hover:bg-purple-600 transition font-bold w-full justify-center"
              >
                <FaGlobe className="text-xl" /> Visitar sitio web
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskManagerProject;

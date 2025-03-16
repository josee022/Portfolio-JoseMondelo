import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const TaskManagerProject = () => {
  return (
    <section className="py-16 text-white text-center">
      {/* Contenedor Principal */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-gray-900 p-12 rounded-xl shadow-lg max-w-[90%] mx-auto w-full">
        {/* Información del Proyecto */}
        <div className="flex-1 text-left space-y-6">
          <h3 className="text-4xl font-bold text-blue-400">Gestor de Tareas</h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            Plataforma web para organizar tareas con múltiples herramientas:
            creación, edición, eliminación, asignación de fechas, estados
            personalizados, etiquetas, carpetas y un calendario interactivo.
          </p>

          {/* Tecnologías utilizadas con descripción */}
          <div className="bg-gray-800 p-4 rounded-lg text-sm text-gray-300 grid grid-cols-2 gap-3">
            <div>
              <span className="text-blue-400 font-bold">React:</span> Interfaz
              dinámica y reactiva.
            </div>
            <div>
              <span className="text-blue-400 font-bold">Laravel:</span> Backend
              robusto y seguro.
            </div>
            <div>
              <span className="text-blue-400 font-bold">TailwindCSS:</span>{" "}
              Estilizado rápido y responsive.
            </div>
            <div>
              <span className="text-blue-400 font-bold">PostgreSQL:</span> Base
              de datos relacional.
            </div>
            <div>
              <span className="text-blue-400 font-bold">Vercel:</span> Hosting
              del frontend.
            </div>
            <div>
              <span className="text-blue-400 font-bold">Railway:</span> Hosting
              del backend y la BD.
            </div>
            <div>
              <span className="text-blue-400 font-bold">API REST:</span>{" "}
              Comunicación entre frontend y backend.
            </div>
          </div>

          {/* Credenciales de Prueba + Enlaces a GitHub */}
          <div className="flex flex-col md:flex-row items-start justify-between gap-6">
            {/* Credenciales */}
            <div className="bg-gray-800 p-4 rounded-lg w-fit text-left text-sm text-gray-300">
              <p className="text-blue-400 font-bold mb-1">
                🔑 Credenciales de Prueba
              </p>
              <p>
                <strong>Usuario:</strong> prueba@gmail.com
              </p>
              <p>
                <strong>Contraseña:</strong> 12345678
              </p>
            </div>

            {/* Enlaces de GitHub */}
            <div className="flex gap-4">
              <a
                href="https://github.com/josee022/gestor-tareas-frontend"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 px-5 py-3 rounded-lg hover:bg-gray-700 transition font-bold"
              >
                <FaGithub /> Frontend
              </a>
              <a
                href="https://github.com/josee022/gestor-tareas-backend"
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
          <p className="text-gray-400 text-sm mt-2">
            💡 Haz clic en la imagen para visitar el proyecto en vivo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TaskManagerProject;

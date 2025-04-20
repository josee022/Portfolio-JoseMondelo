import Image from "next/image";
import { FaGithub, FaStar, FaFilm, FaCode, FaGlobe } from "react-icons/fa";
import { MdNewReleases } from "react-icons/md";

const CineFinderProject = () => {
  return (
    <section className="py-16 text-white text-center">
      {/* Contenedor Principal */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-gray-900 p-12 rounded-xl shadow-lg max-w-[90%] mx-auto w-full">
        {/* Información del Proyecto - COLUMNA IZQUIERDA */}
        <div className="flex-1 text-left space-y-6">
          <div className="flex items-center gap-3">
            <h3 className="text-4xl font-bold text-blue-400">CineFinder</h3>
            <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full uppercase font-bold tracking-wider flex items-center gap-1">
              <MdNewReleases className="text-xs" /> Nuevo
            </span>
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full uppercase font-bold tracking-wider">Angular 19</span>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">
            Plataforma completa de cine con diseño premium donde podrás descubrir y explorar películas, series, actores, directores y guionistas. 
            Navega por detalles exhaustivos de producciones, colecciones de sagas, temporadas de series, reparto completo, trailers oficiales, 
            plataformas de streaming disponibles y reseñas profesionales con una interfaz moderna, intuitiva y totalmente responsive.
          </p>
          <div className="flex items-center gap-2 text-yellow-400">
            <FaStar className="text-xl" />
            <p className="font-medium">Proyecto destacado desarrollado con Angular 19 y las últimas tecnologías frontend</p>
          </div>

          {/* Tecnologías utilizadas con descripción */}
          <div className="bg-gray-800 p-4 rounded-lg text-sm text-gray-300 grid grid-cols-2 gap-3">
            <div>
              <span className="text-red-400 font-bold">Angular 19:</span>{" "}
              Framework frontend de última generación.
            </div>
            <div>
              <span className="text-red-400 font-bold">Angular CLI:</span>{" "}
              Herramientas de desarrollo y optimización.
            </div>
            <div>
              <span className="text-red-400 font-bold">TheMovieDB API:</span>{" "}
              Integración REST API profesional.
            </div>
            <div>
              <span className="text-red-400 font-bold">Material UI:</span>{" "}
              Sistema de componentes avanzados con accesibilidad.
            </div>
            <div>
              <span className="text-red-400 font-bold">SCSS:</span>{" "}
              Preprocesador CSS con arquitectura modular.
            </div>
            <div>
              <span className="text-red-400 font-bold">Framer Motion:</span>{" "}
              Biblioteca de animaciones de alto rendimiento.
            </div>
            <div>
              <span className="text-red-400 font-bold">i18n:</span>{" "}
              Sistema de internacionalización multi-idioma.
            </div>
            <div>
              <span className="text-red-400 font-bold">RxJS:</span>{" "}
              Programación reactiva para flujos de datos asíncronos.
            </div>
            <div>
              <span className="text-red-400 font-bold">Angular Signals:</span>{" "}
              Gestión de estado moderna y eficiente.
            </div>
            <div>
              <span className="text-red-400 font-bold">Lazy Loading:</span>{" "}
              Carga optimizada de módulos bajo demanda.
            </div>
            <div>
              <span className="text-red-400 font-bold">PWA:</span>{" "}
              Funcionalidades de aplicación progresiva.
            </div>
            <div>
              <span className="text-red-400 font-bold">Netlify CI/CD:</span>{" "}
              Despliegue continuo automatizado.
            </div>
          </div>

          {/* Características principales */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="text-red-400 font-bold mb-2 flex items-center gap-2">
              <FaFilm className="text-lg" /> Características destacadas
              <span className="text-xs bg-red-600 px-2 py-1 rounded-full ml-2">Proyecto Premium</span>
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm text-gray-300">
              <li className="flex items-start gap-1"><span className="text-red-400 font-bold">•</span> Motor de búsqueda avanzado con autocompletado</li>
              <li className="flex items-start gap-1"><span className="text-red-400 font-bold">•</span> Sistema multi-idioma con detección automática</li>
              <li className="flex items-start gap-1"><span className="text-red-400 font-bold">•</span> Fichas detalladas de películas y series</li>
              <li className="flex items-start gap-1"><span className="text-red-400 font-bold">•</span> Exploración de colecciones y sagas completas</li>
              <li className="flex items-start gap-1"><span className="text-red-400 font-bold">•</span> Navegación por temporadas y episodios</li>
              <li className="flex items-start gap-1"><span className="text-red-400 font-bold">•</span> Perfiles completos de actores y equipo técnico</li>
              <li className="flex items-start gap-1"><span className="text-red-400 font-bold">•</span> Reproducción integrada de trailers oficiales</li>
              <li className="flex items-start gap-1"><span className="text-red-400 font-bold">•</span> Información de disponibilidad en plataformas</li>
              <li className="flex items-start gap-1"><span className="text-red-400 font-bold">•</span> Sistema de valoraciones y reseñas</li>
              <li className="flex items-start gap-1"><span className="text-red-400 font-bold">•</span> Filtros dinámicos por género, año, valoración</li>
              <li className="flex items-start gap-1"><span className="text-red-400 font-bold">•</span> Filmografía completa con cronología</li>
              <li className="flex items-start gap-1"><span className="text-red-400 font-bold">•</span> Interfaz responsive optimizada para todos los dispositivos</li>
            </ul>
          </div>

          {/* Logros y habilidades demostradas */}
          <div className="bg-gradient-to-r from-red-900 to-red-800 p-4 rounded-lg">
            <h4 className="text-white font-bold mb-2 flex items-center gap-2">
              <FaCode /> Competencias técnicas destacadas
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm text-gray-200">
              <li className="flex items-start gap-1"><span className="text-yellow-400 font-bold">→</span> Desarrollo Angular de última generación</li>
              <li className="flex items-start gap-1"><span className="text-yellow-400 font-bold">→</span> Arquitectura modular escalable</li>
              <li className="flex items-start gap-1"><span className="text-yellow-400 font-bold">→</span> Integración avanzada de APIs externas</li>
              <li className="flex items-start gap-1"><span className="text-yellow-400 font-bold">→</span> Optimización de rendimiento frontend</li>
              <li className="flex items-start gap-1"><span className="text-yellow-400 font-bold">→</span> Diseño UI/UX profesional</li>
              <li className="flex items-start gap-1"><span className="text-yellow-400 font-bold">→</span> Implementación de animaciones avanzadas</li>
              <li className="flex items-start gap-1"><span className="text-yellow-400 font-bold">→</span> Gestión de estado con Signals y RxJS</li>
              <li className="flex items-start gap-1"><span className="text-yellow-400 font-bold">→</span> Internacionalización multi-idioma</li>
            </ul>
          </div>
        </div>

        {/* Imagen del Proyecto con enlace - COLUMNA DERECHA */}
        <div className="flex-1 flex flex-col items-center">
          <a
            href="https://cinefinderweb.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="relative rounded-lg overflow-hidden shadow-md hover:opacity-90 transition w-full max-w-[700px]"
          >
            <Image
              src="/image/cinefinder.png"
              alt="CineFinder - Plataforma de cine"
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
              <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full font-medium inline-block w-fit mx-auto">Proyecto destacado para roles de Angular/Frontend</span>
              <span className="text-yellow-400 text-xs flex items-center justify-center gap-1 mt-1">
                <FaGlobe className="text-xs" /> Desarrollado con las últimas tecnologías del mercado
              </span>
            </div>
          </div>

          {/* Enlaces de GitHub */}
          <div className="bg-gray-800 p-4 rounded-lg mt-4 w-full">
            <h4 className="text-red-400 font-bold mb-3">Enlaces del proyecto</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://github.com/josee022/CineFinder"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-700 px-5 py-3 rounded-lg hover:bg-gray-600 transition font-bold w-full justify-center"
              >
                <FaGithub className="text-xl" /> Ver código en GitHub
              </a>
              <a
                href="https://cinefinderweb.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-red-700 px-5 py-3 rounded-lg hover:bg-red-600 transition font-bold w-full justify-center"
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

export default CineFinderProject;

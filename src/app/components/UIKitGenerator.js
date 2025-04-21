import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaCode, FaCheckCircle, FaBrain, FaGlobe } from "react-icons/fa";

const UIKitGeneratorProject = () => {
  return (
    <section className="py-16 text-white text-center">
      {/* Contenedor Principal */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-gray-900 p-12 rounded-xl shadow-lg max-w-[90%] mx-auto w-full">
        {/* Información del Proyecto - COLUMNA IZQUIERDA */}
        <div className="flex-1 text-left space-y-6">
          <div className="flex items-center gap-3">
            <h3 className="text-4xl font-bold text-blue-400">UI Kit Generator</h3>
            <span className="bg-teal-600 text-white text-xs px-2 py-1 rounded-full uppercase font-bold tracking-wider">Next.js + TailwindCSS</span>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">
            Herramienta avanzada para la generación de componentes UI personalizados y sistemas de diseño completos.
            Permite a los desarrolladores crear, personalizar y exportar componentes React con TailwindCSS
            de forma rápida y sencilla, acelerando el desarrollo frontend y manteniendo la consistencia visual.
          </p>
          <div className="flex items-center gap-2 text-teal-400">
            <FaCheckCircle className="text-xl" />
            <p className="font-medium">Solución innovadora para equipos de desarrollo frontend</p>
          </div>

          {/* Tecnologías utilizadas con descripción */}
          <div className="bg-gray-800 p-4 rounded-lg text-sm text-gray-300 grid grid-cols-2 gap-3">
            <div>
              <span className="text-teal-400 font-bold">Next.js:</span> Framework
              React con SSR y optimizaciones.
            </div>
            <div>
              <span className="text-teal-400 font-bold">TailwindCSS:</span>{" "}
              Sistema de utilidades CSS avanzado.
            </div>
            <div>
              <span className="text-teal-400 font-bold">React DnD:</span>{" "}
              Funcionalidad de arrastrar y soltar.
            </div>
            <div>
              <span className="text-teal-400 font-bold">Zustand:</span> Gestión
              de estado minimalista.
            </div>
            <div>
              <span className="text-teal-400 font-bold">Framer Motion:</span>{" "}
              Animaciones fluidas y profesionales.
            </div>
            <div>
              <span className="text-teal-400 font-bold">Vercel:</span> Despliegue
              continuo y optimizado.
            </div>
            <div>
              <span className="text-teal-400 font-bold">Prism.js:</span>{" "}
              Resaltado de sintaxis de código.
            </div>
            <div>
              <span className="text-teal-400 font-bold">Radix UI:</span>{" "}
              Componentes accesibles y primitivos.
            </div>
          </div>

          {/* Características principales */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="text-teal-400 font-bold mb-2 flex items-center gap-2">✨ Características destacadas</h4>
            <ul className="grid grid-cols-2 gap-2 text-sm text-gray-300">
              <li className="flex items-start gap-1"><span className="text-teal-400 font-bold">•</span> Generación de componentes con arrastrar y soltar</li>
              <li className="flex items-start gap-1"><span className="text-teal-400 font-bold">•</span> Exportación de código React + TailwindCSS</li>
              <li className="flex items-start gap-1"><span className="text-teal-400 font-bold">•</span> Previsualización en tiempo real</li>
              <li className="flex items-start gap-1"><span className="text-teal-400 font-bold">•</span> Personalización de estilos y propiedades</li>
              <li className="flex items-start gap-1"><span className="text-teal-400 font-bold">•</span> Biblioteca de componentes predefinidos</li>
              <li className="flex items-start gap-1"><span className="text-teal-400 font-bold">•</span> Gestión de temas y variables de diseño</li>
              <li className="flex items-start gap-1"><span className="text-teal-400 font-bold">•</span> Guardado y recuperación de proyectos</li>
              <li className="flex items-start gap-1"><span className="text-teal-400 font-bold">•</span> Optimización para dispositivos móviles</li>
            </ul>
          </div>

          {/* Logros y habilidades demostradas */}
          <div className="bg-gradient-to-r from-teal-900 to-blue-800 p-4 rounded-lg">
            <h4 className="text-white font-bold mb-2 flex items-center gap-2">
              <FaBrain /> Competencias técnicas demostradas
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm text-gray-200">
              <li className="flex items-start gap-1"><span className="text-yellow-400 font-bold">→</span> Arquitectura de aplicaciones complejas</li>
              <li className="flex items-start gap-1"><span className="text-yellow-400 font-bold">→</span> Diseño de interfaces avanzadas</li>
              <li className="flex items-start gap-1"><span className="text-yellow-400 font-bold">→</span> Optimización de rendimiento</li>
              <li className="flex items-start gap-1"><span className="text-yellow-400 font-bold">→</span> Implementación de arrastrar y soltar</li>
              <li className="flex items-start gap-1"><span className="text-yellow-400 font-bold">→</span> Gestión de estado complejo</li>
              <li className="flex items-start gap-1"><span className="text-yellow-400 font-bold">→</span> Generación de código dinámico</li>
            </ul>
          </div>
        </div>

        {/* Imagen del Proyecto con enlace - COLUMNA DERECHA */}
        <div className="flex-1 flex flex-col items-center">
          <a
            href="https://ui-kit-generator.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative rounded-lg overflow-hidden shadow-md hover:opacity-90 transition w-full max-w-[700px]"
          >
            <Image
              src="/image/uikitgenerator.png"
              alt="UI Kit Generator"
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
              <span className="bg-teal-600 text-white text-xs px-3 py-1 rounded-full font-medium inline-block w-fit mx-auto">Ideal para roles de desarrollo frontend</span>
              <span className="text-teal-400 text-xs flex items-center justify-center gap-1 mt-1">
                <FaCheckCircle className="text-xs" /> Generador de componentes UI con Next.js
              </span>
            </div>
          </div>

          {/* Enlaces */}
          <div className="bg-gray-800 p-4 rounded-lg mt-4 w-full">
            <h4 className="text-teal-400 font-bold mb-3">Enlaces del proyecto</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://github.com/josee022/UI-Kit-Generator"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-700 px-5 py-3 rounded-lg hover:bg-gray-600 transition font-bold w-full justify-center"
              >
                <FaGithub /> Ver código fuente
              </a>
              <a
                href="https://ui-kit-generator.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-teal-700 px-5 py-3 rounded-lg hover:bg-teal-600 transition font-bold w-full justify-center"
              >
                <FaGlobe className="text-xl" /> Visitar sitio web
              </a>
            </div>
          </div>

          {/* Tecnologías destacadas */}
          <div className="bg-gray-800 p-4 rounded-lg mt-4 w-full">
            <h4 className="text-teal-400 font-bold mb-2">Tecnologías destacadas</h4>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full">Next.js</span>
              <span className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full">TailwindCSS</span>
              <span className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full">React DnD</span>
              <span className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full">Zustand</span>
              <span className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full">Framer Motion</span>
              <span className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full">Vercel</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UIKitGeneratorProject;

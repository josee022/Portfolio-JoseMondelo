import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const UIkitGeneratorProject = () => {
  return (
    <section className="py-16 text-white text-center">
      {/* Contenedor Principal */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-gray-900 p-12 rounded-xl shadow-lg max-w-[90%] mx-auto w-full">
        {/* Información del Proyecto */}
        <div className="flex-1 text-left space-y-6">
          <h3 className="text-4xl font-bold text-blue-400">UI Kit Generator</h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            Plataforma web para generar componentes UI con diseños
            profesionales. Incluye herramientas para crear botones, backgrounds,
            paletas de colores, tipografías, tarjetas (cards), modales y
            tooltips, con vistas previas y opciones de copia rápida.
          </p>

          {/* Tecnologías utilizadas con descripción */}
          <div className="bg-gray-800 p-4 rounded-lg text-sm text-gray-300 grid grid-cols-2 gap-3">
            <div>
              <span className="text-blue-400 font-bold">Next.js:</span>{" "}
              Framework para un frontend rápido y dinámico.
            </div>
            <div>
              <span className="text-blue-400 font-bold">TailwindCSS:</span>{" "}
              Diseño moderno y responsive.
            </div>
            <div>
              <span className="text-blue-400 font-bold">Shadcn:</span>{" "}
              Componentes UI listos para usar.
            </div>
            <div>
              <span className="text-blue-400 font-bold">Vanta.js:</span>{" "}
              Animaciones visuales interactivas.
            </div>
            <div>
              <span className="text-blue-400 font-bold">Google Fonts API:</span>{" "}
              Carga de tipografías personalizadas.
            </div>
            <div>
              <span className="text-blue-400 font-bold">React Icons:</span>{" "}
              Iconografía moderna.
            </div>
            <div>
              <span className="text-blue-400 font-bold">ReactHotToast:</span>{" "}
              Notificaciones elegantes.
            </div>
            <div>
              <span className="text-blue-400 font-bold">Vercel:</span> Hosting
              rápido y optimizado.
            </div>
          </div>

          {/* Enlaces a GitHub y al Proyecto en Vivo */}
          <div className="flex gap-4">
            <a
              href="https://github.com/josee022/UI-Kit-Generator"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-800 px-5 py-3 rounded-lg hover:bg-gray-700 transition font-bold"
            >
              <FaGithub /> Repositorio
            </a>
          </div>
        </div>

        {/* Imagen del Proyecto con enlace */}
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
          <p className="text-gray-400 text-sm mt-2">
            💡 Haz clic en la imagen para visitar el proyecto en vivo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UIkitGeneratorProject;

"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SobreMiPersonal() {
  return (
    <section id="sobre-mi-personal" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.h2
          className="text-5xl font-bold text-blue-400 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Sobre Mí (Vida Personal) 🌍
        </motion.h2>
        <motion.p
          className="text-lg text-gray-300 max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          No todo es código en mi vida. Me encanta mantener un estilo de vida
          activo, viajar, conocer nuevas experiencias y seguir creciendo tanto
          física como mentalmente.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card
            img="/image/gym.jpg"
            title="🏋️‍♂️ Fitness & Disciplina"
            description="Entreno de lunes a sábado combinando fuerza y cardio. Cuidar mi salud es clave."
            customClass="object-[0px_-100px]"
          />

          <Card
            img="/image/tenerife.jpg"
            title="🌍 Explorando el Mundo"
            description="Viajar me abre la mente y me permite conocer nuevas culturas. Siempre busco una próxima aventura."
          />

          <Card
            img="/image/concierto.jpg"
            title="🎶 Música & Motivación"
            description="La música es parte de mi vida. Desde sonidos relajantes para concentrarme hasta festivales en vivo."
          />

          <Card
            img="/image/amigos.jpg"
            title="🤝 Amigos & Conexiones"
            description="Valoro el tiempo con amigos, compartiendo experiencias y aprendiendo de cada uno de ellos."
          />

          <Card
            img="/image/naturaleza.jpg"
            title="🌅 Disfrutar la Naturaleza"
            description="Paseos por la playa y rutas de senderismo para conectar conmigo mismo."
          />

          <Card
            img="/image/familia.jpg"
            title="👨‍👩‍👦 Mi Familia"
            description="Siempre presente, brindándome apoyo en cada paso. Valores y aprendizaje constante."
          />

          <Card
            img="/image/tituloDAW.jpg"
            title="📚 Aprendizaje Continuo"
            description="Estudio inglés, leo libros y busco mejorar cada día en el mundo del desarrollo y más allá."
          />

          <Card
            img="/image/prog.jpg"
            title="💻 Tecnología e Innovación"
            description="Siempre explorando nuevas
                        herramientas, frameworks y tendencias para poder ofrecer soluciones
                        innovadoras y eficientes."
          />
        </div>
      </div>
    </section>
  );
}

const Card = ({ img, title, description, customClass = "" }) => (
  <motion.div
    className="bg-gray-900 p-5 rounded-xl shadow-lg flex flex-col items-center"
    whileHover={{ scale: 1.05 }}
  >
    <Image
      src={img}
      alt={title}
      width={300}
      height={200}
      className={`rounded-lg object-cover w-full h-56 ${customClass}`}
    />
    <h3 className="text-xl font-semibold text-blue-300 mt-3">{title}</h3>
    <p className="text-gray-300 mt-1 text-sm text-center">{description}</p>
  </motion.div>
);

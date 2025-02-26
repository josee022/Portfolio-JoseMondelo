"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contacto() {
  const neonEffect =
    "shadow-lg shadow-blue-400 hover:shadow-blue-600 transition duration-300";

  const frases = [
    "💡 La innovación distingue a los líderes de los seguidores.",
    "💻 El mejor modo de predecir el futuro es inventarlo.",
    "🚀 Nunca pares de aprender. La tecnología nunca deja de evolucionar.",
    "🎯 Si puedes imaginarlo, puedes programarlo.",
    "🔥 No te preocupes por el fracaso, preocúpate por las oportunidades que pierdes al no intentarlo.",
    "🎨 La simplicidad es la máxima sofisticación.",
    "🔍 La perfección no se alcanza cuando no hay nada más que agregar, sino cuando no hay nada más que quitar.",
    "⚡ Hazlo simple, pero significativo.",
    "🛠️ Un buen programador es alguien que mira en ambas direcciones antes de cruzar una calle de un solo sentido.",
    "🏗️ Construye cosas que importen.",
    "⏳ Las mejores cosas llevan tiempo. Sé paciente y sigue mejorando.",
    "🌍 El código es la nueva tinta con la que se escribe el futuro.",
    "🧠 No es la tecnología lo que importa, sino cómo la usamos.",
    "🛠️ Si el código funciona, no lo toques... hasta que sepas cómo mejorarlo.",
    "🌟 El mayor riesgo es no tomar ninguno.",
  ];

  const [fraseActual, setFraseActual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setFraseActual((prev) => (prev + 1) % frases.length);
    }, 5000);

    return () => clearInterval(intervalo);
  }, [frases.length]);

  return (
    <section id="contacto" className="py-20 bg-transparent text-white">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.h2
          className="text-4xl font-extrabold text-blue-400 mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          📬 ¿A QUÉ ESPERAS? ¡PONTE EN CONTACTO CONMIGO YA!
        </motion.h2>

        <motion.div
          className="bg-gray-800 p-16 rounded-xl shadow-2xl max-w-5xl mx-auto flex flex-col gap-8 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gray-900 p-8 rounded-lg shadow-md text-2xl">
            <h3 className="text-4xl font-extrabold text-blue-400 uppercase tracking-wide mb-6">
              INFORMACIÓN RÁPIDA
            </h3>
            <p className="flex items-center justify-center gap-3 text-xl text-gray-300">
              <FaEnvelope className="text-red-400 text-4xl" />
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=josemondelo022@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white underline"
              >
                josemondelo022@gmail.com (Vía directa a Gmail)
              </a>
            </p>
            <p className="flex items-center justify-center gap-3 text-xl text-gray-300 mt-4">
              <FaPhoneAlt className="text-green-400 text-4xl" />
              <a
                href="https://wa.me/34622331827"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white underline"
              >
                +34 622 33 18 27 (Vía directa a WhatsApp)
              </a>
            </p>
            <p className="flex items-center justify-center gap-3 text-xl text-gray-300 mt-4">
              <FaMapMarkerAlt className="text-yellow-400 text-4xl" />
              Sanlúcar de Barrameda, Cádiz, España
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center">
            <div className="flex gap-8 text-5xl">
              <a
                href="https://www.instagram.com/josee022/"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-pink-500 ${neonEffect}`}
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/jos%C3%A9-mondelo-%C3%A1lvarez-0868a634a/"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-blue-500 ${neonEffect}`}
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/josee022"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-300 ${neonEffect}`}
              >
                <FaGithub />
              </a>
              <a
                href="https://wa.me/34622331827"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-green-400 ${neonEffect}`}
              >
                <FaWhatsapp />
              </a>
            </div>

            <motion.div
              className="text-xl text-gray-300 text-center md:text-right mt-6 md:mt-0 md:w-1/2"
              key={fraseActual}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {frases[fraseActual]}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    termsAccepted: false,
  });
  const [errors, setErrors] = useState({});

  const neonEffect =
    "shadow-lg shadow-blue-400 hover:shadow-blue-600 transition duration-300";

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es obligatorio.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El correo es obligatorio.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "El formato del correo no es válido.";
    }

    if (formData.message.length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres.";
    }

    if (!formData.termsAccepted) {
      newErrors.termsAccepted = "Debes aceptar los términos y condiciones.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    console.log("Envío desactivado temporalmente.");

    setIsModalOpen(false);
    setFormData({ name: "", email: "", message: "", termsAccepted: false });
    setErrors({});
  };

  return (
    <section id="contacto" className="py-20 bg-transparent text-white">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.h2
          className="text-4xl font-extrabold text-blue-400 mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          📬¿A QUÉ ESPERAS? ¡PONTE EN CONTACTO CONMIGO YA!
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

          <div className="bg-gray-900 p-8 rounded-lg shadow-md flex justify-between items-center">
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

            <button
              onClick={() => setIsModalOpen(true)}
              className={`bg-blue-500 text-white px-10 py-4 rounded-full text-2xl font-bold hover:bg-blue-600 ${neonEffect}`}
            >
              📩 Enviar Mensaje
            </button>
          </div>
        </motion.div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm">
          <motion.div
            className="bg-gray-800 p-8 rounded-2xl shadow-2xl w-[450px] sm:w-[500px] text-center relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl transition"
            >
              ✖
            </button>

            <h3 className="text-3xl font-semibold text-blue-400 mb-6">
              📩 Envíame un Mensaje
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Tu Nombre"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400"
              />
              {errors.name && (
                <p className="text-red-400 text-sm">{errors.name}</p>
              )}

              <input
                type="email"
                name="email"
                placeholder="Tu Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400"
              />
              {errors.email && (
                <p className="text-red-400 text-sm">{errors.email}</p>
              )}

              <textarea
                name="message"
                placeholder="Tu Mensaje"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full p-3 h-28 rounded-lg bg-gray-700 text-white placeholder-gray-400 resize-none"
              ></textarea>
              {errors.message && (
                <p className="text-red-400 text-sm">{errors.message}</p>
              )}

              <label className="flex items-center gap-2 text-sm text-gray-300">
                <input
                  type="checkbox"
                  checked={formData.termsAccepted}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      termsAccepted: e.target.checked,
                    })
                  }
                  className="accent-blue-500 w-4 h-4"
                />
                Acepto los términos y condiciones
              </label>
              {errors.termsAccepted && (
                <p className="text-red-400 text-sm">{errors.termsAccepted}</p>
              )}

              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-bold hover:bg-blue-600 transition"
              >
                Enviar
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </section>
  );
}

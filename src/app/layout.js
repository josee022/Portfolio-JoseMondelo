"use client";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import Particulas from "./components/Particulas";
import "./globals.css";

export default function RootLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <html lang="es">
      <body className="relative bg-gray-900 text-white">
        <Particulas />

        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`fixed top-0 left-0 w-full z-50 bg-gray-800/90 shadow-lg backdrop-blur-md transition-all duration-300 py-6 px-12 ${
            isScrolled ? "py-5 px-10 bg-gray-900/95 shadow-md" : ""
          }`}
        >
          <div className="container mx-auto flex justify-between items-center">
            <motion.h1
              whileHover={{ scale: 1.1 }}
              className="text-4xl font-extrabold text-blue-400 tracking-wide cursor-pointer"
            >
              🌐 {"<JMondelo /> Portfolio"}
            </motion.h1>

            <ul className="hidden md:flex gap-12 text-xl font-semibold">
              {[
                "Inicio",
                "Sobre Mí",
                "Habilidades",
                "Proyectos",
                "Contacto",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={item.toLowerCase().replace(" ", "-")}
                    smooth={true}
                    duration={500}
                    offset={-90}
                    className="relative cursor-pointer group hover:text-blue-400 transition"
                  >
                    {item}
                    <span className="absolute left-0 w-0 group-hover:w-full h-1 bg-blue-400 transition-all duration-300"></span>
                  </Link>
                </motion.li>
              ))}
            </ul>

            <button
              className="md:hidden text-white text-3xl focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ☰
            </button>
          </div>

          {isMenuOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-gray-700 text-center py-6 space-y-6 text-xl"
            >
              {[
                "Inicio",
                "Sobre Mí",
                "Habilidades",
                "Proyectos",
                "Contacto",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={item.toLowerCase().replace(" ", "-")}
                    smooth={true}
                    duration={500}
                    className="block cursor-pointer hover:text-blue-400"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </motion.nav>

        <main className="mt-28">{children}</main>
      </body>
    </html>
  );
}

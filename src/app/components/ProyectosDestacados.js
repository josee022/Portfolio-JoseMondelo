"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { BsPlayCircle } from "react-icons/bs";
import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import GestorTareas from "@/app/components/GestorTareas";
import UIkitGenerator from "@/app/components/UIKitGenerator";
import TechHub from "@/app/components/TechHub";
import CineFinder from "@/app/components/CineFinder";
import ProyectoDestacado from "@/app/components/ProyectoDestacado";
import ListaProyectos from "@/app/components/ListaProyectos";

export default function ProyectosDestacados() {
  // Estados para el carrusel del proyecto principal
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Estado para los proyectos expandidos (todos cerrados por defecto)
  const [expandedProjects, setExpandedProjects] = useState({
    CineFinder: false,
    TechHub: false,
    GestorTareas: false,
    UIkitGenerator: false
  });

  const toggleDetails = (projectName) => {
    setExpandedProjects(prev => ({
      ...prev,
      [projectName]: !prev[projectName]
    }));
  };

  return (
    <section
      id="proyectos"
      className="py-20 bg-transparent text-white text-center relative overflow-hidden"
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[5%] w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[10%] right-[5%] w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-6 md:px-12">
        {/* Encabezado de Proyectos con Animación */}
        <motion.div
          className="mb-16 relative z-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="inline-block bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl px-8 py-4 mb-6 border border-blue-500/20 shadow-xl">
            <h2 className="text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Mis Proyectos Web 🌐</span>
            </h2>
          </div>
          
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Explora mi lista de proyectos web que demuestran mi experiencia técnica y capacidad para crear soluciones completas y escalables.
          </motion.p>
        </motion.div>

        {/* Proyecto Principal (TheGymMondelo) */}
        <ProyectoDestacado 
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />

        {/* Lista de Proyectos Destacados */}
        <ListaProyectos 
          expandedProjects={expandedProjects}
          toggleDetails={toggleDetails}
        />
      </div>
    </section>
  );
}

"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <>
      {/* Elementos decorativos de fondo */}
      <div className="fixed inset-0 -z-20 overflow-hidden">
        {/* Gradiente de fondo */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"></div>
        
        {/* Círculos de desenfoque */}
        <div className="absolute top-[15%] left-[10%] w-[30vw] h-[30vw] rounded-full bg-blue-500/3 blur-3xl"></div>
        <div className="absolute bottom-[20%] right-[15%] w-[25vw] h-[25vw] rounded-full bg-purple-500/3 blur-3xl"></div>
        <div className="absolute top-[40%] right-[30%] w-[20vw] h-[20vw] rounded-full bg-cyan-500/3 blur-3xl"></div>
        
        {/* Líneas decorativas */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
        <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-purple-500/20 to-transparent"></div>
      </div>
      
      {/* Partículas interactivas */}
      <Particles
        id="tsparticles"
        className="absolute inset-0 -z-10"
        init={particlesInit}
        options={{
          fullScreen: { enable: true, zIndex: -1 },
          fpsLimit: 120,
          particles: {
            number: { value: 70, density: { enable: true, value_area: 1000 } },
            color: { 
              value: ["#4f46e5", "#3b82f6", "#0ea5e9", "#8b5cf6", "#6366f1"] 
            },
            shape: { 
              type: ["circle", "triangle", "polygon"],
              polygon: { nb_sides: 6 }
            },
            opacity: { 
              value: 0.5, 
              random: true,
              anim: { enable: true, speed: 0.5, opacity_min: 0.1, sync: false }
            },
            size: { 
              value: 3, 
              random: true,
              anim: { enable: true, speed: 1, size_min: 0.5, sync: false }
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#8b5cf6",
              opacity: 0.3,
              width: 1
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: { enable: true, rotateX: 600, rotateY: 1200 }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "grab" },
              onclick: { enable: true, mode: "push" },
              resize: true
            },
            modes: {
              grab: { distance: 180, line_linked: { opacity: 0.8 } },
              push: { particles_nb: 4 },
              remove: { particles_nb: 2 }
            }
          },
          retina_detect: true,
          background: {
            color: "transparent",
            image: "",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover"
          }
        }}
      />
      
      {/* Efecto de viñeta sutil */}
      <div className="fixed inset-0 -z-15 pointer-events-none">
        <div className="absolute inset-0 bg-radial-gradient opacity-30"></div>
      </div>
    </>
  );
}

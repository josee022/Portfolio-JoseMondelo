"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 -z-10"
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: "#00aaff" },
          shape: { type: "circle" },
          opacity: { value: 0.8 },
          size: { value: 3, random: true },
          move: { enable: true, speed: 1.2, out_mode: "out" },
          links: {
            enable: true,
            distance: 130,
            color: "#00aaff",
            opacity: 0.6,
            width: 2,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            grab: { distance: 150, links: { opacity: 1 } },
            push: { particles_nb: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Phone, Tablet } from "./Devices";

// Móvil delante y tablet detrás con pantallas reales de KNC. El móvil cambia de pantalla
// cada pocos segundos y el conjunto se inclina un poco siguiendo al puntero.
export default function HeroDevices({ screens, tabletScreen, alt }) {
  const [index, setIndex] = useState(0);
  const [reduce, setReduce] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduce(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % screens.length), 3200);
    return () => clearInterval(id);
  }, [reduce, screens.length]);

  const onMove = (e) => {
    if (reduce || !ref.current || e.pointerType !== "mouse") return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    ref.current.style.setProperty("--rx", `${(-y * 6).toFixed(2)}deg`);
    ref.current.style.setProperty("--ry", `${(x * 8).toFixed(2)}deg`);
  };
  const onLeave = () => {
    ref.current?.style.setProperty("--rx", "0deg");
    ref.current?.style.setProperty("--ry", "0deg");
  };

  return (
    <div onPointerMove={onMove} onPointerLeave={onLeave} className="device-in relative mx-auto w-full max-w-[34rem] [perspective:1400px]">
      <div
        ref={ref}
        className="relative aspect-[5/4] transition-transform duration-500 ease-out [transform-style:preserve-3d] [transform:rotateX(var(--rx,0deg))_rotateY(var(--ry,0deg))]"
      >
        {/* Halo de color detrás de los dispositivos */}
        <div aria-hidden="true" className="absolute inset-[8%] rounded-full bg-[radial-gradient(closest-side,var(--knc-soft),transparent)] blur-2xl" />
        <Tablet
          src={tabletScreen}
          alt=""
          sizes="(min-width: 1024px) 460px, 78vw"
          className="absolute left-0 top-[6%] w-[82%] [transform:translateZ(-40px)]"
        />
        <div className="absolute bottom-0 right-[2%] w-[36%] [transform:translateZ(40px)]">
          <Phone alt={alt}>
            {screens.map((src, i) => (
              <Image
                key={src}
                src={src}
                alt={i === index ? alt : ""}
                aria-hidden={i === index ? undefined : true}
                fill
                priority={i === 0}
                sizes="(min-width: 1024px) 200px, 34vw"
                className={`object-cover object-top transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}
              />
            ))}
          </Phone>
        </div>
      </div>
    </div>
  );
}

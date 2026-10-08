"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Phone } from "./Devices";

// Casos de KNC con un móvil fijo a la derecha que cambia de pantalla según el caso que se lee.
// En móvil cada caso lleva su propia captura y no hay nada fijo.
export default function KncStory({ cases, labels, screens, alt }) {
  const [active, setActive] = useState(0);
  const refs = useRef([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number(e.target.dataset.index));
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="mt-12 lg:mt-4 lg:grid lg:grid-cols-[minmax(0,1fr)_19rem] lg:gap-20">
      <ol className="flex flex-col gap-16 lg:gap-0">
        {cases.map((c, i) => (
          <li
            key={c.id}
            ref={(el) => (refs.current[i] = el)}
            data-index={i}
            className={`transition-colors duration-500 lg:flex lg:min-h-[78vh] lg:flex-col lg:justify-center lg:border-l-2 lg:pl-8 ${
              active === i ? "lg:border-accent" : "lg:border-line"
            }`}
          >
            <div className="mx-auto mb-8 w-[min(13rem,56vw)] lg:hidden">
              <Phone src={screens[c.screen]} alt={`${alt}: ${c.title}`} sizes="62vw" />
            </div>
            <h3 className="font-display text-[1.75rem] font-bold leading-tight tracking-[-0.02em] text-ink sm:text-[2.1rem]">{c.title}</h3>
            <dl className="mt-6 grid gap-5 sm:grid-cols-2 sm:gap-x-8">
              {["problem", "solution", "decision", "result"].map((k) => (
                <div key={k} className={k === "result" ? "rounded-2xl bg-knc-soft p-4 sm:col-span-2" : ""}>
                  <dt className="text-sm font-semibold text-ink">{labels[k]}</dt>
                  <dd className="mt-1.5 text-[0.98rem] leading-relaxed text-ink-2 text-pretty">{c[k]}</dd>
                </div>
              ))}
            </dl>
          </li>
        ))}
      </ol>

      <div className="hidden lg:block">
        {/* El ancho sale del alto de la ventana para que el móvil quepa entero mientras está fijo. */}
        <div className="sticky top-24 mx-auto w-[min(100%,calc((100vh-9rem)/2.2))]">
          <Phone alt={alt}>
            {cases.map((c, i) => (
              <Image
                key={c.id}
                src={screens[c.screen]}
                alt={i === active ? `${alt}: ${c.title}` : ""}
                aria-hidden={i === active ? undefined : true}
                fill
                sizes="340px"
                className={`object-cover object-top transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  i === active ? "scale-100 opacity-100" : "scale-[1.03] opacity-0"
                }`}
              />
            ))}
          </Phone>
          <div className="mt-6 flex justify-center gap-2" aria-hidden="true">
            {cases.map((c, i) => (
              <span key={c.id} className={`h-1.5 rounded-full transition-all duration-500 ${i === active ? "w-6 bg-ink" : "w-1.5 bg-line-strong"}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

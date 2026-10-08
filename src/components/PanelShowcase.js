"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Tablet } from "./Devices";

// Pestañas con capturas del panel web del centro.
export default function PanelShowcase({ panels, screens }) {
  const [active, setActive] = useState(0);
  const tabs = useRef([]);

  const onKey = (e) => {
    const dir = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : e.key === "ArrowUp" || e.key === "ArrowLeft" ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const next = (active + dir + panels.length) % panels.length;
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <div className="mt-10 grid gap-8 lg:grid-cols-[18rem_minmax(0,1fr)] lg:gap-12">
      <div role="tablist" aria-orientation="vertical" onKeyDown={onKey} className="-mx-4 flex snap-x gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0">
        {panels.map((p, i) => (
          <button
            key={p.screen}
            ref={(el) => (tabs.current[i] = el)}
            role="tab"
            id={`panel-tab-${i}`}
            aria-selected={active === i}
            aria-controls="panel-view"
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            className={`shrink-0 snap-start rounded-2xl border px-4 py-3 text-left transition-colors lg:px-5 lg:py-4 ${
              active === i ? "border-line-strong bg-surface shadow-soft" : "border-transparent hover:bg-surface-2"
            }`}
          >
            <span className="block whitespace-nowrap font-semibold text-ink lg:whitespace-normal">{p.title}</span>
            <span className={`mt-1 hidden text-sm leading-relaxed text-ink-2 ${active === i ? "lg:block" : ""}`}>{p.text}</span>
          </button>
        ))}
      </div>

      <div id="panel-view" role="tabpanel" aria-labelledby={`panel-tab-${active}`}>
        <p className="mb-4 text-[0.98rem] leading-relaxed text-ink-2 lg:hidden">{panels[active].text}</p>
        <Tablet alt={panels[active].title}>
          {panels.map((p, i) => (
            <Image
              key={p.screen}
              src={screens[p.screen]}
              alt={i === active ? p.title : ""}
              aria-hidden={i === active ? undefined : true}
              fill
              sizes="(min-width: 1024px) 760px, 92vw"
              className={`object-cover object-top transition-opacity duration-500 ${i === active ? "opacity-100" : "opacity-0"}`}
            />
          ))}
        </Tablet>
      </div>
    </div>
  );
}

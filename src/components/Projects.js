"use client";

import { useState } from "react";
import Image from "next/image";
import { FiArrowUpRight, FiCheck, FiCopy, FiGithub, FiPlay } from "react-icons/fi";

function StatusBadge({ status, label }) {
  const styles = {
    live: "text-live",
    paused: "text-paused",
    video: "text-ink-2",
  };
  return (
    <span className={`inline-flex items-center gap-1.5 text-[0.8rem] font-medium ${styles[status]}`}>
      <span aria-hidden="true" className={`size-1.5 rounded-full bg-current ${status === "live" ? "animate-pulse" : ""}`} />
      {label}
    </span>
  );
}

function CopyField({ label, value, copyLabel, copiedLabel }) {
  const [done, setDone] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setDone(true);
      setTimeout(() => setDone(false), 1600);
    } catch {}
  };
  return (
    <div className="flex items-center justify-between gap-3 py-2">
      <span className="min-w-0">
        <span className="block text-[0.78rem] text-muted">{label}</span>
        <span className="block truncate font-mono text-[0.88rem] text-ink">{value}</span>
      </span>
      <button
        type="button"
        onClick={copy}
        aria-label={`${done ? copiedLabel : copyLabel}: ${label}`}
        className="grid size-10 shrink-0 place-items-center rounded-full text-ink-2 transition-colors hover:bg-surface-2 hover:text-ink"
      >
        {done ? <FiCheck aria-hidden="true" className="size-4 text-live" /> : <FiCopy aria-hidden="true" className="size-4" />}
      </button>
      <span className="sr-only" aria-live="polite">
        {done ? copiedLabel : ""}
      </span>
    </div>
  );
}

export default function Projects({ t, lang, projects }) {
  const p = t.projects;
  const [activeId, setActiveId] = useState(projects[0].id);
  const [imageIndex, setImageIndex] = useState(0);
  const project = projects.find((x) => x.id === activeId);
  const copy = p.items[project.id];
  const name = (x) => (lang === "en" && x.nameEn) || x.name;

  const select = (id) => {
    setActiveId(id);
    setImageIndex(0);
  };

  return (
    <section id="proyectos" aria-labelledby="proyectos-title" className="border-t border-line bg-surface py-20 sm:py-28">
      <div className="container-page">
        <div className="max-w-3xl">
          <h2 id="proyectos-title" className="font-display text-[2.4rem] font-bold leading-none tracking-[-0.035em] text-ink sm:text-[3rem]">
            {p.title}
          </h2>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-2">{p.intro}</p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-12">
          {/* Selector: lista en escritorio, carrusel de chips en móvil */}
          <div className="-mx-4 overflow-x-auto px-4 [scrollbar-width:none] lg:mx-0 lg:overflow-visible lg:px-0">
            <ul className="flex gap-2 lg:flex-col lg:gap-1">
              {projects.map((x) => {
                const selected = x.id === activeId;
                return (
                  <li key={x.id} className="shrink-0">
                    <button
                      type="button"
                      onClick={() => select(x.id)}
                      aria-pressed={selected}
                      aria-controls="proyecto-detalle"
                      className={`w-full rounded-2xl border px-4 py-3 text-left transition-colors ${
                        selected ? "border-line-strong bg-bg shadow-soft" : "border-line hover:bg-surface-2 lg:border-transparent"
                      }`}
                    >
                      <span className="block whitespace-nowrap font-semibold text-ink">{name(x)}</span>
                      <span className="mt-0.5 flex items-center gap-2 whitespace-nowrap">
                        <span className="text-[0.8rem] text-muted">{x.year}</span>
                        <StatusBadge status={x.status} label={p.status[x.status]} />
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Detalle */}
          <div id="proyecto-detalle" aria-live="polite" className="min-w-0">
            <article key={project.id} className="fade-up grid gap-8">
              <div>
                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-line bg-surface-2 shadow-soft">
                  <Image
                    src={project.images[imageIndex]}
                    alt={`${name(project)}: ${copy.type}`}
                    fill
                    sizes="(min-width: 1024px) 860px, 92vw"
                    className="object-cover object-top"
                  />
                </div>
                {project.images.length > 1 && (
                  <div className="mt-3 flex gap-2 overflow-x-auto [scrollbar-width:none]">
                    {project.images.map((src, i) => (
                      <button
                        key={src}
                        type="button"
                        onClick={() => setImageIndex(i)}
                        aria-label={`${name(project)} ${i + 1}/${project.images.length}`}
                        aria-pressed={i === imageIndex}
                        className={`relative aspect-[16/9] w-24 shrink-0 overflow-hidden rounded-lg border-2 transition-colors ${
                          i === imageIndex ? "border-accent" : "border-transparent opacity-70 hover:opacity-100"
                        }`}
                      >
                        <Image src={src} alt="" fill sizes="96px" className="object-cover object-top" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="grid gap-x-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
                <div>
                  <p className="text-sm text-muted">{copy.type}</p>
                  <h3 className="mt-1 font-display text-[1.9rem] font-bold leading-tight tracking-[-0.025em] text-ink">{name(project)}</h3>
                  <p className="mt-3 leading-relaxed text-ink-2 text-pretty">{copy.summary}</p>

                  {project.status === "paused" && (
                    <p className="mt-4 rounded-xl border border-paused/30 bg-paused/10 px-4 py-3 text-sm leading-relaxed text-ink-2">{p.pausedNote}</p>
                  )}

                  <h4 className="mt-6 text-sm font-semibold text-ink">{p.features}</h4>
                  <ul className="mt-2 space-y-1.5">
                    {copy.features.map((f) => (
                      <li key={f} className="flex gap-2.5 text-[0.95rem] text-ink-2">
                        <FiCheck aria-hidden="true" className="mt-1 size-4 shrink-0 text-accent" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="mt-6 text-sm font-semibold text-ink md:mt-1">{p.stack}</h4>
                  <ul className="mt-2 flex flex-wrap gap-1.5">
                    {project.stack.map((s) => (
                      <li key={s} className="rounded-full border border-line px-2.5 py-1 text-[0.8rem] text-ink-2">
                        {s}
                      </li>
                    ))}
                  </ul>

                  {project.credentials && project.status === "live" && (
                    <div className="mt-6 rounded-2xl border border-line bg-bg px-4 py-2">
                      <p className="pt-2 text-sm font-semibold text-ink">{p.credentialsTitle}</p>
                      <CopyField label={p.user} value={project.credentials.user} copyLabel={p.copy} copiedLabel={p.copied} />
                      <div className="border-t border-line" />
                      <CopyField label={p.password} value={project.credentials.password} copyLabel={p.copy} copiedLabel={p.copied} />
                    </div>
                  )}

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.status === "live" && project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-[0.95rem] font-medium text-on-accent transition-transform hover:-translate-y-0.5"
                      >
                        {p.openDemo}
                        <FiArrowUpRight aria-hidden="true" className="size-4" />
                      </a>
                    )}
                    {project.video && (
                      <a
                        href={project.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-[0.95rem] font-medium text-on-accent transition-transform hover:-translate-y-0.5"
                      >
                        <FiPlay aria-hidden="true" className="size-4" />
                        {p.watchVideo}
                      </a>
                    )}
                    {project.repo.map((r) => (
                      <a
                        key={r.href}
                        href={r.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-11 items-center gap-2 rounded-full border border-line-strong px-5 text-[0.95rem] font-medium text-ink transition-colors hover:bg-surface-2"
                      >
                        <FiGithub aria-hidden="true" className="size-4" />
                        {r.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

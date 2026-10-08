"use client";

import { useEffect, useState } from "react";
import { FiDownload, FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";

const SECTIONS = [
  { id: "knc", key: "knc" },
  { id: "experiencia", key: "experience" },
  { id: "proyectos", key: "projects" },
  { id: "tecnologias", key: "skills" },
  { id: "sobre-mi", key: "about" },
  { id: "contacto", key: "contact" },
];

export function ThemeToggle({ label, className = "" }) {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className={`grid size-11 place-items-center rounded-full text-ink-2 transition-colors hover:bg-surface-2 hover:text-ink ${className}`}
    >
      <FiMoon aria-hidden="true" className="size-[18px] dark:hidden" />
      <FiSun aria-hidden="true" className="hidden size-[18px] dark:block" />
    </button>
  );
}

export default function Nav({ t, lang, cvHref }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const otherLang = lang === "es" ? "en" : "es";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Marca en el menú la sección que está en pantalla.
  useEffect(() => {
    const els = ["inicio", ...SECTIONS.map((s) => s.id)].map((id) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled || open ? "border-b border-line bg-bg/75 backdrop-blur-xl backdrop-saturate-150" : "border-b border-transparent"
      }`}
    >
      <a
        href="#contenido"
        className="absolute left-4 top-3 -translate-y-20 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-on-accent focus:translate-y-0"
      >
        {t.nav.skip}
      </a>
      <nav className="container-page flex h-16 items-center justify-between gap-4" aria-label="Principal">
        <a href="#inicio" className="flex items-center gap-2.5 font-display text-[1.05rem] font-bold tracking-tight text-ink">
          <span aria-hidden="true" className="grid size-8 place-items-center rounded-[0.6rem] bg-ink text-[0.8rem] font-bold text-bg">
            JM
          </span>
          José Mondelo
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-current={active === s.id ? "true" : undefined}
                className={`rounded-full px-3.5 py-2 text-[0.92rem] transition-colors hover:text-ink ${
                  active === s.id ? "bg-surface-2 text-ink" : "text-ink-2"
                }`}
              >
                {t.nav[s.key]}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <a
            href={`/${otherLang}`}
            hrefLang={otherLang}
            lang={otherLang}
            aria-label={`${t.nav.langShort}, ${t.nav.langLabel}`}
            className="grid h-11 min-w-11 place-items-center rounded-full px-2 text-sm font-semibold text-ink-2 transition-colors hover:bg-surface-2 hover:text-ink"
          >
            {t.nav.langShort}
          </a>
          <ThemeToggle label={t.nav.theme} />
          <a
            href={cvHref}
            download
            className="ml-1 hidden h-10 items-center gap-2 rounded-full bg-ink px-4 text-sm font-medium text-bg transition-opacity hover:opacity-85 sm:inline-flex"
          >
            <FiDownload aria-hidden="true" className="size-4" />
            {t.nav.cv}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? t.nav.close : t.nav.menu}
            className="grid size-11 place-items-center rounded-full text-ink transition-colors hover:bg-surface-2 lg:hidden"
          >
            {open ? <FiX aria-hidden="true" className="size-5" /> : <FiMenu aria-hidden="true" className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="menu-movil" className="fade-up h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-bg lg:hidden">
          <ul className="container-page flex flex-col py-4">
            {SECTIONS.map((s, i) => (
              <li key={s.id} className="fade-up" style={{ "--i": i + 1 }}>
                <a
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-line py-4 font-display text-[1.75rem] font-semibold tracking-tight text-ink"
                >
                  {t.nav[s.key]}
                </a>
              </li>
            ))}
          </ul>
          <div className="container-page pb-10">
            <a href={cvHref} download className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-ink text-[0.95rem] font-medium text-bg">
              <FiDownload aria-hidden="true" className="size-4" />
              {t.nav.cv}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

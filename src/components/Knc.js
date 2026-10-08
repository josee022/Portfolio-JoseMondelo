import Image from "next/image";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { FiArrowUpRight, FiGlobe } from "react-icons/fi";
import KncStory from "./KncStory";
import PanelShowcase from "./PanelShowcase";
import { knc, kncScreens } from "@/content/site";

function SectionTitle({ id, children, intro }) {
  return (
    <div className="max-w-3xl">
      <h3 id={id} className="font-display text-[1.9rem] font-bold leading-[1.1] tracking-[-0.025em] text-ink text-balance sm:text-[2.4rem]">
        {children}
      </h3>
      {intro && <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-2 text-pretty">{intro}</p>}
    </div>
  );
}

function Architecture({ arch }) {
  const cols = [arch.clients, arch.app, arch.backend, arch.services];
  return (
    <div className="mt-10 flex flex-col items-stretch lg:grid lg:grid-cols-[1fr_2.5rem_1.15fr_2.5rem_1.25fr_2.5rem_1.25fr] lg:items-center">
      {cols.map((c, i) => (
        <div key={c.title} className="contents">
          <div className={`rounded-2xl border p-5 ${i === 2 ? "border-accent/40 bg-accent-soft" : "border-line bg-surface"}`}>
            <p className="font-display text-lg font-bold text-ink">{c.title}</p>
            <ul className="mt-3 space-y-1.5">
              {c.items.map((it) => (
                <li key={it} className="font-mono text-[0.82rem] leading-snug text-ink-2">
                  {it}
                </li>
              ))}
            </ul>
            <p className="mt-4 border-t border-line pt-3 text-[0.82rem] text-muted">{c.note}</p>
          </div>
          {i < cols.length - 1 && (
            <div aria-hidden="true" className="flex justify-center py-1 lg:py-0">
              <span className="flow-y block h-8 w-0.5 lg:hidden" />
              <span className="flow-x hidden h-0.5 w-full lg:block" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Knc({ t }) {
  const k = t.knc;
  return (
    <section id="knc" aria-labelledby="knc-title" className="relative border-t border-line bg-surface py-20 sm:py-28">
      <div className="container-page">
        {/* Cabecera */}
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="meta flex items-center gap-2">
              <span aria-hidden="true" className="inline-block size-2.5 rounded-full bg-knc" />
              {k.label}, {k.period.toLowerCase()}
            </p>
            <h2 id="knc-title" className="mt-4 font-display text-[2.5rem] font-bold leading-[1.02] tracking-[-0.035em] text-ink text-balance sm:text-[3.4rem] lg:text-[4rem]">
              {k.title}
            </h2>
            <p className="mt-6 text-[1.1rem] leading-relaxed text-ink-2 text-pretty">{k.intro}</p>
          </div>
          <div className="flex flex-wrap gap-2 lg:flex-col lg:items-stretch">
            <a href={knc.web} target="_blank" rel="noopener noreferrer" className="inline-flex h-11 items-center gap-2 rounded-full bg-ink px-5 text-[0.95rem] font-medium text-bg transition-opacity hover:opacity-85">
              <FiGlobe aria-hidden="true" className="size-4" /> {k.links.web}
            </a>
            <a href={knc.appStore} target="_blank" rel="noopener noreferrer" className="inline-flex h-11 items-center gap-2 rounded-full border border-line-strong px-5 text-[0.95rem] font-medium text-ink transition-colors hover:bg-surface-2">
              <FaApple aria-hidden="true" className="size-4" /> {k.links.appStore}
            </a>
            <a href={knc.googlePlay} target="_blank" rel="noopener noreferrer" className="inline-flex h-11 items-center gap-2 rounded-full border border-line-strong px-5 text-[0.95rem] font-medium text-ink transition-colors hover:bg-surface-2">
              <FaGooglePlay aria-hidden="true" className="size-3.5" /> {k.links.googlePlay}
            </a>
          </div>
        </div>

        {/* Ficha técnica */}
        <div className="mt-14">
          <h3 className="text-sm font-semibold text-ink">{k.specTitle}</h3>
          <dl className="mt-3 grid grid-cols-2 border-t border-line-strong lg:grid-cols-4">
            {k.facts.map((f, i) => (
              <div key={f.label} className={`flex flex-col-reverse border-b border-line py-5 pr-4 lg:border-b-0 ${i % 2 === 0 ? "" : "border-l border-line pl-4 lg:pl-6"} ${i >= 2 ? "lg:border-l lg:pl-6" : ""}`}>
                <dt className="mt-2 text-sm leading-snug text-muted">{f.label}</dt>
                <dd className="font-display text-[2rem] font-bold leading-none tracking-[-0.03em] text-ink sm:text-[2.6rem]">{f.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-[0.82rem] text-muted">{k.screensNote}</p>
        </div>

        {/* Casos */}
        <div className="mt-24">
          <SectionTitle id="knc-casos" intro={k.storyIntro}>
            {k.storyTitle}
          </SectionTitle>
          <KncStory cases={k.cases} labels={k.labels} screens={kncScreens} alt="KNC" />
        </div>

        {/* Panel del centro */}
        <div className="mt-24">
          <SectionTitle intro={k.panelIntro}>{k.panelTitle}</SectionTitle>
          <PanelShowcase panels={k.panels} screens={kncScreens} />
        </div>

        {/* Arquitectura */}
        <div className="mt-24">
          <SectionTitle intro={k.archIntro}>{k.archTitle}</SectionTitle>
          <Architecture arch={k.arch} />
        </div>

        {/* Tours 3D */}
        <div id="tours" className="mt-24 scroll-mt-24">
          <SectionTitle intro={k.toursIntro}>{k.toursTitle}</SectionTitle>
          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {k.tours.map((tour) => (
              <li key={tour.id}>
                <a
                  href={knc.tours[tour.id]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-3xl border border-line bg-bg transition-colors hover:border-line-strong"
                >
                  <div className="relative h-60 overflow-hidden bg-knc-soft sm:h-72">
                    <div className="absolute left-1/2 top-8 w-[58%] -translate-x-1/2 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2">
                      <div className="relative aspect-[1170/2532] overflow-hidden rounded-[1.6rem] border-[6px] border-[#0d0f10] bg-white shadow-soft">
                        <Image src={kncScreens[tour.screen]} alt="" fill sizes="(min-width: 640px) 200px, 50vw" className="object-cover object-top" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-3 p-5">
                    <span>
                      <span className="block font-semibold text-ink">{tour.title}</span>
                      <span className="text-sm text-muted">{k.tourCta}</span>
                    </span>
                    <FiArrowUpRight aria-hidden="true" className="size-5 shrink-0 text-ink-2 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Operación */}
        <div className="mt-24">
          <SectionTitle>{k.opsTitle}</SectionTitle>
          <dl className="mt-8 grid gap-x-12 sm:grid-cols-2">
            {k.ops.map((o) => (
              <div key={o.title} className="border-t border-line py-6">
                <dt className="font-semibold text-ink">{o.title}</dt>
                <dd className="mt-2 leading-relaxed text-ink-2 text-pretty">{o.text}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* IA */}
        <div id="ia" className="mt-16 scroll-mt-24 rounded-3xl bg-ink p-7 text-bg sm:p-10 lg:p-12">
          <h3 className="font-display text-[1.7rem] font-bold leading-tight tracking-[-0.02em] sm:text-[2.1rem]">{k.aiTitle}</h3>
          <p className="mt-4 max-w-3xl text-[1.05rem] leading-relaxed opacity-80 text-pretty">{k.aiText}</p>
        </div>
      </div>
    </section>
  );
}

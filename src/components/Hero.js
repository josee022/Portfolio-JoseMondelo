import { FaApple, FaGooglePlay } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import HeroDevices from "./HeroDevices";
import { knc, kncScreens } from "@/content/site";

export default function Hero({ t, cvHref }) {
  const h = t.hero;
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24">
      <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10 opacity-60" />
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-10">
        <div>
          <p className="rise text-[1.05rem] font-medium text-ink-2" style={{ "--i": 0 }}>
            {h.hello}
          </p>
          <h1
            className="rise-move mt-4 font-display text-[2.5rem] font-bold leading-[1.03] tracking-[-0.035em] text-ink text-balance sm:text-[3.4rem] lg:text-[3.5rem] xl:text-[4rem]"
            style={{ "--i": 1 }}
          >
            {h.title}
          </h1>
          <p className="rise-move mt-6 max-w-[38rem] text-[1.07rem] leading-relaxed text-ink-2 text-pretty sm:text-[1.15rem]" style={{ "--i": 2 }}>
            {h.intro}
          </p>

          <div className="rise mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center" style={{ "--i": 3 }}>
            <a
              href="#knc"
              className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-[0.98rem] font-medium text-on-accent shadow-[0_8px_24px_-8px_var(--glow)] transition-transform hover:-translate-y-0.5"
            >
              {h.ctaPrimary}
            </a>
            <a
              href={cvHref}
              download
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-line-strong bg-surface px-6 text-[0.98rem] font-medium text-ink transition-colors hover:bg-surface-2"
            >
              <FiDownload aria-hidden="true" className="size-4" />
              {h.ctaCv}
            </a>
            <a href="#contacto" className="inline-flex h-12 items-center justify-center px-3 text-[0.98rem] font-medium text-ink underline decoration-line-strong underline-offset-[6px] transition-colors hover:decoration-accent">
              {h.ctaContact}
            </a>
          </div>

          <div className="rise mt-10 flex flex-col gap-4 border-t border-line pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between" style={{ "--i": 4 }}>
            <p>{h.location}</p>
            <div className="flex items-center gap-2">
              <a href={knc.appStore} target="_blank" rel="noopener noreferrer" className="inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-full border border-line px-3.5 text-ink-2 transition-colors hover:border-line-strong hover:text-ink">
                <FaApple aria-hidden="true" className="size-4" /> App Store
              </a>
              <a href={knc.googlePlay} target="_blank" rel="noopener noreferrer" className="inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-full border border-line px-3.5 text-ink-2 transition-colors hover:border-line-strong hover:text-ink">
                <FaGooglePlay aria-hidden="true" className="size-3.5" /> Google Play
              </a>
            </div>
          </div>
        </div>

        <HeroDevices
          screens={[kncScreens.agenda, kncScreens.chat, kncScreens.galeria, kncScreens.calendario]}
          tabletScreen={kncScreens.panelInicio}
          alt={h.deviceAlt}
        />
      </div>
    </section>
  );
}

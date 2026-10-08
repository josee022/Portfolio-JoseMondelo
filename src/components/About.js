import Image from "next/image";
import { person } from "@/content/site";

export default function About({ t }) {
  const a = t.about;
  return (
    <section id="sobre-mi" aria-labelledby="sobre-mi-title" className="border-t border-line bg-surface py-20 sm:py-28">
      <div className="container-page grid items-start gap-10 md:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-16">
        <div className="relative mx-auto w-full max-w-[20rem] md:sticky md:top-28">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-surface-2 shadow-soft">
            <Image src={person.photo} alt={a.photoAlt} fill sizes="(min-width: 768px) 320px, 80vw" className="object-cover object-[50%_30%]" />
          </div>
        </div>

        <div>
          <h2 id="sobre-mi-title" className="font-display text-[2.4rem] font-bold leading-none tracking-[-0.035em] text-ink sm:text-[3rem]">
            {a.title}
          </h2>
          <div className="mt-6 max-w-[40rem] space-y-4 text-[1.07rem] leading-relaxed text-ink-2 text-pretty">
            {a.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <dl className="mt-10 grid max-w-[40rem] grid-cols-1 border-t border-line sm:grid-cols-2 sm:gap-x-8">
            {a.facts.map((f) => (
              <div key={f.label} className="border-b border-line py-4">
                <dt className="text-sm text-muted">{f.label}</dt>
                <dd className="mt-0.5 font-medium text-ink">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

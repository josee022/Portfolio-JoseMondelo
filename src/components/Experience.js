export default function Experience({ t }) {
  const e = t.experience;
  return (
    <section id="experiencia" aria-labelledby="experiencia-title" className="py-20 sm:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[18rem_minmax(0,1fr)] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 id="experiencia-title" className="font-display text-[2.4rem] font-bold leading-none tracking-[-0.035em] text-ink sm:text-[3rem]">
            {e.title}
          </h2>
          <p className="mt-4 leading-relaxed text-ink-2">{e.intro}</p>
        </div>

        <div>
          <ol className="relative border-l border-line-strong">
            {e.items.map((job) => (
              <li key={job.company + job.period} className="relative pb-12 pl-7 last:pb-0 sm:pl-10">
                <span
                  aria-hidden="true"
                  className={`absolute -left-[7px] top-1.5 size-3.5 rounded-full border-2 border-bg ${job.current ? "bg-accent ring-4 ring-accent-soft" : "bg-line-strong"}`}
                />
                <p className="text-sm text-muted">
                  <time>{job.period}</time>, {job.place}
                </p>
                <h3 className="mt-1.5 font-display text-[1.35rem] font-bold leading-snug tracking-[-0.015em] text-ink sm:text-[1.5rem]">{job.role}</h3>
                <p className="text-[1.02rem] font-medium text-ink-2">{job.company}</p>
                <ul className="mt-4 space-y-2">
                  {job.points.map((p) => (
                    <li key={p} className="relative pl-4 leading-relaxed text-ink-2 before:absolute before:left-0 before:top-[0.7em] before:size-1.5 before:rounded-full before:bg-line-strong">
                      {p}
                    </li>
                  ))}
                </ul>
                <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Stack">
                  {job.stack.map((s) => (
                    <li key={s} className="rounded-full border border-line px-2.5 py-1 text-[0.8rem] text-ink-2">
                      {s}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>

          <h3 className="mt-16 text-sm font-semibold text-ink">{e.educationTitle}</h3>
          <ul className="mt-3 border-t border-line">
            {e.education.map((ed) => (
              <li key={ed.title} className="flex flex-col gap-1 border-b border-line py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <span>
                  <span className="block font-medium text-ink">{ed.title}</span>
                  <span className="text-sm text-muted">{ed.place}</span>
                </span>
                <span className="shrink-0 text-sm text-muted">{ed.period}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default function Skills({ t }) {
  const s = t.skills;
  return (
    <section id="tecnologias" aria-labelledby="tecnologias-title" className="py-20 sm:py-28">
      <div className="container-page">
        <div className="max-w-3xl">
          <h2 id="tecnologias-title" className="font-display text-[2.4rem] font-bold leading-[1.02] tracking-[-0.035em] text-ink text-balance sm:text-[3rem]">
            {s.title}
          </h2>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-2">{s.intro}</p>
        </div>

        <div className="mt-12 grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
          {s.groups.map((g) => (
            <div key={g.title} className="flex flex-col border-t border-line-strong py-7">
              <h3 className="font-display text-[1.2rem] font-bold tracking-[-0.01em] text-ink">{g.title}</h3>
              <p className="mt-3 flex-1 leading-[1.75] text-ink-2">{g.items.join(", ")}</p>
              <p className="mt-4 text-sm text-muted">
                {s.usedIn}:{" "}
                {g.where.map((w, i) => (
                  <span key={w.label}>
                    <a href={w.href} className="font-medium text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent">
                      {w.label}
                    </a>
                    {i < g.where.length - 1 ? ", " : ""}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

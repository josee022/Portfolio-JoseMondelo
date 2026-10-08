import { getDict } from "@/content";
import { knc, person, SITE_URL } from "@/content/site";

// CV imprimible en A4. `npm run cv` lo convierte a PDF en public/cv/.
// Sale del mismo contenido que la web (es.js / en.js), así que nunca se desincronizan.

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: `CV ${person.name} (${lang.toUpperCase()})`,
    robots: { index: false, follow: false },
  };
}

const css = `
  .cv { --ink:#111418; --body:#2b3138; --muted:#4f5862; --line:#dfe3e8; --accent:#0d5c63;
        background:#fff; color:var(--body); font-family:var(--font-geist), Arial, sans-serif; font-size:9pt; line-height:1.45;
        width:210mm; min-height:297mm; margin:0 auto; padding:13mm 15mm 11mm; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  .cv * { box-sizing:border-box; }
  .cv a { color:inherit; text-decoration:none; }
  .cv b { font-weight:600; color:var(--ink); }
  .cv header { display:flex; gap:18px; align-items:center; }
  .cv header img { width:86px; height:86px; border-radius:50%; object-fit:cover; object-position:50% 20%; }
  .cv h1 { font-size:22pt; font-weight:700; letter-spacing:-0.025em; color:var(--ink); line-height:1.1; margin:0; }
  .cv .role { font-size:10.5pt; font-weight:500; color:var(--accent); margin-top:3px; }
  .cv .contact { margin-top:7px; font-size:8.3pt; color:var(--muted); }
  .cv .contact span + span::before { content:"·"; margin:0 7px; color:#b5bcc4; }
  .cv section { margin-top:12px; }
  .cv h2 { font-size:8pt; font-weight:700; text-transform:uppercase; letter-spacing:0.14em; color:var(--ink); padding-bottom:4px; border-bottom:1px solid var(--line); margin:0 0 8px; }
  .cv p { margin:0; }
  .cv .job { margin-bottom:11px; }
  .cv .job-head { display:flex; justify-content:space-between; align-items:baseline; gap:12px; }
  .cv .job-title { font-size:10pt; font-weight:600; color:var(--ink); }
  .cv .co { font-weight:400; color:var(--muted); }
  .cv .date { font-size:8.3pt; color:var(--muted); white-space:nowrap; }
  .cv .context { margin:3px 0 5px; }
  .cv .links { margin:0 0 6px; font-size:8.3pt; color:var(--accent); font-weight:500; }
  .cv .links a + a::before { content:"·"; margin:0 7px; color:#b5bcc4; }
  .cv ul { padding-left:12px; margin:0; list-style:disc; }
  .cv li { margin-bottom:3px; }
  .cv li::marker { color:var(--accent); }
  .cv .rows p { display:grid; grid-template-columns:118px 1fr; gap:10px; margin-bottom:4px; }
  .cv .rows p > span:first-child { font-weight:600; color:var(--ink); }
  .cv .entry { display:flex; justify-content:space-between; gap:12px; margin-bottom:5px; }
  .cv .sub { color:var(--muted); }
  @media screen { body:has(.cv) { background:#e9ecef; } .cv { margin:24px auto; box-shadow:0 10px 40px rgba(0,0,0,.12); } }
  @media print { .cv { margin:0; box-shadow:none; } }
`;

const html = (s) => ({ __html: s });

export default async function CvPage({ params }) {
  const { lang } = await params;
  const t = getDict(lang);
  const c = t.cv;
  const [knc0, gazc, garte] = t.experience.items;
  const portfolio = SITE_URL.replace("https://", "");

  return (
    <>
      <style dangerouslySetInnerHTML={html(css)} />
      <article className="cv">
        <header>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={person.photo} alt={person.name} />
          <div>
            <h1>{person.name}</h1>
            <div className="role">{c.title}</div>
            <div className="contact">
              <span>{c.location}</span>
              <span><a href={person.phoneHref}>{person.phone}</a></span>
              <span><a href={`mailto:${person.email}`}>{person.email}</a></span>
            </div>
            <div className="contact" style={{ marginTop: 2 }}>
              <span><a href={`${SITE_URL}/${lang}`}><b style={{ color: "var(--accent)" }}>{portfolio}</b></a></span>
              <span><a href={person.github}>github.com/josee022</a></span>
              <span><a href={person.linkedin}>linkedin.com/in/jose-mondelo</a></span>
            </div>
          </div>
        </header>

        <section>
          <h2>{c.profileTitle}</h2>
          <p dangerouslySetInnerHTML={html(c.profile)} />
        </section>

        <section>
          <h2>{c.experienceTitle}</h2>
          <div className="job">
            <div className="job-head">
              <div className="job-title">
                {knc0.role.replace("and Technical", "& Technical")} <span className="co">· KNC (Kids and Clouds)</span>
              </div>
              <div className="date">{knc0.period}, {knc0.place.toLowerCase()}</div>
            </div>
            <p className="context">{c.kncContext}</p>
            <div className="links">
              <a href={knc.web}>kidsnclouds.es</a>
              <a href={knc.appStore}>App Store</a>
              <a href={knc.googlePlay}>Google Play</a>
              <a href={knc.tours.infantil}>{c.kncTour}</a>
            </div>
            <ul>
              {c.kncPoints.map((p) => (
                <li key={p} dangerouslySetInnerHTML={html(p)} />
              ))}
            </ul>
          </div>

          <div className="job">
            <div className="job-head">
              <div className="job-title">
                {garte.role} <span className="co">· {garte.company}</span>
              </div>
              <div className="date">{garte.period}, {garte.place}</div>
            </div>
            <ul style={{ marginTop: 3 }}>
              <li>{c.gartelecomPoint}</li>
            </ul>
          </div>

          <div className="entry">
            <div>
              <span className="job-title" style={{ fontSize: "9pt" }}>{gazc.role}</span> <span className="sub">· {c.gazc}</span>
            </div>
            <div className="date">{gazc.period}</div>
          </div>
        </section>

        <section>
          <h2>{c.skillsTitle}</h2>
          <div className="rows">
            {c.skills.map(([k, v]) => (
              <p key={k}>
                <span>{k}</span>
                <span>{v}</span>
              </p>
            ))}
          </div>
        </section>

        <section>
          <h2>{c.projectsTitle}</h2>
          {c.projectsLines.map(([name, stack, text]) => (
            <div className="entry" key={name}>
              <div>
                <b>{name}</b> <span className="sub">· {stack}</span> <span dangerouslySetInnerHTML={html(text)} />
              </div>
            </div>
          ))}
        </section>

        <section>
          <h2>{c.educationTitle}</h2>
          {t.experience.education.map((e) => (
            <div className="entry" key={e.title}>
              <div>
                <b>{e.title}</b> <span className="sub">· {e.place}</span>
              </div>
              <div className="date">{e.period}</div>
            </div>
          ))}
        </section>

        <section>
          <h2>{c.otherTitle}</h2>
          <p>{c.other}</p>
        </section>
      </article>
    </>
  );
}

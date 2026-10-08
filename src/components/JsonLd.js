import { knc, person, projects, SITE_URL } from "@/content/site";

// Datos estructurados para buscadores y herramientas de IA.
export default function JsonLd({ t, lang }) {
  const url = `${SITE_URL}/${lang}`;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: person.name,
        givenName: "José",
        familyName: "Mondelo Álvarez",
        jobTitle: lang === "es" ? "Desarrollador Full-Stack y Responsable Técnico" : "Full-Stack Developer and Technical Lead",
        description: t.meta.description,
        url,
        image: `${SITE_URL}${person.photo}`,
        email: `mailto:${person.email}`,
        address: { "@type": "PostalAddress", addressLocality: person.locality, addressRegion: person.region, addressCountry: person.country },
        worksFor: { "@type": "Organization", name: "KNC (Kids and Clouds)", url: knc.web },
        alumniOf: { "@type": "EducationalOrganization", name: "I.E.S. Doñana" },
        knowsLanguage: ["es", "en"],
        knowsAbout: ["Flutter", "Dart", "Riverpod", "Firebase", "Cloud Functions", "Node.js", "AWS S3", "CloudFront", "React", "Next.js", "TypeScript", "Laravel", "Three.js", "SEPA", "Holded API"],
        sameAs: [person.github, person.linkedin],
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/#knc`,
        name: "KNC",
        url: knc.web,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web, Android, iOS",
        description: t.knc.intro,
        softwareVersion: "4.0",
        installUrl: [knc.appStore, knc.googlePlay],
        sameAs: [knc.appStore, knc.googlePlay],
        creator: { "@id": `${SITE_URL}/#person` },
      },
      ...projects.map((p) => ({
        "@type": "CreativeWork",
        name: (lang === "en" && p.nameEn) || p.name,
        description: t.projects.items[p.id].summary,
        dateCreated: p.year,
        url: p.demo ?? p.repo[0].href,
        keywords: p.stack.join(", "),
        author: { "@id": `${SITE_URL}/#person` },
      })),
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: person.name,
        inLanguage: lang,
        author: { "@id": `${SITE_URL}/#person` },
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

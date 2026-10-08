import { getDict } from "@/content";
import { CV_FILES, person, projects } from "@/content/site";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Knc from "@/components/Knc";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

export default async function Home({ params }) {
  const { lang } = await params;
  const t = getDict(lang);
  const cvHref = CV_FILES[lang];

  return (
    <>
      <Nav t={{ nav: t.nav }} lang={lang} cvHref={cvHref} />
      <main id="contenido">
        <Hero t={t} cvHref={cvHref} />
        <Knc t={t} />
        <Experience t={t} />
        <Projects t={{ projects: t.projects }} lang={lang} projects={projects} />
        <Skills t={t} />
        <About t={t} />
        <Contact t={{ contact: t.contact }} person={person} cv={CV_FILES} />
      </main>
      <Footer t={t} />
      <JsonLd t={t} lang={lang} />
    </>
  );
}

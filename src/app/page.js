import Hero from "./components/Hero";
import Experiencia from "./components/Experiencia";
import Educacion from "./components/Educacion";
import ProyectosDestacados from "./components/ProyectosDestacados";
import Habilidades from "./components/Habilidades";
import SobreMi from "./components/SobreMi";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main>
      <Hero />
      <Experiencia />
      <Educacion />
      <ProyectosDestacados />
      <Habilidades />
      <SobreMi />
      <Contacto />
      <Footer />
    </main>
  );
}

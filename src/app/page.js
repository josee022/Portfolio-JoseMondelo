import Hero from "./components/Hero";
import SobreMiProfesional from "./components/SobreMiProfesional";
import SobreMiPersonal from "./components/SobreMiPersonal";
import Habilidades from "./components/Habilidades";
import Footer from "./components/Footer";
import Contacto from "./components/Contacto";

export default function Home() {
  return (
    <main>
      <Hero />
      <SobreMiProfesional />
      <SobreMiPersonal />
      <Habilidades />
      <Contacto />
      <Footer />
    </main>
  );
}

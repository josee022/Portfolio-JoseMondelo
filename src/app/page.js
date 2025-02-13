import Hero from "./components/Hero";
import SobreMiProfesional from "./components/SobreMiProfesional";
import SobreMiPersonal from "./components/SobreMiPersonal";
import Habilidades from "./components/Habilidades";
import Footer from "./components/Footer";
import Contacto from "./components/Contacto";
import Destacado from "./components/Destacado";

export default function Home() {
  return (
    <main>
      <Hero />
      <SobreMiProfesional />
      <SobreMiPersonal />
      <Habilidades />
      <Destacado />
      <Contacto />
      <Footer />
    </main>
  );
}

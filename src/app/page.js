import Hero from "./components/Hero";
import SobreMi from "./components/SobreMi";
import Habilidades from "./components/Habilidades";
import Footer from "./components/Footer";
import Contacto from "./components/Contacto";

export default function Home() {
  return (
    <main>
      <Hero />
      <SobreMi />
      <Habilidades />
      <Contacto />
      <Footer />
    </main>
  );
}

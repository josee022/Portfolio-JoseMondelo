import Hero from "./components/Hero";
import SobreMi from "./components/SobreMi";
import Habilidades from "./components/Habilidades";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <SobreMi />
      <Habilidades />
      <Footer />
    </main>
  );
}

import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import MissionVision from "../components/MissionVision";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <MissionVision />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

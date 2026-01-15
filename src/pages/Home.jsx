import Navbar from "../components/Menu";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Footer from "../components/Footer";
import Skills from "../sections/Skills";
import Experiences from "../sections/Experiences";
import Certificates from "../sections/Certificates";
import Projects from "../sections/Projects";
import Packages from "../sections/Packages";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Certificates />
        <Experiences />
        <Packages />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}

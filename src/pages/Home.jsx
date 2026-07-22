import { useCallback, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "../components/Menu";
import SplashScreen from "../components/SplashScreen";
import Hero from "../sections/Hero";
import AIWorkflow from "../sections/AIWorkflow";
import About from "../sections/About";
import Footer from "../components/Footer";
import Skills from "../sections/Skills";
import Experiences from "../sections/Experiences";
import Certificates from "../sections/Certificates";
import Projects from "../sections/Projects";
import Packages from "../sections/Packages";

export default function Home() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const [isPageReady, setIsPageReady] = useState(false);
  const closeSplash = useCallback(() => setIsSplashVisible(false), []);

  return (
    <>
      <AnimatePresence onExitComplete={() => setIsPageReady(true)}>
        {isSplashVisible && <SplashScreen onComplete={closeSplash} />}
      </AnimatePresence>

      <div
        className="motion-page"
        aria-hidden={!isPageReady}
        inert={!isPageReady ? true : undefined}
      >
        <Navbar />
        <main>
          <Hero />
          <AIWorkflow />
          <About />
          <Skills />
          <Certificates />
          <Experiences />
          <Packages />
          <Projects />
        </main>
        <Footer />
      </div>
    </>
  )
}

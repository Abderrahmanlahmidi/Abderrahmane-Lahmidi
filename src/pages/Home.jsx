import Navbar from "../../src/components/Navbar"
import Hero from "../sections/Hero"
import About from "../sections/About"
import Footer from "../components/Footer"
import Skills from "../sections/skills"
import Experiences from "../sections/Experiences"
import Certificates from "../sections/Certificates"
import Projects from "../sections/Projects"


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Hero/>
      <About/>
      <Skills/>
      <Certificates/>
      <Experiences/>
      <Projects/>
      <Footer/>
    </div>
  )
}

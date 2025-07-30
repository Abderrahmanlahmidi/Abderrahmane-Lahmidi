import Navbar from "../components/navbar"
import Hero from "../sections/Hero"
import About from "../sections/About"
import CursorFollower from "../components/CursorFollower"
import Footer from "../components/Footer"
import Skills from "../sections/skills"
import Experiences from "../sections/Experiences"
import Certificates from "../sections/Certificates"


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <CursorFollower/>
      <Navbar />
      <Hero/>
      <About/>
      <Skills/>
      <Certificates/>
      <Experiences/>
      <Footer/>
    </div>
  )
}

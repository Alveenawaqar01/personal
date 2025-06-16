import type { Metadata } from "next"
import Navbar from "../components/navbar"
import Hero from "../components/hero"
import About from "../components/about"
import Skills from "../components/skills"
import Projects from "../components/projecct"
import Contact from "../components/contact"
import Footer from "../components/footer"



export const metadata: Metadata = {
  title: "Portfolio | Your Name - Full Stack Developer",
  description: "Personal portfolio showcasing my skills and projects as a Full Stack Developer",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    <Footer/>
    </main>
  )
}

import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  const [navbarReady, setNavbarReady] = useState(false)

  return (
    <main className="relative min-h-screen bg-[#f5f5f5] text-black">
      <Navbar isLoaded={navbarReady} />
      <Hero onReadyForNavbar={() => setNavbarReady(true)} />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}

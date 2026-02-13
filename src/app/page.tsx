'use client';
import SmoothScroll from '../components/SmoothScroll';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

import Background from '../components/Background';

export default function Home() {
  return (
    <SmoothScroll>
      <Background />
      <main className="min-h-screen text-white overflow-hidden relative z-0">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </SmoothScroll>
  );
}

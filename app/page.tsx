import React from 'react';
import Hero from './components/Hero';
import Header from './components/Header';
import About from './components/About';
import Initiatives from './components/Initiatives';
import Services from './components/Services';
import Impact from './components/Impact';
import Team from './components/Team';

export default function Home() {
  return (
    <main className="min-h-screen bg-dark text-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Initiatives />
      <Impact />
      <Team />
    </main>
  );
}

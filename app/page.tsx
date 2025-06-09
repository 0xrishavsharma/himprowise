import React from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Team from "./components/Team";

export default function Home() {
    return (
        <main className='bg-dark min-h-screen text-white'>
            <Header />
            <Hero />
            <About />
            <Services />
            <Team />
        </main>
    );
}

'use client';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Title from "./components/Title";
import DevCards from "./components/DevCards";
import Experience from "./components/Experience";
import Stack from "./components/StackCards";
import ProjectCard from "./components/ProjectCard";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Page() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="flex flex-col min-h-screen scroll-smooth">
      <Navbar />
      <main className="flex-grow">
        <Title />
        <Hero />
        <DevCards />
        <Experience />
        <Stack />
        <ProjectCard />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
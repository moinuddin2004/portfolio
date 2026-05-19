import Navbar from "@/components/Navbar";
import Currently from "@/components/Currently";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Currently />
      <section id="work"><Hero /></section>
      <section id="experience"><Experience /></section>
      <section id="projects"><Projects /></section>
      <section id="stack"><Stack /></section>
      <section id="about"><About /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </main>
  );
}

import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Certification from "./components/Certification.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Certification />
        <Contact />
      </main>
      <footer className="foot">
        <div className="wrap">© 2026 Aldair Eddiel Canul Cabrera · Hecho con React y Vite</div>
      </footer>
    </>
  );
}

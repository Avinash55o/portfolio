import Home from "./Components/Home/home";
import NavBar from "./Components/NavBar/navBar";
import Projects from "./Components/Projects/projects";
import About from "./Components/About/About";
import Background from "./Components/Background/Background";
import Contact from "./Components/Contact/contact";

export default function Main() {
  return (
    <div className="relative">
      <Background />
      <NavBar />
      <main className="relative z-10">
        <section id="home" className="min-h-screen flex items-center">
          <Home />
        </section>
        <section id="about" className="min-h-screen flex items-center">
          <About />
        </section>
        <section id="projects" className="min-h-screen mt-6 flex items-center">
          <Projects />
        </section>
        <section id="contact" className="min-h-screen mt-6 flex items-center">
          <Contact />
        </section>
      </main>
    </div>
  );
}

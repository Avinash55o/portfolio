import Home from "./Components/Home/home";
import NavBar from "./Components/NavBar/navBar";
import Footer from "./Components/Footer/footer";
import Projects from "./Components/Projects/projects";
import About from "./Components/About/About";
import Contact from "./Components/Contact/contact";
import Background from "./Components/Background/Background";

export default function Main() {
  return (
    <div className="relative min-h-screen text-white">
      {/* 3D Background */}
      <Background />
     
      {/* Content */}
      <div className="relative z-10">
        <NavBar />
        
        <main>
          <section id="home" className="min-h-screen flex items-center bg-gradient-to-b from-cyan-950">
            <Home />
          </section>
          
          <section id="about" className="min-h-screen flex items-center py-16 md:py-24">
            <About />
          </section>
          
          <section id="projects" className="min-h-screen flex items-center py-16 md:py-24">
            <Projects />
          </section>
          
          <section id="contact" className="min-h-screen flex items-center py-16 md:py-24">
            <Contact />
          </section>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

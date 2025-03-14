import Home from "./Components/Home/home";
import NavBar from "./Components/NavBar/navBar";

import Projects from "./Components/Projects/projects";
import About from "./Components/About/About";
import Background from "./Components/Background/Background";

export default function Main() {
  return (
    <div className="relative">
      <Background />
      <NavBar />
      <div className="md:mt-24 mt-16">
        <Home />
      </div>
      <About />
      <Projects />
    
    </div>
  );
}

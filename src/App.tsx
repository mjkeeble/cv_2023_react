import { About, Hero, Education, Experience, Footer, Navbar, Parallax, Pastimes, ProjectSection } from "./components";
import { Colors } from "./components/colors";
import "./App.css";

function App() {
  return (
    <div className="bg-gray-400 flex justify-center">
      <div id="Home" className="bg-white font-sans flex flex-col  w-screen max-w-[1400px] m-0 p-0">
        <Colors />
        <Hero />
        <Navbar />
        <About />
        <Parallax image="bg-parallax1" />
        <Experience />
        <Parallax image="bg-parallax2" />
        <ProjectSection />
        <Parallax image="bg-parallax3" />
        <Education />
        <Parallax image="bg-parallax4" />
        <Pastimes />
        <Footer />
      </div>
    </div>
  );
}

export default App;

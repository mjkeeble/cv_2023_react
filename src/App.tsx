import "./App.css";
import { About, Education, Experience, Footer, Hero, Navbar, Parallax, Pastimes, ProjectSection } from "./components";
// import { Colors } from "./components/colors";

function App() {
  return (
    <div className="flex justify-center bg-gray-400">
      <div
        id="Home"
        className="m-0 flex w-screen max-w-[1400px]  flex-col bg-white p-0 font-sans"
      >
        {/* <Colors /> */}
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

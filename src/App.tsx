import { About, Hero, Education, Experience, Footer, Navbar, Parallax } from "./components";
import { Colors } from "./components/colors";
import "./App.css";

function App() {
  return (
    <>
      <div id="Home" className="bg-white font-sans flex flex-col  w-screen max-w-[1400px] m-0 p-0">
        <Colors />
        <Hero />
        <Navbar />
        <About />
        <Parallax />
        <Experience />

        {/* <!-- Projects Section --> */}
        <section
          id="Projects"
          className="hidden bg-white py-8 pt-20 pb-4 min-h-[calc(100vh_-_70px)] flex flex-col justify-center"
        >
          <div className="mx-auto">
            <h2 className="text-6xl font-semibold mb-4 font-mjk-bold">Projects</h2>
            <p>Coming soon ...</p>
          </div>
        </section>

        <Education />
        {/* <!-- Education Section --> */}

        {/* <!-- Volunteering & Pastimes Section --> */}
        <section
          id="Pastimes"
          className="hidden bg-white py-8 pt-20 pb-4 min-h-[calc(100vh_-_70px)] flex flex-col justify-center"
        >
          <div className="mx-auto">
            <h2 className="text-6xl mb-4 font-mjk">Volunteering & Pastimes</h2>

            <p>Coming soon ...</p>
          </div>
        </section>

        {/* <!-- Footer Section --> */}
        <Footer />
      </div>
    </>
  );
}

export default App;

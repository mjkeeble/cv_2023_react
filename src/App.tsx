import { About, Hero, Experience, Navbar, Parallax, TypingEffect } from "./components";
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
          className="bg-white py-8 pt-20 pb-4 min-h-[calc(100vh_-_70px)] flex flex-col justify-center"
        >
          <div className="mx-auto">
            <h2 className="text-6xl font-semibold mb-4 font-mjk-bold">Projects</h2>
            {/* <!-- Project Cards --> */}
            <div className="flex flex-row flex-wrap justify-center">
              {/* <!-- Card 1 --> */}
              <div className="bg-peach-600 p-4 rounded-lg shadow-md m-5 h-40 w-[400px]">
                <h3 className="text-lg font-semibold">Project 1</h3>
                <p>Project description for Project 1</p>
              </div>
              {/* <!-- Card 2 --> */}
              <div className="bg-peach-600 p-4 rounded-lg shadow-md m-5 h-40 w-[400px]">
                <h3 className="text-lg font-semibold">Project 2</h3>
                <p>Project description for Project 2</p>
              </div>
              {/* <!-- Card 3 --> */}
              <div className="bg-peach-600 p-4 rounded-lg shadow-md m-5 h-40 w-[400px]">
                <h3 className="text-lg font-semibold">Project 3</h3>
                <p>Project description for Project 3</p>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Education Section --> */}
        <section
          id="Education"
          className="bg-white py-8 pt-20 pb-4 min-h-[calc(100vh_-_70px)] flex flex-col justify-center"
        >
          <div className="mx-auto">
            <h2 className="sticky text-6xl font-semibold mb-4 pt-20 font-mjk-bold">Education</h2>
            {/* <!-- Education Cards --> */}
            <div className="flex flex-row flex-wrap justify-center">
              {/* <!-- Card 1 --> */}
              <div className="bg-papaya-400 p-4 rounded-lg shadow-md m-5 h-40 w-[400px]">
                <h3 className="text-lg font-semibold">Education 1</h3>
                <p>Details for Education 1</p>
              </div>
              {/* <!-- Card 2 --> */}
              <div className="bg-papaya-400 p-4 rounded-lg shadow-md m-5 h-40 w-[400px]">
                <h3 className="text-lg font-semibold">Education 2</h3>
                <p>Details for Education 2</p>
              </div>
              {/* <!-- Card 3 --> */}
              <div className="bg-papaya-400 p-4 rounded-lg shadow-md m-5 h-40 w-[400px]">
                <h3 className="text-lg font-semibold">Education 3</h3>
                <p>Details for Education 3</p>
              </div>
              {/* <!-- Card 4 --> */}
              <div className="bg-papaya-400 p-4 rounded-lg shadow-md m-5 h-40 w-[400px]">
                <h3 className="text-lg font-semibold">Education 4</h3>
                <p>Details for Education 4</p>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Volunteering & Pastimes Section --> */}
        <section
          id="Pastimes"
          className="bg-white py-8 pt-20 pb-4 min-h-[calc(100vh_-_70px)] flex flex-col justify-center"
        >
          <div className="mx-auto">
            <h2 className="text-6xl mb-4 font-mjk">Volunteering & Pastimes</h2>

            {/* <!-- Volunteering & Pastimes Cards --> */}
            <div className="flex flex-row flex-wrap justify-center">
              {/* <!-- Card 1 --> */}
              <div className="bg-peach-600 p-4 rounded-lg shadow-md m-5 h-40 w-[400px]">
                <h3 className="text-lg font-semibold">Volunteering/Pastime 1</h3>
                <p>Details for Volunteering/Pastime 1</p>
              </div>

              {/* <!-- Card 2 --> */}
              <div className="bg-peach-600 p-4 rounded-lg shadow-md m-5 h-40 w-[400px]">
                <h3 className="text-lg font-semibold">Volunteering/Pastime 2</h3>
                <p>Details for Volunteering/Pastime 2</p>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Footer Section --> */}
        <footer id="Contact" className="bottom-0 left-0 w-full bg-gray-300 text-black py-4 pt-20 text-center">
          <h2>
            Contact me:{" "}
            <a className="text-papaya-400" href="mailto:abc@example.com">
              mark@keeble.de
            </a>
          </h2>
          <TypingEffect />
        </footer>
      </div>
    </>
  );
}

export default App;

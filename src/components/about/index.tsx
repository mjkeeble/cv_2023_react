import SimpleSlider from "./slick";

export const About = () => {
  return (
    <section id="About" className="py-20 min-h-[calc(67vh)] min-h-[calc(67svh)] flex flex-col justify-center">
      <div className="">
        <h2 className="text-6xl sm:text-7xl md:text-9xl font-semibold mb-4 font-mjk-bold text-blue-600">About Me</h2>
        <div className="lg:px-20 px-7 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
          <div className="flex flex-col justify-center">
            <h2 className="text-papaya-200 text-left text-xl md:text-3xl font-bold pb-4 pl-4">
              Web development is more than just code.
            </h2>
            <p className="text-left md:text-xl xl:text-2xl text-blue-300 my-2 pl-4">
              Development doesn't happen in a vacuum, it is not an end in itself.
            </p>
            <p className="text-left md:text-xl xl:text-2xl text-blue-300 my-2 pl-4">
              With more than 20 years of global business expertise, I leverage my comprehensive grasp of the commercial,
              procedural, and user demands that underpin the creation of new websites and web-based tools.
            </p>
            <p className="text-left md:text-xl xl:text-2xl text-blue-300 my-2 pl-4">
              Coupled with my coding proficiency, I craft solutions that embody the utmost excellence in both design and
              functionality.
            </p>
            <div className="rounded-full bg-blue-700 py-4 px-6 mt-5 max-w-[calc(100vw_*_0.95)]">
              <p className="text-center text-xl md:text-2xl text-blue-300 px-4 lg:px-6 font-semibold rounded-lg">
                I'm available for employment in the Berlin area on an in-office or hybrid basis. If you think I'd be a
                good fit for your team, let's talk.
              </p>{" "}
              <a
                className="text-xl md:text-2xl font-black text-papaya-400 hover:text-papaya-300"
                href="mailto:mark@keeble.de"
              >
                Contact me today!
              </a>
            </div>
          </div>
          <img
            src="/images/Bewerbungsfoto.png"
            className="h-96 rounded-tr-[5rem] rounded-bl-[5rem] border"
            alt="Portrait photograph"
          />
        </div>
        <SimpleSlider />
      </div>
    </section>
  );
};

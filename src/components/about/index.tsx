import { Zoom } from "react-awesome-reveal";
import SimpleSlider from "./slick";

export const About = () => {
  return (
    <section
      id="About"
      className="flex min-h-[calc(67vh)] flex-col justify-center py-20"
    >
      <div className="">
        <h2 className="mb-4 font-mjk-bold text-6xl font-semibold text-blue-600 sm:text-7xl md:text-9xl">About Me</h2>
        <div className="lg-text-start flex flex-col-reverse items-center justify-between gap-5 px-7 py-20 text-center lg:flex-row lg:gap-28 lg:px-20">
          <div className="flex flex-col justify-center">
            <h2 className="pb-4 pl-4 text-left text-xl font-bold text-papaya-200 md:text-3xl">
              Web development is more than just code.
            </h2>
            <p className="my-2 pl-4 text-left text-blue-300 md:text-xl xl:text-2xl">
              Development doesn't happen in a vacuum, it is not an end in itself.
            </p>
            <p className="my-2 pl-4 text-left text-blue-300 md:text-xl xl:text-2xl">
              With more than 20 years of global business expertise, I leverage my comprehensive grasp of the commercial,
              procedural, and user demands that underpin the creation of new websites and web-based tools.
            </p>
            <p className="my-2 pl-4 text-left text-blue-300 md:text-xl xl:text-2xl">
              Coupled with my coding proficiency, I craft solutions that embody the utmost excellence in both design and
              functionality.
            </p>
            <Zoom fraction={1}>
              <div className="mt-5 max-w-[calc(100vw_*_0.95)] rounded-full bg-blue-700 px-6 py-4">
                <p className="rounded-lg px-4 text-center text-xl font-semibold text-blue-300 md:text-2xl lg:px-6">
                  I'm available for employment in the Berlin area on an in-office or hybrid basis. If you think I'd be a
                  good fit for your team, let's talk.
                </p>{" "}
                <a
                  className="text-xl font-black text-papaya-400 hover:text-papaya-300 md:text-2xl"
                  href="mailto:mark@keeble.de"
                >
                  Contact me today!
                </a>
              </div>
            </Zoom>
          </div>
          <img
            src="/images/Bewerbungsfoto.png"
            className="h-44 rounded-bl-[2.5rem] rounded-tr-[2.5rem] border lg:h-96 lg:rounded-bl-[5rem] lg:rounded-tr-[5rem]"
            alt="Portrait photograph"
          />
        </div>
        <SimpleSlider />
      </div>
    </section>
  );
};
